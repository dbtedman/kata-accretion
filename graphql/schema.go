package graphql

import (
	"github.com/graph-gophers/graphql-go"
	"io"
	"io/ioutil"
)

func DefineSchemaFromReader(in io.Reader) (*graphql.Schema, error) {
	schema2, err := ioutil.ReadAll(in)

	if err != nil {
		return nil, err
	}

	return graphql.ParseSchema(string(schema2), &Resolver{}, graphql.UseStringDescriptions())
}
