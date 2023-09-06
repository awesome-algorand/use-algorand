<script>
    import {useBlock} from "$lib/use-algod.js";
    import {PUBLIC_ALGOD_SERVER, PUBLIC_ALGOD_PORT, PUBLIC_ALGOD_TOKEN} from "$env/static/public";
    const query = useBlock(1, {
        server: PUBLIC_ALGOD_SERVER || "http://localhost",
        port: PUBLIC_ALGOD_PORT || 4001,
        token: PUBLIC_ALGOD_TOKEN || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    })

    console.log(query)
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{#if $query.isLoading}
    <p>Loading...</p>
{:else if $query.isError}
    <p>Error: {$query.error.message}</p>
{:else if $query.isSuccess}
    <pre>
    {JSON.stringify($query.data, null, 2)}
    </pre>
{/if}
