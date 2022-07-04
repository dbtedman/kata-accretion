package graphql_test

import (
	"github.com/dbtedman/kata-accretion/graphql"
	"github.com/stretchr/testify/assert"
	"os"
	"testing"
)

func TestCanDefineSchema(t *testing.T) {
	openFile, _ := os.Open("../schema.graphql")
	schema, err := graphql.DefineSchemaFromReader(openFile)

	assert.Nil(t, err)
	assert.NotNil(t, schema)
}
