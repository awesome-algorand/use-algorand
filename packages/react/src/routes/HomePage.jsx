import {useQueries} from "@tanstack/react-query";
import {createIndexerOptions} from "@awesome-algorand/use-algorand-test";
import QueryTableRow from "./QueryTableRow.jsx";
import {useState} from "react";
import {indexerClient, useAlgodTestOptions} from "./useAlgodTestOptions.js";

export default function HomePage() {
    const [clientType, setClientType] = useState("official")
    // Algod
    const algodOptions = useAlgodTestOptions(clientType)
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
            <h1>{clientType === 'official' ? "Official Algodv2" : "@awesome-algorand/algod-fetch"}</h1>
            <fieldset>
                <label>
                    <input name="switch" type="checkbox" role="switch" onChange={(e)=>setClientType(e.target.checked ? "experimental" : "official")}/>
                    Enable experimental fetch library
                </label>
            </fieldset>
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
            <h1>Official Indexer</h1>
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
