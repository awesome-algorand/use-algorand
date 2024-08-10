import type { CancelablePromise } from './core/CancelablePromise.js';
import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { MakeHealthCheckResponse, SearchForAccountsData, SearchForAccountsResponse, SearchForApplicationsData, SearchForApplicationsResponse, SearchForApplicationBoxesData, SearchForApplicationBoxesResponse, SearchForAssetsData, SearchForAssetsResponse, SearchForTransactionsData, SearchForTransactionsResponse, LookupAccountByIdData, LookupAccountByIdResponse, LookupAccountAppLocalStatesData, LookupAccountAppLocalStatesResponse, LookupAccountAssetsData, LookupAccountAssetsResponse, LookupAccountCreatedApplicationsData, LookupAccountCreatedApplicationsResponse, LookupAccountCreatedAssetsData, LookupAccountCreatedAssetsResponse, LookupAccountTransactionsData, LookupAccountTransactionsResponse, LookupApplicationByIdData, LookupApplicationByIdResponse, LookupApplicationBoxByIdAndNameData, LookupApplicationBoxByIdAndNameResponse, LookupApplicationLogsByIdData, LookupApplicationLogsByIdResponse, LookupAssetByIdData, LookupAssetByIdResponse, LookupAssetBalancesData, LookupAssetBalancesResponse, LookupAssetTransactionsData, LookupAssetTransactionsResponse, LookupBlockData, LookupBlockResponse, LookupTransactionData, LookupTransactionResponse } from './types.gen.js';
export declare class CommonService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Returns 200 if healthy.
     * @returns HealthCheck (empty)
     * @throws ApiError
     */
    makeHealthCheck(): CancelablePromise<MakeHealthCheckResponse>;
}
export declare class SearchService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Search for accounts.
     * @param data The data for the request.
     * @param data.assetId Asset ID
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @param data.currencyGreaterThan Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.exclude Exclude additional items such as asset holdings, application local data stored for this account, asset parameters created by this account, and application parameters created by this account.
     * @param data.currencyLessThan Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.authAddr Include accounts configured to use this spending key.
     * @param data.round Include results for the specified round. For performance reasons, this parameter may be disabled on some configurations. Using application-id or asset-id filters will return both creator and opt-in accounts. Filtering by include-all will return creator and opt-in accounts for deleted assets and accounts. Non-opt-in managers are not included in the results when asset-id is used.
     * @param data.applicationId Application ID
     * @returns unknown (empty)
     * @throws ApiError
     */
    searchForAccounts(data?: SearchForAccountsData): CancelablePromise<SearchForAccountsResponse>;
    /**
     * Search for applications
     * @param data The data for the request.
     * @param data.applicationId Application ID
     * @param data.creator Filter just applications with the given creator address.
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown (empty)
     * @throws ApiError
     */
    searchForApplications(data?: SearchForApplicationsData): CancelablePromise<SearchForApplicationsResponse>;
    /**
     * Get box names for a given application.
     * Given an application ID, returns the box names of that application sorted lexicographically.
     * @param data The data for the request.
     * @param data.applicationId
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown Box names of an application
     * @throws ApiError
     */
    searchForApplicationBoxes(data: SearchForApplicationBoxesData): CancelablePromise<SearchForApplicationBoxesResponse>;
    /**
     * Search for assets.
     * @param data The data for the request.
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @param data.creator Filter just assets with the given creator address.
     * @param data.name Filter just assets with the given name.
     * @param data.unit Filter just assets with the given unit.
     * @param data.assetId Asset ID
     * @returns unknown (empty)
     * @throws ApiError
     */
    searchForAssets(data?: SearchForAssetsData): CancelablePromise<SearchForAssetsResponse>;
    /**
     * Search for transactions. Transactions are returned oldest to newest unless the address parameter is used, in which case results are returned newest to oldest.
     * @param data The data for the request.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @param data.notePrefix Specifies a prefix which must be contained in the note field.
     * @param data.txType
     * @param data.sigType SigType filters just results using the specified type of signature:
     * * sig - Standard
     * * msig - MultiSig
     * * lsig - LogicSig
     * @param data.txid Lookup the specific transaction by ID.
     * @param data.round Include results for the specified round.
     * @param data.minRound Include results at or after the specified min-round.
     * @param data.maxRound Include results at or before the specified max-round.
     * @param data.assetId Asset ID
     * @param data.beforeTime Include results before the given time. Must be an RFC 3339 formatted string.
     * @param data.afterTime Include results after the given time. Must be an RFC 3339 formatted string.
     * @param data.currencyGreaterThan Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.currencyLessThan Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.address Only include transactions with this address in one of the transaction fields.
     * @param data.addressRole Combine with the address parameter to define what type of address to search for.
     * @param data.excludeCloseTo Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.
     * @param data.rekeyTo Include results which include the rekey-to field.
     * @param data.applicationId Application ID
     * @returns unknown (empty)
     * @throws ApiError
     */
    searchForTransactions(data?: SearchForTransactionsData): CancelablePromise<SearchForTransactionsResponse>;
}
export declare class LookupService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Lookup account information.
     * @param data The data for the request.
     * @param data.accountId account string
     * @param data.round Include results for the specified round.
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.exclude Exclude additional items such as asset holdings, application local data stored for this account, asset parameters created by this account, and application parameters created by this account.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAccountById(data: LookupAccountByIdData): CancelablePromise<LookupAccountByIdResponse>;
    /**
     * Lookup an account's asset holdings, optionally for a specific ID.
     * @param data The data for the request.
     * @param data.accountId account string
     * @param data.applicationId Application ID
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAccountAppLocalStates(data: LookupAccountAppLocalStatesData): CancelablePromise<LookupAccountAppLocalStatesResponse>;
    /**
     * Lookup an account's asset holdings, optionally for a specific ID.
     * @param data The data for the request.
     * @param data.accountId account string
     * @param data.assetId Asset ID
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAccountAssets(data: LookupAccountAssetsData): CancelablePromise<LookupAccountAssetsResponse>;
    /**
     * Lookup an account's created application parameters, optionally for a specific ID.
     * @param data The data for the request.
     * @param data.accountId account string
     * @param data.applicationId Application ID
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAccountCreatedApplications(data: LookupAccountCreatedApplicationsData): CancelablePromise<LookupAccountCreatedApplicationsResponse>;
    /**
     * Lookup an account's created asset parameters, optionally for a specific ID.
     * @param data The data for the request.
     * @param data.accountId account string
     * @param data.assetId Asset ID
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAccountCreatedAssets(data: LookupAccountCreatedAssetsData): CancelablePromise<LookupAccountCreatedAssetsResponse>;
    /**
     * Lookup account transactions. Transactions are returned newest to oldest.
     * @param data The data for the request.
     * @param data.accountId account string
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @param data.notePrefix Specifies a prefix which must be contained in the note field.
     * @param data.txType
     * @param data.sigType SigType filters just results using the specified type of signature:
     * * sig - Standard
     * * msig - MultiSig
     * * lsig - LogicSig
     * @param data.txid Lookup the specific transaction by ID.
     * @param data.round Include results for the specified round.
     * @param data.minRound Include results at or after the specified min-round.
     * @param data.maxRound Include results at or before the specified max-round.
     * @param data.assetId Asset ID
     * @param data.beforeTime Include results before the given time. Must be an RFC 3339 formatted string.
     * @param data.afterTime Include results after the given time. Must be an RFC 3339 formatted string.
     * @param data.currencyGreaterThan Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.currencyLessThan Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.rekeyTo Include results which include the rekey-to field.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAccountTransactions(data: LookupAccountTransactionsData): CancelablePromise<LookupAccountTransactionsResponse>;
    /**
     * Lookup application.
     * @param data The data for the request.
     * @param data.applicationId
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupApplicationById(data: LookupApplicationByIdData): CancelablePromise<LookupApplicationByIdResponse>;
    /**
     * Get box information for a given application.
     * Given an application ID and box name, returns base64 encoded box name and value. Box names must be in the goal app call arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, encode base 64 and use 'b64' prefix as in 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     * @param data The data for the request.
     * @param data.applicationId
     * @param data.name A box name in goal-arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     * @returns Box Box information
     * @throws ApiError
     */
    lookupApplicationBoxByIdAndName(data: LookupApplicationBoxByIdAndNameData): CancelablePromise<LookupApplicationBoxByIdAndNameResponse>;
    /**
     * Lookup application logs.
     * @param data The data for the request.
     * @param data.applicationId
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @param data.txid Lookup the specific transaction by ID.
     * @param data.minRound Include results at or after the specified min-round.
     * @param data.maxRound Include results at or before the specified max-round.
     * @param data.senderAddress Only include transactions with this sender address.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupApplicationLogsById(data: LookupApplicationLogsByIdData): CancelablePromise<LookupApplicationLogsByIdResponse>;
    /**
     * Lookup asset information.
     * @param data The data for the request.
     * @param data.assetId
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAssetById(data: LookupAssetByIdData): CancelablePromise<LookupAssetByIdResponse>;
    /**
     * Lookup the list of accounts who hold this asset
     * @param data The data for the request.
     * @param data.assetId
     * @param data.includeAll Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @param data.currencyGreaterThan Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.currencyLessThan Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAssetBalances(data: LookupAssetBalancesData): CancelablePromise<LookupAssetBalancesResponse>;
    /**
     * Lookup transactions for an asset. Transactions are returned oldest to newest.
     * @param data The data for the request.
     * @param data.assetId
     * @param data.limit Maximum number of results to return. There could be additional pages even if the limit is not reached.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @param data.notePrefix Specifies a prefix which must be contained in the note field.
     * @param data.txType
     * @param data.sigType SigType filters just results using the specified type of signature:
     * * sig - Standard
     * * msig - MultiSig
     * * lsig - LogicSig
     * @param data.txid Lookup the specific transaction by ID.
     * @param data.round Include results for the specified round.
     * @param data.minRound Include results at or after the specified min-round.
     * @param data.maxRound Include results at or before the specified max-round.
     * @param data.beforeTime Include results before the given time. Must be an RFC 3339 formatted string.
     * @param data.afterTime Include results after the given time. Must be an RFC 3339 formatted string.
     * @param data.currencyGreaterThan Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.currencyLessThan Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     * @param data.address Only include transactions with this address in one of the transaction fields.
     * @param data.addressRole Combine with the address parameter to define what type of address to search for.
     * @param data.excludeCloseTo Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.
     * @param data.rekeyTo Include results which include the rekey-to field.
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupAssetTransactions(data: LookupAssetTransactionsData): CancelablePromise<LookupAssetTransactionsResponse>;
    /**
     * Lookup block.
     * @param data The data for the request.
     * @param data.roundNumber Round number
     * @param data.headerOnly Header only flag. When this is set to true, returned block does not contain the transactions
     * @returns Block (empty)
     * @throws ApiError
     */
    lookupBlock(data: LookupBlockData): CancelablePromise<LookupBlockResponse>;
    /**
     * Lookup a single transaction.
     * @param data The data for the request.
     * @param data.txid
     * @returns unknown (empty)
     * @throws ApiError
     */
    lookupTransaction(data: LookupTransactionData): CancelablePromise<LookupTransactionResponse>;
}
