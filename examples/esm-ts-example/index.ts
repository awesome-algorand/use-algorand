import "dotenv/config";
import chalk from 'chalk'
import algosdk from 'algosdk'
import {getClient} from "@algofam/use-algorand-queries";
import assert from "node:assert";
import {resolve} from 'import-meta-resolve'
const client = getClient({
    server: process.env.ALGOD_SERVER,
    port: process.env.ALGOD_PORT,
    token: process.env.ALGOD_TOKEN,
})

console.log(chalk.yellow("Loading from"),chalk.blue(resolve('@algofam/use-algorand-queries', import.meta.url)))
assert(client instanceof algosdk.Algodv2)
console.log(chalk.green('Finished!'))
