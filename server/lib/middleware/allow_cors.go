package middleware

import (
  "net/http"
  "github.com/theweirdscience/open-hackathon-2018/server/lib/routing"
)

func AllowCORS() routing.Middleware {
  return func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc) {
    w.Header().Set("Access-Control-Allow-Origin", "*")
    next(w, r)
  }
}
