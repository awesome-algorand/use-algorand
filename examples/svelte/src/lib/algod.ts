import {createQuery} from "@tanstack/svelte-query";
import {
    getBlock
} from "@awesome-algorand/query-core/algosdk/algod";
import algosdk from "algosdk";
import type {GetBlockData} from "@awesome-algorand/algod-fetch";

// /**
//  * Use Account Application Information
//  *
//  * @param {string} address The address of the account to look up.
//  * @param {number} index The application ID to look up.
//  * @param {AlgorandQueryOptions} [options] QueryOption overrides}
//  */
// export function useAccountApplicationInformation(address, index, options){
//     return createQuery(accountApplicationInformation(address, index, options))
// }
//
// /**
//  *
//  * @param address
//  * @param index
//  * @param options
//  */
// export function useAccountAssetInformation(address, index, options){
//     return createQuery(accountAssetInformation(address, index, options))
// }
// accountInformation

/**
 * Use Block
 * @param data - The block number or hash to look up.
 * @param options - QueryOption overrides
 * @example
 * ```svelte
 * <script>
 *     import {useBlock} from "@awesome-algorand/svelte-query";
 *     const {data, error, status} = useBlock(12345)
 * </script>
 * ```
 */
export function useBlock(data: GetBlockData, options = {}){
    const algodClient = new algosdk.Algodv2(
        "",
        "",
        443
    )
    return createQuery(getBlock(algodClient, data, options))
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

