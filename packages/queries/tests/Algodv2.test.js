import "dotenv/config";
import algosdk from 'algosdk'
import {getClient, getBlockQueryOptions} from '../lib/Algodv2.js';
import {before, describe, it} from "node:test";
import assert from "node:assert"

/**
 * @type {algosdk.Algodv2}
 */
let client;
describe('Algodv2', () => {
    before(() => {
        client = getClient( {
            server: process.env.ALGOD_SERVER,
            token: process.env.ALGOD_TOKEN,
            port: process.env.ALGOD_PORT
        })
    });
    it('should get a client', () => {
        assert(client instanceof algosdk.Algodv2)
    });
    describe('Queries', () => {
        it('should get block query options', () => {
            const blockQueryOptions = getBlockQueryOptions(1234);
            assert(blockQueryOptions.queryKey[0] === 'block')
            assert(blockQueryOptions.queryKey[1] === 1234)
        })
    })

});
