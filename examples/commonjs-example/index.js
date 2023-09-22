require('dotenv').config()
const algosdk = require('algosdk')
const {getClient} = require('@algofam/use-algorand-queries/algod')
const assert = require('node:assert')
const client = getClient({
    server: process.env.ALGOD_SERVER,
    port: process.env.ALGOD_PORT,
    token: process.env.ALGOD_TOKEN,
})
import('chalk').then(({default: chalk})=>{
    console.log(chalk.yellow("Loading from"),chalk.blue(require.resolve('@algofam/use-algorand-queries')))
    assert(client instanceof algosdk.Algodv2)
    console.log(chalk.green('Finished!'))
})
