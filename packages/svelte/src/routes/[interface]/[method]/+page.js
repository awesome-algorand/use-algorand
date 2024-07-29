import { error } from '@sveltejs/kit';
import {createAlgodOptions, createIndexerOptions} from "@awesome-algorand/use-algorand-test";
import * as algosdk from "algosdk";
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

const algodClient = new algosdk.Algodv2(
    PUBLIC_ALGOD_TOKEN || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    PUBLIC_ALGOD_SERVER || "http://localhost",
    PUBLIC_ALGOD_PORT || 4001,
)
const indexerClient = new algosdk.Indexer(
    PUBLIC_INDEXER_TOKEN || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    PUBLIC_INDEXER_SERVER || "http://localhost",
    PUBLIC_INDEXER_PORT || 8980,
)
const INTERFACES = ['Algodv2', 'Indexer', 'Kmd'];
/** @type {import('./$types').PageLoad} */

const indexerOpitons = createIndexerOptions(
    indexerClient,
    PUBLIC_TEST_ADDRESS,
    PUBLIC_TEST_APPLICATION,
    PUBLIC_TEST_ASSET,
    PUBLIC_TEST_TRANSACTION,
    1,
    {})
const algodOptions = createAlgodOptions(
    algodClient,
    PUBLIC_TEST_ADDRESS,
    PUBLIC_TEST_APPLICATION,
    PUBLIC_TEST_ASSET,
    PUBLIC_TEST_TRANSACTION,
    1,
    {})

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
