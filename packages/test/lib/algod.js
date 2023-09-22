import * as algod from "@algofam/use-algorand-queries/algod";

/**
 * Create a Dictionary of Arguments
 *
 * @param {string} address
 * @param {number} appId
 * @param {string} assetId
 * @param {string} txnId
 * @param {number} round
 * @param {AlgorandQueryOptions} options
 */
const getArguments = (address, appId, assetId, txnId, round, options) => ({
    "accountApplicationInformation": [address, appId, options],
    "accountAssetInformation": [address, assetId, options],
    "accountInformation": [address, {exclude: "all"}, options],
    "block": [round, options],
    "genesis": [options],
    // "getApplicationBoxByName": [appId, new Uint8Array(1), options], // Requires created box
    "getApplicationBoxes": [appId, options],
    "getApplicationByID": [appId, options],
    "getAssetByID": [assetId, options],
    "getBlockHash": [round, options],
    // "getBlockOffsetTimestamp": [options], // Only in dev mode
    // "getLedgerStateDelta": [lastRound, options], // Requires current round
    // "getLedgerStateDeltaForTransactionGroup": [txnId, options], // TODO: Debug
    // "getSyncRound": [options], // Must have EnableFollowMode: true on algod
    // "getTransactionGroupLedgerStateDeltasForRound": [BigInt(32_000_000), options], // TODO: debug
    "getTransactionParams": [options],
    // "getTransactionProof": [32_000_000,  txnId, options], // Requires txn in the last 1000 blocks
    "healthCheck": [options],
    "pendingTransactionByAddress": [address, options],
    // "pendingTransactionInformation": [txnId, options],
    "pendingTransactionsInformation": [options],
    // "ready": [options], // Does not seem to work
    "status": [options],
    "statusAfterBlock": [round, options],
    "supply": [options],
    "versionsCheck": [options]
})

export function createAlgodOptions(address, appId, assetId, txnId, round, options) {
    algod.getClient(options)
    const ARGUMENTS = getArguments(address, appId, assetId, txnId, round, options);
    return Object.keys(ARGUMENTS)
        .reduce((prev, curr) => {
            // Call the method with the arguments
            prev[curr] = algod[curr].apply(null, ARGUMENTS[curr])
            return prev;
        }, {})
}
