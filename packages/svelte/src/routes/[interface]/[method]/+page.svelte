<script>
    import {page} from '$app/stores';
    import {createAlgodOptions, createIndexerOptions} from "@awesome-algorand/use-algorand-test";
    import * as algosdk from "algosdk";
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

    const indexerOpitons = createIndexerOptions(
        indexerClient,
        PUBLIC_TEST_ADDRESS,
        PUBLIC_TEST_APPLICATION,
        PUBLIC_TEST_ASSET,
        PUBLIC_TEST_TRANSACTION,
        1,
        {})
    const algodOptions = createAlgodOptions(
        algodClient,
        PUBLIC_TEST_ADDRESS,
        PUBLIC_TEST_APPLICATION,
        PUBLIC_TEST_ASSET,
        PUBLIC_TEST_TRANSACTION,
        1,
        {})

    const query = createQuery($page.params.interface === 'Algodv2' ? algodOptions[$page.params.method] : indexerOpitons[$page.params.method])
</script>
<main class="container">
    <hgroup>
        <h1>{$page.params.interface}</h1>
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
    <h2>Result</h2>
    {#if $query.isLoading}
        <p>Loading...</p>
    {:else if $query.isError}
        <p>Error: {$query.error.message}</p>
    {:else if $query.isSuccess}
        <pre>{JSON.stringify($query.data, null, 2)}</pre>
    {/if}
</main>
