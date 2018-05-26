package profiling

import (
	"fmt"
	"time"

	influxdb "github.com/influxdata/influxdb/client/v2"
	"github.com/whitecypher/logr"
)

type Precision string

const (
	PrecisionNanoseconds  Precision = "ns"
	PrecisionMicroseconds Precision = "us"
	PrecisionMilliseconds Precision = "ms"
	PrecisionSeconds      Precision = "s"
	PrecisionMinutes      Precision = "m"
	PrecisionHours        Precision = "h"
	PrecisionDays         Precision = "d"
	PrecisionWeeks        Precision = "w"
)

// String implements Stringer interface
func (p Precision) String() string {
	return string(p)
}

var (
	conn          influxdb.Client
	db            string
	pr            Precision
	points        chan *influxdb.Point
	t             = map[string]string{}
	WriteInterval = time.Second * 5
	MaxBatchSize  = 10000

	ErrAlreadyConnected = fmt.Errorf("multiple concurrent connections is not supported")
	ErrNotStarted       = fmt.Errorf("please start the profiler before sending messages")
	ErrNotInitialised   = fmt.Errorf("whoops! profiler is not properly initialised")
	ErrQueueIsFull      = fmt.Errorf("i can't do it captain! the queue is full")
)

// Start a new connection to influx and send data at regular intervals.
func Start(addr, username, password, database string, precision Precision) (err error) {
	if conn != nil {
		return ErrAlreadyConnected
	}
	conn, err = influxdb.NewHTTPClient(influxdb.HTTPConfig{
		Addr:     "http://" + addr,
		Username: username,
		Password: password,
	})
	if err != nil {
		return
	}

	db = database
	pr = precision
	points = make(chan *influxdb.Point, 10000)
	go work()

	logr.Infof("Starting profiling to %s/%s", addr, database)

	return
}

// Tag adds a tag to all subsequent Send calls. This function is not concurrency safe so don't use it in your request
// handlers or goroutines.
func Tag(name, value string) {
	t[name] = value
}

// Send a data point to the metrics server
func Send(name string, fields map[string]interface{}, tags map[string]string) error {
	if conn == nil {
		return ErrNotStarted
	}
	if points == nil {
		return ErrNotInitialised
	}
	// Create a point and add to batch
	//tags := map[string]string{"cpu": "cpu-total"}
	//fields := map[string]interface{}{
	//	"idle":   10.1,
	//	"system": 53.3,
	//	"user":   46.6,
	//}
	pt, err := influxdb.NewPoint(name, mergeTags(t, tags), fields, time.Now())
	if err != nil {
		return fmt.Errorf("failed to create point with error %s", err)
	}

	select {
	case points <- pt:
	default:
		return ErrQueueIsFull
	}

	return nil
}

// Stop sending and disconnect
func Stop() {
	conn.Close()
}

func mergeTags(t1, t2 map[string]string) map[string]string {
	tr := map[string]string{}
	for k, v := range t1 {
		tr[k] = v
	}
	for k, v := range t2 {
		tr[k] = v
	}
	return tr
}

func makeBatch() (influxdb.BatchPoints, error) {
	// Create a new point batch
	bp, err := influxdb.NewBatchPoints(influxdb.BatchPointsConfig{
		Database:  db,
		Precision: pr.String(),
	})
	if err != nil {
		logr.Errorf("failed to create batch with error %s", err)
		return bp, err
	}
	return bp, nil
}

func work() {
	for {
		<-time.After(WriteInterval)

		if conn == nil {
			return
		}

		// Create a new point batch
		bp, err := makeBatch()
		if err != nil {
			continue
		}

		counter := 0
		for {
			// flush the batch
			if len(bp.Points()) >= MaxBatchSize {
				logr.Infof("Flushing batch of %d profiling data points to server", len(bp.Points()))
				// write the batch
				err = conn.Write(bp)
				logr.Errorf("Unable to write profiler points to server with error: %s", err.Error())
				// create a new point batch
				bp, err = makeBatch()
				if err != nil {
					goto write
				}
			}
			select {
			case pt := <-points:
				// fill the batch
				bp.AddPoint(pt)
				counter++
			default:
				// queue is empty for now. Break out of the for loop
				goto write
			}
		}
	write:

		// check if theres something to send
		if len(bp.Points()) == 0 {
			continue
		}

		logr.Infof("Writing batch of %d profiling data points to server", len(bp.Points()))

		// Write the batch
		err = conn.Write(bp)
		if err != nil {
			logr.Errorf("Unable to write profiler points to server with error: %s", err.Error())
		}
	}
}
