import {createQuery} from "@tanstack/svelte-query";
import {
    accountApplicationInformation,
    accountAssetInformation,
    accountInformation, genesis, block,
    getApplicationBoxes,
    getApplicationByID,
    getAssetByID, getBlockHash,
    getClient, getTransactionParams, healthCheck, pendingTransactionByAddress, pendingTransactionsInformation,
    status,
    statusAfterBlock, supply, versionsCheck
} from "@algofam/use-algorand-queries/algosdk/algod";

/**
 * Use Account Application Information
 *
 * @param {string} address The address of the account to look up.
 * @param {number} index The application ID to look up.
 * @param {AlgorandQueryOptions} [options] QueryOption overrides}
 */
export function useAccountApplicationInformation(address, index, options){
    return createQuery(accountApplicationInformation(address, index, options))
}

/**
 *
 * @param address
 * @param index
 * @param options
 */
export function useAccountAssetInformation(address, index, options){
    return createQuery(accountAssetInformation(address, index, options))
}
// accountInformation
/**
 * Use Block
 *
 * @param {number} round
 * @param {import('@algofam/use-algorand-queries').AlgorandQueryOptions} [options]
 * @return {CreateQueryResult<unknown, unknown>}
 */
export function useBlock(round, options){
    return createQuery(block(round, options))
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

