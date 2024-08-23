import {useMemo} from "react";
import {createAlgodOptions} from "@awesome-algorand/query-core/test";
import {AlgodClient as Algodv2} from "algosdk/client/algod";
import {AlgodClient} from "@awesome-algorand/algod-fetch";
import * as algofetchQueries from "@awesome-algorand/query-core/algo-fetch/algod";
import * as algosdkQueries from "@awesome-algorand/query-core/algosdk/algod";
export const algodFetchClient = new AlgodClient({
    BASE: import.meta.env.VITE_ALGOD_SERVER,
})

export const algodClient = new Algodv2(
    import.meta.env.VITE_ALGOD_TOKEN,
    import.meta.env.VITE_ALGOD_SERVER,
    import.meta.env.VITE_ALGOD_PORT
)

export function useAlgodTestOptions(clientType: 'official' | 'experimental'){
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
