import {useQueries} from "@tanstack/react-query";
import QueryTableRow from "./QueryTableRow.jsx";
import {useState} from "react";
import {useAlgodTestOptions} from "./useAlgodTestOptions.js";
import {useIndexerTestOptions} from "./useIndexerTestOptions.ts";

export default function HomePage() {
    const [clientType, setClientType] = useState<"official" | "experimental">("official")

    // Algod
    const algodOptions = useAlgodTestOptions(clientType)
    const algodKeys = Object.keys(algodOptions)
    const algodQueries = useQueries({queries: algodKeys.map(key => algodOptions[key])})

    // Indexer
    const indexerOptions = useIndexerTestOptions(clientType)
    const indexerKeys = Object.keys(indexerOptions)
    const indexerQueries = useQueries({queries: indexerKeys.map(key => indexerOptions[key])})

    return (
        <main className="container">
            <h1>{clientType === 'official' ? "Official Algodv2" : "@awesome-algorand/algod-fetch"}</h1>
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
            <h1>{clientType === 'official' ? "Official Indexer" : "@awesome-algorand/indexer-fetch"}</h1>
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
