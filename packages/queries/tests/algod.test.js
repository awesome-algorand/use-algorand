import "dotenv/config";
import algosdk from 'algosdk'
import {block} from '../dist/algosdk/algod.js';
import {before, describe, it} from "node:test";
import assert from "node:assert"

/**
 * @type {Algodv2}
 */
let client;
describe('Algodv2', () => {
    before(() => {
        client = new algosdk.Algodv2(
            process.env.ALGOD_TOKEN || '',
            process.env.ALGOD_SERVER || "https://testnet-api.algonode.cloud/",
            process.env.ALGOD_PORT || 443,
        )
    });
    describe('Queries', () => {
        it('should get block query options', () => {
            const blockQueryOptions = block(client, 1234);
            assert(blockQueryOptions.queryKey[0] === 'block')
            assert(blockQueryOptions.queryKey[1] === 1234)
        })
    })

});
