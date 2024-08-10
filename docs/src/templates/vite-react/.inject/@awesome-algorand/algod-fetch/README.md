
# @awesome-algorand/algod-fetch
> Fetch client for Algod RPC

Generated AlgodClient for Algorand based on the [OpenAPI Specification](https://raw.githubusercontent.com/algorand/go-algorand/v3.25.0-stable/daemon/algod/api/algod.oas3.yml). 
See the [upstream repository](https://github.com/algorand/go-algorand) for more information.

## Installation

```bash
npm install @awesome-algorand/algod-fetch --save
```

### Usage

```typescript
import {AlgodClient} from '@awesome-algorand/algod-fetch';

const client = new AlgodClient({
    BASE: 'https://testnet-api.algonode.cloud',
})
```

#### See the full [API Documentation](https://awesome-algorand.github.io/algo-fetch/guides/clients/algod/) for more information

# Change Log
![GitHub Logo](https://raw.githubusercontent.com/algorand/go-algorand/master/release/release-banner.jpg)

# Overview

# What&apos;s New
* Network optimization - fixes for ERL resources management
* Performance enhancement - add expired stake cache to reduce db lookups
* Miscellaneous debugging improvements
* Other bug fixes, test improvements, and optimizations

# Changelog
## New Features
* REST API: /debug/settings/pprof admin endpoint for debugging ([#6018](https://github.com/algorand/go-algorand/pull/6018))
## Enhancements
* AVM: incentive opcodes ([#5984](https://github.com/algorand/go-algorand/pull/5984))
* Agreement: log current player state for VoteBroadcast and ProposalBroadcast events ([#6007](https://github.com/algorand/go-algorand/pull/6007))
* Build: bump golang.org/x/net from 0.17.0 to 0.23.0 ([#5979](https://github.com/algorand/go-algorand/pull/5979))
* Ci: upgrade github checkout action to v4 ([#6010](https://github.com/algorand/go-algorand/pull/6010))
* Cicd: Update to switch e2e_expect to large ([#6004](https://github.com/algorand/go-algorand/pull/6004))
* Ledger: introduce expired stake cache ([#6014](https://github.com/algorand/go-algorand/pull/6014))
* Metrics: Add TagCounterFiltered metrics for handler calls ([#6013](https://github.com/algorand/go-algorand/pull/6013))
* Typos: Correct some spelling mistakes ([#6001](https://github.com/algorand/go-algorand/pull/6001))
## Bugfixes
* Cicd: update OS support in test release script ([#6012](https://github.com/algorand/go-algorand/pull/6012))
* Logger: fix data race in tests ([#5999](https://github.com/algorand/go-algorand/pull/5999))
* Tests: set communication timeout in kmd.init_wallet_handle ([#6021](https://github.com/algorand/go-algorand/pull/6021))
* Tests: Fix flakey htlc test ([#6017](https://github.com/algorand/go-algorand/pull/6017))
* Tests: Fix e2e kmd timeout ([#6016](https://github.com/algorand/go-algorand/pull/6016))
* Tests: Fix flakey ECDSA testing ([#6005](https://github.com/algorand/go-algorand/pull/6005))
* Tools: Fix Cloudflare SRV update utility after API change ([#6020](https://github.com/algorand/go-algorand/pull/6020))
* Txhandler: fixes to ERL resources management ([#6019](https://github.com/algorand/go-algorand/pull/6019))
## Protocol Upgrade
This release does not contain a protocol upgrade.

## Additional Resources
* [Algorand Forum](https://forum.algorand.org)
* [Developer Documentation](https://developer.algorand.org)

