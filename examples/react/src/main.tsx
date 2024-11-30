import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import HomePage from "./routes/HomePage.tsx";
import MethodPage from "./routes/MethodPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {NetworkId, WalletManager, WalletProvider} from "@txnlab/use-wallet-react";

const queryClient = new QueryClient()
// Create a manager instance
const walletManager = new WalletManager({
    wallets: [],
    defaultNetwork: NetworkId.TESTNET
})
// @ts-expect-error, document is defined in the browser
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <WalletProvider manager={walletManager}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/:interface/:method" element={<MethodPage />} />
                    </Routes>
                </BrowserRouter>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </WalletProvider>
    </React.StrictMode>,
)
