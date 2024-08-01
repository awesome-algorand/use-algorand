import * as indexer from '../algosdk/indexer.js'
import {IndexerClient} from "@awesome-algorand/indexer-fetch";
import {Indexer} from "algosdk";
import {QueryOptions} from "@tanstack/query-core";

const getArguments = (client: Indexer | IndexerClient, address: string, appId: number, assetId: number, txnId: string, block:number, options: QueryOptions) => ( {
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
export function createIndexerOptions(client: Indexer | IndexerClient, address: string, appId: number, assetId: number, txnId: string, block:number, options: QueryOptions){
    const ARGUMENTS: Record<string, any> = getArguments(client, address, appId, assetId, txnId, block, options);
    return Object.keys(ARGUMENTS)
        .reduce((prev, curr) => {
            // Call the method with the arguments
            prev[curr] = (indexer as Record<string, any>)[curr].apply(null, ARGUMENTS[curr])
            return prev;
        }, {} as Record<string, any>)
}
