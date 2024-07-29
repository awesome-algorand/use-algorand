/**
 * Create a Dictionary of Arguments
 *
 * @param client
 * @param {string} address
 * @param {number} applicationId
 * @param {string} assetId
 * @param {string} txnid
 * @param {number} round
 * @param {QueryOptions} options
 */
const getArguments = (client, address, applicationId, assetId, txnid, round, options) => ({
    "accountApplicationInformation": [client, {address,  applicationId}, options],
    "accountAssetInformation": [client, {address, assetId}, options],
    "accountInformation": [client, {address, exclude: "all"}, options],
    "getBlock": [client, {round}, options],
    "getGenesis": [client, options],
    // "getApplicationBoxByName": [client, appId, new Uint8Array(1), options], // Requires created box
    "getApplicationBoxes": [client, {applicationId}, options],
    "getApplicationById": [client, {applicationId}, options],
    "getAssetById": [client, {assetId}, options],
    "getBlockHash": [client, {round}, options],
    // // "getBlockOffsetTimestamp": [client, options], // Only in dev mode
    // // "getLedgerStateDelta": [client, lastRound, options], // Requires current round
    // // "getLedgerStateDeltaForTransactionGroup": [client, txnId, options], // TODO: Debug
    // // "getSyncRound": [client, options], // Must have EnableFollowMode: true on algod
    // // "getTransactionGroupLedgerStateDeltasForRound": [client, BigInt(32_000_000), options], // TODO: debug
    "transactionParams": [client, options],
    // // "getTransactionProof": [client, 32_000_000,  txnId, options], // Requires txn in the last 1000 blocks
    "healthCheck": [client, options],
    "getPendingTransactionsByAddress": [client, {address}, options],
    // // "pendingTransactionInformation": [client, {txnid}, options],
    "getPendingTransactions": [client, options],
    // // "getReady": [options], // Does not seem to work
    "getStatus": [client, options],
    "waitForBlock": [client, {round}, options],
    "getSupply": [client, options],
    "getVersion": [client, options]
})

export function createAlgodOptions(algod, client, address, appId, assetId, txnId, round, options) {
    const ARGUMENTS = getArguments(client, address, appId, assetId, txnId, round, options);
    return Object.keys(ARGUMENTS)
        .reduce((prev, curr) => {
            // Call the method with the arguments
            prev[curr] = algod[curr].apply(null, ARGUMENTS[curr])
            return prev;
        }, {})
}
