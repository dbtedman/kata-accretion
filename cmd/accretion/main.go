package main

import (
	"github.com/dbtedman/kata-accretion/cmd/accretion/command"
	"log"
)

func main() {
	if err := executeCommand(); err != nil {
		log.Fatal(err)
	}
}

func executeCommand() error {
	return command.DefineRootCommand().Execute()
}
