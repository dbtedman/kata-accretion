package graphql

import (
	"github.com/graph-gophers/graphql-go/relay"
	"log"
	"net/http"
)

func Serve() error {
	queryHandler, err := defineQueryHandler()

	if err != nil {
		return err
	}

	mux := http.NewServeMux()
	mux.Handle("/query", queryHandler)

	log.Printf("Listening to requests on :8080...")

	return http.ListenAndServe(":8080", logged(mux))
}

func defineQueryHandler() (*relay.Handler, error) {
	schema, err := DefineSchema()

	if err != nil {
		return nil, err
	}

	return &relay.Handler{Schema: schema}, nil
}

func logged(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("%s %s%s", r.Method, r.Host, r.RequestURI)
		next.ServeHTTP(w, r)
	})
}
