<script>
    import * as algofetchQueries from "@awesome-algorand/query-core/algo-fetch/algod";
    import * as algosdkQueries from "@awesome-algorand/query-core/algosdk/algod";

    import MarkdownIt from "markdown-it";
    import {createQueries} from "@tanstack/svelte-query";
    import Readme from '../../README.md?raw'
    import QueryTableRow from "./QueryTableRow.svelte";
    import algosdk from "algosdk";
    import {createAlgodOptions, createIndexerOptions} from "@awesome-algorand/query-core/test";
    import {AlgodClient} from "@awesome-algorand/algod-fetch"
    // TODO: Better test fixtures
    import {
        PUBLIC_TEST_ADDRESS,
        PUBLIC_TEST_ASSET,
        PUBLIC_TEST_TRANSACTION,
        PUBLIC_TEST_APPLICATION,
        PUBLIC_ALGOD_SERVER,
        PUBLIC_ALGOD_PORT,
        PUBLIC_ALGOD_TOKEN, PUBLIC_INDEXER_SERVER, PUBLIC_INDEXER_PORT, PUBLIC_INDEXER_TOKEN
    } from "$env/static/public";
    //
    const md = new MarkdownIt();
    // console.log(PUBLIC_ALGOD_SERVER, PUBLIC_ALGOD_PORT)
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
    const algoFetch = new AlgodClient({
        BASE: PUBLIC_ALGOD_SERVER || "http://localhost",
    })
    const indexerOptions = createIndexerOptions(
        indexerClient,
        PUBLIC_TEST_ADDRESS,
        parseInt(PUBLIC_TEST_APPLICATION),
        parseInt(PUBLIC_TEST_ASSET),
        PUBLIC_TEST_TRANSACTION,
        1,
        {})
    //
    const indexerKeys = Object.keys(indexerOptions)
    const indexerQueries = createQueries({
        queries: indexerKeys.map(key => indexerOptions[key]),
    })
    let clientType = "official"
    let algodOptions
     $: algodOptions = createAlgodOptions(
         clientType === 'official' ? algosdkQueries : algofetchQueries,
         clientType === 'official' ? algodClient: algoFetch,
         PUBLIC_TEST_ADDRESS,
         parseInt(PUBLIC_TEST_APPLICATION),
         parseInt(PUBLIC_TEST_ASSET),
         PUBLIC_TEST_TRANSACTION,
         1,
         {})
    $: algodKeys = Object.keys(algodOptions)
    let algodQueries
    $: algodQueries = createQueries({queries: algodKeys.map(key => algodOptions[key])})

</script>
<main class="container">
    {@html md.render(Readme)}
    <h1>{clientType === 'official'? "Algodv2" : "@awesome-algorand/algod-fetch"}</h1>
    <fieldset>
    <label>
        <input name="switch" type="checkbox" role="switch" on:change={(e)=>clientType = e.target.checked ? "experimental" : "official"}/>
        Enable experimental fetch library
    </label>
    </fieldset>
    <figure>
        <table>
            <tr>
                <th>SDK Method</th>
                <th>Loading</th>
                <th>Error</th>
            </tr>
            <tbody>
            {#each $algodQueries as query, i}
                <QueryTableRow path="Algodv2" name={algodKeys[i]} query={query}/>
            {/each}
            </tbody>
        </table>
    </figure>
    <h1>Indexer</h1>
    <figure>
        <table>
            <tr>
                <th>SDK Method</th>
                <th>Loading</th>
                <th>Error</th>
            </tr>
            <tbody>
            {#each $indexerQueries as query, i}
               <QueryTableRow path="Indexer" name={indexerKeys[i]} query={query}/>
            {/each}
            </tbody>
        </table>
    </figure>
</main>
