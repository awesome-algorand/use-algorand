import {createQuery} from "@tanstack/svelte-query";

import {
    getBlockQueryOptions
} from "@algofam/use-algorand-queries";



/**
 *
 * @param round
 * @param options
 */
export function useBlock(round, options){
    return createQuery(getBlockQueryOptions(round, options))
}
