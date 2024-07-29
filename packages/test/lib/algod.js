import * as algod from "@awesome-algorand/use-algorand-queries/algosdk/algod";

/**
 * Create a Dictionary of Arguments
 *
 * @param {string} address
 * @param {number} appId
 * @param {string} assetId
 * @param {string} txnId
 * @param {number} round
 * @param {QueryOptions} options
 */
const getArguments = (client, address, appId, assetId, txnId, round, options) => ({
    "accountApplicationInformation": [client, address, appId, options],
    "accountAssetInformation": [client, address, assetId, options],
    "accountInformation": [client, address, {exclude: "all"}, options],
    "block": [client, round, options],
    "genesis": [client, options],
    // "getApplicationBoxByName": [client, appId, new Uint8Array(1), options], // Requires created box
    "getApplicationBoxes": [client, appId, options],
    "getApplicationByID": [client, appId, options],
    "getAssetByID": [client, assetId, options],
    "getBlockHash": [client, round, options],
    // "getBlockOffsetTimestamp": [client, options], // Only in dev mode
    // "getLedgerStateDelta": [client, lastRound, options], // Requires current round
    // "getLedgerStateDeltaForTransactionGroup": [client, txnId, options], // TODO: Debug
    // "getSyncRound": [client, options], // Must have EnableFollowMode: true on algod
    // "getTransactionGroupLedgerStateDeltasForRound": [client, BigInt(32_000_000), options], // TODO: debug
    "getTransactionParams": [client, options],
    // "getTransactionProof": [client, 32_000_000,  txnId, options], // Requires txn in the last 1000 blocks
    "healthCheck": [client, options],
    "pendingTransactionByAddress": [client, address, options],
    // "pendingTransactionInformation": [client, txnId, options],
    "pendingTransactionsInformation": [client, options],
    // "ready": [options], // Does not seem to work
    "status": [client, options],
    "statusAfterBlock": [client, round, options],
    "supply": [client, options],
    "versionsCheck": [client, options]
})

export function createAlgodOptions(client, address, appId, assetId, txnId, round, options) {
    const ARGUMENTS = getArguments(client, address, appId, assetId, txnId, round, options);
    return Object.keys(ARGUMENTS)
        .reduce((prev, curr) => {
            // Call the method with the arguments
            prev[curr] = algod[curr].apply(null, ARGUMENTS[curr])
            return prev;
        }, {})
}
