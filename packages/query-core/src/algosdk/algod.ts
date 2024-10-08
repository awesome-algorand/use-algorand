import type {Algodv2} from "algosdk";
import type {
    AccountApplicationInformationData, AccountApplicationInformationResponse,
    AccountAssetInformationData,
    AccountInformationData,
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

type Params = {
    signal: AbortSignal
}

/**
 * Get Account Application Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {AccountApplicationInformationData} data The address and application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountApplicationInformation
 */
export function accountApplicationInformation<T>(
    client: Algodv2,
    data: AccountApplicationInformationData,
    options: T = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'accountApplicationInformation', data],
        queryFn: ({signal}: Params) => client.accountApplicationInformation(data.address, data.applicationId).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Account Asset Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {AccountAssetInformationData} data The address and asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountAssetInformation
 */
export function accountAssetInformation<T>(
    client: Algodv2,
    data: AccountAssetInformationData,
    options: T = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'accountAssetInformation', data],
        queryFn: ({signal}: Params) => client.accountAssetInformation(data.address, data.assetId).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Account Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {AccountInformationData} data The address to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountInformation
 */
export function accountInformation<T>(
    client: Algodv2,
    data: AccountInformationData,
    options: T = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'accountInformation', data],
        queryFn: ({signal}: Params) => client.accountInformation(data.address).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Block Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetBlockData} data The round number of the block to get.
 * @param {object} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#block
 */
export function getBlock<T>(
    client: Algodv2,
    data: GetBlockData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getBlock', data],
        queryFn: ({signal}: Params) => client.block(data.round).do(undefined, {signal}),
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options
    }
}

/**
 * Get Genesis Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#genesis
 */
export function getGenesis<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getGenesis'],
        queryFn: ({signal}: Params) => client.genesis().do(undefined, {signal}),
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options
    }
}

/**
 * Get Application Box By Name Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetApplicationBoxByNameData} data Application and box name to look up.* @param {QueryOptions} [options] QueryOption overrides
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationBoxByName
 */
export function getApplicationBoxByName<T>(
    client: Algodv2,
    data: GetApplicationBoxByNameData,
    options: T  = {} as T,
) {
    const encoder = new TextEncoder()
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getApplicationBoxByName', data],
        queryFn: ({signal}: Params) => client.getApplicationBoxByName(data.applicationId, encoder.encode(data.name)).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Application Boxes Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetApplicationBoxesData} data The application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationBoxes
 */
export function getApplicationBoxes<T>(
    client: Algodv2,
    data: GetApplicationBoxesData,
    options: T  = {} as T,
) {
    // TODO: .max()
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getApplicationBoxes', data],
        queryFn: ({signal}: Params) => client.getApplicationBoxes(data.applicationId).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Application By ID Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetApplicationByIdData} data The application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationByID
 */
export function getApplicationById<T>(
    client: Algodv2,
    data: GetApplicationByIdData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getApplicationById', data],
        queryFn: ({signal}: Params) => client.getApplicationByID(data.applicationId).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Asset By ID Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetAssetByIdData} data The asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getAssetByID
 */
export function getAssetById<T>(
    client: Algodv2,
    data: GetAssetByIdData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getAssetById', data],
        queryFn: ({signal}: Params) => client.getAssetByID(data.assetId).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Block Hash Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetBlockHashData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getBlockHash
 */
export function getBlockHash<T>(
    client: Algodv2,
    data: GetBlockHashData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getBlockHash', data],
        queryFn: ({signal}: Params) => client.getBlockHash(data.round).do(undefined, {signal}),
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options
    }
}

/**
 * Get Block Offset Timestamp Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getBlockOffsetTimestamp
 */
export function getBlockTimeStampOffset<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getBlockTimeStampOffset'],
        queryFn: ({signal}: Params) => client.getBlockOffsetTimestamp().do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Ledger State Delta Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetLedgerStateDeltaData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getLedgerStateDelta
 */
export function getLedgerStateDelta<T>(
    client: Algodv2,
    data: GetLedgerStateDeltaData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getLedgerStateDelta', data],
        queryFn: ({signal}: Params) => client.getLedgerStateDelta(data.round).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Ledger State Delta For Transaction Group Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetLedgerStateDeltaForTransactionGroupData} data The transaction group ID to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getLedgerStateDeltaForTransactionGroup
 */
export function getLedgerStateDeltaForTransactionGroup<T>(
    client: Algodv2,
    data: GetLedgerStateDeltaForTransactionGroupData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getLedgerStateDeltaForTransactionGroup', data],
        queryFn: ({signal}: Params) => client.getLedgerStateDeltaForTransactionGroup(data.id).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Sync Round Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getSyncRound
 */
export function getSyncRound<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getSyncRound'],
        queryFn: ({signal}: Params) => client.getSyncRound().do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Transaction Group Ledger State Deltas For Round Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetTransactionGroupLedgerStateDeltasForRoundData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionGroupLedgerStateDeltasForRound
 */
export function getTransactionGroupLedgerStateDeltasForRound<T>(
    client: Algodv2,
    data: GetTransactionGroupLedgerStateDeltasForRoundData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getTransactionGroupLedgerStateDeltasForRound', data],
        queryFn: ({signal}: Params) => client.getTransactionGroupLedgerStateDeltasForRound(data.round).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Transaction Params Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionParams
 */
export function transactionParams<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'transactionParams'],
        queryFn: ({signal}: Params) => client.getTransactionParams().do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Transaction Proof Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetTransactionProofData} data The transaction ID and round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionProof
 */
export function getTransactionProof<T>(
    client: Algodv2,
    data: GetTransactionProofData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getTransactionProof', data],
        queryFn: ({signal}: Params) => client.getTransactionProof(data.round, data.txid).do(undefined, {signal}),
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options
    }
}

/**
 * Get Health Check Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#healthCheck
 */
export function healthCheck<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'healthCheck'],
        queryFn: ({signal}: Params) => client.healthCheck().do(undefined, {signal}).then(()=>null),
        ...options
    }
}

/**
 * Get Pending Transactions By Address Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {GetPendingTransactionsByAddressData} data The address to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionByAddress
 */
export function getPendingTransactionsByAddress<T>(
    client: Algodv2,
    data: GetPendingTransactionsByAddressData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getPendingTransactionsByAddress', data],
        queryFn: ({signal}: Params) => client.pendingTransactionByAddress(data.address).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Pending Transaction Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {PendingTransactionInformationData} data The transaction ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionInformation
 */
export function pendingTransactionInformation<T>(
    client: Algodv2,
    data: PendingTransactionInformationData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'pendingTransactionInformation', data],
        queryFn: ({signal}: Params) => client.pendingTransactionInformation(data.txid).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Pending Transactions Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionsInformation
 */
export function getPendingTransactions<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getPendingTransactions'],
        queryFn: ({signal}: Params) => client.pendingTransactionsInformation().do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Ready Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#ready
 */
export function getReady<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getReady'],
        queryFn: ({signal}: Params) => client.ready().do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Status Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#status
 */
export function getStatus<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getStatus'],
        queryFn: ({signal}: Params) => client.status().do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Status After Block Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {WaitForBlockData} data The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#statusAfterBlock
 */
export function waitForBlock<T>(
    client: Algodv2,
    data: WaitForBlockData,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'waitForBlock', data],
        queryFn: ({signal}: Params) => client.statusAfterBlock(data.round).do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Supply Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#supply
 */
export function getSupply<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getSupply'],
        queryFn: ({signal}: Params) => client.supply().do(undefined, {signal}),
        ...options
    }
}

/**
 * Get Versions Check Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#versionsCheck
 */
export function getVersion<T>(
    client: Algodv2,
    options: T  = {} as T,
) {
    return {
        //@ts-expect-error, access private baseURL
        queryKey: [client.c.bc.baseURL.origin, 'getVersion'],
        queryFn: ({signal}: Params) => client.versionsCheck().do(undefined, {signal}),
        ...options
    }
}
