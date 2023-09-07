import {getBlockQueryOptions} from "@algofam/use-algorand-queries";
import { useQuery } from "@tanstack/react-query";

/**
 *
 * @param {number} round
 */
export function useBlock(round){
    return useQuery(getBlockQueryOptions(round))
}
