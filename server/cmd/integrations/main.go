package main

import (
  "net/http"
  "os"
  "os/signal"

  "github.com/theweirdscience/open-hackathon-2018/server/lib/middleware"
  "github.com/theweirdscience/open-hackathon-2018/server/lib/routing"
  "github.com/whitecypher/logr"
  "time"
  "context"
  "strings"
  "fmt"
  "io/ioutil"
  "encoding/json"
  "crypto/rsa"
  "crypto/sha256"
  "encoding/hex"
  "crypto/rand"
)

type Hash string

type PublicKey string

type Attribute struct {
  Name  string `json:"name"`
  Value string `json:"value"`
}

type Integration struct {
  Name string `json:"name"`
  URL  string `json:"url"`
}

type Subscription struct {
  SubscriberID string `json:"subscriber_id"`
  Attribute    string `json:"attribute"`
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
  Custodian Hash       `json:"custodian"`
  Public    Profile    `json:"public"`
  Private   PrivateMap `json:"private"`
}

func Last(parts []string) string {
  return parts[len(parts)-1]
}

func GetPublicKey(hash Hash) PublicKey {
  response, err := http.Get(fmt.Sprintf("http://%v.digital-identity-protocol.nl/key", ))
  if err != nil {
    logr.Error(err)
    return PublicKey("")
  }
  defer response.Body.Close()
  b, err := ioutil.ReadAll(response.Body)
  if err != nil {
    logr.Error(err)
    return PublicKey("")
  }
  return PublicKey(b)
}

func GetData(hash Hash) Data {
  var data Data
  response, err := http.Get(fmt.Sprintf("http://%v.digital-identity-protocol.nl/key", ))
  if err != nil {
    logr.Error(err)
    return data
  }
  defer response.Body.Close()
  b, err := ioutil.ReadAll(response.Body)
  if err != nil {
    logr.Error(err)
    return data
  }
  err = json.Unmarshal(b, data)
  if err != nil {
    logr.Error(err)
  }
  return data
}

func ExtractAttributes(data Data, key rsa.PrivateKey) []Attribute {
  attributes := data.Public.Attributes[:]

  pk, ok := key.Public().(string);
  if !ok {
    return attributes
  }

  hash := sha256.Sum256([]byte(pk))
  h := Hash(hex.EncodeToString(hash[:]))

  private, ok := data.Private[h]
  if !ok {
    return attributes
  }
  for _, a := range private.Attributes {
    name, err := key.Decrypt(rand.Reader, []byte(a.Name), rsa.OAEPOptions{})
    if err != nil {
      logr.Error(err)
      continue
    }
    value, err := key.Decrypt(rand.Reader, []byte(a.Value), rsa.OAEPOptions{})
    if err != nil {
      logr.Error(err)
      continue
    }
    attributes = append(attributes, Attribute{
      Name: string(name),
      Value: string(value),
    })
  }
  return attributes
}

func main() {
  logr.Output(logr.All, os.Stdout)

  r := routing.New()
  r.Middleware(
    middleware.LogDuration(),
    middleware.LogAccess(),
  )

  r.HandleFunc("/dip/report-stolen/*", func(w http.ResponseWriter, r *http.Request) {
    var owner Hash

    owner = Hash(Last(strings.SplitN(r.URL.Path, "/", -1)))

    _ = owner

    w.WriteHeader(http.StatusNotImplemented)
  })

  r.HandleFunc("/dip/report-found/*", func(w http.ResponseWriter, r *http.Request) {
    var owner Hash

    owner = Hash(Last(strings.SplitN(r.URL.Path, "/", -1)))

    _ = owner

    w.WriteHeader(http.StatusNotImplemented)
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
