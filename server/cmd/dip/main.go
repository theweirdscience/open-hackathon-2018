package main

import (
	"crypto/sha256"
	"io/ioutil"
	"net/http"
	"os"
	"os/signal"

	"github.com/theweirdscience/open-hackathon-2018/server/cmd/dip/internal/middleware"
	"github.com/theweirdscience/open-hackathon-2018/server/lib/routing"
  "github.com/whitecypher/logr"
  "time"
  "context"
  "encoding/hex"
  "encoding/json"
  "strings"
)

type Hash string

type PublicKey string

type Attribute struct {
	Key   string
	Value string
}

type Integration struct {
}

type Subscription struct {
}

type Profile struct {
	Attributes    []Attribute    `json:"attributes"`
	Subscriptions []Subscription `json:"subscriptions,omitempty"`
	Integrations  []Integration  `json:"integrations,omitempty"`
}

type PrivateMap map[Hash]Profile

func (m PrivateMap) Filter(h Hash) PrivateMap {
  return map[Hash]Profile{
    h: m[h],
  }
}

type Data struct {
	Custodian Hash             `json:"custodian"`
	Public    Profile          `json:"public"`
	Private   PrivateMap `json:"private"`
}

var (
	keys = map[Hash]PublicKey{}
	data = map[Hash]Data{}
)

func Last(parts []string) string {
  return 
}

func main() {
  logr.Output(logr.All, os.Stdout)

	r := routing.New()
	r.Middleware(
		middleware.LogDuration(),
		middleware.LogAccess(),
	)

	r.HandleFunc("/data/*", func(w http.ResponseWriter, r *http.Request) {
	  var owner Hash
	  var requester Hash

	  owner = Hash(strings.SplitN(r.Host, ".", -1)[0])
	  requester = Hash(Last(strings.SplitN(r.URL.Path, "/", -1)))


		if r.Method == http.MethodPut {
      js, err := ioutil.ReadAll(r.Body)
      defer r.Body.Close()
      if err != nil {
        logr.Error(err)
        w.WriteHeader(http.StatusBadRequest)
        return
      }
      var d Data
      err = json.Unmarshal(js, &d)
      if err != nil {
        logr.Error(err)
        w.WriteHeader(http.StatusBadRequest)
        return
      }
      data[owner] = d
      w.WriteHeader(http.StatusOK)
		}
		if r.Method == http.MethodGet {
		  d := Data{
		    Custodian: owner,
		    Public: data[owner].Public,
		    Private: data[owner].Private.Filter(requester),
      }
		  js, err := json.Marshal(d)
		  if err != nil {
        logr.Error(err)
        w.WriteHeader(http.StatusInternalServerError)
        return
      }
      w.Write(js)
		}
	})

	r.HandleFunc("/hash", func(w http.ResponseWriter, r *http.Request) {
	  r.ParseForm()
		if r.Method == http.MethodPut {
			data, err := ioutil.ReadAll(r.Body)
      defer r.Body.Close()
			if err != nil {
        logr.Error(err)
				w.WriteHeader(http.StatusBadRequest)
				return
			}
			hash := sha256.Sum256(data)
			w.Write([]byte(hex.EncodeToString(hash[:])))
		}
	})

	r.Default(http.FileServer(http.Dir(".")))

	// create the server
	server := &http.Server{
		Addr:    "localhost:8000",
		Handler: r,
	}

	// listen for SIGKILL
	sig := make(chan os.Signal, 1)
	errChan := make(chan error, 1)
	signal.Notify(sig, os.Interrupt)

	go func() {
		// start server
    logr.Infof("starting web server on '%s'", server.Addr)
		errChan <- server.ListenAndServe()
	}()

	var err error
  select {
  case <-sig:
    // shutdown the server
    logr.Info("\n\nshutting down the web server...")
    timeout := time.Second * 10
    ctx, _ := context.WithTimeout(context.Background(), timeout)
    err = server.Shutdown(ctx)
    if err == context.DeadlineExceeded {
      logr.Infof("web server stopped forcefully after %s", timeout)
    } else if err != nil {
      logr.Infof("web server stopped with err: %s", err)
    } else {
      logr.Info("web server stopped gracefully")
    }
  case err = <-errChan:
    // nothing to do
  }

	if err != nil {
    logr.Error(err)
	}

	time.Sleep(time.Second)
}
