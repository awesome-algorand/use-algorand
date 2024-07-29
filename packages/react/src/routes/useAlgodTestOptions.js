import {useMemo} from "react";
import {createAlgodOptions} from "@awesome-algorand/use-algorand-test";
import * as algosdk from "algosdk";
import {AlgodClient} from "@awesome-algorand/algod-fetch";
import * as algofetchQueries from "@awesome-algorand/use-algorand-queries/algo-fetch/algod";
import * as algosdkQueries from "@awesome-algorand/use-algorand-queries/algosdk/algod";
export const algodFetchClient = new AlgodClient({
    BASE: import.meta.env.VITE_ALGOD_SERVER,
})

export const algodClient = new algosdk.Algodv2(
    import.meta.env.VITE_ALGOD_TOKEN,
    import.meta.env.VITE_ALGOD_SERVER,
    import.meta.env.VITE_ALGOD_PORT
)
export const indexerClient = new algosdk.Indexer(
    import.meta.env.VITE_INDEXER_TOKEN,
    import.meta.env.VITE_INDEXER_SERVER,
    import.meta.env.VITE_INDEXER_PORT
)

export function useAlgodTestOptions(clientType){
    return useMemo(()=>{
        return createAlgodOptions(
            clientType === 'official' ? algosdkQueries : algofetchQueries,
            clientType === 'official' ? algodClient : algodFetchClient,
            import.meta.env.VITE_TEST_ADDRESS,
            import.meta.env.VITE_TEST_APPLICATION,
            import.meta.env.VITE_TEST_ASSET,
            import.meta.env.VITE_TEST_TRANSACTION,
            1,
            {})
    }, [clientType])
}
