import type {QueryOptions} from "@tanstack/query-core";
import type {Indexer} from 'algosdk'
import {applyQuery} from "./common";


/**
 * Lookup Account App LocalStates
 *
 * Returns application local state about the given account.
 *
 * @param {Indexer} client The Indexer client to use
 * @param {string} address The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAppLocalStates
 */
export function lookupAccountAppLocalStates(
    client: Indexer,
    address: string,
    options?: QueryOptions): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountAppLocalStates', address],
        queryFn: () => client.lookupAccountAppLocalStates(address).do(),
        ...options
    }
}

/**
 * Lookup Account Assets
 *
 * @param {Indexer} client The Indexer client to use
 * @param {string} address The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAssets
 */
export function lookupAccountAssets(
    client: Indexer,
    address: string,
    options?: QueryOptions): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountAssets', address],
        queryFn: () => client.lookupAccountAssets(address).do(),
        ...options
    }
}

/**
 * Lookup Account By ID
 *
 * @param {Indexer} client The Indexer client to use
 * @param {string} address The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountByID
 */
export function lookupAccountByID(
    client: Indexer,
    address: string,
    options?: QueryOptions,
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountByID', address],
        queryFn: () => client.lookupAccountByID(address).do(),
        ...options
    }
}

/**
 * Lookup Account Created Apps
 *
 * @param {Indexer} client The Indexer client to use
 * @param {string} address The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedApplications
 */
export function lookupAccountCreatedApplications(
    client: Indexer,
    address: string,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountCreatedApplications', address],
        queryFn: () => client.lookupAccountCreatedApplications(address).do(),
        ...options
    }
}

/**
 * Lookup Account Created Assets
 *
 * @param {Indexer} client The Indexer client to use
 * @param {string} address The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedAssets
 */
export function lookupAccountCreatedAssets(
    client: Indexer,
    address: string,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountCreatedAssets', address],
        queryFn: () => client.lookupAccountCreatedAssets(address).do(),
        ...options
    }
}

/**
 * Lookup Account Transactions
 *
 * @param {Indexer} client The Indexer client to use
 * @param {string} address The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountTransactions
 */
export function lookupAccountTransactions(
    client: Indexer,
    address: string,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAccountTransactions', address],
        queryFn: () => client.lookupAccountTransactions(address).do(),
        ...options
    }
}

/**
 * Lookup Application Box By ID and Name
 *
 * @param {Indexer} client The Indexer client to use
 * @param {number} index The ID of the application with boxes.
 * @param {Uint8Array} name The name of the box
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationBoxByIDandName
 */
export function lookupApplicationBoxByIDandName(
    client: Indexer,
    index: number,
    name: Uint8Array,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupApplicationBoxByIDandName', index, name],
        queryFn: () => client.lookupApplicationBoxByIDandName(index, name).do(),
        ...options
    }
}

/**
 * Lookup Application Logs
 *
 * @param {Indexer} client The Indexer client to use
 * @param {number} index The ID of the application which generated the logs.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationLogs
 */
export function lookupApplicationLogs(
    client: Indexer,
    index: number,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupApplicationLogs', index],
        queryFn: () => client.lookupApplicationLogs(index).do(),
        ...options
    }
}

/**
 *
 * @param {Indexer} client The Indexer client to use
 * @param {number} index The ID of the application to look up.
 * @param {{includeAll: boolean}} [query]
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
 */
export function lookupApplications(
    client: Indexer,
    index: number,
    query: { includeAll: boolean },
    options?: QueryOptions
): QueryOptions {
    const jsonRequest = client.lookupApplications(index)
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupApplications', index, query],
        queryFn: () => applyQuery<typeof jsonRequest>(jsonRequest, query).do(),
        ...options
    }
}

/**
 *
 * @param {Indexer} client The Indexer client to use
 * @param {number} index The asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
 */
export function lookupAssetBalances(
    client: Indexer,
    index: number,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAssetBalances', index],
        queryFn: () => client.lookupAssetBalances(index).do(),
        ...options
    }
}

export function lookupAssetByID(
    client: Indexer,
    index: number,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAssetByID', index],
        queryFn: () => client.lookupAssetByID(index).do(),
        ...options
    }
}

export function lookupAssetTransactions(
    client: Indexer,
    index: number,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupAssetTransactions', index],
        queryFn: () => client.lookupAssetTransactions(index).do(),
        ...options
    }
}

export function lookupBlock(
    client: Indexer,
    round: number,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupBlock', round],
        queryFn: () => client.lookupBlock(round).do(),
        ...options
    }
}

export function lookupTransactionByID(
    client: Indexer,
    txId: string,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'lookupTransactionByID', txId],
        queryFn: () => client.lookupTransactionByID(txId).do(),
        ...options
    }
}

export function makeHealthCheck(
    client: Indexer,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'makeHealthCheck'],
        queryFn: () => client.makeHealthCheck().do(),
        ...options
    }
}

export function searchAccounts(
    client: Indexer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query: any,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchAccounts', query],
        queryFn: () => applyQuery(client.searchAccounts(), query).do(),
        ...options
    }
}

export function searchForApplicationBoxes(
    client: Indexer,
    index: number,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query: any,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForApplicationBoxes', index, query],
        queryFn: () => applyQuery(client.searchForApplicationBoxes(index), query).do(),
        ...options
    }
}

export function searchForApplications(
    client: Indexer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query: any,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForApplications', query],
        queryFn: () => applyQuery(client.searchForApplications(), query).do(),
        ...options
    }
}

export function searchForAssets(
    client: Indexer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query: any,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForAssets', query],
        queryFn: () => applyQuery(client.searchForAssets(), query).do(),
        ...options
    }
}

export function searchForTransactions(
    client: Indexer,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    query: any,
    options?: QueryOptions
): QueryOptions {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'searchForTransactions', query],
        queryFn: () => applyQuery(client.searchForTransactions(), query).do(),
        ...options
    }
}
