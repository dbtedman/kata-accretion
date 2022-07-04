package graphql_test

import (
	"github.com/dbtedman/kata-accretion/graphql"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestCanDefineSchema(t *testing.T) {
	schema, err := graphql.DefineSchema()

	assert.Nil(t, err)
	assert.NotNil(t, schema)
}
