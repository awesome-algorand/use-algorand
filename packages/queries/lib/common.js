/**
 * @typedef {import('@tanstack/query-core').QueryOptions} QueryOptions
 * ## Query Options
 *
 * Standard interface for @tanstack/query-core. Additional info can be found at
 * {@link https://tanstack.com/query/latest}
 *
 * @see https://tanstack.com/query/latest
 */

/**
 * Algorand HTTP Client Options
 *
 * @typedef {object} ClientOptions
 * @property {import('algosdk').Algodv2} [client] Algod Client
 * @property {import('algosdk').Indexer} [indexer] Indexer Client
 * @property {string} [token] Service Token
 * @property {string} [server] Service Host
 * @property {string | number} [port] Service Port
 */

/**
 * @typedef {QueryOptions & ClientOptions} AlgorandQueryOptions
 */

/**
 * @typedef {import('algosdk/dist/types/client/v2/jsonrequest').default} JSONRequest
 * @external
 */
/**
 * Composition of algosdk JSONRequest
 *
 * Use an object literal instead of function chaining
 *
 * @param {JSONRequest} jsonRequest The jsonRequest to apply the queries to
 * @param {{[k: string]: any}} [query] Queries to apply to the jsonRequest
 */
export function applyQuery(jsonRequest, query={}){
    Object.keys(query).forEach(key => {
        jsonRequest = jsonRequest[key](query[key]);
    })

    return jsonRequest
}
