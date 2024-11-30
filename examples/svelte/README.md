Svelte `store` wrapper for the Algorand SDK `HTTPClient` using `@tanstack/svelte-query` for caching and
`@awesome-algorand/use-algorand-queries` for the Algorand SDK QueryOptions.
It also supports the experimental `@awesome-algorand/algo-fetch` libraries

## Get Started [WIP]

### Install

```bash
npm install @awesome-algorand/svelte-query @tanstack/svelte-query --save 
```

### Usage (algosdk) [WIP]

```bash
npm install algosdk --save
```

```svelte
<script>
import { useBlock } from "@awesome-algorand/svelte-query/algosdk/algod";
const block = useBlock({round:1234})
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
