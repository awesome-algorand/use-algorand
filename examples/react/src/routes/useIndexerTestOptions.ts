import {useMemo} from "react";
import {createIndexerOptions} from "@awesome-algorand/query-core/test";
import * as algosdk from "algosdk";
import {IndexerClient} from "@awesome-algorand/indexer-fetch";
import * as algofetchQueries from "@awesome-algorand/query-core/algo-fetch/indexer";
import * as algosdkQueries from "@awesome-algorand/query-core/algosdk/indexer";

export const indexerFetchClient = new IndexerClient({
    BASE: import.meta.env.VITE_INDEXER_SERVER,
})
export const indexerClient = new algosdk.Indexer(
    import.meta.env.VITE_INDEXER_TOKEN,
    import.meta.env.VITE_INDEXER_SERVER,
    import.meta.env.VITE_INDEXER_PORT
)

export function useIndexerTestOptions(clientType: 'official' | 'experimental'){
    return useMemo(()=>{
        return createIndexerOptions(
            clientType === 'official' ? algosdkQueries : algofetchQueries,
            clientType === 'official' ? indexerClient : indexerFetchClient,
            import.meta.env.VITE_TEST_ADDRESS,
            import.meta.env.VITE_TEST_APPLICATION,
            import.meta.env.VITE_TEST_ASSET,
            import.meta.env.VITE_TEST_TRANSACTION,
            1,
            {})
    }, [clientType])
}
