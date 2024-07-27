import {useQueries} from "@tanstack/react-query";
import {createAlgodOptions, createIndexerOptions} from "@algofam/use-algorand-test";
import QueryTableRow from "./QueryTableRow.jsx";
import * as algosdk from "algosdk";

const algodClient = new algosdk.Algodv2(
    import.meta.env.VITE_ALGOD_TOKEN,
    import.meta.env.VITE_ALGOD_SERVER,
    import.meta.env.VITE_ALGOD_PORT
)
const indexerClient = new algosdk.Indexer(
    import.meta.env.VITE_INDEXER_TOKEN,
    import.meta.env.VITE_INDEXER_SERVER,
    import.meta.env.VITE_INDEXER_PORT
)
export default function HomePage() {
    const algodOptions = createAlgodOptions(
        algodClient,
        import.meta.env.VITE_TEST_ADDRESS,
        import.meta.env.VITE_TEST_APPLICATION,
        import.meta.env.VITE_TEST_ASSET,
        import.meta.env.VITE_TEST_TRANSACTION,
        1,
        {})
    const algodKeys = Object.keys(algodOptions)
    const algodQueries = useQueries({queries: algodKeys.map(key => algodOptions[key])})

    const indexerOptions = createIndexerOptions(
        indexerClient,
        import.meta.env.VITE_TEST_ADDRESS,
        import.meta.env.VITE_TEST_APPLICATION,
        import.meta.env.VITE_TEST_ASSET,
        import.meta.env.VITE_TEST_TRANSACTION,
        1,
        {})
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
