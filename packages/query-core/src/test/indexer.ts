import {IndexerClient} from "@awesome-algorand/indexer-fetch";
import {Indexer} from "algosdk";
import {QueryOptions} from "@tanstack/query-core";
const getArguments = (
    client: Indexer | IndexerClient,
    accountId: string,
    applicationId: number,
    assetId: number,
    txid: string,
    roundNumber:number,
    options: QueryOptions
) => ( {
    lookupAccountAppLocalStates: [client, {accountId}, options],
    lookupAccountAssets: [client, {accountId}, options],
    lookupAccountById: [client, {accountId}, options],
    lookupAccountCreatedApplications: [client, {accountId}, options],
    lookupAccountCreatedAssets: [client, {accountId}, options],
    lookupAccountTransactions: [client, {accountId}, options],
    // lookupApplicationBoxByIdAndName: [client, appId, new Uint8Array(1), options], // Todo: Needs box
    lookupApplicationLogsById: [client, {applicationId}, options],
    lookupApplicationById: [client, {applicationId}, undefined, options],
    lookupAssetBalances: [client, {assetId}, options],
    lookupAssetById: [client, {assetId}, options],
    lookupAssetTransactions: [client, {assetId}, options],
    lookupBlock: [client, {roundNumber}, options],
    lookupTransaction: [client, {txid}, options],
    makeHealthCheck: [client, options],
    searchForAccounts: [client, undefined, options],
    searchForApplicationBoxes: [client, {applicationId}, undefined, options],
    searchForApplications: [client, undefined, options],
    searchForAssets: [client, undefined, options],
    searchForTransactions: [client, undefined, options],
})
export function createIndexerOptions(
    pkg: any,
    client: Indexer | IndexerClient,
    address: string,
    appId: number,
    assetId: number,
    txnId: string,
    block:number,
    options: QueryOptions
){
    const ARGUMENTS: Record<string, any> = getArguments(client, address, appId, assetId, txnId, block, options);
    return Object.keys(ARGUMENTS)
        .reduce((prev, curr) => {
            // Call the method with the arguments
            prev[curr] = pkg[curr].apply(null, ARGUMENTS[curr])
            return prev;
        }, {} as Record<string, any>)
}
