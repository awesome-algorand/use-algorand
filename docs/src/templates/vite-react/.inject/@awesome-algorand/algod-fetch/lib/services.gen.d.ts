import type { CancelablePromise } from './core/CancelablePromise.js';
import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { GetDebugSettingsProfResponse, PutDebugSettingsProfResponse, AbortCatchupData, AbortCatchupResponse, StartCatchupData, StartCatchupResponse, GetParticipationKeysResponse, AddParticipationKeyData, AddParticipationKeyResponse, GenerateParticipationKeysData, GenerateParticipationKeysResponse, DeleteParticipationKeyByIdData, DeleteParticipationKeyByIdResponse, GetParticipationKeyByIdData, GetParticipationKeyByIdResponse, AppendKeysData, AppendKeysResponse, ShutdownNodeData, ShutdownNodeResponse, GetGenesisResponse, HealthCheckResponse, MetricsResponse, GetReadyResponse, SwaggerJsonResponse, AccountInformationData, AccountInformationResponse, AccountApplicationInformationData, AccountApplicationInformationResponse, AccountAssetsInformationData, AccountAssetsInformationResponse, AccountAssetInformationData, AccountAssetInformationResponse, GetPendingTransactionsByAddressData, GetPendingTransactionsByAddressResponse, GetApplicationByIdData, GetApplicationByIdResponse, GetApplicationBoxByNameData, GetApplicationBoxByNameResponse, GetApplicationBoxesData, GetApplicationBoxesResponse, GetAssetByIdData, GetAssetByIdResponse, GetBlockData, GetBlockResponse, GetBlockHashData, GetBlockHashResponse, GetLightBlockHeaderProofData, GetLightBlockHeaderProofResponse, GetBlockLogsData, GetBlockLogsResponse, GetTransactionProofData, GetTransactionProofResponse, GetBlockTxidsData, GetBlockTxidsResponse, GetLedgerStateDeltaForTransactionGroupData, GetLedgerStateDeltaForTransactionGroupResponse, GetLedgerStateDeltaData, GetLedgerStateDeltaResponse, GetTransactionGroupLedgerStateDeltasForRoundData, GetTransactionGroupLedgerStateDeltasForRoundResponse, GetBlockTimeStampOffsetResponse, SetBlockTimeStampOffsetData, SetBlockTimeStampOffsetResponse, ExperimentalCheckResponse, GetSupplyResponse, UnsetSyncRoundResponse, GetSyncRoundResponse, SetSyncRoundData, SetSyncRoundResponse, GetStateProofData, GetStateProofResponse, GetStatusResponse, WaitForBlockData, WaitForBlockResponse, TealCompileData, TealCompileResponse, TealDisassembleData, TealDisassembleResponse, TealDryrunData, TealDryrunResponse, RawTransactionData, RawTransactionResponse, TransactionParamsResponse, GetPendingTransactionsData, GetPendingTransactionsResponse, PendingTransactionInformationData, PendingTransactionInformationResponse, SimulateTransactionData, SimulateTransactionResponse, GetVersionResponse, RawTransactionAsyncData, RawTransactionAsyncResponse } from './types.gen.js';
export declare class PrivateService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Retrieves the current settings for blocking and mutex profiles
     * @returns DebugSettingsProf DebugPprof is the response to the /debug/extra/pprof endpoint
     * @throws ApiError
     */
    getDebugSettingsProf(): CancelablePromise<GetDebugSettingsProfResponse>;
    /**
     * Enables blocking and mutex profiles, and returns the old settings
     * @returns DebugSettingsProf DebugPprof is the response to the /debug/extra/pprof endpoint
     * @throws ApiError
     */
    putDebugSettingsProf(): CancelablePromise<PutDebugSettingsProfResponse>;
    /**
     * Aborts a catchpoint catchup.
     * Given a catchpoint, it aborts catching up to this catchpoint
     * @param data The data for the request.
     * @param data.catchpoint A catch point
     * @returns unknown
     * @throws ApiError
     */
    abortCatchup(data: AbortCatchupData): CancelablePromise<AbortCatchupResponse>;
    /**
     * Starts a catchpoint catchup.
     * Given a catchpoint, it starts catching up to this catchpoint
     * @param data The data for the request.
     * @param data.catchpoint A catch point
     * @param data.min Specify the minimum number of blocks which the ledger must be advanced by in order to start the catchup. This is useful for simplifying tools which support fast catchup, they can run the catchup unconditionally and the node will skip the catchup if it is not needed.
     * @returns unknown
     * @returns unknown
     * @throws ApiError
     */
    startCatchup(data: StartCatchupData): CancelablePromise<StartCatchupResponse>;
    /**
     * Return a list of participation keys
     * Return a list of participation keys
     * @returns ParticipationKey A list of participation keys
     * @throws ApiError
     */
    getParticipationKeys(): CancelablePromise<GetParticipationKeysResponse>;
    /**
     * Add a participation key to the node
     * @param data The data for the request.
     * @param data.requestBody The participation key to add to the node
     * @returns unknown Participation ID of the submission
     * @throws ApiError
     */
    addParticipationKey(data: AddParticipationKeyData): CancelablePromise<AddParticipationKeyResponse>;
    /**
     * Generate and install participation keys to the node.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.first First round for participation key.
     * @param data.last Last round for participation key.
     * @param data.dilution Key dilution for two-level participation keys (defaults to sqrt of validity window).
     * @returns string An empty JSON object is returned if the generation process was started. Currently no status is available.
     * @throws ApiError
     */
    generateParticipationKeys(data: GenerateParticipationKeysData): CancelablePromise<GenerateParticipationKeysResponse>;
    /**
     * Delete a given participation key by ID
     * Delete a given participation key by ID
     * @param data The data for the request.
     * @param data.participationId
     * @returns unknown Participation key got deleted by ID
     * @throws ApiError
     */
    deleteParticipationKeyById(data: DeleteParticipationKeyByIdData): CancelablePromise<DeleteParticipationKeyByIdResponse>;
    /**
     * Get participation key info given a participation ID
     * Given a participation ID, return information about that participation key
     * @param data The data for the request.
     * @param data.participationId
     * @returns ParticipationKey A detailed description of a participation ID
     * @throws ApiError
     */
    getParticipationKeyById(data: GetParticipationKeyByIdData): CancelablePromise<GetParticipationKeyByIdResponse>;
    /**
     * Append state proof keys to a participation key
     * Given a participation ID, append state proof keys to a particular set of participation keys
     * @param data The data for the request.
     * @param data.participationId
     * @param data.requestBody The state proof keys to add to an existing participation ID
     * @returns ParticipationKey A detailed description of a participation ID
     * @throws ApiError
     */
    appendKeys(data: AppendKeysData): CancelablePromise<AppendKeysResponse>;
    /**
     * Special management endpoint to shutdown the node. Optionally provide a timeout parameter to indicate that the node should begin shutting down after a number of seconds.
     * @param data The data for the request.
     * @param data.timeout
     * @returns unknown
     * @throws ApiError
     */
    shutdownNode(data?: ShutdownNodeData): CancelablePromise<ShutdownNodeResponse>;
}
export declare class PublicService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Gets the genesis information.
     * Returns the entire genesis file in json.
     * @returns string The genesis file in json.
     * @throws ApiError
     */
    getGenesis(): CancelablePromise<GetGenesisResponse>;
    /**
     * Returns OK if healthy.
     * @returns unknown OK.
     * @throws ApiError
     */
    healthCheck(): CancelablePromise<HealthCheckResponse>;
    /**
     * Return metrics about algod functioning.
     * @returns unknown text with \#-comments and key:value lines
     * @throws ApiError
     */
    metrics(): CancelablePromise<MetricsResponse>;
    /**
     * Returns OK if healthy and fully caught up.
     * @returns unknown OK.
     * @throws ApiError
     */
    getReady(): CancelablePromise<GetReadyResponse>;
    /**
     * Gets the current swagger spec.
     * Returns the entire swagger spec in json.
     * @returns string The current swagger spec
     * @throws ApiError
     */
    swaggerJson(): CancelablePromise<SwaggerJsonResponse>;
    /**
     * Get account information.
     * Given a specific account public key, this call returns the accounts status, balance and spendable amounts
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @param data.exclude When set to `all` will exclude asset holdings, application local state, created asset parameters, any created application parameters. Defaults to `none`.
     * @returns Account AccountResponse wraps the Account type in a response.
     * @throws ApiError
     */
    accountInformation(data: AccountInformationData): CancelablePromise<AccountInformationResponse>;
    /**
     * Get account information about a given app.
     * Given a specific account public key and application ID, this call returns the account's application local state and global state (AppLocalState and AppParams, if either exists). Global state will only be returned if the provided address is the application's creator.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.applicationId An application identifier
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown AccountApplicationResponse describes the account's application local state and global state (AppLocalState and AppParams, if either exists) for a specific application ID. Global state will only be returned if the provided address is the application's creator.
     * @throws ApiError
     */
    accountApplicationInformation(data: AccountApplicationInformationData): CancelablePromise<AccountApplicationInformationResponse>;
    /**
     * Get a list of assets held by an account, inclusive of asset params.
     * Lookup an account's asset holdings.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.limit Maximum number of results to return.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown AccountAssetsInformationResponse contains a list of assets held by an account.
     * @throws ApiError
     */
    accountAssetsInformation(data: AccountAssetsInformationData): CancelablePromise<AccountAssetsInformationResponse>;
    /**
     * Get account information about a given asset.
     * Given a specific account public key and asset ID, this call returns the account's asset holding and asset parameters (if either exist). Asset parameters will only be returned if the provided address is the asset's creator.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.assetId An asset identifier
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown AccountAssetResponse describes the account's asset holding and asset parameters (if either exist) for a specific asset ID. Asset parameters will only be returned if the provided address is the asset's creator.
     * @throws ApiError
     */
    accountAssetInformation(data: AccountAssetInformationData): CancelablePromise<AccountAssetInformationResponse>;
    /**
     * Get a list of unconfirmed transactions currently in the transaction pool by address.
     * Get the list of pending transactions by address, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.
     *
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.max Truncated number of transactions to display. If max=0, returns all pending txns.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.
     * @throws ApiError
     */
    getPendingTransactionsByAddress(data: GetPendingTransactionsByAddressData): CancelablePromise<GetPendingTransactionsByAddressResponse>;
    /**
     * Get application information.
     * Given a application ID, it returns application information including creator, approval and clear programs, global and local schemas, and global state.
     * @param data The data for the request.
     * @param data.applicationId An application identifier
     * @returns Application Application information
     * @throws ApiError
     */
    getApplicationById(data: GetApplicationByIdData): CancelablePromise<GetApplicationByIdResponse>;
    /**
     * Get box information for a given application.
     * Given an application ID and box name, it returns the round, box name, and value (each base64 encoded). Box names must be in the goal app call arg encoding form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     * @param data The data for the request.
     * @param data.applicationId An application identifier
     * @param data.name A box name, in the goal app call arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     * @returns Box Box information
     * @throws ApiError
     */
    getApplicationBoxByName(data: GetApplicationBoxByNameData): CancelablePromise<GetApplicationBoxByNameResponse>;
    /**
     * Get all box names for a given application.
     * Given an application ID, return all Box names. No particular ordering is guaranteed. Request fails when client or server-side configured limits prevent returning all Box names.
     * @param data The data for the request.
     * @param data.applicationId An application identifier
     * @param data.max Max number of box names to return. If max is not set, or max == 0, returns all box-names.
     * @returns unknown Box names of an application
     * @throws ApiError
     */
    getApplicationBoxes(data: GetApplicationBoxesData): CancelablePromise<GetApplicationBoxesResponse>;
    /**
     * Get asset information.
     * Given a asset ID, it returns asset information including creator, name, total supply and special addresses.
     * @param data The data for the request.
     * @param data.assetId An asset identifier
     * @returns Asset Asset information
     * @throws ApiError
     */
    getAssetById(data: GetAssetByIdData): CancelablePromise<GetAssetByIdResponse>;
    /**
     * Get the block for the given round.
     * @param data The data for the request.
     * @param data.round The round from which to fetch block information.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Encoded block object.
     * @throws ApiError
     */
    getBlock(data: GetBlockData): CancelablePromise<GetBlockResponse>;
    /**
     * Get the block hash for the block on the given round.
     * @param data The data for the request.
     * @param data.round The round from which to fetch block hash information.
     * @returns unknown Hash of a block header.
     * @throws ApiError
     */
    getBlockHash(data: GetBlockHashData): CancelablePromise<GetBlockHashResponse>;
    /**
     * Gets a proof for a given light block header inside a state proof commitment
     * @param data The data for the request.
     * @param data.round The round to which the light block header belongs.
     * @returns LightBlockHeaderProof Proof of a light block header.
     * @throws ApiError
     */
    getLightBlockHeaderProof(data: GetLightBlockHeaderProofData): CancelablePromise<GetLightBlockHeaderProofResponse>;
    /**
     * Get all of the logs from outer and inner app calls in the given round
     * Get all of the logs from outer and inner app calls in the given round
     * @param data The data for the request.
     * @param data.round The round from which to fetch block log information.
     * @returns unknown All logs emitted in the given round. Each app call, whether top-level or inner, that contains logs results in a separate AppCallLogs object. Therefore there may be multiple AppCallLogs with the same application ID and outer transaction ID in the event of multiple inner app calls to the same app. App calls with no logs are not included in the response. AppCallLogs are returned in the same order that their corresponding app call appeared in the block (pre-order traversal of inner app calls)
     * @throws ApiError
     */
    getBlockLogs(data: GetBlockLogsData): CancelablePromise<GetBlockLogsResponse>;
    /**
     * Get a proof for a transaction in a block.
     * @param data The data for the request.
     * @param data.round The round in which the transaction appears.
     * @param data.txid The transaction ID for which to generate a proof.
     * @param data.hashtype The type of hash function used to create the proof, must be one of:
     * * sha512_256
     * * sha256
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Proof of transaction in a block.
     * @throws ApiError
     */
    getTransactionProof(data: GetTransactionProofData): CancelablePromise<GetTransactionProofResponse>;
    /**
     * Get the top level transaction IDs for the block on the given round.
     * @param data The data for the request.
     * @param data.round The round from which to fetch block transaction IDs.
     * @returns unknown Top level transaction IDs in a block.
     * @throws ApiError
     */
    getBlockTxids(data: GetBlockTxidsData): CancelablePromise<GetBlockTxidsResponse>;
    /**
     * Get a LedgerStateDelta object for a given transaction group
     * Get a ledger delta for a given transaction group.
     * @param data The data for the request.
     * @param data.id A transaction ID, or transaction group ID
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns LedgerStateDelta Response containing a ledger state delta for a single transaction group.
     * @throws ApiError
     */
    getLedgerStateDeltaForTransactionGroup(data: GetLedgerStateDeltaForTransactionGroupData): CancelablePromise<GetLedgerStateDeltaForTransactionGroupResponse>;
    /**
     * Get a LedgerStateDelta object for a given round
     * Get ledger deltas for a round.
     * @param data The data for the request.
     * @param data.round The round for which the deltas are desired.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns LedgerStateDelta Contains ledger deltas
     * @throws ApiError
     */
    getLedgerStateDelta(data: GetLedgerStateDeltaData): CancelablePromise<GetLedgerStateDeltaResponse>;
    /**
     * Get LedgerStateDelta objects for all transaction groups in a given round
     * Get ledger deltas for transaction groups in a given round.
     * @param data The data for the request.
     * @param data.round The round for which the deltas are desired.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Response containing all ledger state deltas for transaction groups, with their associated Ids, in a single round.
     * @throws ApiError
     */
    getTransactionGroupLedgerStateDeltasForRound(data: GetTransactionGroupLedgerStateDeltasForRoundData): CancelablePromise<GetTransactionGroupLedgerStateDeltasForRoundResponse>;
    /**
     * Returns the timestamp offset. Timestamp offsets can only be set in dev mode.
     * Gets the current timestamp offset.
     * @returns unknown Response containing the timestamp offset in seconds
     * @throws ApiError
     */
    getBlockTimeStampOffset(): CancelablePromise<GetBlockTimeStampOffsetResponse>;
    /**
     * Given a timestamp offset in seconds, adds the offset to every subsequent block header's timestamp.
     * Sets the timestamp offset (seconds) for blocks in dev mode. Providing an offset of 0 will unset this value and try to use the real clock for the timestamp.
     * @param data The data for the request.
     * @param data.offset The timestamp offset for blocks in dev mode.
     * @returns unknown OK
     * @throws ApiError
     */
    setBlockTimeStampOffset(data: SetBlockTimeStampOffsetData): CancelablePromise<SetBlockTimeStampOffsetResponse>;
    /**
     * Returns OK if experimental API is enabled.
     * @returns unknown Experimental API enabled
     * @throws ApiError
     */
    experimentalCheck(): CancelablePromise<ExperimentalCheckResponse>;
    /**
     * Get the current supply reported by the ledger.
     * @returns unknown Supply represents the current supply of MicroAlgos in the system.
     * @throws ApiError
     */
    getSupply(): CancelablePromise<GetSupplyResponse>;
    /**
     * Removes minimum sync round restriction from the ledger.
     * Unset the ledger sync round.
     * @returns unknown
     * @throws ApiError
     */
    unsetSyncRound(): CancelablePromise<UnsetSyncRoundResponse>;
    /**
     * Returns the minimum sync round the ledger is keeping in cache.
     * Gets the minimum sync round for the ledger.
     * @returns unknown Response containing the ledger's minimum sync round
     * @throws ApiError
     */
    getSyncRound(): CancelablePromise<GetSyncRoundResponse>;
    /**
     * Given a round, tells the ledger to keep that round in its cache.
     * Sets the minimum sync round on the ledger.
     * @param data The data for the request.
     * @param data.round The round for which the deltas are desired.
     * @returns unknown
     * @throws ApiError
     */
    setSyncRound(data: SetSyncRoundData): CancelablePromise<SetSyncRoundResponse>;
    /**
     * Get a state proof that covers a given round
     * @param data The data for the request.
     * @param data.round The round for which a state proof is desired.
     * @returns StateProof StateProofResponse wraps the StateProof type in a response.
     * @throws ApiError
     */
    getStateProof(data: GetStateProofData): CancelablePromise<GetStateProofResponse>;
    /**
     * Gets the current node status.
     * @returns unknown
     * @throws ApiError
     */
    getStatus(): CancelablePromise<GetStatusResponse>;
    /**
     * Gets the node status after waiting for a round after the given round.
     * Waits for a block to appear after round {round} and returns the node's status at the time. There is a 1 minute timeout, when reached the current status is returned regardless of whether or not it is the round after the given round.
     * @param data The data for the request.
     * @param data.round The round to wait until returning status
     * @returns unknown
     * @throws ApiError
     */
    waitForBlock(data: WaitForBlockData): CancelablePromise<WaitForBlockResponse>;
    /**
     * Compile TEAL source code to binary, produce its hash
     * Given TEAL source code in plain text, return base64 encoded program bytes and base32 SHA512_256 hash of program bytes (Address style). This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.
     * @param data The data for the request.
     * @param data.requestBody TEAL source code to be compiled
     * @param data.sourcemap When set to `true`, returns the source map of the program as a JSON. Defaults to `false`.
     * @returns unknown Teal compile Result
     * @throws ApiError
     */
    tealCompile(data: TealCompileData): CancelablePromise<TealCompileResponse>;
    /**
     * Disassemble program bytes into the TEAL source code.
     * Given the program bytes, return the TEAL source code in plain text. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.
     * @param data The data for the request.
     * @param data.requestBody TEAL program binary to be disassembled
     * @returns unknown Teal disassembly Result
     * @throws ApiError
     */
    tealDisassemble(data: TealDisassembleData): CancelablePromise<TealDisassembleResponse>;
    /**
     * Provide debugging information for a transaction (or group).
     * Executes TEAL program(s) in context and returns debugging information about the execution. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.
     * @param data The data for the request.
     * @param data.requestBody Transaction (or group) and any accompanying state-simulation data.
     * @returns unknown DryrunResponse contains per-txn debug information from a dryrun.
     * @throws ApiError
     */
    tealDryrun(data?: TealDryrunData): CancelablePromise<TealDryrunResponse>;
    /**
     * Broadcasts a raw transaction or transaction group to the network.
     * @param data The data for the request.
     * @param data.requestBody The byte encoded signed transaction to broadcast to network
     * @returns unknown Transaction ID of the submission.
     * @throws ApiError
     */
    rawTransaction(data: RawTransactionData): CancelablePromise<RawTransactionResponse>;
    /**
     * Get parameters for constructing a new transaction
     * @returns unknown TransactionParams contains the parameters that help a client construct a new transaction.
     * @throws ApiError
     */
    transactionParams(): CancelablePromise<TransactionParamsResponse>;
    /**
     * Get a list of unconfirmed transactions currently in the transaction pool.
     * Get the list of pending transactions, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.
     *
     * @param data The data for the request.
     * @param data.max Truncated number of transactions to display. If max=0, returns all pending txns.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.
     * @throws ApiError
     */
    getPendingTransactions(data?: GetPendingTransactionsData): CancelablePromise<GetPendingTransactionsResponse>;
    /**
     * Get a specific pending transaction.
     * Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
     * - transaction committed (committed round > 0)
     * - transaction still in the pool (committed round = 0, pool error = "")
     * - transaction removed from pool due to error (committed round = 0, pool error != "")
     * Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.
     *
     * @param data The data for the request.
     * @param data.txid A transaction ID
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns PendingTransactionResponse Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
     * - transaction committed (committed round > 0)
     * - transaction still in the pool (committed round = 0, pool error = "")
     * - transaction removed from pool due to error (committed round = 0, pool error != "")
     *
     * Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.
     * @throws ApiError
     */
    pendingTransactionInformation(data: PendingTransactionInformationData): CancelablePromise<PendingTransactionInformationResponse>;
    /**
     * Simulates a raw transaction or transaction group as it would be evaluated on the network. The simulation will use blockchain state from the latest committed round.
     * @param data The data for the request.
     * @param data.requestBody The transactions to simulate, along with any other inputs.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Result of a transaction group simulation.
     * @throws ApiError
     */
    simulateTransaction(data: SimulateTransactionData): CancelablePromise<SimulateTransactionResponse>;
    /**
     * Retrieves the supported API versions, binary build versions, and genesis information.
     * @returns Version VersionsResponse is the response to 'GET /versions'
     * @throws ApiError
     */
    getVersion(): CancelablePromise<GetVersionResponse>;
}
export declare class CommonService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Gets the genesis information.
     * Returns the entire genesis file in json.
     * @returns string The genesis file in json.
     * @throws ApiError
     */
    getGenesis(): CancelablePromise<GetGenesisResponse>;
    /**
     * Returns OK if healthy.
     * @returns unknown OK.
     * @throws ApiError
     */
    healthCheck(): CancelablePromise<HealthCheckResponse>;
    /**
     * Return metrics about algod functioning.
     * @returns unknown text with \#-comments and key:value lines
     * @throws ApiError
     */
    metrics(): CancelablePromise<MetricsResponse>;
    /**
     * Returns OK if healthy and fully caught up.
     * @returns unknown OK.
     * @throws ApiError
     */
    getReady(): CancelablePromise<GetReadyResponse>;
    /**
     * Gets the current swagger spec.
     * Returns the entire swagger spec in json.
     * @returns string The current swagger spec
     * @throws ApiError
     */
    swaggerJson(): CancelablePromise<SwaggerJsonResponse>;
    /**
     * Retrieves the supported API versions, binary build versions, and genesis information.
     * @returns Version VersionsResponse is the response to 'GET /versions'
     * @throws ApiError
     */
    getVersion(): CancelablePromise<GetVersionResponse>;
}
export declare class NonparticipatingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get account information.
     * Given a specific account public key, this call returns the accounts status, balance and spendable amounts
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @param data.exclude When set to `all` will exclude asset holdings, application local state, created asset parameters, any created application parameters. Defaults to `none`.
     * @returns Account AccountResponse wraps the Account type in a response.
     * @throws ApiError
     */
    accountInformation(data: AccountInformationData): CancelablePromise<AccountInformationResponse>;
    /**
     * Get account information about a given app.
     * Given a specific account public key and application ID, this call returns the account's application local state and global state (AppLocalState and AppParams, if either exists). Global state will only be returned if the provided address is the application's creator.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.applicationId An application identifier
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown AccountApplicationResponse describes the account's application local state and global state (AppLocalState and AppParams, if either exists) for a specific application ID. Global state will only be returned if the provided address is the application's creator.
     * @throws ApiError
     */
    accountApplicationInformation(data: AccountApplicationInformationData): CancelablePromise<AccountApplicationInformationResponse>;
    /**
     * Get account information about a given asset.
     * Given a specific account public key and asset ID, this call returns the account's asset holding and asset parameters (if either exist). Asset parameters will only be returned if the provided address is the asset's creator.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.assetId An asset identifier
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown AccountAssetResponse describes the account's asset holding and asset parameters (if either exist) for a specific asset ID. Asset parameters will only be returned if the provided address is the asset's creator.
     * @throws ApiError
     */
    accountAssetInformation(data: AccountAssetInformationData): CancelablePromise<AccountAssetInformationResponse>;
    /**
     * Get application information.
     * Given a application ID, it returns application information including creator, approval and clear programs, global and local schemas, and global state.
     * @param data The data for the request.
     * @param data.applicationId An application identifier
     * @returns Application Application information
     * @throws ApiError
     */
    getApplicationById(data: GetApplicationByIdData): CancelablePromise<GetApplicationByIdResponse>;
    /**
     * Get box information for a given application.
     * Given an application ID and box name, it returns the round, box name, and value (each base64 encoded). Box names must be in the goal app call arg encoding form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     * @param data The data for the request.
     * @param data.applicationId An application identifier
     * @param data.name A box name, in the goal app call arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     * @returns Box Box information
     * @throws ApiError
     */
    getApplicationBoxByName(data: GetApplicationBoxByNameData): CancelablePromise<GetApplicationBoxByNameResponse>;
    /**
     * Get all box names for a given application.
     * Given an application ID, return all Box names. No particular ordering is guaranteed. Request fails when client or server-side configured limits prevent returning all Box names.
     * @param data The data for the request.
     * @param data.applicationId An application identifier
     * @param data.max Max number of box names to return. If max is not set, or max == 0, returns all box-names.
     * @returns unknown Box names of an application
     * @throws ApiError
     */
    getApplicationBoxes(data: GetApplicationBoxesData): CancelablePromise<GetApplicationBoxesResponse>;
    /**
     * Get asset information.
     * Given a asset ID, it returns asset information including creator, name, total supply and special addresses.
     * @param data The data for the request.
     * @param data.assetId An asset identifier
     * @returns Asset Asset information
     * @throws ApiError
     */
    getAssetById(data: GetAssetByIdData): CancelablePromise<GetAssetByIdResponse>;
    /**
     * Get the block for the given round.
     * @param data The data for the request.
     * @param data.round The round from which to fetch block information.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Encoded block object.
     * @throws ApiError
     */
    getBlock(data: GetBlockData): CancelablePromise<GetBlockResponse>;
    /**
     * Get the block hash for the block on the given round.
     * @param data The data for the request.
     * @param data.round The round from which to fetch block hash information.
     * @returns unknown Hash of a block header.
     * @throws ApiError
     */
    getBlockHash(data: GetBlockHashData): CancelablePromise<GetBlockHashResponse>;
    /**
     * Gets a proof for a given light block header inside a state proof commitment
     * @param data The data for the request.
     * @param data.round The round to which the light block header belongs.
     * @returns LightBlockHeaderProof Proof of a light block header.
     * @throws ApiError
     */
    getLightBlockHeaderProof(data: GetLightBlockHeaderProofData): CancelablePromise<GetLightBlockHeaderProofResponse>;
    /**
     * Get all of the logs from outer and inner app calls in the given round
     * Get all of the logs from outer and inner app calls in the given round
     * @param data The data for the request.
     * @param data.round The round from which to fetch block log information.
     * @returns unknown All logs emitted in the given round. Each app call, whether top-level or inner, that contains logs results in a separate AppCallLogs object. Therefore there may be multiple AppCallLogs with the same application ID and outer transaction ID in the event of multiple inner app calls to the same app. App calls with no logs are not included in the response. AppCallLogs are returned in the same order that their corresponding app call appeared in the block (pre-order traversal of inner app calls)
     * @throws ApiError
     */
    getBlockLogs(data: GetBlockLogsData): CancelablePromise<GetBlockLogsResponse>;
    /**
     * Get a proof for a transaction in a block.
     * @param data The data for the request.
     * @param data.round The round in which the transaction appears.
     * @param data.txid The transaction ID for which to generate a proof.
     * @param data.hashtype The type of hash function used to create the proof, must be one of:
     * * sha512_256
     * * sha256
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Proof of transaction in a block.
     * @throws ApiError
     */
    getTransactionProof(data: GetTransactionProofData): CancelablePromise<GetTransactionProofResponse>;
    /**
     * Get the top level transaction IDs for the block on the given round.
     * @param data The data for the request.
     * @param data.round The round from which to fetch block transaction IDs.
     * @returns unknown Top level transaction IDs in a block.
     * @throws ApiError
     */
    getBlockTxids(data: GetBlockTxidsData): CancelablePromise<GetBlockTxidsResponse>;
    /**
     * Aborts a catchpoint catchup.
     * Given a catchpoint, it aborts catching up to this catchpoint
     * @param data The data for the request.
     * @param data.catchpoint A catch point
     * @returns unknown
     * @throws ApiError
     */
    abortCatchup(data: AbortCatchupData): CancelablePromise<AbortCatchupResponse>;
    /**
     * Starts a catchpoint catchup.
     * Given a catchpoint, it starts catching up to this catchpoint
     * @param data The data for the request.
     * @param data.catchpoint A catch point
     * @param data.min Specify the minimum number of blocks which the ledger must be advanced by in order to start the catchup. This is useful for simplifying tools which support fast catchup, they can run the catchup unconditionally and the node will skip the catchup if it is not needed.
     * @returns unknown
     * @returns unknown
     * @throws ApiError
     */
    startCatchup(data: StartCatchupData): CancelablePromise<StartCatchupResponse>;
    /**
     * Get a LedgerStateDelta object for a given transaction group
     * Get a ledger delta for a given transaction group.
     * @param data The data for the request.
     * @param data.id A transaction ID, or transaction group ID
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns LedgerStateDelta Response containing a ledger state delta for a single transaction group.
     * @throws ApiError
     */
    getLedgerStateDeltaForTransactionGroup(data: GetLedgerStateDeltaForTransactionGroupData): CancelablePromise<GetLedgerStateDeltaForTransactionGroupResponse>;
    /**
     * Get a LedgerStateDelta object for a given round
     * Get ledger deltas for a round.
     * @param data The data for the request.
     * @param data.round The round for which the deltas are desired.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns LedgerStateDelta Contains ledger deltas
     * @throws ApiError
     */
    getLedgerStateDelta(data: GetLedgerStateDeltaData): CancelablePromise<GetLedgerStateDeltaResponse>;
    /**
     * Get LedgerStateDelta objects for all transaction groups in a given round
     * Get ledger deltas for transaction groups in a given round.
     * @param data The data for the request.
     * @param data.round The round for which the deltas are desired.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Response containing all ledger state deltas for transaction groups, with their associated Ids, in a single round.
     * @throws ApiError
     */
    getTransactionGroupLedgerStateDeltasForRound(data: GetTransactionGroupLedgerStateDeltasForRoundData): CancelablePromise<GetTransactionGroupLedgerStateDeltasForRoundResponse>;
    /**
     * Returns the timestamp offset. Timestamp offsets can only be set in dev mode.
     * Gets the current timestamp offset.
     * @returns unknown Response containing the timestamp offset in seconds
     * @throws ApiError
     */
    getBlockTimeStampOffset(): CancelablePromise<GetBlockTimeStampOffsetResponse>;
    /**
     * Given a timestamp offset in seconds, adds the offset to every subsequent block header's timestamp.
     * Sets the timestamp offset (seconds) for blocks in dev mode. Providing an offset of 0 will unset this value and try to use the real clock for the timestamp.
     * @param data The data for the request.
     * @param data.offset The timestamp offset for blocks in dev mode.
     * @returns unknown OK
     * @throws ApiError
     */
    setBlockTimeStampOffset(data: SetBlockTimeStampOffsetData): CancelablePromise<SetBlockTimeStampOffsetResponse>;
    /**
     * Get the current supply reported by the ledger.
     * @returns unknown Supply represents the current supply of MicroAlgos in the system.
     * @throws ApiError
     */
    getSupply(): CancelablePromise<GetSupplyResponse>;
    /**
     * Special management endpoint to shutdown the node. Optionally provide a timeout parameter to indicate that the node should begin shutting down after a number of seconds.
     * @param data The data for the request.
     * @param data.timeout
     * @returns unknown
     * @throws ApiError
     */
    shutdownNode(data?: ShutdownNodeData): CancelablePromise<ShutdownNodeResponse>;
    /**
     * Get a state proof that covers a given round
     * @param data The data for the request.
     * @param data.round The round for which a state proof is desired.
     * @returns StateProof StateProofResponse wraps the StateProof type in a response.
     * @throws ApiError
     */
    getStateProof(data: GetStateProofData): CancelablePromise<GetStateProofResponse>;
    /**
     * Gets the current node status.
     * @returns unknown
     * @throws ApiError
     */
    getStatus(): CancelablePromise<GetStatusResponse>;
    /**
     * Gets the node status after waiting for a round after the given round.
     * Waits for a block to appear after round {round} and returns the node's status at the time. There is a 1 minute timeout, when reached the current status is returned regardless of whether or not it is the round after the given round.
     * @param data The data for the request.
     * @param data.round The round to wait until returning status
     * @returns unknown
     * @throws ApiError
     */
    waitForBlock(data: WaitForBlockData): CancelablePromise<WaitForBlockResponse>;
    /**
     * Compile TEAL source code to binary, produce its hash
     * Given TEAL source code in plain text, return base64 encoded program bytes and base32 SHA512_256 hash of program bytes (Address style). This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.
     * @param data The data for the request.
     * @param data.requestBody TEAL source code to be compiled
     * @param data.sourcemap When set to `true`, returns the source map of the program as a JSON. Defaults to `false`.
     * @returns unknown Teal compile Result
     * @throws ApiError
     */
    tealCompile(data: TealCompileData): CancelablePromise<TealCompileResponse>;
    /**
     * Disassemble program bytes into the TEAL source code.
     * Given the program bytes, return the TEAL source code in plain text. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.
     * @param data The data for the request.
     * @param data.requestBody TEAL program binary to be disassembled
     * @returns unknown Teal disassembly Result
     * @throws ApiError
     */
    tealDisassemble(data: TealDisassembleData): CancelablePromise<TealDisassembleResponse>;
    /**
     * Provide debugging information for a transaction (or group).
     * Executes TEAL program(s) in context and returns debugging information about the execution. This endpoint is only enabled when a node's configuration file sets EnableDeveloperAPI to true.
     * @param data The data for the request.
     * @param data.requestBody Transaction (or group) and any accompanying state-simulation data.
     * @returns unknown DryrunResponse contains per-txn debug information from a dryrun.
     * @throws ApiError
     */
    tealDryrun(data?: TealDryrunData): CancelablePromise<TealDryrunResponse>;
    /**
     * Get parameters for constructing a new transaction
     * @returns unknown TransactionParams contains the parameters that help a client construct a new transaction.
     * @throws ApiError
     */
    transactionParams(): CancelablePromise<TransactionParamsResponse>;
    /**
     * Simulates a raw transaction or transaction group as it would be evaluated on the network. The simulation will use blockchain state from the latest committed round.
     * @param data The data for the request.
     * @param data.requestBody The transactions to simulate, along with any other inputs.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown Result of a transaction group simulation.
     * @throws ApiError
     */
    simulateTransaction(data: SimulateTransactionData): CancelablePromise<SimulateTransactionResponse>;
}
export declare class ExperimentalService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get a list of assets held by an account, inclusive of asset params.
     * Lookup an account's asset holdings.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.limit Maximum number of results to return.
     * @param data.next The next page of results. Use the next token provided by the previous results.
     * @returns unknown AccountAssetsInformationResponse contains a list of assets held by an account.
     * @throws ApiError
     */
    accountAssetsInformation(data: AccountAssetsInformationData): CancelablePromise<AccountAssetsInformationResponse>;
    /**
     * Returns OK if experimental API is enabled.
     * @returns unknown Experimental API enabled
     * @throws ApiError
     */
    experimentalCheck(): CancelablePromise<ExperimentalCheckResponse>;
    /**
     * Fast track for broadcasting a raw transaction or transaction group to the network through the tx handler without performing most of the checks and reporting detailed errors. Should be only used for development and performance testing.
     * @param data The data for the request.
     * @param data.requestBody The byte encoded signed transaction to broadcast to network
     * @returns unknown
     * @throws ApiError
     */
    rawTransactionAsync(data: RawTransactionAsyncData): CancelablePromise<RawTransactionAsyncResponse>;
}
export declare class ParticipatingService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Get a list of unconfirmed transactions currently in the transaction pool by address.
     * Get the list of pending transactions by address, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.
     *
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.max Truncated number of transactions to display. If max=0, returns all pending txns.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.
     * @throws ApiError
     */
    getPendingTransactionsByAddress(data: GetPendingTransactionsByAddressData): CancelablePromise<GetPendingTransactionsByAddressResponse>;
    /**
     * Return a list of participation keys
     * Return a list of participation keys
     * @returns ParticipationKey A list of participation keys
     * @throws ApiError
     */
    getParticipationKeys(): CancelablePromise<GetParticipationKeysResponse>;
    /**
     * Add a participation key to the node
     * @param data The data for the request.
     * @param data.requestBody The participation key to add to the node
     * @returns unknown Participation ID of the submission
     * @throws ApiError
     */
    addParticipationKey(data: AddParticipationKeyData): CancelablePromise<AddParticipationKeyResponse>;
    /**
     * Generate and install participation keys to the node.
     * @param data The data for the request.
     * @param data.address An account public key
     * @param data.first First round for participation key.
     * @param data.last Last round for participation key.
     * @param data.dilution Key dilution for two-level participation keys (defaults to sqrt of validity window).
     * @returns string An empty JSON object is returned if the generation process was started. Currently no status is available.
     * @throws ApiError
     */
    generateParticipationKeys(data: GenerateParticipationKeysData): CancelablePromise<GenerateParticipationKeysResponse>;
    /**
     * Delete a given participation key by ID
     * Delete a given participation key by ID
     * @param data The data for the request.
     * @param data.participationId
     * @returns unknown Participation key got deleted by ID
     * @throws ApiError
     */
    deleteParticipationKeyById(data: DeleteParticipationKeyByIdData): CancelablePromise<DeleteParticipationKeyByIdResponse>;
    /**
     * Get participation key info given a participation ID
     * Given a participation ID, return information about that participation key
     * @param data The data for the request.
     * @param data.participationId
     * @returns ParticipationKey A detailed description of a participation ID
     * @throws ApiError
     */
    getParticipationKeyById(data: GetParticipationKeyByIdData): CancelablePromise<GetParticipationKeyByIdResponse>;
    /**
     * Append state proof keys to a participation key
     * Given a participation ID, append state proof keys to a particular set of participation keys
     * @param data The data for the request.
     * @param data.participationId
     * @param data.requestBody The state proof keys to add to an existing participation ID
     * @returns ParticipationKey A detailed description of a participation ID
     * @throws ApiError
     */
    appendKeys(data: AppendKeysData): CancelablePromise<AppendKeysResponse>;
    /**
     * Broadcasts a raw transaction or transaction group to the network.
     * @param data The data for the request.
     * @param data.requestBody The byte encoded signed transaction to broadcast to network
     * @returns unknown Transaction ID of the submission.
     * @throws ApiError
     */
    rawTransaction(data: RawTransactionData): CancelablePromise<RawTransactionResponse>;
    /**
     * Get a list of unconfirmed transactions currently in the transaction pool.
     * Get the list of pending transactions, sorted by priority, in decreasing order, truncated at the end at MAX. If MAX = 0, returns all pending transactions.
     *
     * @param data The data for the request.
     * @param data.max Truncated number of transactions to display. If max=0, returns all pending txns.
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns unknown A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.
     * @throws ApiError
     */
    getPendingTransactions(data?: GetPendingTransactionsData): CancelablePromise<GetPendingTransactionsResponse>;
    /**
     * Get a specific pending transaction.
     * Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
     * - transaction committed (committed round > 0)
     * - transaction still in the pool (committed round = 0, pool error = "")
     * - transaction removed from pool due to error (committed round = 0, pool error != "")
     * Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.
     *
     * @param data The data for the request.
     * @param data.txid A transaction ID
     * @param data.format Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     * @returns PendingTransactionResponse Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
     * - transaction committed (committed round > 0)
     * - transaction still in the pool (committed round = 0, pool error = "")
     * - transaction removed from pool due to error (committed round = 0, pool error != "")
     *
     * Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.
     * @throws ApiError
     */
    pendingTransactionInformation(data: PendingTransactionInformationData): CancelablePromise<PendingTransactionInformationResponse>;
}
export declare class DataService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Removes minimum sync round restriction from the ledger.
     * Unset the ledger sync round.
     * @returns unknown
     * @throws ApiError
     */
    unsetSyncRound(): CancelablePromise<UnsetSyncRoundResponse>;
    /**
     * Returns the minimum sync round the ledger is keeping in cache.
     * Gets the minimum sync round for the ledger.
     * @returns unknown Response containing the ledger's minimum sync round
     * @throws ApiError
     */
    getSyncRound(): CancelablePromise<GetSyncRoundResponse>;
    /**
     * Given a round, tells the ledger to keep that round in its cache.
     * Sets the minimum sync round on the ledger.
     * @param data The data for the request.
     * @param data.round The round for which the deltas are desired.
     * @returns unknown
     * @throws ApiError
     */
    setSyncRound(data: SetSyncRoundData): CancelablePromise<SetSyncRoundResponse>;
}
