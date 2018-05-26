package profiling

import (
	"errors"
	"time"
)

// Timer defines a profiling timer
type Timer struct {
	start       time.Time
	end         time.Time
	measurement string
	tags        map[string]string
	done        bool
}

// NewTimer creates a new profiling timer
func NewTimer(measurement string) *Timer {
	return &Timer{
		start:       time.Now(),
		measurement: measurement,
		tags:        map[string]string{},
	}
}

// Reset the timer. This does not affect any tags added to the timer.
func (t *Timer) Reset() *Timer {
	t.start = time.Now()
	t.done = false
	return t
}

// Tags replaces the tags for the timer
func (t *Timer) Tags(tags map[string]string) *Timer {
	t.tags = tags
	return t
}

// Tag adds a tag with the given name and value
func (t *Timer) Tag(name, value string) *Timer {
	t.tags[name] = value
	return t
}

// Stop the timer
func (t *Timer) Stop() *Timer {
	if t.end.IsZero() {
		t.end = time.Now()
	}
	return t
}

// Duration return the current duration of the timer if it is still running or the duration between start and stop times
// when timer is stopped.
func (t *Timer) Duration() time.Duration {
	if t.end.IsZero() {
		return time.Now().Sub(t.start)
	}
	return t.end.Sub(t.start)
}

// Done stops the timer and sends the results
func (t *Timer) Done() error {
	if t.start.IsZero() {
		return errors.New("Timer not started")
	}

	if t.done {
		return errors.New("Timer results already sent")
	}
	t.done = true

	return Send(
		t.measurement,
		map[string]interface{}{
			"value": float64(t.Stop().end.Sub(t.start)),
		},
		t.tags,
	)
}
