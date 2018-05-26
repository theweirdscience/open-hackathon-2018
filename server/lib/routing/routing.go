package routing

import (
	"net/http"
	"strings"
	"sync"
)

const (
	Default = "/*"
	Error   = "/!"
)

// New creates a new RouteMap that can be used as a http.Handler
func New() *RouteMap {
	m := &RouteMap{
		mutex:    sync.RWMutex{},
		handlers: map[string]http.HandlerFunc{},
	}
	m.handler = m.serveHTTP
	return m
}

type Middleware func(w http.ResponseWriter, r *http.Request, next http.HandlerFunc)

// RouteMap of paths to http.HandlerFunc
type RouteMap struct {
	pathPrefix string
	mutex      sync.RWMutex
	handlers   map[string]http.HandlerFunc
	handler    http.HandlerFunc
}

// Middleware adds a middleware handler to all requests for the RouteMap
// using LIFO (Last In First Out) order.
func (m *RouteMap) Middleware(middleware ...Middleware) *RouteMap {
	m.mutex.Lock()
	for _, mw := range middleware {
		m.handler = wrap(mw, m.handler)
	}
	m.mutex.Unlock()
	return m
}

// Handle maps the given path to the given http.HandlerFunc
func (m *RouteMap) Handle(path string, h http.Handler) *RouteMap {
	m.mutex.Lock()
	m.handlers[path] = h.ServeHTTP
	m.mutex.Unlock()
	return m
}

// HandleFunc maps the given path to the given http.HandlerFunc
func (m *RouteMap) HandleFunc(path string, hf http.HandlerFunc) *RouteMap {
	m.mutex.Lock()
	m.handlers[path] = hf
	m.mutex.Unlock()
	return m
}

// Default sets the catch all handler to the given http.Handler
func (m *RouteMap) Default(h http.Handler) *RouteMap {
	return m.Handle(Default, h)
}

// DefaultFunc sets the catch all handler to the given http.HandlerFunc
func (m *RouteMap) DefaultFunc(hf http.HandlerFunc) *RouteMap {
	return m.HandleFunc(Default, hf)
}

// Error sets the error handler to the given http.Handler
func (m *RouteMap) Error(h http.Handler) *RouteMap {
	return m.Handle(Error, h)
}

// ErrorFunc sets the error handler to the given http.HandlerFunc
func (m *RouteMap) ErrorFunc(hf http.HandlerFunc) *RouteMap {
	return m.HandleFunc(Error, hf)
}

// ServeHTTP implements http.Handler
func (m *RouteMap) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	m.handler(w, r)
}

// serveHTTP handles the request
func (m *RouteMap) serveHTTP(w http.ResponseWriter, r *http.Request) {
	// iterate the possible matches
	for _, k := range matches(strings.TrimPrefix(r.URL.Path, m.pathPrefix)) {
		m.mutex.RLock()
		hf, ok := m.handlers[k]
		m.mutex.RUnlock()
		if ok {
			hf(w, r)
			return
		}
	}
	// if no handlers were triggered then default to a 404
	w.WriteHeader(http.StatusNotFound)
}

// Sub returns a new router that will be triggered for the given path
func (m *RouteMap) Sub(path string) *RouteMap {
	sub := New()
	sub.pathPrefix = path
	m.Handle(path+"/*", sub)
	return sub
}

// matches splits a given path into possible route matches
func matches(path string) []string {
	p := strings.Split(path, "/")
	c := len(p)
	// precreating the array and setting the values is about 50% faster than using append.
	result := make([]string, c+1)
	// Set the first match to the
	result[0] = path
	// The ones in between are wildcard matches
	for l := c - 1; l > 0; l-- {
		result[c-l] = strings.Join(p[:l], "/") + "/*"
	}
	// set the last match to the error
	result[c] = Error
	return result
}

// wrap a middlewareFunc into a handleFunc
func wrap(mw Middleware, next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		mw(w, r, next)
	}
}
