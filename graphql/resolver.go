package graphql

type Resolver struct{}

func (_ *Resolver) Hello() string { return "Hello, world!" }
