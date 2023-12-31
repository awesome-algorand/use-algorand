import {block} from "@algofam/use-algorand-queries/algod";
import { useQuery } from "@tanstack/react-query";

/**
 *
 * @param {number} round
 */
export function useBlock(round){
    return useQuery(block(round))
}
