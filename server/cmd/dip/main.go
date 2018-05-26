package main

import (
	"net/http"
  "github.com/theweirdscience/open-hackathon-2018/server/lib/routing"
  "os"
  "os/signal"
  "github.com/theweirdscience/open-hackathon-2018/server/cmd/dip/internal/middleware"
  "github.com/alphacentaurigames/conquest-alpha-go/core/mission/launch"
)

func main() {
  r := routing.New()
  r.Middleware(
    middleware.LogDuration(),
    middleware.LogAccess(),
  )

  //r.HandleFunc("/", web.MissionLaunch(launch.Handler(db))) // /px/pxs/combatMissionLaunch.php

  // create the server
  server := &http.Server{
    Addr:    addr,
    Handler: r,
  }

  // listen for SIGKILL
  sig := make(chan os.Signal, 1)
  errChan := make(chan error, 1)
  signal.Notify(sig, os.Interrupt)

  go func() {
    // start server
    errChan <- server.ListenAndServe()
  }()

	http.ListenAndServe(":8000", nil)
}


