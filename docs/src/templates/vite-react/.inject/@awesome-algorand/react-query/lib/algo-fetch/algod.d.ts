import { UseQueryOptions } from '@tanstack/react-query';
import { GetBlockData, AccountInformationData, Account, AccountApplicationInformationData, AccountApplicationInformationResponse, GetBlockResponse } from '@awesome-algorand/algod-fetch';
export type BlockQuery = UseQueryOptions<GetBlockResponse, Error, GetBlockResponse, (string | GetBlockData)[]>;
export declare function useBlock(data: GetBlockData, options?: BlockQuery): import('@tanstack/react-query').UseQueryResult<GetBlockResponse, Error>;
export type AccountInformationQuery = UseQueryOptions<Account, Error, Account, (string | AccountInformationData)[]>;
export declare function useAccountInformation(data: AccountInformationData, options?: AccountInformationQuery): import('@tanstack/react-query').UseQueryResult<Account, Error>;
export type AccountApplicationInformationQuery = UseQueryOptions<AccountApplicationInformationResponse, Error, AccountApplicationInformationResponse, (string | AccountApplicationInformationData)[]>;
export declare function useAccountApplicationInformation(data: AccountApplicationInformationData, options?: AccountApplicationInformationQuery): import('@tanstack/react-query').UseQueryResult<AccountApplicationInformationResponse, Error>;
