package middleware

import (
	"net/http"

	"github.com/whitecypher/logr"
  "github.com/theweirdscience/open-hackathon-2018/server/lib/routing"
  "github.com/theweirdscience/open-hackathon-2018/server/lib/profiling"
)

// LogAccess wraps a handler to log incoming requests
func LogDuration() routing.Middleware {
	return func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
		t := profiling.NewTimer("response_time")
		t.Tag("uri", r.URL.Path)

		next(w, r)

		t.Done()
		logr.Infof("response in %s for %s", t.Duration(), r.URL.Path)

	}
}
