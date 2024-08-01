import type {QueryOptions} from "@tanstack/query-core";
import type {
    AccountApplicationInformationData,
    AccountAssetInformationData,
    AccountInformationData,
    AlgodClient,
    GetApplicationBoxByNameData,
    GetApplicationBoxesData,
    GetApplicationByIdData,
    GetAssetByIdData,
    GetBlockData,
    GetBlockHashData,
    GetLedgerStateDeltaData,
    GetLedgerStateDeltaForTransactionGroupData,
    GetPendingTransactionsByAddressData,
    GetTransactionGroupLedgerStateDeltasForRoundData,
    GetTransactionProofData,
    PendingTransactionInformationData,
    WaitForBlockData,
} from "@awesome-algorand/algod-fetch";
/**
 * Get Account Application Information Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {AccountApplicationInformationData} data The address and application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#accountapplicationinformation
 */
export function accountApplicationInformation(
    client: AlgodClient,
    data: AccountApplicationInformationData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'accountApplicationInformation', data],
        queryFn: () => client.public.accountApplicationInformation(data),
        ...options as object
    }
}

/**
 * Get Account Asset Information Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {AccountAssetInformationData} data The address and asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#accountassetinformation
 */
export function accountAssetInformation(
    client: AlgodClient,
    data: AccountAssetInformationData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'accountAssetInformation', data],
        queryFn: () => client.public.accountAssetInformation(data),
        ...options as object
    }
}

/**
 * Get Account Information Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {AccountInformationData} data The address to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#accountinformation
 */
export function accountInformation(
    client: AlgodClient,
    data: AccountInformationData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'accountInformation', data],
        queryFn: () => client.public.accountInformation(data),
        ...options as object
    }
}

/**
 * Get Block Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetBlockData} data The round number of the block to get.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getblock
 */
export function getBlock(
    client: AlgodClient,
    data: GetBlockData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getBlock', data],
        queryFn: () => client.public.getBlock(data),
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options as object
    }
}

/**
 * Get Genesis Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getgenesis
 */
export function getGenesis(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getGenesis'],
        queryFn: () => client.public.getGenesis(),
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options as object
    }
}

/**
 * Get Application Box By Name Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetApplicationBoxByNameData} data Application and box name to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getapplicationboxbyname
 */
export function getApplicationBoxByName(
    client: AlgodClient,
    data: GetApplicationBoxByNameData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getApplicationBoxByName', data],
        queryFn: () => client.public.getApplicationBoxByName(data),
        ...options as object
    }
}

/**
 * Get Application Boxes Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetApplicationBoxesData} data The application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getapplicationboxes
 */
export function getApplicationBoxes(
    client: AlgodClient,
    data: GetApplicationBoxesData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getApplicationBoxes', data],
        queryFn: () => client.public.getApplicationBoxes(data),
        ...options as object
    }
}

/**
 * Get Application By ID Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetApplicationByIdData} data The application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getapplicationbyid
 */
export function getApplicationById(
    client: AlgodClient,
    data: GetApplicationByIdData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getApplicationById', data],
        queryFn: () => client.public.getApplicationById(data),
        ...options as object
    }
}

/**
 * Get Asset By ID Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetAssetByIdData} data The asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getassetbyid
 */
export function getAssetById(
    client: AlgodClient,
    data: GetAssetByIdData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getAssetById', data],
        queryFn: () => client.public.getAssetById(data),
        ...options as object
    }
}

/**
 * Get Block Hash Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetBlockHashData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getblockhash
 */
export function getBlockHash(
    client: AlgodClient,
    data: GetBlockHashData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getBlockHash', data],
        queryFn: () => client.public.getBlockHash(data),
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options as object
    }
}

/**
 * Get Block Offset Timestamp Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getblocktimestampoffset
 */
export function getBlockTimeStampOffset(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getBlockTimeStampOffset'],
        queryFn: () => client.public.getBlockTimeStampOffset(),
        ...options as object
    }
}

/**
 * Get Ledger State Delta Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetLedgerStateDeltaData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getledgerstatedelta
 */
export function getLedgerStateDelta(
    client: AlgodClient,
    data: GetLedgerStateDeltaData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getLedgerStateDelta', data],
        queryFn: () => client.public.getLedgerStateDelta(data),
        ...options as object
    }
}

/**
 * Get Ledger State Delta For Transaction Group Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetLedgerStateDeltaForTransactionGroupData} data The transaction group ID to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getledgerstatedeltafortransactiongroup
 */
export function getLedgerStateDeltaForTransactionGroup(
    client: AlgodClient,
    data: GetLedgerStateDeltaForTransactionGroupData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getLedgerStateDeltaForTransactionGroup', data],
        queryFn: () => client.public.getLedgerStateDeltaForTransactionGroup(data),
        ...options as object
    }
}

/**
 * Get Sync Round Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getsyncround
 */
export function getSyncRound(
    client: AlgodClient,
    options: QueryOptions,
) {
    return {
        queryKey: [client.request.config.BASE, 'getSyncRound'],
        queryFn: () => client.public.getSyncRound(),
        ...options as object
    }
}

/**
 * Get Transaction Group Ledger State Deltas For Round Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetTransactionGroupLedgerStateDeltasForRoundData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#gettransactiongroupledgerstatedeltasforround
 */
export function getTransactionGroupLedgerStateDeltasForRound(
    client: AlgodClient,
    data: GetTransactionGroupLedgerStateDeltasForRoundData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getTransactionGroupLedgerStateDeltasForRound', data],
        queryFn: () => client.public.getTransactionGroupLedgerStateDeltasForRound(data),
        ...options as object
    }
}

/**
 * Get Transaction Params Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#transactionparams
 */
export function transactionParams(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'transactionParams'],
        queryFn: () => client.public.transactionParams(),
        ...options as object
    }
}

/**
 * Get Transaction Proof Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetTransactionProofData} data The transaction ID and round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#gettransactionproof
 */
export function getTransactionProof(
    client: AlgodClient,
    data: GetTransactionProofData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getTransactionProof', data],
        queryFn: () => client.public.getTransactionProof(data),
        staleTime: Infinity,
        ...options as object
    }
}

/**
 * Get Health Check Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#healthcheck
 */
export function healthCheck(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'healthCheck'],
        queryFn: () => client.public.healthCheck(),
        ...options as object
    }
}

/**
 * Get Pending Transactions By Address Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {GetPendingTransactionsByAddressData} data The address to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getpendingtransactionsbyaddress
 */
export function getPendingTransactionsByAddress(
    client: AlgodClient,
    data: GetPendingTransactionsByAddressData,
    options: QueryOptions = {}
) {
    return {
        queryKey: [client.request.config.BASE, 'getPendingTransactionsByAddress', data],
        queryFn: () => client.public.getPendingTransactionsByAddress(data),
        ...options as object
    }
}

/**
 * Get Pending Transaction Information Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {PendingTransactionInformationData} data The transaction ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#pendingtransactioninformation
 */
export function pendingTransactionInformation(
    client: AlgodClient,
    data: PendingTransactionInformationData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'pendingTransactionInformation', data],
        queryFn: () => client.public.pendingTransactionInformation(data),
        ...options as object
    }
}

/**
 * Get Pending Transactions Information Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getpendingtransactions
 */
export function getPendingTransactions(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getPendingTransactions'],
        queryFn: () => client.public.getPendingTransactions(),
        ...options as object
    }
}

/**
 * Get Ready Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getready
 */
export function getReady(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getReady'],
        queryFn: () => client.public.getReady(),
        ...options as object
    }
}

/**
 * Get Status Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getstatus
 */
export function getStatus(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getStatus'],
        queryFn: () => client.public.getStatus(),
        ...options as object
    }
}

/**
 * Get Status After Block Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {WaitForBlockData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#waitforblock
 */
export function waitForBlock(
    client: AlgodClient,
    data: WaitForBlockData,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'waitForBlock', data],
        queryFn: () => client.public.waitForBlock(data),
        ...options as object
    }
}

/**
 * Get Supply Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getsupply
 */
export function getSupply(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getSupply'],
        queryFn: () => client.public.getSupply(),
        ...options as object
    }
}

/**
 * Get Versions Check Query Options
 *
 * @param {AlgodClient} client AlgodClient
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://awesome-algorand.github.io/algo-fetch/packages/awesome-algorand/algod-fetch/classes/publicservice/#getversion
 */
export function getVersion(
    client: AlgodClient,
    options: QueryOptions = {},
) {
    return {
        queryKey: [client.request.config.BASE, 'getVersion'],
        queryFn: () => client.common.getVersion(),
        ...options as object
    }
}
