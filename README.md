# [Accretion](https://github.com/dbtedman/kata-accretion)

> **⚠️ WARNING:** Not production ready code, instead a [Code Kata](https://github.com/dbtedman#code-kata) intended to
> hone my programming skills through practice and repetition.

[![CI GitHub Pipeline](https://img.shields.io/github/workflow/status/dbtedman/kata-accretion/ci?style=for-the-badge&logo=github&label=ci)](https://github.com/dbtedman/kata-accretion/actions/workflows/ci.yml)
[![sast workflow status](https://img.shields.io/github/workflow/status/dbtedman/kata-accretion/sast?style=for-the-badge&logo=github&label=sast)](https://github.com/dbtedman/kata-accretion/actions/workflows/sast.yml)
![language: go](https://img.shields.io/badge/language-go-blue.svg?style=for-the-badge&logo=go)

Manage internal technical documentation that is enriched with live data accreted from your environment.

-   [Getting Started](#getting-started)
-   [Verification](#verification)
-   [Design](#design)
-   [References](#references)
-   [License](#license)

## Getting Started

```shell
nvm use && make && ./accretion
```

## Verification

### Linting

-   [Prettier](https://prettier.io)
-   [gofmt](https://pkg.go.dev/cmd/gofmt)

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

#### [./.github/workflows](./.github/workflows)

GitHub Actions workflow definitions.

#### [./cmd/accretion](./cmd/accretion)

Contains the `main` package which defines how the `accretion` command line interface functions.

#### [./graphql](./graphql)

> 🚧 Placeholder

#### [./internal/domain](./internal/domain)

> 🚧 Placeholder

#### [./internal/gateway](./internal/gateway)

Defines how the `domain` interfaces with external systems.

#### [./spa](./spa)

ReactJS TypeScript source code.

#### [./](./)

### Interaction

All interaction methods communicate with the server core via the GraphQL API.

#### `SPA`

A ReactJS client application that interacts with the server core via GraphQL.

#### `CLI`

The CLI is used for both running the server core and for interacting with the server core over GraphQL.

#### `GraphQL`

The channel of communication with the server core used by all other interaction methods, along with 3rd party services.

### Server Core

> 🚧 Placeholder

### Domain

#### Application Service

> 🚧 Placeholder

#### Application

> 🚧 Placeholder

#### Branch

> 🚧 Placeholder

#### Cluster

> 🚧 Placeholder

#### Code Coverage

> 🚧 Placeholder

#### Code Coverage

> 🚧 Placeholder

#### Coding Language

> 🚧 Placeholder

#### Deployment

> 🚧 Placeholder

#### Environment

> 🚧 Placeholder

#### Issue

> 🚧 Placeholder

#### Logs

> 🚧 Placeholder

#### Merge Request

> 🚧 Placeholder

#### Owner

> 🚧 Placeholder

#### Pipeline Status

> 🚧 Placeholder

#### Product

> 🚧 Placeholder

#### Repository

> 🚧 Placeholder

#### Service

> 🚧 Placeholder

#### Team

> 🚧 Placeholder

#### URL

> 🚧 Placeholder

### Gateways

#### GitLab

> 🚧 Placeholder

#### Jira

> 🚧 Placeholder

#### Kibana

> 🚧 Placeholder

#### Kubernetes

> 🚧 Placeholder

### Persistence

The source of truth is a series of `HistoricalFact` events that are processed to form multiple projections including
a `SearchProjection` and `GraphProjection`. Each projection is specifically designed to support different use cases.

### Security Mitigations

> Initially based on the [OWASP Top 10 - 2021](https://owasp.org/www-project-top-ten/).

#### [A01:2021-Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

[Github Security](https://github.com/features/security) detects secrets incorrectly committed into the repository.

#### [A02:2021-Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

_Placeholder_

#### [A03:2021-Injection](https://owasp.org/Top10/A03_2021-Injection/)

_Placeholder_

#### [A04:2021-Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)

_Placeholder_

#### [A05:2021-Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)

_Placeholder_

#### [A06:2021-Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)

[Snyk](https://snyk.io) and [Github Security](https://github.com/features/security) scan Gradle and NPM dependencies for
know vulnerabilities and create pull requests to resolve the vulnerabilities when available.

#### [A07:2021-Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/)

_Placeholder_

#### [A08:2021-Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)

_Placeholder_

#### [A09:2021-Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)

_Placeholder_

#### [A10:2021-Server-Side Request Forgery](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

_Placeholder_

## References

_Placeholder_

## License

The [MIT License](./LICENSE.md) is used by this project.
