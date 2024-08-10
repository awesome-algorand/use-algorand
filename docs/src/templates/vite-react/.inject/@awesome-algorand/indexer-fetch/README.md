
# @awesome-algorand/indexer-fetch
> Fetch client for Indexer

Generated IndexerClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/indexer/v3.5.0/api/indexer.oas3.yml). 
See the [upstream repository](https://github.com/algorand/indexer) for more information.

## Installation

```bash
npm install @awesome-algorand/indexer-fetch --save
```

### Usage

```typescript
import {IndexerClient} from '@awesome-algorand/indexer-fetch';

const client = new IndexerClient({
    BASE: 'https://testnet-idx.algonode.cloud/',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/indexer/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)
## What's Changed
### Enhancements
* Expose Min Balance via Indexer API
* Absenteeism/Incentives Support
* Bump to Golang version 1.21.10
* Various Security Dependency Upgrades

## Changelog
* 5fdba20 build(deps): bump requests from 2.31.0 to 2.32.0 in /misc (#1614)
* b019536 Add account min balance field (#1596)
* 3ed7cb3 Add unit tests for absenteeism
* 8835d0f Bump golang version to 1.20.14. (#1597)
* dcf3a3b Bump golang version to 1.21.10, go-algorand-sdk to v2.5.0 (#1612)
* 8e7d2e5 Bump to 2.6 of go sdk. (#1616)
* 09bdb69 Dependency bumps. (#1603)
* 4bd144f Introduce test ensuring indexer handles indexing into shared addresses properly when group resource sharing occurs. (#1591)
* 738fdc0 Merge pull request #1 from jasonpaulos/absenteeism-tests
* 7476ac0 Merge pull request #1608 from jannotti/absenteeism
* 5bef083 Merge pull request #1610 from ohill/reviewdog-config
* ca9ff29 Merge remote-tracking branch 'upstream/main' into absenteeism
* 26b4eff Optimize sub-queries for assets/apps against a given address. (#1615)
* 2de794e Return new fields in REST
* 4eaa96f add go_version_file config to reviewdog
* c8f0329 build(deps): bump github.com/docker/docker (#1587)
* 93c5ea3 build(deps): bump github.com/docker/docker (#1601)
* 1c239d3 build(deps): bump github.com/jackc/pgx/v4 from 4.13.0 to 4.18.2 (#1598)
* 4a8a6eb build(deps): bump gitpython from 3.1.26 to 3.1.41 in /misc (#1594)
* f82384d build(deps): bump golang.org/x/crypto from 0.6.0 to 0.17.0 (#1589)
* ef8395b build(deps): bump golang.org/x/net from 0.21.0 to 0.23.0 (#1604)
* 8c60a57 build(deps): bump google.golang.org/protobuf from 1.28.1 to 1.33.0 (#1599)
* 597d09a change indexer reviewdog configuration to match go-algorand reviewdog configuration
* 59d624d fix reviewdog error
* 3c3447b fix reviewdog warnings
* 4e90200 update for algorand/go-algorand#5757 and algorand/go-algorand-sdk#617
* 0b091e8 update warnings to remove unnecessary build

**Full Changelog**: https://github.com/algorand/indexer/compare/v3.4.0...v3.5.0

---
[Docker images for this release are available on Docker Hub.](https://hub.docker.com/r/algorand/indexer)

