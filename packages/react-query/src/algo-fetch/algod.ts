import {
    useQuery,
    type UseQueryOptions
} from "@tanstack/react-query";
import {accountInformation, getBlock, accountApplicationInformation} from "@awesome-algorand/query-core/algo-fetch/algod";
import {
    GetBlockData,
    AccountInformationData,
    AlgodClient,
    Account,
    AccountApplicationInformationData, AccountApplicationInformationResponse, GetBlockResponse
} from "@awesome-algorand/algod-fetch";


const client = new AlgodClient({
    BASE: "https://testnet-api.algonode.cloud",
})

export type BlockQuery = UseQueryOptions<
    GetBlockResponse,
    Error,
    GetBlockResponse,
    (string | GetBlockData)[]
    >
export function useBlock(data: GetBlockData, options: BlockQuery = {} as BlockQuery) {
    return useQuery(getBlock(client, data, options))
}

export type AccountInformationQuery = UseQueryOptions<
    Account,
    Error,
    Account,
    (string | AccountInformationData)[]
>
export function useAccountInformation(data: AccountInformationData, options: AccountInformationQuery = {} as AccountInformationQuery) {
    return useQuery(accountInformation(client, data, options))
}

export type AccountApplicationInformationQuery = UseQueryOptions<
    AccountApplicationInformationResponse,
    Error,
    AccountApplicationInformationResponse,
    (string | AccountApplicationInformationData)[]
>
export function useAccountApplicationInformation(
    data: AccountApplicationInformationData,
    options: AccountApplicationInformationQuery = {} as AccountApplicationInformationQuery
) {
    return useQuery(accountApplicationInformation(client, data, options))
}
