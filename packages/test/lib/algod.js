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
} from "@algofam/use-algorand-queries/algod";


export function createAlgodOptions(address, appId, assetId, txnId, round, options) {
    getClient(options)
    return {
        "accountApplicationInformation": accountApplicationInformation(address, appId, options),
        "accountAssetInformation": accountAssetInformation(address, assetId, options),
        "accountInformation": accountInformation(address, {exclude: "all"}, options),
        "block": block(round, options),
        "genesis": genesis(options),
        // "getApplicationBoxByName": getApplicationBoxByName(appId, new Uint8Array(1), options), // Requires created box
        "getApplicationBoxes": getApplicationBoxes(appId, options),
        "getApplicationByID": getApplicationByID(appId, options),
        "getAssetByID": getAssetByID(assetId, options),
        "getBlockHash": getBlockHash(round, options),
        // "getBlockOffsetTimestamp": getBlockOffsetTimestamp(options), // Only in dev mode
        // "getLedgerStateDelta": getLedgerStateDelta(lastRound, options), // Requires current round
        // "getLedgerStateDeltaForTransactionGroup": getLedgerStateDeltaForTransactionGroup(txnId, options), // TODO: Debug
        // "getSyncRound": getSyncRound(options), // Must have EnableFollowMode: true on algod
        // "getTransactionGroupLedgerStateDeltasForRound": getTransactionGroupLedgerStateDeltasForRound(BigInt(32_000_000), options), // TODO: debug
        "getTransactionParams": getTransactionParams(options),
        // "getTransactionProof": getTransactionProof(32_000_000,  txnId, options), // Requires txn in the last 1000 blocks
        "healthCheck": healthCheck(options),
        "pendingTransactionByAddress": pendingTransactionByAddress(address, options),
        // "pendingTransactionInformation": pendingTransactionInformation(txnId, options),
        "pendingTransactionsInformation": pendingTransactionsInformation(options),
        // "ready": ready(options), // Does not seem to work
        "status": status(options),
        "statusAfterBlock": statusAfterBlock(round, options),
        "supply": supply(options),
        "versionsCheck": versionsCheck(options)
    }
}
