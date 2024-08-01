import {AlgodClient} from "@awesome-algorand/algod-fetch";
import { Algodv2 } from "algosdk";
import React, {useMemo} from "react";


export type ClientType = 'algod-fetch' | 'algosdk'
export type ClientContextProps = {
    type: ClientType
    client: AlgodClient | Algodv2
}

export const ClientContext = React.createContext<ClientContextProps>({
    type: 'algod-fetch',
    client: new AlgodClient({
        BASE: import.meta.env.VITE_ALGOD_SERVER,
    })
})


export function useAlgod(type: ClientType): AlgodClient | Algodv2 {
    return useMemo(() => {
        switch (type) {
            case 'algod-fetch':
                return new AlgodClient({
                    BASE: import.meta.env.VITE_ALGOD_SERVER,
                })
            case 'algosdk':
                return new Algodv2(
                    import.meta.env.VITE_ALGOD_TOKEN,
                    import.meta.env.VITE_ALGOD_SERVER,
                    import.meta.env.VITE_ALGOD_PORT,
                )
        }
    },[type])
}
