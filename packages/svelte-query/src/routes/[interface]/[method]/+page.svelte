<script>
    import * as algofetchQueries from "@awesome-algorand/query-core/algo-fetch/algod";
    import * as algosdkQueries from "@awesome-algorand/query-core/algosdk/algod";

    import {page} from '$app/stores';
    import {createAlgodOptions, createIndexerOptions} from "@awesome-algorand/query-core/test";
    import algosdk from "algosdk";
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
    import {createQuery} from "@tanstack/svelte-query";
    import {AlgodClient} from "@awesome-algorand/algod-fetch";
    import {IndexerClient} from "@awesome-algorand/indexer-fetch";
    import * as indexersdkQueries from "@awesome-algorand/query-core/algosdk/indexer";
    import * as indexerfetchQueries from "@awesome-algorand/query-core/algo-fetch/indexer";
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
    $: algodOptions = createAlgodOptions(
        clientType === 'official' ? algosdkQueries : algofetchQueries,
        clientType === 'official' ? algodClient: algoFetch,
        PUBLIC_TEST_ADDRESS,
        parseInt(PUBLIC_TEST_APPLICATION),
        parseInt(PUBLIC_TEST_ASSET),
        PUBLIC_TEST_TRANSACTION,
        1,
        {})
    $: console.log($page.params)
    $: query = createQuery($page.params.interface === 'Algodv2' ? algodOptions[$page.params.method] : indexerOptions[$page.params.method])

    $: title = $page.params.interface === 'Algodv2' ?
        clientType === 'official'? "Official Algodv2" : "@awesome-algorand/algod-fetch"
        : clientType === 'official'? "Official Indexer" : "@awesome-algorand/indexer-fetch"
</script>
<main class="container">
    <hgroup>
        <h1>{title}</h1>
        <h2>
            {$page.params.method}
        </h2>
    </hgroup>
    <figure>
        <table>
            <thead>
            <tr>
                <th>Status</th>
                <th>Loading</th>
                <th>Error</th>
                <th>Updated</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    {$query.status}
                </td>
                <td>
                    {$query.isLoading}
                </td>
                <td>
                    {$query.isError}
                </td>
                <td>
                    {new Date($query.dataUpdatedAt)}
                </td>
            </tr>
            </tbody>
        </table>
    </figure>
    <fieldset>
        <label>
            <input name="switch" type="checkbox" role="switch"
                   on:change={(e) => clientType = e.target.checked ? "experimental" : "official"}/>
            Enable experimental fetch library
        </label>
    </fieldset>
    <h2>Result</h2>
    {#if $query.isLoading}
        <p>Loading...</p>
    {:else if $query.isError}
        <p>Error: {$query.error.message}</p>
    {:else if $query.isSuccess}
        <pre>{JSON.stringify($query.data, null, 2)}</pre>
        <button on:click={$query.refetch()}>Refetch</button>
    {/if}
</main>
