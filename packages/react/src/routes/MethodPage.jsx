import {useParams} from "react-router-dom";
import {createAlgodOptions, createIndexerOptions} from "@algofam/use-algorand-test";
import {useQuery} from "@tanstack/react-query";

export default function MethodPage() {
    const params = useParams()
    const algodOptions = createAlgodOptions(
        import.meta.env.VITE_TEST_ADDRESS,
        import.meta.env.VITE_TEST_APPLICATION,
        import.meta.env.VITE_TEST_ASSET,
        import.meta.env.VITE_TEST_TRANSACTION,
        1,
        {
            server: import.meta.env.VITE_ALGOD_SERVER || "http://localhost",
            port: import.meta.env.VITE_ALGOD_PORT || 4001,
            token: import.meta.env.VITE_ALGOD_TOKEN || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        })

    const indexerOptions = createIndexerOptions(
        import.meta.env.VITE_TEST_ADDRESS,
        import.meta.env.VITE_TEST_APPLICATION,
        import.meta.env.VITE_TEST_ASSET,
        import.meta.env.VITE_TEST_TRANSACTION,
        1,
        {
            server: import.meta.env.VITE_INDEXER_SERVER || "http://localhost",
            port: import.meta.env.VITE_INDEXER_PORT || 8980,
            token: import.meta.env.VITE_INDEXER_TOKEN || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        }
    )

    const query = useQuery(
        params.interface === 'indexer' ?
            indexerOptions[params.method] :
            algodOptions[params.method]
    )
    console.log(query)
    return (
        <main className="container">
            <hgroup>
                <h1>{params.interface}</h1>
                <h2>
                    {params.method}
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
                            {query.status}
                        </td>
                        <td>
                            {query.isLoading ? "true" : "false"}
                        </td>
                        <td>
                            {query.isError  ? "true" : "false"}
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
        </main>
    )
}
