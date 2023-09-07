<script>
    export let name;
    export let query;

    let loadingColor = "inherit"
    let errorColor = "inherit"

    $: {
        loadingColor = query.isError ? "red" : query.isLoading? "yellow" : "green"
        errorColor = query.isError && ! query.isLoading ? "red" : query.isLoading ? "yellow" : "green"
    }
</script>
<tr>
    <td>{name}</td>
    <td style="color: {loadingColor}">{query.isLoading}</td>
    <td style="color: {errorColor}">{query.isError}</td>
</tr>
