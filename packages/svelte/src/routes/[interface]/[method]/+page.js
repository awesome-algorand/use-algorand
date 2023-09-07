import { error } from '@sveltejs/kit';
import {createAlgodOptions, createIndexerOptions} from "@algofam/use-algorand-test";

import {
    PUBLIC_ALGOD_PORT,
    PUBLIC_ALGOD_SERVER, PUBLIC_ALGOD_TOKEN,
    PUBLIC_INDEXER_PORT,
    PUBLIC_INDEXER_SERVER, PUBLIC_INDEXER_TOKEN,
    PUBLIC_TEST_ADDRESS,
    PUBLIC_TEST_APPLICATION,
    PUBLIC_TEST_ASSET,
    PUBLIC_TEST_TRANSACTION
} from "$env/static/public";

const INTERFACES = ['Algodv2', 'Indexer', 'Kmd'];
/** @type {import('./$types').PageLoad} */

const indexerOpitons = createIndexerOptions(
    PUBLIC_TEST_ADDRESS,
    PUBLIC_TEST_APPLICATION,
    PUBLIC_TEST_ASSET,
    PUBLIC_TEST_TRANSACTION,
    1,
    {
        server: PUBLIC_INDEXER_SERVER || "http://localhost",
        port: PUBLIC_INDEXER_PORT || 8980,
        token: PUBLIC_INDEXER_TOKEN || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
)
const algodOptions = createAlgodOptions(
    PUBLIC_TEST_ADDRESS,
    PUBLIC_TEST_APPLICATION,
    PUBLIC_TEST_ASSET,
    PUBLIC_TEST_TRANSACTION,
    1,
    {
        server: PUBLIC_ALGOD_SERVER || "http://localhost",
        port: PUBLIC_ALGOD_PORT || 4001,
        token: PUBLIC_ALGOD_TOKEN || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    }
)
export function load({ params }) {
    if (
        !INTERFACES.includes(params.interface) ||
        ! (
            Object.keys(algodOptions).includes(params.method) ||
            Object.keys(indexerOpitons).includes(params.method)
        )
    ) {
        throw error(404, 'Not found');
    }

    if(params.interface === 'Algodv2') {
        // TODO: parse examples
    }
}
