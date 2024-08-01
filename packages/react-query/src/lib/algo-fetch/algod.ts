import {
    QueryOptions,
    useQuery,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    UseQueryResult
} from "@tanstack/react-query";
import {accountInformation, getBlock} from "@awesome-algorand/query-core/algo-fetch/algod";
import {GetBlockData, AccountInformationData, AlgodClient} from "@awesome-algorand/algod-fetch";

const client = new AlgodClient({
    BASE: import.meta.env.VITE_ALGOD_SERVER,
})

export function useBlock(data: GetBlockData) {
    return useQuery(getBlock(client, data, {}))
}

export function useAccountInformation(data: AccountInformationData, options: QueryOptions = {}) {
    return useQuery(accountInformation(client, data, options))
}
