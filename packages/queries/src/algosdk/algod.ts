import type {Algodv2} from "algosdk";
import type {QueryOptions} from "@tanstack/query-core";
import {applyQuery} from "./common.js";

/**
 * Get Account Application Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {string} address The address of the account to look up.
 * @param {number} index The application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountApplicationInformation
 */
export function accountApplicationInformation(
    client: Algodv2,
    address: string,
    index: number,
    options?: QueryOptions
): QueryOptions {
    return {
        queryKey: ['accountApplicationInformation', address, index],
        queryFn: () => client.accountApplicationInformation(address, index).do(),
        ...options
    }
}
/**
 * Get Account Asset Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {string} address The address of the account to look up.
 * @param {number} index The asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountAssetInformation
 */
export function accountAssetInformation(
    client: Algodv2,
    address: string,
    index: number,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['accountAssetInformation', address, index],
        queryFn: () => client.accountAssetInformation(address, index).do(),
        ...options
    }
}
/**
 * Get Account Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {string} address The address of the account to look up.
 * @param {{exclude?: string}} [query] Query parameters
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#accountInformation
 */
export function accountInformation(
    client: Algodv2,
    address: string,
    query: {exclude?: string},
    options?: QueryOptions,
): QueryOptions {
    const jsonRequest = client.accountInformation(address)
    return {
        queryKey: ['accountInformation', address],
        queryFn: () => applyQuery<typeof jsonRequest>(jsonRequest, query).do(),
        ...options
    }
}
/**
 * Get Block Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {number} round The round number of the block to get.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#block
 */
export function block(
    client: Algodv2,
    round: number,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['block', round],
        queryFn: () => client.block(round).do(),
        // @ts-expect-error, adding staleTime for now
        staleTime: Infinity,
        cachetime: Infinity,
        ...options
    }
}
/**
 * Get Genesis Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#genesis
 */
export function genesis(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['genesis'],
        queryFn: () => client.genesis().do(),
        // @ts-expect-error, adding staleTime for now
        staleTime: Infinity,
        cacheTime: Infinity,
        ...options
    }
}
/**
 * Get Application Box By Name Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {number} index The application ID to look up.
 * @param {Uint8Array} name The name of the application box to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationBoxByName
 */
export function getApplicationBoxByName(
    client: Algodv2,
    index: number,
    name: Uint8Array,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getApplicationBoxByName', index, name],
        queryFn: () => client.getApplicationBoxByName(index, name).do(),
        ...options
    }
}
/**
 * Get Application Boxes Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {number} index The application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationBoxes
 */
export function getApplicationBoxes(
    client: Algodv2,
    index: number,
    options?: QueryOptions,
): QueryOptions {
    // TODO: .max()
    return {
        queryKey: ['getApplicationBoxes', index],
        queryFn: () => client.getApplicationBoxes(index).do(),
        ...options
    }
}
/**
 * Get Application By ID Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param index The application ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getApplicationByID
 */
export function getApplicationByID(
    client: Algodv2,
    index: number,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getApplicationByID', index],
        queryFn: () => client.getApplicationByID(index).do(),
        ...options
    }
}
/**
 * Get Asset By ID Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {number} index The asset ID to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getAssetByID
 */
export function getAssetByID(
    client: Algodv2,
    index: number,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getAssetByID', index],
        queryFn: () => client.getAssetByID(index).do(),
        ...options
    }
}
/**
 * Get Block Hash Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {number} round The round number of the block to get.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getBlockHash
 */
export function getBlockHash(
    client: Algodv2,
    round: number,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getBlockHash', round],
        queryFn: () => client.getBlockHash(round).do(),
        // @ts-expect-error, adding staleTime for now
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
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getBlockOffsetTimestamp
 */
export function getBlockOffsetTimestamp(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getBlockOffsetTimestamp'],
        queryFn: () => client.getBlockOffsetTimestamp().do(),
        ...options
    }
}
/**
 * Get Ledger State Delta Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {bigint} round The round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getLedgerStateDelta
 */
export function getLedgerStateDelta(
    client: Algodv2,
    round: bigint,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getLedgerStateDelta', Number(round)],
        queryFn: () => client.getLedgerStateDelta(round).do(),
        ...options
    }
}
/**
 * Get Ledger State Delta For Transaction Group Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {string} id txn ID or group ID to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getLedgerStateDeltaForTransactionGroup
 */
export function getLedgerStateDeltaForTransactionGroup(
    client: Algodv2,
    id: string,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getLedgerStateDeltaForTransactionGroup', id],
        queryFn: () => client.getLedgerStateDeltaForTransactionGroup(id).do(),
        ...options
    }
}
/**
 * Get Sync Round Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getSyncRound
 */
export function getSyncRound(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getSyncRound'],
        queryFn: () => client.getSyncRound().do(),
        ...options
    }
}
/**
 * Get Transaction Group Ledger State Deltas For Round Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {bigint} round the round number to be searched for
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionGroupLedgerStateDeltasForRound
 */
export function getTransactionGroupLedgerStateDeltasForRound(
    client: Algodv2,
    round: bigint,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getTransactionGroupLedgerStateDeltasForRound', Number(round)],
        queryFn: () => client.getTransactionGroupLedgerStateDeltasForRound(round).do(),
        ...options
    }
}
/**
 * Get Transaction Params Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionParams
 */
export function getTransactionParams(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getTransactionParams'],
        queryFn: () => client.getTransactionParams().do(),
        ...options
    }
}
/**
 * Get Transaction Proof Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {number} round The round in which the transaction appears.
 * @param {string} id The transaction ID for which to generate a proof.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#getTransactionProof
 */
export function getTransactionProof(
    client: Algodv2,
    round: number,
    id: string,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['getTransactionProof', round, id],
        queryFn: () => client.getTransactionProof(round, id).do(),
        // @ts-expect-error, adding staleTime for now
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
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#healthCheck
 */
export function healthCheck(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['healthCheck'],
        queryFn: () => client.healthCheck().do(),
        ...options
    }
}
/**
 * Get Pending Transactions By Address Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {string} address The address of the sender.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionByAddress
 */
export function pendingTransactionByAddress(
    client: Algodv2,
    address: string,
    options?: QueryOptions,
): QueryOptions {
    //TODO: Max params
    return {
        queryKey: ['pendingTransactionByAddress', address],
        queryFn: () => client.pendingTransactionByAddress(address).do(),
        ...options
    }
}
/**
 * Get Pending Transaction Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {string} id The TxID string of the pending transaction to look up.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionInformation
 */
export function pendingTransactionInformation(
    client: Algodv2,
    id: string,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['pendingTransactionInformation', id],
        queryFn: () => client.pendingTransactionInformation(id).do(),
        ...options
    }
}
/**
 * Get Pending Transactions Information Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#pendingTransactionsInformation
 */
export function pendingTransactionsInformation(
    client: Algodv2,
    options: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['pendingTransactionsInformation'],
        queryFn: () => client.pendingTransactionsInformation().do(),
        ...options
    }
}
/**
 * Get Ready Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#ready
 */
export function ready(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['ready'],
        queryFn: () => client.ready().do(),
        ...options
    }
}
/**
 * Get Status Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#status
 */
export function status(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['status'],
        queryFn: () => client.status().do(),
        ...options
    }
}
/**
 * Get Status After Block Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {number} round
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#statusAfterBlock
 */
export function statusAfterBlock(
    client: Algodv2,
    round: number,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['statusAfterBlock', round],
        queryFn: () => client.statusAfterBlock(round).do(),
        ...options
    }
}
/**
 * Get Supply Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#supply
 */
export function supply(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['supply'],
        queryFn: () => client.supply().do(),
        ...options
    }
}
/**
 * Get Versions Check Query Options
 *
 * @param {Algodv2} client The Algodv2 client to use.
 * @param {QueryOptions} [options] QueryOption overrides
 * @return {QueryOptions} QueryOption for use with @tanstack
 * @see https://algorand.github.io/js-algorand-sdk/classes/Algodv2.html#versionsCheck
 */
export function versionsCheck(
    client: Algodv2,
    options?: QueryOptions,
): QueryOptions {
    return {
        queryKey: ['versionsCheck'],
        queryFn: () => client.versionsCheck().do(),
        ...options
    }
}
