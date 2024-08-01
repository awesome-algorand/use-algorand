<script>
    import * as algofetchQueries from "@awesome-algorand/query-core/algo-fetch/algod";
    import * as algosdkQueries from "@awesome-algorand/query-core/algosdk/algod";
    import * as indexerfetchQueries from "@awesome-algorand/query-core/algo-fetch/indexer";
    import * as indexersdkQueries from "@awesome-algorand/query-core/algosdk/indexer";
    import {createQueries} from "@tanstack/svelte-query";
    import QueryTableRow from "./QueryTableRow.svelte";
    import algosdk from "algosdk";
    import {createAlgodOptions, createIndexerOptions} from "@awesome-algorand/query-core/test";
    import {AlgodClient} from "@awesome-algorand/algod-fetch"
    import {IndexerClient} from "@awesome-algorand/indexer-fetch";
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

    const indexerFetch = new IndexerClient({
        BASE: PUBLIC_INDEXER_SERVER || "http://localhost",
    })

    let clientType = "official"

    $: indexerOptions = createIndexerOptions(
        clientType === 'official' ? indexersdkQueries : indexerfetchQueries,
        clientType === 'official' ? indexerClient: indexerFetch,
        PUBLIC_TEST_ADDRESS,
        parseInt(PUBLIC_TEST_APPLICATION),
        parseInt(PUBLIC_TEST_ASSET),
        PUBLIC_TEST_TRANSACTION,
        1,
        {})
    //
    $: indexerKeys = Object.keys(indexerOptions)
    $: indexerQueries = createQueries({
        queries: indexerKeys.map(key => indexerOptions[key]),
    })

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
    $: algodQueries = createQueries({queries: algodKeys.map(key => algodOptions[key])})

</script>
<main class="container">
    <h1>{clientType === 'official'? "Official Algodv2" : "@awesome-algorand/algod-fetch"}</h1>
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
    <h1>{clientType === 'official'? "Official Indexer" : "@awesome-algorand/indexer-fetch"}</h1>
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
