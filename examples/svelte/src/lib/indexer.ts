// import {createQuery} from "@tanstack/svelte-query";
// import {
//     lookupAccountAppLocalStates,
//     lookupAccountAssets,
//     lookupAccountById,
//     lookupAccountCreatedApplications,
//     lookupAccountCreatedAssets,
//     lookupAccountTransactions,
//     lookupApplicationBoxByIdandName,
//     lookupApplicationLogs,
//     lookupApplications,
//     lookupAssetBalances,
//     lookupAssetByID,
//     lookupAssetTransactions,
//     lookupBlock,
//     lookupTransactionByID,
//     makeHealthCheck,
//     searchAccounts,
//     searchForApplicationBoxes,
//     searchForApplications,
//     searchForAssets,
//     searchForTransactions
// } from "@awesome-algorand/query-core/algosdk/indexer";
// import type {LookupAccountAppLocalStatesData} from "@awesome-algorand/indexer-fetch";
//
// // /**
// //  * Lookup Account App LocalStates
// //  *
// //  * Returns application local state about the given account.
// //  *
// //  * @param {string} address The address of the account to look up.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAppLocalStates
// //  */
// // export function useLookupAccountAppLocalStates(data: LookupAccountAppLocalStatesData){
// //     return createQuery(lookupAccountAppLocalStates(data))
// // }
//
// // /**
// //  * Lookup Account Assets
// //  *
// //  * @param {string} address The address of the account to look up.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountAssets
// //  */
// // export function useLookupAccountAssets(address, options){
// //     return createQuery(lookupAccountAssets(address, options))
// // }
// //
// // /**
// //  * Lookup Account By ID
// //  *
// //  * @param {string} address The address of the account to look up.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountByID
// //  */
// // export function useLookupAccountByID(address, options){
// //     return createQuery(lookupAccountByID(address, options))
// // }
// // /**
// //  * Lookup Account Created Apps
// //  *
// //  * @param {string} address The address of the account to look up.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedApplications
// //  */
// // export function useLookupAccountCreatedApplications(address, options){
// //     return createQuery(lookupAccountCreatedApplications(address, options))
// // }
// // /**
// //  * Lookup Account Created Assets
// //  *
// //  * @param {string} address The address of the account to look up.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountCreatedAssets
// //  */
// // export function useLookupAccountCreatedAssets(address, options){
// //     return createQuery(lookupAccountCreatedAssets(address, options))
// // }
// //
// // /**
// //  * Lookup Account Transactions
// //  *
// //  * @param {string} address The address of the account to look up.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupAccountTransactions
// //  */
// // export function useLookupAccountTransactions(address, options){
// //     return createQuery(lookupAccountTransactions(address, options))
// // }
// // /**
// //  * Lookup Application Box By ID and Name
// //  *
// //  * @param {number} index The ID of the application with boxes.
// //  * @param {Uint8Array} name The name of the box
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationBoxByIDandName
// //  */
// // export function useLookupApplicationBoxByIDandName(index, name, options){
// //     return createQuery(lookupApplicationBoxByIDandName(index, name, options))
// // }
// //
// // /**
// //  * Lookup Application Logs
// //  *
// //  * @param {number} index The ID of the application which generated the logs.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplicationLogs
// //  */
// // export function useLookupApplicationLogs(index, options){
// //     return createQuery(lookupApplicationLogs(index, options))
// // }
// // /**
// //  *
// //  * @param {number} index The ID of the application to look up.
// //  * @param {{includeAll: boolean}} [query]
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
// //  */
// // export function useLookupApplications(index, query, options){
// //     return createQuery(lookupApplications(index, query, options))
// // }
// // /**
// //  *
// //  * @param {number} index The asset ID to look up.
// //  * @param {QueryOptions} [options] QueryOption overrides
// //  * @see https://algorand.github.io/js-algorand-sdk/classes/Indexer.html#lookupApplications
// //  */
// // export function useLookupAssetBalances(index, options){
// //     return createQuery(lookupAssetBalances(index, options))
// // }
// // export function useLookupAssetByID(index, options){
// //     return createQuery(lookupAssetByID(index, options))
// // }
// // export function useLookupAssetTransactions(index, options){
// //     return createQuery(lookupAssetTransactions(index, options))
// // }
// //
// // export function useLookupBlock(round, options){
// //     return createQuery(lookupBlock(round, options))
// // }
// // export function useLookupTransactionByID(index, options){
// //     return createQuery(lookupTransactionByID(index, options))
// // }
// // export function useMakeHealthCheck(options){
// //     return createQuery(makeHealthCheck(options))
// // }
// // export function useSearchAccounts(query, options){
// //     return createQuery(searchAccounts( query, options))
// // }
// // export function useSearchForApplicationBoxes(index, query, options){
// //     return createQuery(searchForApplicationBoxes(index, query, options))
// // }
// // export function useSearchForApplications(query, options){
// //     return createQuery(searchForApplications( query, options))
// // }
// //
// // export function useSearchForAssets(query, options){
// //     return createQuery(searchForAssets(query, options))
// // }
// //
// // export function useSearchForTransactions(query, options){
// //     return createQuery(searchForTransactions(query, options))
// // }
//
