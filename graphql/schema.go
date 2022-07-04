package graphql

import (
	"github.com/graph-gophers/graphql-go"
)

var schema = `
schema {
    query: Query
    # mutation: Mutation
}

# The query type, represents all of the entry points into our object graph
type Query {
    hello: String!
}

# The mutation type, represents all updates we can make to our data
#type Mutation {}
`

func DefineSchema() (*graphql.Schema, error) {
	return graphql.ParseSchema(schema, &Resolver{}, graphql.UseStringDescriptions())
}
