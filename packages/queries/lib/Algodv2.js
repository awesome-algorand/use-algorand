// TODO: Convince algosdk to migrate to ESM
import algosdk from "algosdk";

/**
 * @typedef {import('./index').AlgorandQueryOptions} AlgorandQueryOptions
 */

/**
 * Algorand Client
 *
 * @type {algosdk.Algodv2 | undefined}
 * @private
 */
let client;


/**
 * Get Block Query Options
 *
 * Returns query options for a given block number
 *
 * @example
 * import {getBlockQueryOptions} from '@algofam/use-algorand-queries'
 *
 * const queryOpts = getBlockQueryOptions(1234)
 *
 * const result = createQuery(queryOpts)
 *
 * @param {number} round Round Number
 * @param {AlgorandQueryOptions} [options] Query Options
 * @return {AlgorandQueryOptions} Query Options
 * @see TODO: URL
 */
export function getBlockQueryOptions(round, options){
    console.log(options)
    const client = getClient(options);
    return {
        queryKey: ['block', round],
        queryFn: () => client.block(round).do(),
        staleTime: Infinity,
        ...options
    }
}

/**
 * Get the Algorand Client
 *
 * Uses singleton pattern to return the Algorand Client. Can be overridden by either passing in a client in the options.
 *
 *
 * @param {AlgorandQueryOptions} [options]
 * @private
 * @returns {algosdk.Algodv2}
 */
export function getClient(options){
    const hasOptions = typeof options !== 'undefined'

    // Allow passing in a client for the first time in any options
    if(
        hasOptions &&
        typeof client === 'undefined' &&
        typeof options.client !== client &&
        options.client instanceof algosdk.Algodv2
    ){
        client = options.client
    }

    console.log('algosdk')

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
