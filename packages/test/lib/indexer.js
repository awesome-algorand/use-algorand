import * as indexer from '@algofam/use-algorand-queries/algosdk/indexer'

const getArguments = (client, address, appId, assetId, txnId, block, options) => ( {
    lookupAccountAppLocalStates: [client, address, options],
    lookupAccountAssets: [client, address, options],
    lookupAccountByID: [client, address, options],
    lookupAccountCreatedApplications: [client, address, options],
    lookupAccountCreatedAssets: [client, address, options],
    lookupAccountTransactions: [client, address, options],
    // lookupApplicationBoxByIDandName: [client, appId, new Uint8Array(1), options], // Todo: Needs box
    lookupApplicationLogs: [client, appId, options],
    lookupApplications: [client, appId, undefined, options],
    lookupAssetBalances: [client, assetId, options],
    lookupAssetByID: [client, assetId, options],
    lookupAssetTransactions: [client, assetId, options],
    lookupBlock: [client, block, options],
    lookupTransactionByID: [client, txnId, options],
    makeHealthCheck: [client, options],
    searchAccounts: [client, undefined, options],
    searchForApplicationBoxes: [client, appId, undefined, options],
    searchForApplications: [client, undefined, options],
    searchForAssets: [client, undefined, options],
    searchForTransactions: [client, undefined, options],
})
export function createIndexerOptions(client, address, appId, assetId, txnId, block, options){
    const ARGUMENTS = getArguments(client, address, appId, assetId, txnId, block, options);
    return Object.keys(ARGUMENTS)
        .reduce((prev, curr) => {
            // Call the method with the arguments
            prev[curr] = indexer[curr].apply(null, ARGUMENTS[curr])
            return prev;
        }, {})
}
