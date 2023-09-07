import {
    getAccountApplicationInformationQueryOptions,
    getAccountAssetInformationQueryOptions,
    getAccountInformationQueryOptions,
    getApplicationBoxByNameQueryOptions,
    getApplicationBoxesQueryOptions,
    getApplicationByIDQueryOptions,
    getAssetByIDQueryOptions,
    getBlockHashQueryOptions,
    getBlockOffsetTimestampQueryOptions,
    getBlockQueryOptions,
    getClient,
    getGenesisQueryOptions,
    getHealthCheckQueryOptions,
    getLedgerStateDeltaForTransactionGroupQueryOptions,
    getLedgerStateDeltaQueryOptions,
    getPendingTransactionByAddressQueryOptions,
    getPendingTransactionInformationQueryOptions,
    getPendingTransactionsInformationQueryOptions,
    getReadyQueryOptions, getStatusAfterBlockQueryOptions,
    getStatusQueryOptions, getSupplyQueryOptions,
    getSyncRoundQueryOptions,
    getTransactionGroupLedgerStateDeltasForRoundQueryOptions,
    getTransactionParamsQueryOptions,
    getTransactionProofQueryOptions, getVersionsCheckQueryOptions
} from "@algofam/use-algorand-queries/algod";


export function createAlgodOptions(address, appId, assetId, txnId, block, options){
    getClient(options)
    return {
        "accountApplicationInformation": getAccountApplicationInformationQueryOptions(address, appId, options),
        "accountAssetInformation": getAccountAssetInformationQueryOptions(address, assetId, options),
        "accountInformation": getAccountInformationQueryOptions(address, {exclude: "all"}, options),
        "block": getBlockQueryOptions(1, options),
        "genesis":getGenesisQueryOptions(options),
        // "getApplicationBoxByName": getApplicationBoxByNameQueryOptions(appId, new Uint8Array(1), options), // Requires created box
        "getApplicationBoxes": getApplicationBoxesQueryOptions(appId, options),
        "getApplicationByID": getApplicationByIDQueryOptions(appId, options),
        "getAssetByID": getAssetByIDQueryOptions(assetId, options),
        "getBlockHash": getBlockHashQueryOptions(block, options),
        // "getBlockOffsetTimestamp": getBlockOffsetTimestampQueryOptions(options), // Only in dev mode
        // "getLedgerStateDelta": getLedgerStateDeltaQueryOptions(lastRound, options), // Requires current round
        // "getLedgerStateDeltaForTransactionGroup": getLedgerStateDeltaForTransactionGroupQueryOptions(txnId, options), // TODO: Debug
        // "getSyncRound": getSyncRoundQueryOptions(options), // Must have EnableFollowMode: true on algod
        // "getTransactionGroupLedgerStateDeltasForRound": getTransactionGroupLedgerStateDeltasForRoundQueryOptions(BigInt(32_000_000), options), // TODO: debug
        "getTransactionParams": getTransactionParamsQueryOptions(options),
        // "getTransactionProof": getTransactionProofQueryOptions(32_000_000,  txnId, options), // Requires txn in the last 1000 blocks
        "healthCheck": getHealthCheckQueryOptions(options),
        "pendingTransactionByAddress": getPendingTransactionByAddressQueryOptions(address, options),
        // "pendingTransactionInformation": getPendingTransactionInformationQueryOptions(txnId, options),
        "pendingTransactionsInformation": getPendingTransactionsInformationQueryOptions(options),
        // "ready": getReadyQueryOptions(options), // Does not seem to work
        "status": getStatusQueryOptions(options),
        "statusAfterBlock": getStatusAfterBlockQueryOptions(block, options),
        "supply": getSupplyQueryOptions(options),
        "versionsCheck": getVersionsCheckQueryOptions(options)
    }
}
