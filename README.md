# [Kata](https://github.com/dbtedman/kata) // [Accretion](https://github.com/dbtedman/kata-accretion)

> ⚠️ WARNING: Not production ready code.

[![CI GitHub Pipeline](https://img.shields.io/github/workflow/status/dbtedman/kata-accretion/ci?style=for-the-badge&logo=github&label=ci)](https://github.com/dbtedman/kata-accretion/actions/workflows/ci.yml)
![language: go](https://img.shields.io/badge/language-go-blue.svg?style=for-the-badge&logo=go)

Manage internal technical documentation that is enriched with live data accreted from your environment.

-   [Getting Started](#getting-started)
-   [Verification](#verification)
-   [Design](#design)
-   [License](#license)

## Getting Started

```shell
nvm use && make && ./accretion
```

## Verification

### Linting

-   [Prettier](https://prettier.io)

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

### Interaction

All interaction methods communicate with the server core via the GraphQL API.

| Entity    | Notes                                                                                                                   |
| :-------- | :---------------------------------------------------------------------------------------------------------------------- |
| `SPA`     | A ReactJS client application that interacts with the server core via GraphQL.                                           |
| `CLI`     | The CLI is used for both running the server core and for interacting with the server core over GraphQL.                 |
| `GraphQL` | The channel of communication with the server core used by all other interaction methods, along with 3rd party services. |

### Server Core

> 🚧 Placeholder

### Domain Entities

| Entity               | Notes    |
| :------------------- | :------- |
| `Application`        | (User)   |
| `ApplicationService` | (User)   |
| `Branch`             | (Gitlab) |
| `Cluster`            | (Kube)   |
| `CodeCoverage`       | (Gitlab) |
| `CodingLanguage`     | (Gitlab) |
| `Deployment`         | (Kube)   |
| `Environment`        |          |
| `Issue`              | (Jira)   |
| `Logs`               | (Kibana) |
| `MergeRequest`       | (Gitlab) |
| `Owner`              | (Jira)   |
| `Pipeline Status`    | (Gitlab) |
| `Product`            | (User)   |
| `Repository`         | (Gitlab) |
| `Service`            | (User)   |
| `Team`               |          |
| `URL`                | (Kube)   |

### Domain Use Cases

| Use Case                 | Notes                                                                                     |
| :----------------------- | :---------------------------------------------------------------------------------------- |
| `AccreteData*`           | A series of usecases associated with automatically acreeting data from different sources. |
| `BrowseResources`        |                                                                                           |
| `ManuallyUpdateResource` | Append data to resources manually.                                                        |
| `SearchForResource`      | Perform a search query over the data.                                                     |

### Gateways

| Gateway      | Notes |
| :----------- | :---- |
| `GitLab`     |       |
| `Jira`       |       |
| `Kibana`     |       |
| `Kubernetes` |       |

### Persistence

The source of truth is a series of `HistoricalFact` events that are processed to form multiple projections including a `SearchProjection` and `GraphProjection`. Each projection is specifically designed to support different use cases.

### Security Mitigations

> Initially based on the [OWASP Top 10 - 2021](https://owasp.org/www-project-top-ten/).

| Security Risk                                                                                                                       | Mitigation |
| :---------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| [A01:2021-Broken Access Control](https://owasp.org/Top10/A01_2021-Broken_Access_Control/)                                           |            |
| [A02:2021-Cryptographic Failures](https://owasp.org/Top10/A02_2021-Cryptographic_Failures/)                                         |            |
| [A03:2021-Injection](https://owasp.org/Top10/A03_2021-Injection/)                                                                   |            |
| [A04:2021-Insecure Design](https://owasp.org/Top10/A04_2021-Insecure_Design/)                                                       |            |
| [A05:2021-Security Misconfiguration](https://owasp.org/Top10/A05_2021-Security_Misconfiguration/)                                   |            |
| [A06:2021-Vulnerable and Outdated Components](https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/)                 |            |
| [A07:2021-Identification and Authentication Failures](https://owasp.org/Top10/A07_2021-Identification_and_Authentication_Failures/) |            |
| [A08:2021-Software and Data Integrity Failures](https://owasp.org/Top10/A08_2021-Software_and_Data_Integrity_Failures/)             |            |
| [A09:2021-Security Logging and Monitoring Failures](https://owasp.org/Top10/A09_2021-Security_Logging_and_Monitoring_Failures/)     |            |
| [A10:2021-Server-Side Request Forgery](https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/)                    |            |

## License

The [MIT License](./LICENSE.md) is used by this project.
