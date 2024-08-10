import {useEffect, useState} from "react";
import { useWallet } from "@txnlab/use-wallet-react";
import type {BlockTransaction, BlockData} from "@algorandfoundation/algokit-subscriber/types/block";
import {useBlock} from "@awesome-algorand/react-query/lib/algosdk";

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
    selector: (txns: BlockTransaction[]) => boolean = () => true,
) {
    /**
     * The algorand client
     */
    const manager = useWallet()
    /**
     * The last round that the selector returned true
     */
    const [lastRound, setLastRound] = useState(0);
    /**
     * The current round we are checking
     */
    const [round, setRound] = useState(0);
    /**
     * The block for the current round
     */
    const block = useBlock({round});

    // Check if the selector returns true for the current block
    useEffect(() => {
        if(typeof block.data === "undefined") return
        let txns = (block.data as BlockData).block.txns
        if (Array.isArray(txns) && txns.length > 0) {
            if (selector(txns)) {
                setLastRound(round);
            }
        }
    }, [round, block.data, selector]);

    // Increment the round after next block
    useEffect(() => {
        if (!manager.algodClient) return;
        manager.algodClient
            .statusAfterBlock(round)
            .do()
            .then((b) => setRound(round === 0 ? b["last-round"] : round + 1));
    }, [manager.algodClient, round]);

    // Return the last round that the selector returned true
    return lastRound;
}
