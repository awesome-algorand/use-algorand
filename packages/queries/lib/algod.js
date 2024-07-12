/**
 * Algodv2 Queries
 */


// TODO: Convince algosdk to migrate to ESM
import algosdk from "algosdk";
import {applyQuery} from "./common.js";

/**
 * Algorand Client
 *
 * @type {algosdk.Algodv2 | undefined}
 * @private
 */
let client;
/**
 * Get the Algorand Client
 *
 * Uses singleton pattern to return the Algorand Client. Can be overridden by either passing in a client in the options.
 *
 * @param {ClientOptions} [options] Client Options
 * @returns {algosdk.Algodv2}
 */
export function getClient(options){
    const hasOptions = typeof options !== 'undefined'
    // TODO: handle options.server, options.port, options.token changing
    // Allow passing in a client for the first time in any options
    if(
        hasOptions &&
        typeof client === 'undefined' &&
        typeof options.client !== client &&
        options.client instanceof algosdk.Algodv2
    ){
        client = options.client
    }

    // Check for client in global
    if(typeof client === 'undefined'){
        client = new algosdk.Algodv2(
            options?.token || '',
            options?.server || "",
            options?.port
        )
    }

    return client
}
/**
 * Get Account Application Information Query Options
 *
 * @param {string} address The address of the account to look up.
 * @param {number} index The application ID to look up.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountApplicationInformation
 */
export function accountApplicationInformation(address, index, options){
    return {
        queryKey: ['accountApplicationInformation', address, index],
        queryFn: () => getClient(options).accountApplicationInformation(address, index).do(),
        ...options
    }
}
/**
 * Get Account Asset Information Query Options
 *
 * @param {string} address The address of the account to look up.
 * @param {number} index The asset ID to look up.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountAssetInformation
 */
export function accountAssetInformation(address, index, options){
    return {
        queryKey: ['accountAssetInformation', address, index],
        queryFn: () => getClient(options).accountAssetInformation(address, index).do(),
        ...options
    }
}
/**
 * Get Account Information Query Options
 *
 * @param {string} address The address of the account to look up.
 * @param {{exclude?: string}} [query] Query parameters
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountInformation
 */
export function accountInformation(address, query, options){
    const jsonRequest = getClient(options).accountInformation(address)
    return {
        queryKey: ['accountInformation', address],
        queryFn: () => applyQuery(jsonRequest, query).do(),
        ...options
    }
}
/**
 * Get Block Query Options
 *
 * @param {number} round The round number of the block to get.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#block
 */
export function block(round, options){
    return {
        queryKey: ['block', round],
        queryFn: () => getClient(options).block(round).do(),
        staleTime: Infinity,
        cachetime: Infinity,
        ...options
    }
}
/**
 * Get Genesis Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#genesis
 */
export function genesis(options){
    return {
        queryKey: ['genesis'],
        queryFn: () => getClient(options).genesis().do(),
        staleTime: Infinity,
        ...options
    }
}
/**
 * Get Application Box By Name Query Options
 *
 * @param {number} index The application ID to look up.
 * @param {Uint8Array} name The name of the application box to look up.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationBoxByName
 */
export function getApplicationBoxByName(index, name, options){
    return {
        queryKey: ['getApplicationBoxByName', index, name],
        queryFn: () => getClient(options).getApplicationBoxByName(index, name).do(),
        ...options
    }
}
/**
 * Get Application Boxes Query Options
 *
 * @param {number} index The application ID to look up.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationBoxes
 */
export function getApplicationBoxes(index, options){
    // TODO: .max()
    return {
        queryKey: ['getApplicationBoxes', index],
        queryFn: () => getClient(options).getApplicationBoxes(index).do(),
        ...options
    }
}
/**
 * Get Application By ID Query Options
 *
 * @param index The application ID to look up.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationByID
 */
export function getApplicationByID(index, options){
    return {
        queryKey: ['getApplicationByID', index],
        queryFn: () => getClient(options).getApplicationByID(index).do(),
        ...options
    }
}
/**
 * Get Asset By ID Query Options
 *
 * @param {number} index The asset ID to look up.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getAssetByID
 */
export function getAssetByID(index, options){
    return {
        queryKey: ['getAssetByID', index],
        queryFn: () => getClient(options).getAssetByID(index).do(),
        ...options
    }
}
/**
 * Get Block Hash Query Options
 *
 * @param {number} round The round number of the block to get.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getBlockHash
 */
export function getBlockHash(round, options){
    return {
        queryKey: ['getBlockHash', round],
        queryFn: () => getClient(options).getBlockHash(round).do(),
        staleTime: Infinity,
        ...options
    }
}
/**
 * Get Block Offset Timestamp Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getBlockOffsetTimestamp
 */
export function getBlockOffsetTimestamp(options){
    return {
        queryKey: ['getBlockOffsetTimestamp'],
        queryFn: () => getClient(options).getBlockOffsetTimestamp().do(),
        ...options
    }
}
/**
 * Get Ledger State Delta Query Options
 *
 * @param {bigint} round The round number to be searched for
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getLedgerStateDelta
 */
export function getLedgerStateDelta(round, options){
    console.log(round)
    return {
        queryKey: ['getLedgerStateDelta', Number(round)],
        queryFn: () => getClient(options).getLedgerStateDelta(round).do(),
        ...options
    }
}
/**
 * Get Ledger State Delta For Transaction Group Query Options
 *
 * @param {string} id txn ID or group ID to be searched for
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getLedgerStateDeltaForTransactionGroup
 */
export function getLedgerStateDeltaForTransactionGroup(id, options){
    return {
        queryKey: ['getLedgerStateDeltaForTransactionGroup', id],
        queryFn: () => getClient(options).getLedgerStateDeltaForTransactionGroup(id).do(),
        ...options
    }
}
/**
 * Get Sync Round Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getSyncRound
 */
export function getSyncRound(options){
    return {
        queryKey: ['getSyncRound'],
        queryFn: () => getClient(options).getSyncRound().do(),
        ...options
    }
}
/**
 * Get Transaction Group Ledger State Deltas For Round Query Options
 *
 * @param {bigint} round the round number to be searched for
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionGroupLedgerStateDeltasForRound
 */
export function getTransactionGroupLedgerStateDeltasForRound(round, options){
    return {
        queryKey: ['getTransactionGroupLedgerStateDeltasForRound', Number(round)],
        queryFn: () => getClient(options).getTransactionGroupLedgerStateDeltasForRound(Number(round)).do(),
        ...options
    }
}
/**
 * Get Transaction Params Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionParams
 */
export function getTransactionParams(options){
    return {
        queryKey: ['getTransactionParams'],
        queryFn: () => getClient(options).getTransactionParams().do(),
        ...options
    }
}
/**
 * Get Transaction Proof Query Options
 *
 * @param {number} round The round in which the transaction appears.
 * @param {string} id The transaction ID for which to generate a proof.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionProof
 */
export function getTransactionProof(round, id, options){
    return {
        queryKey: ['getTransactionProof', round, id],
        queryFn: () => getClient(options).getTransactionProof(round, id).do(),
        staleTime: Infinity,
        ...options
    }
}
/**
 * Get Health Check Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#healthCheck
 */
export function healthCheck(options){
    return {
        queryKey: ['healthCheck'],
        queryFn: () => getClient(options).healthCheck().do(),
        ...options
    }
}
/**
 * Get Pending Transactions By Address Query Options
 *
 * @param {string} address The address of the sender.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionByAddress
 */
export function pendingTransactionByAddress(address, options){
    //TODO: Max params
    return {
        queryKey: ['pendingTransactionByAddress', address],
        queryFn: () => getClient(options).pendingTransactionByAddress(address).do(),
        ...options
    }
}
/**
 * Get Pending Transaction Information Query Options
 *
 * @param {string} id The TxID string of the pending transaction to look up.
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionInformation
 */
export function pendingTransactionInformation(id, options){
    return {
        queryKey: ['pendingTransactionInformation', id],
        queryFn: () => getClient(options).pendingTransactionInformation(id).do(),
        ...options
    }
}
/**
 * Get Pending Transactions Information Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionsInformation
 */
export function pendingTransactionsInformation(options){
    return {
        queryKey: ['pendingTransactionsInformation'],
        queryFn: () => getClient(options).pendingTransactionsInformation().do(),
        ...options
    }
}
/**
 * Get Ready Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#ready
 */
export function ready(options){
    return {
        queryKey: ['ready'],
        queryFn: () => getClient(options).ready().do(),
        ...options
    }
}
/**
 * Get Status Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#status
 */
export function status(options){
    return {
        queryKey: ['status'],
        queryFn: () => getClient(options).status().do(),
        ...options
    }
}
/**
 * Get Status After Block Query Options
 *
 * @param {number} round
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#statusAfterBlock
 */
export function statusAfterBlock(round, options){
    return {
        queryKey: ['statusAfterBlock', round],
        queryFn: () => getClient(options).statusAfterBlock(round).do(),
        ...options
    }
}
/**
 * Get Supply Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#supply
 */
export function supply(options){
    return {
        queryKey: ['supply'],
        queryFn: () => getClient(options).supply().do(),
        ...options
    }
}
/**
 * Get Versions Check Query Options
 *
 * @param {AlgodQueryOptions} [options] QueryOption overrides
 * @return {AlgodQueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#versionsCheck
 */
export function versionsCheck(options){
    return {
        queryKey: ['versionsCheck'],
        queryFn: () => getClient(options).versionsCheck().do(),
        ...options
    }
}


/**
 * @typedef {import('./common').AlgorandQueryOptions} AlgodQueryOptions
 * @typedef {import('./common').ClientOptions} ClientOptions
 */
