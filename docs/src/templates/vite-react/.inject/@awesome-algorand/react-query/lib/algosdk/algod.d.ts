import { Account, AccountApplicationInformationData, AccountApplicationInformationResponse, AccountAssetInformationData, AccountAssetInformationResponse, AccountInformationData, Asset, Application, GetApplicationBoxesData, GetApplicationBoxesResponse, GetApplicationByIdData, GetAssetByIdData, GetBlockData, GetBlockHashData, GetBlockHashResponse, HealthCheckResponse, PendingTransactionInformationData, PendingTransactionInformationResponse, GetPendingTransactionsByAddressData, GetPendingTransactionsByAddressResponse, GetStatusResponse, GetSupplyResponse, TransactionParamsResponse, Version, WaitForBlockData, WaitForBlockResponse, GetPendingTransactionsResponse } from '@awesome-algorand/algod-fetch';
import { BlockData } from '@algorandfoundation/algokit-subscriber/types/block';
import { UseQueryOptions } from '@tanstack/react-query';
export type AccountApplicationInformationQuery = UseQueryOptions<AccountApplicationInformationResponse, Error, AccountApplicationInformationResponse, (string | AccountApplicationInformationData)[]>;
/**
 *  Get application information for an account
 *
 * @param data
 * @param options
 */
export declare function useAccountApplicationInformation(data: AccountApplicationInformationData, options?: AccountApplicationInformationQuery): import('@tanstack/react-query').UseQueryResult<AccountApplicationInformationResponse, Error>;
export type AccountAssetInformationQuery = UseQueryOptions<AccountAssetInformationResponse, Error, AccountAssetInformationResponse, (string | AccountAssetInformationData)[]>;
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
export declare function useAccountAssetInformation(data: AccountAssetInformationData, options?: AccountAssetInformationQuery): import('@tanstack/react-query').UseQueryResult<AccountAssetInformationResponse, Error>;
export type AccountInformationQuery = UseQueryOptions<Account, Error, Account, (string | AccountInformationData)[]>;
/**
 * Get account information
 * @param data
 * @param options
 */
export declare function useAccountInformation(data: AccountInformationData, options?: AccountInformationQuery): import('@tanstack/react-query').UseQueryResult<Account, Error>;
export type ApplicationInformationQuery = UseQueryOptions<Application, Error, Application, (string | GetApplicationByIdData)[]>;
/**
 * Get application information
 * @param data
 * @param options
 */
export declare function useApplicationInformation(data: GetApplicationByIdData, options?: ApplicationInformationQuery): import('@tanstack/react-query').UseQueryResult<Application, Error>;
export type ApplicationBoxesQuery = UseQueryOptions<GetApplicationBoxesResponse, Error, GetApplicationBoxesResponse, (string | GetApplicationBoxesData)[]>;
export declare function useApplicationBoxes(data: GetApplicationBoxesData, options?: ApplicationBoxesQuery): import('@tanstack/react-query').UseQueryResult<GetApplicationBoxesResponse, Error>;
export type AssetInformationQuery = UseQueryOptions<Asset, Error, Asset, (string | GetAssetByIdData)[]>;
export declare function useAssetInformation(data: GetAssetByIdData, options?: AssetInformationQuery): import('@tanstack/react-query').UseQueryResult<Asset, Error>;
export type BlockInformationQuery = UseQueryOptions<BlockData, Error, BlockData, (string | GetBlockData)[]>;
/**
 * Get block information
 * @param data
 * @param options
 */
export declare function useBlockInformation(data: GetBlockData, options?: BlockInformationQuery): import('@tanstack/react-query').UseQueryResult<BlockData, Error>;
export type BlockHashQuery = UseQueryOptions<GetBlockHashResponse, Error, GetBlockHashResponse, (string | GetBlockHashData)[]>;
export declare function useBlockHash(data: GetBlockHashData, options?: BlockHashQuery): import('@tanstack/react-query').UseQueryResult<GetBlockHashResponse, Error>;
export type GenesisAllocation = {
    addr: string;
    comment: string;
    state: {
        algo: number;
        onl?: number;
        sel?: string;
        vote?: string;
        voteKD?: number;
        voteLst?: number;
    };
};
export type GetGenesisResponse = {
    alloc: GenesisAllocation[];
    fees: string;
    "id": string;
    "network": string;
    "proto": string;
    "rwd": string;
    "timestamp": number;
};
export type GenesisQuery = UseQueryOptions<GetGenesisResponse, Error, GetGenesisResponse, (string)[]>;
export declare function useGenesis(options?: GenesisQuery): import('@tanstack/react-query').UseQueryResult<GetGenesisResponse, Error>;
export type HealthCheckQuery = UseQueryOptions<HealthCheckResponse, Error, HealthCheckResponse, (string)[]>;
export declare function useHealthCheck(options?: HealthCheckQuery): import('@tanstack/react-query').UseQueryResult<unknown, Error>;
export type PendingTransactionInformationQuery = UseQueryOptions<PendingTransactionInformationResponse, Error, PendingTransactionInformationResponse, (string | PendingTransactionInformationData)[]>;
export declare function usePendingTransaction(data: PendingTransactionInformationData, options?: PendingTransactionInformationQuery): import('@tanstack/react-query').UseQueryResult<import('@awesome-algorand/algod-fetch').PendingTransactionResponse, Error>;
export type PendingTransactionsQuery = UseQueryOptions<GetPendingTransactionsResponse, Error, GetPendingTransactionsResponse, (string)[]>;
export declare function usePendingTransactions(options?: PendingTransactionsQuery): import('@tanstack/react-query').UseQueryResult<GetPendingTransactionsResponse, Error>;
export type GetPendingTransactionsByAddressQuery = UseQueryOptions<GetPendingTransactionsByAddressResponse, Error, GetPendingTransactionsByAddressResponse, (string | GetPendingTransactionsByAddressData)[]>;
export declare function useAccountPendingTransactions(data: GetPendingTransactionsByAddressData, options?: GetPendingTransactionsByAddressQuery): import('@tanstack/react-query').UseQueryResult<GetPendingTransactionsByAddressResponse, Error>;
export type StatusQuery = UseQueryOptions<GetStatusResponse, Error, GetStatusResponse, (string)[]>;
export declare function useStatus(options?: StatusQuery): import('@tanstack/react-query').UseQueryResult<GetStatusResponse, Error>;
export type SupplyQuery = UseQueryOptions<GetSupplyResponse, Error, GetSupplyResponse, (string)[]>;
export declare function useSupply(options?: SupplyQuery): import('@tanstack/react-query').UseQueryResult<GetSupplyResponse, Error>;
export type TransactionParamsQuery = UseQueryOptions<TransactionParamsResponse, Error, TransactionParamsResponse, (string)[]>;
export declare function useTransactionParams(options?: TransactionParamsQuery): import('@tanstack/react-query').UseQueryResult<TransactionParamsResponse, Error>;
export type VersionQuery = UseQueryOptions<Version, Error, Version, (string)[]>;
export declare function useVersion(options?: VersionQuery): import('@tanstack/react-query').UseQueryResult<Version, Error>;
export type WaitForBlockQuery = UseQueryOptions<WaitForBlockResponse, Error, WaitForBlockResponse, (string | WaitForBlockData)[]>;
export declare function useWaitForBlock(data: WaitForBlockData, options?: WaitForBlockQuery): import('@tanstack/react-query').UseQueryResult<WaitForBlockResponse, Error>;
