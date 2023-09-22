export default function QueryTableRow({name, type, query}){
    const loadingColor = query.isError ? "red" : query.isLoading? "yellow" : "green"
    const errorColor = query.isError && ! query.isLoading ? "red" : query.isLoading ? "yellow" : "green"
    return (
        <tr>
            <td><a href={`/${type}/${name}`}>{name}</a></td>
            <td style={{color: loadingColor}}>{query.isLoading ? "true": "false"}</td>
            <td style={{color: errorColor}}>{query.isError ? "true": "false"}</td>
        </tr>
    )
}
