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
 * @property {object} client The client
 * @property {string} [token] Algodv2 Token
 * @property {string} [server] Algodv2 Server
 * @property {number} [port] Algodv2 Port
 */

/**
 * @typedef {QueryOptions & ClientOptions} AlgorandQueryOptions
 */

export * from './Algodv2.js'
