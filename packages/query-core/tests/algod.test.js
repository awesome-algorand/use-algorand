import "dotenv/config";
import algosdk from 'algosdk'
import {getBlock} from '../dist/algosdk/algod.js';
import {before, describe, it} from "node:test";
import assert from "node:assert"

let client;
describe('Algodv2', () => {
    const baseServer = process.env.ALGOD_SERVER || "https://testnet-api.algonode.cloud/"
    const port = process.env.ALGOD_PORT || 443
    const token = process.env.ALGOD_TOKEN || ''
    before(() => {
        client = new algosdk.Algodv2(token, baseServer, port)
    });
    describe('Queries', () => {
        it('should get block query options', () => {
            const blockQueryOptions = getBlock(client, {round: 1234});
            assert(blockQueryOptions.queryKey[1] === "getBlock")
            assert(blockQueryOptions.queryKey[2].round === 1234)
        })
    })

});
