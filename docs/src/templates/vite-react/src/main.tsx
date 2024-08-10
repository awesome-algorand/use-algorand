import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {NetworkId, WalletId, WalletManager, WalletProvider} from "@txnlab/use-wallet-react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const walletManager = new WalletManager({
  wallets: [
      WalletId.MNEMONIC
  ],
    network: NetworkId.TESTNET,
})

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <WalletProvider manager={walletManager}>
          <QueryClientProvider client={queryClient}>
                <App />
          </QueryClientProvider>
      </WalletProvider>
  </StrictMode>,
)
