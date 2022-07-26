# [Accretion](https://github.com/dbtedman/kata-accretion)

> **⚠️ WARNING:** Not production ready code, instead a [Code Kata](https://github.com/dbtedman#code-kata) intended to
> hone my programming skills through practice and repetition.

[![CI GitHub Pipeline](https://img.shields.io/github/workflow/status/dbtedman/kata-accretion/ci?style=for-the-badge&logo=github&label=ci)](https://github.com/dbtedman/kata-accretion/actions/workflows/ci.yml)
[![sast workflow status](https://img.shields.io/github/workflow/status/dbtedman/kata-accretion/sast?style=for-the-badge&logo=github&label=sast)](https://github.com/dbtedman/kata-accretion/actions/workflows/sast.yml)

Manage internal technical documentation that is enriched with live data accreted from your environment.

-   [Getting Started](#getting-started)
-   [Verification](#verification)
-   [Design](#design)
-   [Security](#security)
-   [References](#references)
-   [License](#license)

## Getting Started

```shell
nvm use && make && ./accretion
```

## Verification

### Linting

```shell
make lint
```

These rules can then be automatically applied:

```shell
make format
```

### Unit Testing

```shell
make test
```

## Design

### Repository Structure

| Directory             | Purpose                                                                                                                 |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `./.github/workflows` | GitHub Actions workflow definitions.                                                                                    |
| `./cmd/accretion`     | The CLI is used for both running the server core and for interacting with the server core over GraphQL.                 |
| `./graphql`           | The channel of communication with the server core used by all other interaction methods, along with 3rd party services. |
| `./internal/domain`   | Code that defines the core application logic.                                                                           |
| `./internal/gateway`  | Defines how the `domain` interfaces with external systems.                                                              |
| `./schema.graphql`    |                                                                                                                         |
| `./spa`               | A Vue client application that interacts with the server core via GraphQL.                                               |

### Persistence

The source of truth is a series of `HistoricalFact` events that are processed to form multiple projections including
a `SearchProjection` and `GraphProjection`. Each projection is specifically designed to support different use cases.

## Security

See the [Security Policy](./SECURITY.md).

## References

-   [Add Icons with Vue](https://fontawesome.com/docs/web/use-with/vue/add-icons)
-   [Fontawesome Icons](https://fontawesome.com/icons)
-   [Go GraphQL](https://github.com/graph-gophers/graphql-go)
-   [Gofmt](https://pkg.go.dev/cmd/gofmt)
-   [GraphQL](https://graphql.org)
-   [Pinia](https://pinia.vuejs.org)
-   [Prettier](https://prettier.io)
-   [Vite](https://vitejs.dev)
-   [Vitest](https://vitest.dev)
-   [Vue Router](https://router.vuejs.org)
-   [Vue Testing Utils](https://test-utils.vuejs.org)
-   [Vue](https://vuejs.org)

## License

The [MIT License](./LICENSE.md) is used by this project.
