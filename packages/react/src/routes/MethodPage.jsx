import {useParams} from "react-router-dom";
import {createIndexerOptions} from "@awesome-algorand/use-algorand-test";
import {useQuery} from "@tanstack/react-query";
import {useState} from "react";
import {indexerClient, useAlgodTestOptions} from "./useAlgodTestOptions.js";


export default function MethodPage() {
    const params = useParams()
    const [clientType, setClientType] = useState("official")
    const algodOptions = useAlgodTestOptions(clientType)

    const indexerOptions = createIndexerOptions(
        indexerClient,
        import.meta.env.VITE_TEST_ADDRESS,
        import.meta.env.VITE_TEST_APPLICATION,
        import.meta.env.VITE_TEST_ASSET,
        import.meta.env.VITE_TEST_TRANSACTION,
        1,
        {})

    const query = useQuery(
        params.interface === 'indexer' ?
            indexerOptions[params.method] :
            algodOptions[params.method]
    )

    const title = clientType === 'official' ?
        `Official ${params.interface === 'indexer' ? 'Indexer' : 'Algodv2'}` :
        `Experimental: ${params.interface === 'indexer' ? 'indexer-fetch' : 'algod-fetch'}`
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
                           onChange={(e) => setClientType(e.target.checked ? "experimental" : "official")}/>
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
            {query.isSuccess && <pre>{JSON.stringify(query.data, null, 2)}</pre>}
            {query.isSuccess && <button onClick={()=>query.refetch()}>Refetch</button>}
        </main>
    )
}
