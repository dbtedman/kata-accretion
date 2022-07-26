# [Accretion](https://github.com/dbtedman/kata-accretion)

> **⚠️ WARNING:** Not production ready code, instead a [Code Kata](https://github.com/dbtedman#code-kata) intended to
> hone my programming skills through practice and repetition.

[![CI GitHub Pipeline](https://img.shields.io/github/workflow/status/dbtedman/kata-accretion/ci?style=for-the-badge&logo=github&label=ci)](https://github.com/dbtedman/kata-accretion/actions/workflows/ci.yml)
[![sast workflow status](https://img.shields.io/github/workflow/status/dbtedman/kata-accretion/sast?style=for-the-badge&logo=github&label=sast)](https://github.com/dbtedman/kata-accretion/actions/workflows/sast.yml)
![languages: go and typescript](https://img.shields.io/badge/languages-go%20and%20typescript-blue.svg?style=for-the-badge)
![framework: vue](https://img.shields.io/badge/framework-vue-blue.svg?style=for-the-badge)
[![MIT License](https://img.shields.io/github/license/dbtedman/kata-accretion?color=orange&style=for-the-badge)](https://github.com/dbtedman/kata-accretion/blob/main/LICENSE.md)

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

### Server Core

> 🚧 Placeholder

### Persistence

The source of truth is a series of `HistoricalFact` events that are processed to form multiple projections including
a `SearchProjection` and `GraphProjection`. Each projection is specifically designed to support different use cases.

## Security

> 💡 Organised around categories from the [OWASP Top 10 - 2021](https://owasp.org/www-project-top-ten/)
> and [OWASP API Security Top 10 2019](https://owasp.org/www-project-api-security/) projects.

### [A01:2021-Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)

-   [GitHub Secret scanning](https://github.com/features/security) detects secrets incorrectly committed into the
    repository.

### [A02:2021-Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)

_No relevant mitigations are in place._

### [A03:2021-Injection](https://owasp.org/Top10/A03_2021-Injection/) + [API8:2019 Injection](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa8-injection.md)

_No relevant mitigations are in place._

### [A04:2021-Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)

_No relevant mitigations are in place._

### [A05:2021-Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/) + [API7:2019 Security Misconfiguration](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa7-security-misconfiguration.md)

_No relevant mitigations are in place._

### [A06:2021-Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)

-   [Snyk](https://snyk.io) or [GitHub Dependabot](https://github.com/features/security) scans Go and NPM dependencies for know vulnerabilities and creates pull requests to
    resolve the vulnerabilities when available.

### [A07:2021-Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/) + [API2:2019 Broken User Authentication](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa2-broken-user-authentication.md)

_No relevant mitigations are in place._

### [A08:2021-Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)

-   Third party dependencies are carefully selected and described with explicit version numbers in `go.mod`
    and `package.json`.
-   [Snyk](https://snyk.io) or [GitHub Dependabot](https://github.com/features/security) will raise an alert if a
    suspicious package, or version of a package is being depended upon.
-   Dependencies required during development are segregated from those required during operation of this plugin.

### [A09:2021-Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/) + [API10:2019 Insufficient Logging & Monitoring](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xaa-insufficient-logging-monitoring.md)

_No relevant mitigations are in place._

### [A10:2021-Server-Side Request Forgery](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)

_No relevant mitigations are in place._

### [API1:2019 Broken Object Level Authorization](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa1-broken-object-level-authorization.md)

_No relevant mitigations are in place._

### [API3:2019 Excessive Data Exposure](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa3-excessive-data-exposure.md)

_No relevant mitigations are in place._

### [API4:2019 Lack of Resources & Rate Limiting](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa4-lack-of-resources-and-rate-limiting.md)

_No relevant mitigations are in place._

### [API5:2019 Broken Function Level Authorization](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa5-broken-function-level-authorization.md)

_No relevant mitigations are in place._

### [API6:2019 Mass Assignment](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa6-mass-assignment.md)

_No relevant mitigations are in place._

### [API9:2019 Improper Assets Management](https://github.com/OWASP/API-Security/blob/master/2019/en/src/0xa9-improper-assets-management.md)

_No relevant mitigations are in place._

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
