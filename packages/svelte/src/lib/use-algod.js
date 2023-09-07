import {createQuery} from "@tanstack/svelte-query";
import {
    getAccountApplicationInformationQueryOptions,
    getBlockQueryOptions
} from "@algofam/use-algorand-queries";

/**
 * @typedef {import('@tanstack/svelte-query').CreateQueryResult} CreateQueryResult
 */

/**
 * Use Account Application Information
 *
 * @param {string} address The address of the account to look up.
 * @param {number} index The application ID to look up.
 * @param {AlgorandQueryOptions} [options] QueryOption overrides
 * @return {CreateQueryResult<unknown, unknown>}
 */
export function useAccountApplicationInformation(address, index, options){
    return createQuery(getAccountApplicationInformationQueryOptions(address, index, options))
}
// accountAssetInformation
// accountInformation
/**
 * Use Block
 *
 * @param {number} round
 * @param {import('@algofam/use-algorand-queries').AlgorandQueryOptions} [options]
 * @return {CreateQueryResult<unknown, unknown>}
 */
export function useBlock(round, options){
    return createQuery(getBlockQueryOptions(round, options))
}
// genesis
// getApplicationBoxByName
// getApplicationBoxes
// getApplicationByID
// getAssetByID
// getBlockHash
// getBlockOffsetTimestamp
// getLedgerStateDelta
// getLedgerStateDeltaForTransactionGroup
// getSyncRound
// getTransactionGroupLedgerStateDeltasForRound
// getTransactionParams
// getTransactionProof
// healthCheck
// pendingTransactionByAddress
// pendingTransactionInformation
// pendingTransactionsInformation
// ready
// status
// statusAfterBlock
// supply
// versionsCheck
