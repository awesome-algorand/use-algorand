import {useQueries} from "@tanstack/react-query";
import {createAlgodOptions, createIndexerOptions} from "@algofam/use-algorand-test";
import QueryTableRow from "./QueryTableRow.jsx";

export default function HomePage() {
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
    const algodKeys = Object.keys(algodOptions)
    const algodQueries = useQueries({queries: algodKeys.map(key => algodOptions[key])})

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
    const indexerKeys = Object.keys(indexerOptions)
    const indexerQueries = useQueries({queries: indexerKeys.map(key => indexerOptions[key])})

    return (
        <main className="container">
            <h1>Algodv2</h1>
            <figure>
                <table>
                    <thead>
                    <tr>
                        <th>SDK Method</th>
                        <th>Loading</th>
                        <th>Error</th>
                    </tr>
                    </thead>
                    <tbody>
                    {algodQueries.map((query, i) => (
                        <QueryTableRow key={i} name={algodKeys[i]} type="algod" query={query}/>))}
                    </tbody>
                </table>
            </figure>
            <h1>Indexer</h1>
            <figure>
                <table>
                    <thead>
                    <tr>
                        <th>SDK Method</th>
                        <th>Loading</th>
                        <th>Error</th>
                    </tr>
                    </thead>
                    <tbody>
                    {indexerQueries.map((query, i) => (
                        <QueryTableRow key={i} name={indexerKeys[i]} type="indexer" query={query}/>))}
                    </tbody>
                </table>
            </figure>
        </main>
    )
}
