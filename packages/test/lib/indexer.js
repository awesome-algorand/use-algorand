import {
    getIndexer,
    lookupAccountAppLocalStates,
    lookupAccountAssets,
    lookupAccountByID,
    lookupAccountCreatedApplications,
    lookupAccountCreatedAssets,
    lookupAccountTransactions,
    lookupApplicationBoxByIDandName,
    lookupApplicationLogs,
    lookupApplications,
    lookupAssetBalances,
    lookupAssetByID,
    lookupAssetTransactions,
    lookupBlock,
    lookupTransactionByID,
    makeHealthCheck,
    searchAccounts,
    searchForApplicationBoxes,
    searchForApplications,
    searchForAssets,
    searchForTransactions,
} from '@algofam/use-algorand-queries/indexer'
export function createIndexerOptions(address, appId, assetId, txnId, block, options){
    getIndexer(options)
    return {
        lookupAccountAppLocalStates: lookupAccountAppLocalStates(address, options),
        lookupAccountAssets: lookupAccountAssets(address, options),
        lookupAccountByID: lookupAccountByID(address, options),
        lookupAccountCreatedApplications: lookupAccountCreatedApplications(address, options),
        lookupAccountCreatedAssets: lookupAccountCreatedAssets(address, options),
        lookupAccountTransactions: lookupAccountTransactions(address, options),
        lookupApplicationBoxByIDandName: lookupApplicationBoxByIDandName(appId, new Uint8Array(1), options),
        lookupApplicationLogs: lookupApplicationLogs(appId, options),
        lookupApplications: lookupApplications(appId, undefined, options),
        lookupAssetBalances: lookupAssetBalances(assetId, options),
        lookupAssetByID: lookupAssetByID(assetId, options),
        lookupAssetTransactions: lookupAssetTransactions(assetId, options),
        lookupBlock: lookupBlock(block, options),
        lookupTransactionByID: lookupTransactionByID(txnId, options),
        makeHealthCheck: makeHealthCheck(options),
        searchAccounts: searchAccounts(undefined, options),
        searchForApplicationBoxes: searchForApplicationBoxes(appId, undefined, options),
        searchForApplications: searchForApplications(undefined, options),
        searchForAssets: searchForAssets(undefined, options),
        searchForTransactions: searchForTransactions(undefined, options),
    }
}
