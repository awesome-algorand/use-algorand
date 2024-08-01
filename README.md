# ℹ️ Overview

### ⚠️This is an experimental library for using with algorand.⚠️

Please see [algokit](https://developer.algorand.org/docs/get-details/algokit/utils/ts/) or [algosdk](https://algorand.github.io/js-algorand-sdk/) for production use.

This library is a collection of utilities to use in different frontends built by the [@awesome-algorand]() team.

## 🎯 Main Objective
> Provide an easy way to bring reactive elements to the algorand blockchain.

We aim to build bridges on-top of the already existing work of the ecosystem.
In the short term this project is focused on the [Algorand API](https://developer.algorand.org/docs/reference/rest-apis/algod/v2/).
The longer term goal of this project is to build on top of the api work.

The first foundational bridge is the `useAlgodClient` and `useIndexerClient` stores. 
Building off the work at TxnLab's [UseWallet](https://txnlab.gitbook.io/use-wallet), introducing a reactive store for the algorand api could be a good building block. 
(Possibly adopted by TxnLabs as well 🙏) 

Another goal under development currently is building a [@tanstack/query](https://tanstack.com/query/latest) wrapper for the clients.
(This is mostly complete in this repository). 
Ideally this would be generated by the OpenApi specification
using [@hey-api/openapi](https://heyapi.vercel.app/openapi-ts/tanstack-query.html)
when it is ready for release.


There are a lot more projects that should get support but this is the main list for use-algorand for now. 
Please consider contributing or sponsoring the project if you find them as useful as we do:
- [TxnLab](https://github.com/sponsors/TxnLab)
- TanStack
  - [Tanner Linsley](https://github.com/sponsors/tannerlinsley)
  - [Dominik Dorfmeister](https://github.com/sponsors/TkDodo)
- [HeyAPI](https://heyapi.vercel.app/)

# ⚙️ Get Started

Clone the repository:
```bash
git clone git@github.com:awesome-algorand/use-algorand.git
```

Install the dependencies:
```bash
npm install
```
## 🚀 Running
Run React Example:
```bash
npm run dev --workspace=@awesome-algorand/react-query
```
Run React Example:
```bash
npm run dev --workspace=@awesome-algorand/svelte-query
```
# State of the Project

### 📦 @awesome-algorand/query-core
`@awesome-algorand/query-core` allows you to use the Algorand API in a reactive way.
Each library is a wrapper around query-core which is designed to work in their specific contexts (react | svelte | etc)
It supports both Algosdk and the experimental generated clients. 

#### ↪️ @awesome-algorand/query-core/algosdk

Wrapped clients for the [Algosdk](https://algorand.github.io/js-algorand-sdk/) can be found in the [@awesome-algorand/query-core/algosdk](packages/query-core/src/algosdk) module

Example Usage:

```typescript jsx
import {useQuery} from "@tanstack/react-query";
import {getBlock} from '@awesome-algorand/query-core/algosdk';
import {Algodv2} from 'algosdk';

const server = "https://testnet-api.algonode.cloud"
const token = "";
const port = 443

function MyComponent() {
    // TODO: create useAlgodClient hook
    const algod = new Algodv2(token, server, port);
    // TODO: create useQuery hook useBlock({round: 1}) that also uses the useAlgodClient hook
    const query = useQuery(getBlock(algod, {round: 1}));
}
```

#### ↪️ @awesome-algorand/query-core/algo-fetch
>The generated clients are not recommended for production use.

The clients are generated from the [Algorand API](https://developer.algorand.org/docs/reference/rest-apis/algod/v2/)
using [@heyapi/openapi](https://heyapi.vercel.app/)
and can be found in the [@awesome-algorand/algo-fetch](https://github.com/awesome-algorand/algo-fetch) repo.
The wrapper for these clients can be found in the [@awesome-algorand/query-core/algo-fetch](packages/query-core/src/algo-fetch) module

Example Usage:

```typescript jsx
import {useQuery} from "@tanstack/react-query";
import {getBlock} from '@awesome-algorand/query-core/algo-fetch';
import {AlgodClient} from "@awesome-algorand/algod-fetch";

const server = "https://testnet-api.algonode.cloud"

function MyComponent() {
    // TODO: create useAlgodClient hook
    const algod = new AlgodClient({
        BASE: server
    });
    // TODO: create useQuery hook useBlock({round: 1}) that also uses the useAlgodClient hook
    const query = useQuery(getBlock(algod, {round: 1}));
}
```
