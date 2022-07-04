.DEFAULT_GOAL := all

all: install lint test build
all_go: install_go lint_go test_go build_go
all_ts: install_ts lint_ts test_ts build_ts

install: install_go install_ts

install_go:
	@go mod vendor

install_ts:
	@pnpm install

lint: lint_go lint_ts

lint_go:
	@gofmt -l ./cmd ./internal ./graphql

lint_ts:
	@pnpm run lint

format: format_go format_ts

format_go:
	@gofmt -w ./cmd ./internal ./graphql

format_ts:
	@pnpm run format

test: test_go test_ts

test_go:
	@go test -race -cover -coverprofile=coverage.txt ./...

test_ts:
	@pnpm run test:unit run

build: build_go build_ts

build_go:
	@go build -race -mod vendor -o accretion ./cmd/accretion

build_ts:
	@pnpm run build
