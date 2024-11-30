// Arguments
import type {
    AccountApplicationInformationData,
    AccountAssetInformationData,
    AccountInformationData,
    GetApplicationBoxesData,
    GetApplicationByIdData,
    GetAssetByIdData,
    GetBlockData,
    GetBlockHashData,
    PendingTransactionInformationData,
    GetPendingTransactionsByAddressData,
    WaitForBlockData,
} from "@awesome-algorand/algod-fetch";

import type {
    Account,
    AccountApplicationResponse,
    AccountAssetResponse,
    Asset,
    Application,
    BoxesResponse,
    BlockHashResponse,
    PendingTransactionResponse,
    NodeStatusResponse,
    SupplyResponse,
    TransactionParametersResponse,
    Version,
    PendingTransactionsResponse

} from 'algosdk/client/algod'
import {BlockData} from '@algorandfoundation/algokit-subscriber/types/block'
import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {
    accountApplicationInformation,
    accountAssetInformation,
    accountInformation,
    getApplicationBoxes,
    getApplicationById,
    getAssetById,
    getBlock,
    getBlockHash,
    getGenesis, getPendingTransactions,
    getPendingTransactionsByAddress,
    getStatus, getSupply, getVersion,
    healthCheck,
    pendingTransactionInformation, transactionParams, waitForBlock
} from "@awesome-algorand/query-core/algosdk/algod";
import {useWallet} from "@txnlab/use-wallet-react";


export type AccountApplicationInformationQuery = UseQueryOptions<
    AccountApplicationResponse,
    Error,
    AccountApplicationResponse,
    (string | AccountApplicationInformationData)[]
>

/**
 *  Get application information for an account
 *
 * @param data
 * @param options
 */
export function useAccountApplicationInformation(data: AccountApplicationInformationData, options: AccountApplicationInformationQuery = {} as AccountApplicationInformationQuery) {
    const walletManager = useWallet()
    return useQuery(accountApplicationInformation(walletManager.algodClient, data, options))
}

export type AccountAssetInformationQuery = UseQueryOptions<
    AccountAssetResponse,
    Error,
    AccountAssetResponse,
    (string | AccountAssetInformationData)[]
>
/**
 * Get asset information for an account
 *
 * @param data
 * @param options
 * @example
 * ```tsx
 * const query = useAccountAssetInformation({address: "abc", assetId: 12345})
 * ```
 */
export function useAccountAssetInformation(data: AccountAssetInformationData, options: AccountAssetInformationQuery = {} as AccountAssetInformationQuery) {
    const walletManager = useWallet()
    return useQuery(accountAssetInformation(walletManager.algodClient, data, options))
}

export type AccountInformationQuery = UseQueryOptions<
    Account,
    Error,
    Account,
    (string | AccountInformationData)[]
>

/**
 * Get account information
 * @param data
 * @param options
 */
export function useAccountInformation(data: AccountInformationData, options: AccountInformationQuery = {} as AccountInformationQuery){
    const walletManager = useWallet()
    return useQuery(accountInformation(walletManager.algodClient, data, options))
}

export type ApplicationInformationQuery = UseQueryOptions<
    Application,
    Error,
    Application,
    (string | GetApplicationByIdData)[]
>
/**
 * Get application information
 * @param data
 * @param options
 */
export function useApplicationInformation(data: GetApplicationByIdData, options: ApplicationInformationQuery = {} as ApplicationInformationQuery) {
    const walletManager = useWallet()
    return useQuery(getApplicationById(walletManager.algodClient, data, options))
}

export type ApplicationBoxesQuery = UseQueryOptions<
    BoxesResponse,
    Error,
    BoxesResponse,
    (string | GetApplicationBoxesData)[]
>
export function useApplicationBoxes(data: GetApplicationBoxesData,options: ApplicationBoxesQuery = {} as ApplicationBoxesQuery) {
    const walletManager = useWallet()
    return useQuery(getApplicationBoxes(walletManager.algodClient, data, options))
}

export type AssetInformationQuery = UseQueryOptions<
    Asset,
    Error,
    Asset,
    (string | GetAssetByIdData)[]
>
export function useAssetInformation(data: GetAssetByIdData, options: AssetInformationQuery = {} as AssetInformationQuery) {
    const walletManager = useWallet()
    return useQuery(getAssetById(walletManager.algodClient, data, options))
}

export type BlockInformationQuery = UseQueryOptions<
    BlockData,
    Error,
    BlockData,
    (string | GetBlockData)[]
>
/**
 * Get block information
 * @param data
 * @param options
 */
export function useBlockInformation(data: GetBlockData, options: BlockInformationQuery = {} as BlockInformationQuery) {
    const walletManager = useWallet()
    return useQuery(getBlock(walletManager.algodClient, data, options))
}

export type BlockHashQuery = UseQueryOptions<
    BlockHashResponse,
    Error,
    BlockHashResponse,
    (string | GetBlockHashData)[]
>
export function useBlockHash(data: GetBlockHashData, options: BlockHashQuery = {} as BlockHashQuery) {
    const walletManager = useWallet()
    return useQuery(getBlockHash(walletManager.algodClient, data, options))
}

// TODO: Move this to core library
export type GenesisAllocation = {
    addr: string,
    comment: string
    state: {
        algo: number
        onl?: number
        sel?: string
        vote?: string
        voteKD?: number
        voteLst?: number
    }

}
// TODO: Fix upstream swagger
export type GetGenesisResponse = {
    alloc: GenesisAllocation[],
    fees: string,
    "id": string,
    "network": string,
    "proto": string,
    "rwd": string,
    "timestamp": number
}

export type GenesisQuery = UseQueryOptions<
    GetGenesisResponse,
    Error,
    GetGenesisResponse,
    (string)[]
>
export function useGenesis(options:GenesisQuery = {} as GenesisQuery) {
    const walletManager = useWallet()
    return useQuery(getGenesis(walletManager.algodClient, options))
}

export type HealthCheckQuery = UseQueryOptions<
    null,
    Error,
    null,
    (string)[]
>
export function useHealthCheck(options: HealthCheckQuery = {} as HealthCheckQuery) {
    const walletManager = useWallet()
    return useQuery(healthCheck(walletManager.algodClient, options))
}

export type PendingTransactionInformationQuery = UseQueryOptions<
    PendingTransactionResponse,
    Error,
    PendingTransactionResponse,
    (string | PendingTransactionInformationData)[]
>
export function usePendingTransaction(data: PendingTransactionInformationData, options: PendingTransactionInformationQuery = {} as PendingTransactionInformationQuery) {
    const walletManager = useWallet()
    return useQuery(pendingTransactionInformation(walletManager.algodClient, data, options))
}

export type PendingTransactionsQuery = UseQueryOptions<
    PendingTransactionsResponse,
    Error,
    PendingTransactionsResponse,
    (string)[]
>
export function usePendingTransactions(options: PendingTransactionsQuery = {} as PendingTransactionsQuery) {
    const walletManager = useWallet()
    return useQuery(getPendingTransactions(walletManager.algodClient, options))
}

export type GetPendingTransactionsByAddressQuery = UseQueryOptions<
    PendingTransactionsResponse,
    Error,
    PendingTransactionsResponse,
    (string | GetPendingTransactionsByAddressData)[]
>
export function useAccountPendingTransactions(data: GetPendingTransactionsByAddressData, options: GetPendingTransactionsByAddressQuery = {} as GetPendingTransactionsByAddressQuery) {
    const walletManager = useWallet()
    return useQuery(getPendingTransactionsByAddress(walletManager.algodClient, data, options))
}

export type StatusQuery = UseQueryOptions<
    NodeStatusResponse,
    Error,
    NodeStatusResponse,
    (string)[]
>
export function useStatus(options: StatusQuery = {} as StatusQuery) {
    const walletManager = useWallet()
    return useQuery(getStatus(walletManager.algodClient, options))
}
export type SupplyQuery = UseQueryOptions<
    SupplyResponse,
    Error,
    SupplyResponse,
    (string)[]
>
export function useSupply(options: SupplyQuery = {} as SupplyQuery) {
    const walletManager = useWallet()
    return useQuery(getSupply(walletManager.algodClient, options))
}

export type TransactionParamsQuery = UseQueryOptions<
    TransactionParametersResponse,
    Error,
    TransactionParametersResponse,
    (string)[]
>
export function useTransactionParams(options: TransactionParamsQuery = {} as TransactionParamsQuery) {
    const walletManager = useWallet()
    return useQuery(transactionParams(walletManager.algodClient, options))
}

export type VersionQuery = UseQueryOptions<
    Version,
    Error,
    Version,
    (string)[]
>
export function useVersion(options: VersionQuery = {} as VersionQuery) {
    const walletManager = useWallet()
    return useQuery(getVersion(walletManager.algodClient, options))
}

export type WaitForBlockQuery = UseQueryOptions<
    NodeStatusResponse,
    Error,
    NodeStatusResponse,
    (string | WaitForBlockData)[]
>
export function useWaitForBlock(data: WaitForBlockData, options: WaitForBlockQuery = {} as WaitForBlockQuery) {
    const walletManager = useWallet()
    return useQuery(waitForBlock(walletManager.algodClient, data, options))
}
