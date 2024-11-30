import {useEffect, useState} from "react";
import { useWallet } from "@txnlab/use-wallet-react";
import {useBlockInformation} from "@awesome-algorand/react-query/lib/algosdk";

/**
 * Transaction Selector Hook
 *
 * Watch the blockchain for a transaction that matches the selector,
 * then return the round that the transaction was found in.
 *
 * @param {Function} selector Filter function
 * @TODO Migrate to algokit-subscriber
 */
export function useTransactionSelector(
    selector: (txns: any[]) => boolean = () => true,
) {
    /**
     * The algorand client
     */
    const manager = useWallet()
    /**
     * The last round that the selector returned true
     */
    const [lastRound, setLastRound] = useState(BigInt(0));
    /**
     * The current round we are checking
     */
    const [round, setRound] = useState(BigInt(0));
    /**
     * The block for the current round
     */
    const block = useBlockInformation({round: Number(round)});

    // Check if the selector returns true for the current block
    useEffect(() => {
        if(typeof block.data === "undefined") return
        let txns = (block.data as any).block.txns
        if (Array.isArray(txns) && txns.length > 0) {
            if (selector(txns)) {
                setLastRound(BigInt(round));
            }
        }
    }, [round, block.data, selector]);

    // Increment the round after next block
    useEffect(() => {
        if (!manager.algodClient) return;
        manager.algodClient
            .statusAfterBlock(round)
            .do()
            .then((b) => setRound(round === BigInt(0) ? b.lastRound : round + BigInt(1)));
    }, [manager.algodClient, round]);

    // Return the last round that the selector returned true
    return lastRound;
}
