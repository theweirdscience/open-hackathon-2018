package middleware

import (
	"net/http"

	"github.com/theweirdscience/open-hackathon-2018/server/lib/routing"
	"github.com/whitecypher/logr"
)

// LogAccess wraps a handler to log incoming requests
func LogAccess() routing.Middleware {
	return func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
		ra := r.RemoteAddr
		if ff := r.Header.Get("X-Forwarded-For"); len(ff) > 0 {
			ra = ff
		}

		logr.Info(ra, r.Method, r.URL.Path)

		next(w, r)
	}
}
