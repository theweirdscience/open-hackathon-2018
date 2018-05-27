
default:
	cd client
	ng build --prod
	cd dist/hack
	go run ../../../server/cmd/dip/main.go

