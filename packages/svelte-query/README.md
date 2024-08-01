# @awesome-algorand/use-algorand-svelte

Svelte `store` wrapper for the Algorand SDK `HTTPClient` using `@tanstack/svelte-query` for caching and
`@awesome-algorand/use-algorand-queries` for the Algorand SDK QueryOptions.

## Get Started (algosdk)

### Install

```bash
npm install algosdk @awesome-algorand/use-algorand-svelte @tanstack/svelte-query --save 
```

### Usage

```sveltehtml
<script>
import { useBlock } from "@awesome-algorand/use-algorand-svelte/algosdk/algod";
const block = useBlock(1234)
</script>

<div>
    {#if $block.isLoading}
        <p>Loading...</p>
    {:else if $block.isError}
        <p>Error: {$block.error.message}</p>
    {:else if $block.isSuccess}
        <p>{$block.data}</p>
    {/if}
</div>
```

See the [examples](./examples) for more details.
