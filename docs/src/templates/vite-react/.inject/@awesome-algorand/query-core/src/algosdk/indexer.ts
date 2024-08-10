import type {QueryOptions} from "@tanstack/query-core";
import type {Indexer} from 'algosdk'
import {applyQuery} from "./common";
import type {
    LookupAccountAppLocalStatesData,
    LookupAccountAssetsData,
    LookupAccountByIdData,
    LookupAccountCreatedApplicationsData,
    LookupAccountCreatedAssetsData,
    LookupAccountTransactionsData,
    LookupApplicationBoxByIdAndNameData,
    LookupApplicationByIdData,
    LookupApplicationLogsByIdData,
    LookupAssetBalancesData,
    LookupAssetByIdData,
    LookupAssetTransactionsData,
    LookupBlockData,
    LookupTransactionData,
    SearchForAccountsData,
    SearchForApplicationBoxesData,
    SearchForApplicationsData, SearchForAssetsData, SearchForTransactionsData
} from "@awesome-algorand/indexer-fetch";


/**
 * Lookup Account App LocalStates
 *
 * Returns application local state about the given account.
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupAccountAppLocalStatesData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAppLocalStates
 */
export function lookupAccountAppLocalStates(
    client: Indexer,
    data: LookupAccountAppLocalStatesData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountAppLocalStates', data],
        queryFn: () => client.lookupAccountAppLocalStates(data.accountId).do(),
        ...options as object,
    }
}

/**
 * Lookup Account Assets
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupAccountAssetsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAssets
 */
export function lookupAccountAssets(
    client: Indexer,
    data: LookupAccountAssetsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountAssets', data],
        queryFn: () => client.lookupAccountAssets(data.accountId).do(),
        ...options as object,
    }
}

/**
 * Lookup Account By ID
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupAccountByIdData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountByID
 */
export function lookupAccountById(
    client: Indexer,
    data: LookupAccountByIdData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountById', data],
        queryFn: () => client.lookupAccountByID(data.accountId).do(),
        ...options as object,
    }
}

/**
 * Lookup Account Created Apps
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupAccountCreatedApplicationsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedApplications
 */
export function lookupAccountCreatedApplications(
    client: Indexer,
    data: LookupAccountCreatedApplicationsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountCreatedApplications', data],
        queryFn: () => client.lookupAccountCreatedApplications(data.accountId).do(),
        ...options as object,
    }
}

/**
 * Lookup Account Created Assets
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupAccountCreatedAssetsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedAssets
 */
export function lookupAccountCreatedAssets(
    client: Indexer,
    data: LookupAccountCreatedAssetsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountCreatedAssets', data],
        queryFn: () => client.lookupAccountCreatedAssets(data.accountId).do(),
        ...options as object,
    }
}

/**
 * Lookup Account Transactions
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupAccountTransactionsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountTransactions
 */
export function lookupAccountTransactions(
    client: Indexer,
    data: LookupAccountTransactionsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountTransactions', data],
        queryFn: () => client.lookupAccountTransactions(data.accountId).do(),
        ...options as object,
    }
}

/**
 * Lookup Application Box By ID and Name
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupApplicationBoxByIdAndNameData} data Box name and application id.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationBoxByIDandName
 */
export function lookupApplicationBoxByIdAndName(
    client: Indexer,
    data: LookupApplicationBoxByIdAndNameData,
    options: QueryOptions = {},
) {
    const encoder = new TextEncoder()
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupApplicationBoxByIdAndName', data],
        queryFn: () => client.lookupApplicationBoxByIDandName(data.applicationId, encoder.encode(data.name)).do(),
        ...options as object,
    }
}

/**
 * Lookup Application Logs
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupApplicationLogsByIdData} data The ID of the application which generated the logs.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationLogs
 */
export function lookupApplicationLogsById(
    client: Indexer,
    data: LookupApplicationLogsByIdData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupApplicationLogsById', data],
        queryFn: () => client.lookupApplicationLogs(data.applicationId).do(),
        ...options as object,
    }
}

/**
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupApplicationByIdData} data The ID of the application to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
 */
export function lookupApplicationById(
    client: Indexer,
    data: LookupApplicationByIdData,
    options: QueryOptions = {},
) {
    const {applicationId, ...query} = data;
    const jsonRequest = client.lookupApplications(applicationId)
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupApplicationById', data],
        queryFn: () => applyQuery<typeof jsonRequest>(jsonRequest, query).do(),
        ...options as object,
    }
}

/**
 *
 * @param {Indexer} client The Indexer client to use
 * @param {LookupAssetBalancesData} data The asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
 */
export function lookupAssetBalances(
    client: Indexer,
    data: LookupAssetBalancesData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAssetBalances', data],
        queryFn: () => client.lookupAssetBalances(data.assetId).do(),
        ...options as object,
    }
}

export function lookupAssetById(
    client: Indexer,
    data: LookupAssetByIdData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAssetById', data],
        queryFn: () => client.lookupAssetByID(data.assetId).do(),
        ...options as object,
    }
}

export function lookupAssetTransactions(
    client: Indexer,
    data: LookupAssetTransactionsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAssetTransactions', data],
        queryFn: () => client.lookupAssetTransactions(data.assetId).do(),
        ...options as object,
    }
}

export function lookupBlock(
    client: Indexer,
    data: LookupBlockData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupBlock', data],
        queryFn: () => client.lookupBlock(data.roundNumber).do(),
        ...options as object,
    }
}

export function lookupTransaction(
    client: Indexer,
    data: LookupTransactionData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupTransaction', data],
        queryFn: () => client.lookupTransactionByID(data.txid).do(),
        ...options as object,
    }
}

export function makeHealthCheck(
    client: Indexer,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'makeHealthCheck'],
        queryFn: () => client.makeHealthCheck().do(),
        ...options as object,
    }
}

export function searchForAccounts(
    client: Indexer,
    data: SearchForAccountsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForAccounts', data],
        queryFn: () => applyQuery(client.searchAccounts(), data).do(),
        ...options as object,
    }
}

export function searchForApplicationBoxes(
    client: Indexer,
    data: SearchForApplicationBoxesData,
    options: QueryOptions = {},
) {
    const {applicationId, ...query} = data;
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForApplicationBoxes', data],
        queryFn: () => applyQuery(client.searchForApplicationBoxes(applicationId), query).do(),
        ...options as object,
    }
}

export function searchForApplications(
    client: Indexer,
    data: SearchForApplicationsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForApplications', data],
        queryFn: () => applyQuery(client.searchForApplications(), data).do(),
        ...options as object,
    }
}

export function searchForAssets(
    client: Indexer,
    data: SearchForAssetsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForAssets', data],
        queryFn: () => applyQuery(client.searchForAssets(), data).do(),
        ...options as object,
    }
}

export function searchForTransactions(
    client: Indexer,
    data: SearchForTransactionsData,
    options: QueryOptions = {},
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForTransactions', data],
        queryFn: () => applyQuery(client.searchForTransactions(), data).do(),
        ...options as object,
    }
}
