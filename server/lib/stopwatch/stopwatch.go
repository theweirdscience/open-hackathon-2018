package stopwatch

import (
	"log"
	"time"
)

var (
	Logf = log.Printf
	filo = []*T{}
)

type T struct {
	time time.Time
	name string
}

func Start(name string) *T {
	return &T{
		time: time.Now(),
		name: name,
	}
}

func (t *T) Stop() {
	Logf("%s took %s", t.name, time.Now().Sub(t.time).String())
}
