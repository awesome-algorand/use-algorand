// TODO: Convince algosdk to migrate to ESM
import algosdk from "algosdk";
import {applyQuery} from "./common.js";

/**
 *@type {algosdk.Indexer | undefined}
 *@private
 */
let indexer
/**
 * Get Indexer Client Singleton
 *
 * @param {IndexerOptions} [options]
 * @return {algosdk.Indexer} Indexer Client
 */
export function getIndexer(options){
    const hasOptions = typeof options !== 'undefined'
    // TODO: handle options.server, options.port, options.token changing
    // Allow passing in a client for the first time in any options
    if(
        hasOptions &&
        typeof indexer === 'undefined' &&
        typeof options.client !== indexer &&
        options.client instanceof algosdk.Indexer
    ){
        indexer = options.client
    }

    // Check for client in global
    if(typeof indexer === 'undefined'){
        indexer = new algosdk.Indexer(
            options?.token || '',
            options?.server || "",
            options?.port
        )
    }

    return indexer
}
/**
 * Lookup Account App LocalStates
 *
 * Returns application local state about the given account.
 *
 * @param {string} address The address of the account to look up.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAppLocalStates
 */
export function lookupAccountAppLocalStates(address, options){
    return {
        queryKey: ['lookupAccountAppLocalStates', address],
        queryFn: () => getIndexer(options).lookupAccountAppLocalStates(address).do(),
        ...options
    }
}

/**
 * Lookup Account Assets
 *
 * @param {string} address The address of the account to look up.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAssets
 */
export function lookupAccountAssets(address, options){
    return {
        queryKey: ['lookupAccountAssets', address],
        queryFn: () => getIndexer(options).lookupAccountAssets(address).do(),
        ...options
    }
}
/**
 * Lookup Account By ID
 *
 * @param {string} address The address of the account to look up.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountByID
 */
export function lookupAccountByID(address, options){
 return {
    queryKey: ['lookupAccountByID', address],
    queryFn: () => getIndexer(options).lookupAccountByID(address).do(),
    ...options
 }
}
/**
 * Lookup Account Created Apps
 *
 * @param {string} address The address of the account to look up.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedApplications
 */
export function lookupAccountCreatedApplications(address, options){
    return {
        queryKey: ['lookupAccountCreatedApplications', address],
        queryFn: () => getIndexer(options).lookupAccountCreatedApplications(address).do(),
        ...options
    }
}
/**
 * Lookup Account Created Assets
 *
 * @param {string} address The address of the account to look up.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedAssets
 */
export function lookupAccountCreatedAssets(address, options){
    return {
        queryKey: ['lookupAccountCreatedAssets', address],
        queryFn: () => getIndexer(options).lookupAccountCreatedAssets(address).do(),
        ...options
    }
}

/**
 * Lookup Account Transactions
 *
 * @param {string} address The address of the account to look up.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountTransactions
 */
export function lookupAccountTransactions(address, options){
    return {
        queryKey: ['lookupAccountTransactions', address],
        queryFn: () => getIndexer(options).lookupAccountTransactions(address).do(),
        ...options
    }
}
/**
 * Lookup Application Box By ID and Name
 *
 * @param {number} index The ID of the application with boxes.
 * @param {Uint8Array} name The name of the box
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationBoxByIDandName
 */
export function lookupApplicationBoxByIDandName(index, name, options){
    return {
        queryKey: ['lookupApplicationBoxByIDandName', index, name],
        queryFn: () => getIndexer(options).lookupApplicationBoxByIDandName(index, name).do(),
        ...options
    }
}

/**
 * Lookup Application Logs
 *
 * @param {number} index The ID of the application which generated the logs.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationLogs
 */
export function lookupApplicationLogs(index, options){
    return {
        queryKey: ['lookupApplicationLogs', index],
        queryFn: () => getIndexer(options).lookupApplicationLogs(index).do(),
        ...options
    }
}
/**
 *
 * @param {number} index The ID of the application to look up.
 * @param {{includeAll: boolean}} [query]
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
 */
export function lookupApplications(index, query, options){
    const jsonRequest = getIndexer(options).lookupApplications(index)
    return {
        queryKey: ['lookupApplications', index, query],
        queryFn: () => applyQuery(jsonRequest, query).do(),
        ...options
    }
}
/**
 *
 * @param {number} index The asset ID to look up.
 * @param {IndexerQueryOptions} [options] QueryOption overrides
 * @return {IndexerQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
 */
export function lookupAssetBalances(index, options){
    return {
        queryKey: ['lookupAssetBalances', index],
        queryFn: () => getIndexer(options).lookupAssetBalances(index).do(),
        ...options
    }
}
export function lookupAssetByID(index, options){
    return {
        queryKey: ['lookupAssetByID', index],
        queryFn: () => getIndexer(options).lookupAssetByID(index).do(),
        ...options
    }
}
export function lookupAssetTransactions(index, options){
    return {
        queryKey: ['lookupAssetTransactions', index],
        queryFn: () => getIndexer(options).lookupAssetTransactions(index).do(),
        ...options
    }
}

export function lookupBlock(round, options){
    return {
        queryKey: ['lookupBlock', round],
        queryFn: () => getIndexer(options).lookupBlock(round).do(),
        ...options
    }
}
export function lookupTransactionByID(index, options){
    return {
        queryKey: ['lookupTransactionByID', index],
        queryFn: () => getIndexer(options).lookupTransactionByID(index).do(),
        ...options
    }
}
export function makeHealthCheck(options){
    return {
        queryKey: ['makeHealthCheck'],
        queryFn: () => getIndexer(options).makeHealthCheck().do(),
        ...options
    }
}
export function searchAccounts(query, options){
    return {
        queryKey: ['searchAccounts', query],
        queryFn: () => applyQuery(getIndexer(options).searchAccounts(), query).do(),
        ...options
    }
}
export function searchForApplicationBoxes(index, query, options){
    return {
        queryKey: ['searchForApplicationBoxes', index, query],
        queryFn: () => applyQuery(getIndexer(options).searchForApplicationBoxes(index), query).do(),
        ...options
    }
}
export function searchForApplications(query, options){
    return {
        queryKey: ['searchForApplications', query],
        queryFn: () => applyQuery(getIndexer(options).searchForApplications(), query).do(),
        ...options
    }
}

export function searchForAssets(query, options){
    return {
        queryKey: ['searchForAssets', query],
        queryFn: () => applyQuery(getIndexer(options).searchForAssets(), query).do(),
    }
}

export function searchForTransactions(query, options){
    return {
        queryKey: ['searchForTransactions', query],
        queryFn: () => applyQuery(getIndexer(options).searchForTransactions(), query).do(),
        ...options
    }
}

/**
 * @typedef {import('./common').AlgorandQueryOptions} IndexerQueryOptions
 * @typedef {import('./common').ClientOptions} IndexerOptions
 */
