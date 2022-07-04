package command

import (
	"github.com/dbtedman/kata-accretion/graphql"
	"github.com/spf13/cobra"
	"log"
)

func DefineRootCommand() *cobra.Command {
	rootCommand := &cobra.Command{
		Use: "accretion",
		Run: func(cmd *cobra.Command, args []string) {
			if err := cmd.Help(); err != nil {
				log.Fatal(err)
			}
		},
	}

	rootCommand.AddCommand(&cobra.Command{
		Use: "serve",
		Run: func(cmd *cobra.Command, args []string) {
			if err := graphql.Serve(); err != nil {
				log.Fatal(err)
			}
		},
	})

	return rootCommand
}
