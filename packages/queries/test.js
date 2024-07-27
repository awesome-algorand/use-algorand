import {AlgodClient} from "@awesome-algorand/algod-fetch"

const client = new AlgodClient( {
    BASE: 'https://testnet-api.algonode.cloud'
})

console.log(client)
