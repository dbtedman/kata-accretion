package command_test

import (
	"github.com/dbtedman/kata-accretion/cmd/accretion/command"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestCanDefineRootCommand(t *testing.T) {
	rootCommand := command.DefineRootCommand()

	assert.NotNil(t, rootCommand)
	assert.GreaterOrEqual(t, len(rootCommand.Commands()), 1)
}
