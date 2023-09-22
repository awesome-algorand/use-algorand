import * as indexer from '@algofam/use-algorand-queries/indexer'

const getArguments = (address, appId, assetId, txnId, block, options) => ( {
    lookupAccountAppLocalStates: [address, options],
    lookupAccountAssets: [address, options],
    lookupAccountByID: [address, options],
    lookupAccountCreatedApplications: [address, options],
    lookupAccountCreatedAssets: [address, options],
    lookupAccountTransactions: [address, options],
    // lookupApplicationBoxByIDandName: [appId, new Uint8Array(1), options], // Todo: Needs box
    lookupApplicationLogs: [appId, options],
    lookupApplications: [appId, undefined, options],
    lookupAssetBalances: [assetId, options],
    lookupAssetByID: [assetId, options],
    lookupAssetTransactions: [assetId, options],
    lookupBlock: [block, options],
    lookupTransactionByID: [txnId, options],
    makeHealthCheck: [options],
    searchAccounts: [undefined, options],
    searchForApplicationBoxes: [appId, undefined, options],
    searchForApplications: [undefined, options],
    searchForAssets: [undefined, options],
    searchForTransactions: [undefined, options],
})
export function createIndexerOptions(address, appId, assetId, txnId, block, options){
    indexer.getIndexer(options)
    const ARGUMENTS = getArguments(address, appId, assetId, txnId, block, options);
    return Object.keys(ARGUMENTS)
        .reduce((prev, curr) => {
            // Call the method with the arguments
            prev[curr] = indexer[curr].apply(null, ARGUMENTS[curr])
            return prev;
        }, {})
}
