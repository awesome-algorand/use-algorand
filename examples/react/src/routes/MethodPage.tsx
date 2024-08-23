import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {useMemo, useState} from "react";
import {useAlgodTestOptions} from "./useAlgodTestOptions.js";
import {useIndexerTestOptions} from "./useIndexerTestOptions.ts";
import {encodeJSON, Encodable} from 'algosdk'

export default function MethodPage() {
    const params = useParams()
    const [clientType, setClientType] = useState<"official" | "experimental">("official")
    const algodOptions = useAlgodTestOptions(clientType)
    const indexerOptions = useIndexerTestOptions(clientType)

    if(typeof params.method === 'undefined' || typeof params.interface === 'undefined')
        throw new Error("Method and interface are required")

    const query = useQuery(
        params.interface === 'indexer' ?
            indexerOptions[params.method] :
            algodOptions[params.method]
    )

    const title = clientType === 'official' ?
        `Official ${params.interface === 'indexer' ? 'Indexer' : 'Algodv2'}` :
        `Experimental: ${params.interface === 'indexer' ? 'indexer-fetch' : 'algod-fetch'}`

    const encoded = useMemo(() => {
        if(typeof query?.data === 'undefined') return
        try{
            return encodeJSON(query.data as Encodable, {space: 2})
        } catch (e){
            return JSON.stringify(query.data, null, 2)
        }
    }, [query.data])

    return (
        <main className="container">
            <hgroup>
                <h1>{title}</h1>
                <h2>
                    {params.method}
                </h2>
            </hgroup>
            <fieldset>
                <label>
                    <input name="switch" type="checkbox" role="switch"
                           onChange={(e) => {
                               setClientType(e.target.checked ? "experimental" : "official")
                           }
                    }/>
                    Enable experimental fetch library
                </label>
            </fieldset>
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
                            {query.status}
                        </td>
                        <td>
                            {query.isLoading ? "true" : "false"}
                        </td>
                        <td>
                            {query.isError ? "true" : "false"}
                        </td>
                        <td>
                            {new Date(query.dataUpdatedAt).toString()}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </figure>
            <h2>Result</h2>
            {query.isLoading && <p>Loading...</p>}
            {query.isError && <p>Error: {query.error.message}</p>}
            {query.isSuccess && <pre>{encoded}</pre>}
            {query.isSuccess && <button onClick={()=>query.refetch()}>Refetch</button>}
        </main>
    )
}
