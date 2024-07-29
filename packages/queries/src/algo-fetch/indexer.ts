import type {QueryOptions} from "@tanstack/query-core";
import type {
    IndexerClient,
    LookupAccountAppLocalStatesData,
    LookupAccountAssetsData,
    LookupAccountByIdData,
    LookupAccountCreatedApplicationsData,
    LookupAccountCreatedAssetsData,
    LookupAccountTransactionsData,
    LookupApplicationBoxByIdAndNameData,
    LookupApplicationByIdData,
    LookupApplicationLogsByIdData,
    LookupAssetBalancesData,
    LookupAssetByIdData,
    LookupAssetTransactionsData,
    LookupBlockData,
    LookupTransactionData,
    SearchForAccountsData,
    SearchForApplicationBoxesData,
    SearchForApplicationsData,
    SearchForAssetsData,
    SearchForTransactionsData
} from "@awesome-algorand/indexer-fetch";

/**
 * Lookup Account App LocalStates
 *
 * Returns application local state about the given account.
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAccountAppLocalStatesData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupaccountapplocalstates
 */
export function lookupAccountAppLocalStates(
    client: IndexerClient,
    data: LookupAccountAppLocalStatesData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAccountAppLocalStates', data],
        queryFn: () => client.lookup.lookupAccountAppLocalStates(data),
        ...options
    }
}

/**
 * Lookup Account Assets
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAccountAssetsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupaccountassets
 */
export function lookupAccountAssets(
    client: IndexerClient,
    data: LookupAccountAssetsData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAccountAssets', data],
        queryFn: () => client.lookup.lookupAccountAssets(data),
        ...options
    }
}

/**
 * Lookup Account By ID
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAccountByIdData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupaccountbyid
 */
export function lookupAccountById(
    client: IndexerClient,
    data: LookupAccountByIdData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAccountByID', data],
        queryFn: () => client.lookup.lookupAccountById(data),
        ...options
    }
}

/**
 * Lookup Account Created Apps
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAccountCreatedApplicationsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupaccountcreatedapplications
 */
export function lookupAccountCreatedApplications(
    client: IndexerClient,
    data: LookupAccountCreatedApplicationsData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAccountCreatedApplications', data],
        queryFn: () => client.lookup.lookupAccountCreatedApplications(data),
        ...options
    }
}

/**
 * Lookup Account Created Assets
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAccountCreatedAssetsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupaccountcreatedassets
 */
export function lookupAccountCreatedAssets(
    client: IndexerClient,
    data: LookupAccountCreatedAssetsData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAccountCreatedAssets', data],
        queryFn: () => client.lookup.lookupAccountCreatedAssets(data),
        ...options
    }
}

/**
 * Lookup Account Transactions
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAccountTransactionsData} data The address of the account to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupaccounttransactions
 */
export function lookupAccountTransactions(
    client: IndexerClient,
    data: LookupAccountTransactionsData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAccountTransactions', data],
        queryFn: () => client.lookup.lookupAccountTransactions(data),
        ...options
    }
}

/**
 * Lookup Application Box By ID and Name
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupApplicationBoxByIdAndNameData} data The ID of the application and the name of the box to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupapplicationboxbyidandname
 */
export function lookupApplicationBoxByIdAndName(
    client: IndexerClient,
    data: LookupApplicationBoxByIdAndNameData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupApplicationBoxByIDandName', data],
        queryFn: () => client.lookup.lookupApplicationBoxByIdAndName(data),
        ...options
    }
}

/**
 * Lookup Application Logs
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupApplicationLogsByIdData} data The ID of the application to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupapplicationlogsbyid
 */
export function lookupApplicationLogsById(
    client: IndexerClient,
    data: LookupApplicationLogsByIdData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupApplicationLogs', data],
        queryFn: () => client.lookup.lookupApplicationLogsById(data),
        ...options
    }
}

/**
 *
 * @TODO: Make singular to match specification
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupApplicationByIdData} data The ID of the application to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupapplicationbyid
 */
export function lookupApplicationById(
    client: IndexerClient,
    data: LookupApplicationByIdData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupApplications', data],
        queryFn: () => client.lookup.lookupApplicationById(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAssetBalancesData} data The ID of the asset to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupassetbalances
 */
export function lookupAssetBalances(
    client: IndexerClient,
    data: LookupAssetBalancesData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAssetBalances', data],
        queryFn: () => client.lookup.lookupAssetBalances(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAssetByIdData} data
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupassetbyid
 */
export function lookupAssetById(
    client: IndexerClient,
    data: LookupAssetByIdData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAssetByID', data],
        queryFn: () => client.lookup.lookupAssetById(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupAssetTransactionsData} data
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupassettransactions
 */
export function lookupAssetTransactions(
    client: IndexerClient,
    data: LookupAssetTransactionsData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupAssetTransactions', data],
        queryFn: () => client.lookup.lookupAssetTransactions(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {LookupBlockData} data
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookupblock
 */
export function lookupBlock(
    client: IndexerClient,
    data: LookupBlockData,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupBlock', data],
        queryFn: () => client.lookup.lookupBlock(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param data
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/lookupservice/#lookuptransaction
 */
export function lookupTransaction(
    client: IndexerClient,
    data: LookupTransactionData,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'lookupTransactionByID', data],
        queryFn: () => client.lookup.lookupTransaction(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/commonservice/#makehealthcheck
 */
export function makeHealthCheck(
    client: IndexerClient,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'makeHealthCheck'],
        queryFn: () => client.common.makeHealthCheck(),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param data
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/searchservice/#searchforaccounts
 */
export function searchForAccounts(
    client: IndexerClient,
    data: SearchForAccountsData,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'searchAccounts', data],
        queryFn: () => client.search.searchForAccounts(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param data
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/searchservice/#searchforapplicationboxes
 */
export function searchForApplicationBoxes(
    client: IndexerClient,
    data: SearchForApplicationBoxesData,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'searchForApplicationBoxes', data],
        queryFn: () => client.search.searchForApplicationBoxes(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {SearchForApplicationsData} data The search parameters
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/searchservice/#searchforapplications
 */
export function searchForApplications(
    client: IndexerClient,
    data: SearchForApplicationsData,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'searchForApplications', data],
        queryFn: () => client.search.searchForApplications(data),
        ...options
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {SearchForAssetsData} data The search parameters
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/searchservice/#searchforassets
 */
export function searchForAssets(
    client: IndexerClient,
    data: SearchForAssetsData,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'searchForAssets', data],
        queryFn: () => client.search.searchForAssets(data),
        ...options,
    }
}

/**
 *
 * @param {IndexerClient} client IndexerClient
 * @param {SearchForTransactionsData} data  The search parameters
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/indexer-fetch/classes/searchservice/#searchfortransactions
 */
export function searchForTransactions(
    client: IndexerClient,
    data: SearchForTransactionsData,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: [client.request.config.BASE, 'searchForTransactions', data],
        queryFn: () => client.search.searchForTransactions(data),
        ...options
    }
}
