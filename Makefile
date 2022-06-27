.DEFAULT_GOAL := all

all: install lint test build

install:
	@pnpm install && go mod vendor

lint:
	@pnpm run lint && gofmt -l ./cmd ./internal ./graphql

format:
	@pnpm run format && gofmt -w ./cmd ./internal ./graphql

test:
	@pnpm run test:unit run && go test -race -cover -coverprofile=coverage.txt ./...

build:
	@pnpm run build && go build -race -mod vendor -o accretion ./cmd/accretion
