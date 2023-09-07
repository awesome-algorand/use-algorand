<script>
    export let name;
    export let query;
    export let path;

    let loadingColor = "inherit"
    let errorColor = "inherit"

    $: {
        loadingColor = query.isError ? "red" : query.isLoading? "yellow" : "green"
        errorColor = query.isError && ! query.isLoading ? "red" : query.isLoading ? "yellow" : "green"
    }
</script>
<tr>
    <td><a href="/{path}/{name}">{name}</a></td>
    <td style="color: {loadingColor}">{query.isLoading}</td>
    <td style="color: {errorColor}">{query.isError}</td>
</tr>
