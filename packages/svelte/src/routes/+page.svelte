<script>
    import MarkdownIt from "markdown-it";
    import {createQueries} from "@tanstack/svelte-query";
    import Readme from '../../README.md?raw'
    import QueryTableRow from "./QueryTableRow.svelte";
    import * as algosdk from "algosdk";
    import {createAlgodOptions, createIndexerOptions} from "@awesome-algorand/use-algorand-test";

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

    const md = new MarkdownIt();
    console.log(PUBLIC_ALGOD_SERVER, PUBLIC_ALGOD_PORT)
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

    const algodOptions = createAlgodOptions(
        algodClient,
        PUBLIC_TEST_ADDRESS,
        PUBLIC_TEST_APPLICATION,
        PUBLIC_TEST_ASSET,
        PUBLIC_TEST_TRANSACTION,
        1,
        {})

    const algodKeys = Object.keys(algodOptions)
    const algodQueries = createQueries(algodKeys.map(key => algodOptions[key]))

    const indexerOptions = createIndexerOptions(
        indexerClient,
        PUBLIC_TEST_ADDRESS,
        PUBLIC_TEST_APPLICATION,
        PUBLIC_TEST_ASSET,
        PUBLIC_TEST_TRANSACTION,
        1,
        {})

    const indexerKeys = Object.keys(indexerOptions)
    const indexerQueries = createQueries(indexerKeys.map(key => indexerOptions[key]))

</script>
<main class="container">
    {@html md.render(Readme)}
    <h1>Algodv2</h1>
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
