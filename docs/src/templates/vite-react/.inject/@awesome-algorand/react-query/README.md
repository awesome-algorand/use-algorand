Tanstack Queries for Algorand. 

Built with [Tanstack Query](https://tanstack.com/query/v5), [Txnlab UseWallet](https://txnlab.gitbook.io/use-wallet) and the [Official SDK](https://algorand.github.io/js-algorand-sdk/)

# Get Started

## Installation
>Warning! The `@awesome-algorand/react-query` package is not published yet

```shell
npm install @awesome-algorand/react-query @txnlab/use-wallet-react algosdk --save
```

## Providers

Wrap your app in the `QueryProvider` and `WalletProvider` to provide the necessary context to your components.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

// Tanstack
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

// TxnLab
import {NetworkId, WalletManager, WalletProvider} from "@txnlab/use-wallet-react";

// Create a query client
const queryClient = new QueryClient()

// Create a wallet manager
const walletManager = new WalletManager({
    wallets: [],
    network: NetworkId.TESTNET
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <WalletProvider manager={walletManager}>
            <QueryClientProvider client={queryClient}>
                <App/>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </WalletProvider>
    </React.StrictMode>,
)
```
- See more information about configuing the `WalletManager` in the [Txnlab UseWallet documentation](https://txnlab.gitbook.io/use-wallet)
- See more information about the `QueryClient` in the [Tanstack Query documentation](https://tanstack.com/query/v5)



## Usage

See the full documentation at **TODO**

```jsx
import { useBlock } from '@awesome-algorand/react-query';

function BlockViewer() {
  const { data, error, isLoading } = useBlock(1);

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      <h1>Block {data?.block.rnd}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
