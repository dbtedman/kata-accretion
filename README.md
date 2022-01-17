# [Kata](https://github.com/dbtedman/kata) // [Accretion](https://github.com/dbtedman/kata-accretion)

> ⚠️ WARNING: Not production ready code.

[![CI Results](https://github.com/dbtedman/kata-accretion/workflows/ci/badge.svg)](https://github.com/dbtedman/kata-accretion/actions?workflow=ci)

Manage internal technical documentation that is enriched with live data accreted from your environment.

-   [Getting Started](#getting-started)
-   [Design](#design)
-   [License](#license)

## Getting Started

```shell
nvm use && make
```

## Design

### Interaction

All interaction methods communicate with the server core.

#### UI

A web based user interface written in a SPA framework that communicates with the server core over an api.

#### CLI

A command line user interface that communicates with the server core over an api.

#### REST

> 🚧 Placeholder

### Domain Entities

-   Application (User)
-   Application Service (User)
-   Branch (Gitlab)
-   Cluster (Kube)
-   Code Coverage (Gitlab)
-   Coding Language (Gitlab)
-   Deployment (Kube)
-   Environment
-   Issue (Jira)
-   Logs (Kibana)
-   Merge Request (Gitlab)
-   Owner (Jira)
-   Pipeline Status (Gitlab)
-   Product (User)
-   Repository (Gitlab)
-   Service (User)
-   Team
-   URL (Kube)

### Domain Use Cases

> 🚧 Placeholder

## License

The [MIT License](./LICENSE.md) is used by this project.
