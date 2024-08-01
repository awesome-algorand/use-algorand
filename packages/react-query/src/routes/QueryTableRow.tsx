import {Link} from "react-router-dom";

export default function QueryTableRow({name, type, query}: {name: string, type: string, query: {isLoading: boolean, isError: boolean}}){
    const loadingColor = query.isError ? "red" : query.isLoading? "yellow" : "green"
    const errorColor = query.isError && ! query.isLoading ? "red" : query.isLoading ? "yellow" : "green"
    return (
        <tr>
            <td><Link to={`/${type}/${name}`}>{name}</Link></td>
            <td style={{color: loadingColor}}>{query.isLoading ? "true": "false"}</td>
            <td style={{color: errorColor}}>{query.isError ? "true": "false"}</td>
        </tr>
    )
}
