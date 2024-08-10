/**
 * Account information at a given round.
 *
 * Definition:
 * data/basics/userBalance.go : AccountData
 *
 */
export type Account = {
    /**
     * the account public key
     */
    address: string;
    /**
     * \[algo\] total number of MicroAlgos in the account
     */
    amount: number;
    /**
     * specifies the amount of MicroAlgos in the account, without the pending rewards.
     */
    'amount-without-pending-rewards': number;
    /**
     * \[appl\] applications local data stored in this account.
     *
     * Note the raw object uses `map[int] -> AppLocalState` for this type.
     */
    'apps-local-state'?: Array<ApplicationLocalState>;
    /**
     * \[teap\] the sum of all extra application program pages for this account.
     */
    'apps-total-extra-pages'?: number;
    'apps-total-schema'?: ApplicationStateSchema;
    /**
     * \[asset\] assets held by this account.
     *
     * Note the raw object uses `map[int] -> AssetHolding` for this type.
     */
    assets?: Array<AssetHolding>;
    /**
     * \[spend\] the address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.
     */
    'auth-addr'?: string;
    /**
     * \[appp\] parameters of applications created by this account including app global data.
     *
     * Note: the raw account uses `map[int] -> AppParams` for this type.
     */
    'created-apps'?: Array<Application>;
    /**
     * \[apar\] parameters of assets created by this account.
     *
     * Note: the raw account uses `map[int] -> Asset` for this type.
     */
    'created-assets'?: Array<Asset>;
    /**
     * Whether or not the account can receive block incentives if its balance is in range at proposal time.
     */
    'incentive-eligible'?: boolean;
    /**
     * The round in which this account last went online, or explicitly renewed their online status.
     */
    'last-heartbeat'?: number;
    /**
     * The round in which this account last proposed the block.
     */
    'last-proposed'?: number;
    /**
     * MicroAlgo balance required by the account.
     *
     * The requirement grows based on asset and application usage.
     */
    'min-balance': number;
    participation?: AccountParticipation;
    /**
     * amount of MicroAlgos of pending rewards in this account.
     */
    'pending-rewards': number;
    /**
     * \[ebase\] used as part of the rewards computation. Only applicable to accounts which are participating.
     */
    'reward-base'?: number;
    /**
     * \[ern\] total rewards of MicroAlgos the account has received, including pending rewards.
     */
    rewards: number;
    /**
     * The round for which this information is relevant.
     */
    round: number;
    /**
     * Indicates what type of signature is used by this account, must be one of:
     * * sig
     * * msig
     * * lsig
     */
    'sig-type'?: 'sig' | 'msig' | 'lsig';
    /**
     * \[onl\] delegation status of the account's MicroAlgos
     * * Offline - indicates that the associated account is delegated.
     * *  Online  - indicates that the associated account used as part of the delegation pool.
     * *   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.
     */
    status: string;
    /**
     * The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.
     */
    'total-apps-opted-in': number;
    /**
     * The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.
     */
    'total-assets-opted-in': number;
    /**
     * \[tbxb\] The total number of bytes used by this account's app's box keys and values.
     */
    'total-box-bytes'?: number;
    /**
     * \[tbx\] The number of existing boxes created by this account's app.
     */
    'total-boxes'?: number;
    /**
     * The count of all apps (AppParams objects) created by this account.
     */
    'total-created-apps': number;
    /**
     * The count of all assets (AssetParams objects) created by this account.
     */
    'total-created-assets': number;
};
/**
 * Indicates what type of signature is used by this account, must be one of:
 * * sig
 * * msig
 * * lsig
 */
export type sig_type = 'sig' | 'msig' | 'lsig';
/**
 * AccountAssetHolding describes the account's asset holding and asset parameters (if either exist) for a specific asset ID.
 */
export type AccountAssetHolding = {
    'asset-holding': AssetHolding;
    'asset-params'?: AssetParams;
};
/**
 * AccountParticipation describes the parameters used by this account in consensus protocol.
 */
export type AccountParticipation = {
    /**
     * \[sel\] Selection public key (if any) currently registered for this round.
     */
    'selection-participation-key': string;
    /**
     * \[stprf\] Root of the state proof key (if any)
     */
    'state-proof-key'?: string;
    /**
     * \[voteFst\] First round for which this participation is valid.
     */
    'vote-first-valid': number;
    /**
     * \[voteKD\] Number of subkeys in each batch of participation keys.
     */
    'vote-key-dilution': number;
    /**
     * \[voteLst\] Last round for which this participation is valid.
     */
    'vote-last-valid': number;
    /**
     * \[vote\] root participation public key (if any) currently registered for this round.
     */
    'vote-participation-key': string;
};
/**
 * Application state delta.
 */
export type AccountStateDelta = {
    address: string;
    delta: StateDelta;
};
/**
 * The logged messages from an app call along with the app ID and outer transaction ID. Logs appear in the same order that they were emitted.
 */
export type AppCallLogs = {
    /**
     * The application from which the logs were generated
     */
    'application-index': number;
    /**
     * An array of logs
     */
    logs: Array<(string)>;
    /**
     * The transaction ID of the outer app call that lead to these logs
     */
    txId: string;
};
/**
 * Application index and its parameters
 */
export type Application = {
    /**
     * \[appidx\] application index.
     */
    id: number;
    params: ApplicationParams;
};
/**
 * An application's initial global/local/box states that were accessed during simulation.
 */
export type ApplicationInitialStates = {
    'app-boxes'?: ApplicationKVStorage;
    'app-globals'?: ApplicationKVStorage;
    /**
     * An application's initial local states tied to different accounts.
     */
    'app-locals'?: Array<ApplicationKVStorage>;
    /**
     * Application index.
     */
    id: number;
};
/**
 * An application's global/local/box state.
 */
export type ApplicationKVStorage = {
    /**
     * The address of the account associated with the local state.
     */
    account?: string;
    /**
     * Key-Value pairs representing application states.
     */
    kvs: Array<AvmKeyValue>;
};
/**
 * References an account's local state for an application.
 */
export type ApplicationLocalReference = {
    /**
     * Address of the account with the local state.
     */
    account: string;
    /**
     * Application ID of the local state application.
     */
    app: number;
};
/**
 * Stores local state associated with an application.
 */
export type ApplicationLocalState = {
    /**
     * The application which this local state is for.
     */
    id: number;
    'key-value'?: TealKeyValueStore;
    schema: ApplicationStateSchema;
};
/**
 * Stores the global information associated with an application.
 */
export type ApplicationParams = {
    /**
     * \[approv\] approval program.
     */
    'approval-program': string;
    /**
     * \[clearp\] approval program.
     */
    'clear-state-program': string;
    /**
     * The address that created this application. This is the address where the parameters and global state for this application can be found.
     */
    creator: string;
    /**
     * \[epp\] the amount of extra program pages available to this app.
     */
    'extra-program-pages'?: number;
    'global-state'?: TealKeyValueStore;
    'global-state-schema'?: ApplicationStateSchema;
    'local-state-schema'?: ApplicationStateSchema;
};
/**
 * An operation against an application's global/local/box state.
 */
export type ApplicationStateOperation = {
    /**
     * For local state changes, the address of the account associated with the local state.
     */
    account?: string;
    /**
     * Type of application state. Value `g` is **global state**, `l` is **local state**, `b` is **boxes**.
     */
    'app-state-type': string;
    /**
     * The key (name) of the global/local/box state.
     */
    key: string;
    'new-value'?: AvmValue;
    /**
     * Operation type. Value `w` is **write**, `d` is **delete**.
     */
    operation: string;
};
/**
 * Specifies maximums on the number of each type that may be stored.
 */
export type ApplicationStateSchema = {
    /**
     * \[nbs\] num of byte slices.
     */
    'num-byte-slice': number;
    /**
     * \[nui\] num of uints.
     */
    'num-uint': number;
};
/**
 * Specifies both the unique identifier and the parameters for an asset
 */
export type Asset = {
    /**
     * unique asset identifier
     */
    index: number;
    params: AssetParams;
};
/**
 * Describes an asset held by an account.
 *
 * Definition:
 * data/basics/userBalance.go : AssetHolding
 */
export type AssetHolding = {
    /**
     * \[a\] number of units held.
     */
    amount: number;
    /**
     * Asset ID of the holding.
     */
    'asset-id': number;
    /**
     * \[f\] whether or not the holding is frozen.
     */
    'is-frozen': boolean;
};
/**
 * References an asset held by an account.
 */
export type AssetHoldingReference = {
    /**
     * Address of the account holding the asset.
     */
    account: string;
    /**
     * Asset ID of the holding.
     */
    asset: number;
};
/**
 * AssetParams specifies the parameters for an asset.
 *
 * \[apar\] when part of an AssetConfig transaction.
 *
 * Definition:
 * data/transactions/asset.go : AssetParams
 */
export type AssetParams = {
    /**
     * \[c\] Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.
     */
    clawback?: string;
    /**
     * The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.
     */
    creator: string;
    /**
     * \[dc\] The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).
     */
    decimals: number;
    /**
     * \[df\] Whether holdings of this asset are frozen by default.
     */
    'default-frozen'?: boolean;
    /**
     * \[f\] Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.
     */
    freeze?: string;
    /**
     * \[m\] Address of account used to manage the keys of this asset and to destroy it.
     */
    manager?: string;
    /**
     * \[am\] A commitment to some unspecified asset metadata. The format of this metadata is up to the application.
     */
    'metadata-hash'?: string;
    /**
     * \[an\] Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.
     */
    name?: string;
    /**
     * Base64 encoded name of this asset, as supplied by the creator.
     */
    'name-b64'?: string;
    /**
     * \[r\] Address of account holding reserve (non-minted) units of this asset.
     */
    reserve?: string;
    /**
     * \[t\] The total number of units of this asset.
     */
    total: number;
    /**
     * \[un\] Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.
     */
    'unit-name'?: string;
    /**
     * Base64 encoded name of a unit of this asset, as supplied by the creator.
     */
    'unit-name-b64'?: string;
    /**
     * \[au\] URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.
     */
    url?: string;
    /**
     * Base64 encoded URL where more information about the asset can be retrieved.
     */
    'url-b64'?: string;
};
/**
 * Represents an AVM key-value pair in an application store.
 */
export type AvmKeyValue = {
    key: string;
    value: AvmValue;
};
/**
 * Represents an AVM value.
 */
export type AvmValue = {
    /**
     * bytes value.
     */
    bytes?: string;
    /**
     * value type. Value `1` refers to **bytes**, value `2` refers to **uint64**
     */
    type: number;
    /**
     * uint value.
     */
    uint?: number;
};
/**
 * Box name and its content.
 */
export type Box = {
    /**
     * \[name\] box name, base64 encoded
     */
    name: string;
    /**
     * The round for which this information is relevant
     */
    round: number;
    /**
     * \[value\] box value, base64 encoded.
     */
    value: string;
};
/**
 * Box descriptor describes a Box.
 */
export type BoxDescriptor = {
    /**
     * Base64 encoded box name
     */
    name: string;
};
/**
 * References a box of an application.
 */
export type BoxReference = {
    /**
     * Application ID which this box belongs to
     */
    app: number;
    /**
     * Base64 encoded box name
     */
    name: string;
};
export type BuildVersion = {
    branch: string;
    build_number: number;
    channel: string;
    commit_hash: string;
    major: number;
    minor: number;
};
/**
 * algod mutex and blocking profiling state.
 */
export type DebugSettingsProf = {
    /**
     * The rate of blocking events. The profiler aims to sample an average of one blocking event per rate nanoseconds spent blocked. To turn off profiling entirely, pass rate 0.
     */
    'block-rate'?: number;
    /**
     * The rate of mutex events. On average 1/rate events are reported. To turn off profiling entirely, pass rate 0
     */
    'mutex-rate'?: number;
};
/**
 * Request data type for dryrun endpoint. Given the Transactions and simulated ledger state upload, run TEAL scripts and return debugging information.
 */
export type DryrunRequest = {
    accounts: Array<Account>;
    apps: Array<Application>;
    /**
     * LatestTimestamp is available to some TEAL scripts. Defaults to the latest confirmed timestamp this algod is attached to.
     */
    'latest-timestamp': number;
    /**
     * ProtocolVersion specifies a specific version string to operate under, otherwise whatever the current protocol of the network this algod is running in.
     */
    'protocol-version': string;
    /**
     * Round is available to some TEAL scripts. Defaults to the current round on the network this algod is attached to.
     */
    round: number;
    sources: Array<DryrunSource>;
    txns: Array<(string)>;
};
/**
 * DryrunSource is TEAL source text that gets uploaded, compiled, and inserted into transactions or application state.
 */
export type DryrunSource = {
    'app-index': number;
    /**
     * FieldName is what kind of sources this is. If lsig then it goes into the transactions[this.TxnIndex].LogicSig. If approv or clearp it goes into the Approval Program or Clear State Program of application[this.AppIndex].
     */
    'field-name': string;
    source: string;
    'txn-index': number;
};
/**
 * Stores the TEAL eval step data
 */
export type DryrunState = {
    /**
     * Evaluation error if any
     */
    error?: string;
    /**
     * Line number
     */
    line: number;
    /**
     * Program counter
     */
    pc: number;
    scratch?: Array<TealValue>;
    stack: Array<TealValue>;
};
/**
 * DryrunTxnResult contains any LogicSig or ApplicationCall program debug information and state updates from a dryrun.
 */
export type DryrunTxnResult = {
    'app-call-messages'?: Array<(string)>;
    'app-call-trace'?: Array<DryrunState>;
    /**
     * Budget added during execution of app call transaction.
     */
    'budget-added'?: number;
    /**
     * Budget consumed during execution of app call transaction.
     */
    'budget-consumed'?: number;
    /**
     * Disassembled program line by line.
     */
    disassembly: Array<(string)>;
    'global-delta'?: StateDelta;
    'local-deltas'?: Array<AccountStateDelta>;
    /**
     * Disassembled lsig program line by line.
     */
    'logic-sig-disassembly'?: Array<(string)>;
    'logic-sig-messages'?: Array<(string)>;
    'logic-sig-trace'?: Array<DryrunState>;
    logs?: Array<(string)>;
};
/**
 * An error response with optional data field.
 */
export type ErrorResponse = {
    data?: unknown;
    message: string;
};
/**
 * Represents a TEAL value delta.
 */
export type EvalDelta = {
    /**
     * \[at\] delta action.
     */
    action: number;
    /**
     * \[bs\] bytes value.
     */
    bytes?: string;
    /**
     * \[ui\] uint value.
     */
    uint?: number;
};
/**
 * Key-value pairs for StateDelta.
 */
export type EvalDeltaKeyValue = {
    key: string;
    value: EvalDelta;
};
/**
 * A single Delta containing the key, the previous value and the current value for a single round.
 */
export type KvDelta = {
    /**
     * The key, base64 encoded.
     */
    key?: string;
    /**
     * The new value of the KV store entry, base64 encoded.
     */
    value?: string;
};
/**
 * Ledger StateDelta object
 */
export type LedgerStateDelta = {
    [key: string]: unknown;
};
/**
 * Contains a ledger delta for a single transaction group
 */
export type LedgerStateDeltaForTransactionGroup = {
    Delta: LedgerStateDelta;
    Ids: Array<(string)>;
};
/**
 * Proof of membership and position of a light block header.
 */
export type LightBlockHeaderProof = {
    /**
     * The index of the light block header in the vector commitment tree
     */
    index: number;
    /**
     * The encoded proof.
     */
    proof: string;
    /**
     * Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.
     */
    treedepth: number;
};
/**
 * Represents a participation key used by the node.
 */
export type ParticipationKey = {
    /**
     * Address the key was generated for.
     */
    address: string;
    /**
     * When registered, this is the first round it may be used.
     */
    'effective-first-valid'?: number;
    /**
     * When registered, this is the last round it may be used.
     */
    'effective-last-valid'?: number;
    /**
     * The key's ParticipationID.
     */
    id: string;
    key: AccountParticipation;
    /**
     * Round when this key was last used to propose a block.
     */
    'last-block-proposal'?: number;
    /**
     * Round when this key was last used to generate a state proof.
     */
    'last-state-proof'?: number;
    /**
     * Round when this key was last used to vote.
     */
    'last-vote'?: number;
};
/**
 * Details about a pending transaction. If the transaction was recently confirmed, includes confirmation details like the round and reward details.
 */
export type PendingTransactionResponse = {
    /**
     * The application index if the transaction was found and it created an application.
     */
    'application-index'?: number;
    /**
     * The number of the asset's unit that were transferred to the close-to address.
     */
    'asset-closing-amount'?: number;
    /**
     * The asset index if the transaction was found and it created an asset.
     */
    'asset-index'?: number;
    /**
     * Rewards in microalgos applied to the close remainder to account.
     */
    'close-rewards'?: number;
    /**
     * Closing amount for the transaction.
     */
    'closing-amount'?: number;
    /**
     * The round where this transaction was confirmed, if present.
     */
    'confirmed-round'?: number;
    'global-state-delta'?: StateDelta;
    /**
     * Inner transactions produced by application execution.
     */
    'inner-txns'?: Array<PendingTransactionResponse>;
    /**
     * Local state key/value changes for the application being executed by this transaction.
     */
    'local-state-delta'?: Array<AccountStateDelta>;
    /**
     * Logs for the application being executed by this transaction.
     */
    logs?: Array<(string)>;
    /**
     * Indicates that the transaction was kicked out of this node's transaction pool (and specifies why that happened).  An empty string indicates the transaction wasn't kicked out of this node's txpool due to an error.
     *
     */
    'pool-error': string;
    /**
     * Rewards in microalgos applied to the receiver account.
     */
    'receiver-rewards'?: number;
    /**
     * Rewards in microalgos applied to the sender account.
     */
    'sender-rewards'?: number;
    /**
     * The raw signed transaction.
     */
    txn: unknown;
};
/**
 * A write operation into a scratch slot.
 */
export type ScratchChange = {
    'new-value': AvmValue;
    /**
     * The scratch slot written.
     */
    slot: number;
};
/**
 * Initial states of resources that were accessed during simulation.
 */
export type SimulateInitialStates = {
    /**
     * The initial states of accessed application before simulation. The order of this array is arbitrary.
     */
    'app-initial-states'?: Array<ApplicationInitialStates>;
};
/**
 * Request type for simulation endpoint.
 */
export type SimulateRequest = {
    /**
     * Allows transactions without signatures to be simulated as if they had correct signatures.
     */
    'allow-empty-signatures'?: boolean;
    /**
     * Lifts limits on log opcode usage during simulation.
     */
    'allow-more-logging'?: boolean;
    /**
     * Allows access to unnamed resources during simulation.
     */
    'allow-unnamed-resources'?: boolean;
    'exec-trace-config'?: SimulateTraceConfig;
    /**
     * Applies extra opcode budget during simulation for each transaction group.
     */
    'extra-opcode-budget'?: number;
    /**
     * If provided, specifies the round preceding the simulation. State changes through this round will be used to run this simulation. Usually only the 4 most recent rounds will be available (controlled by the node config value MaxAcctLookback). If not specified, defaults to the latest available round.
     */
    round?: number;
    /**
     * The transaction groups to simulate.
     */
    'txn-groups': Array<SimulateRequestTransactionGroup>;
};
/**
 * A transaction group to simulate.
 */
export type SimulateRequestTransactionGroup = {
    /**
     * An atomic transaction group.
     */
    txns: Array<(string)>;
};
/**
 * An object that configures simulation execution trace.
 */
export type SimulateTraceConfig = {
    /**
     * A boolean option for opting in execution trace features simulation endpoint.
     */
    enable?: boolean;
    /**
     * A boolean option enabling returning scratch slot changes together with execution trace during simulation.
     */
    'scratch-change'?: boolean;
    /**
     * A boolean option enabling returning stack changes together with execution trace during simulation.
     */
    'stack-change'?: boolean;
    /**
     * A boolean option enabling returning application state changes (global, local, and box changes) with the execution trace during simulation.
     */
    'state-change'?: boolean;
};
/**
 * Simulation result for an atomic transaction group
 */
export type SimulateTransactionGroupResult = {
    /**
     * Total budget added during execution of app calls in the transaction group.
     */
    'app-budget-added'?: number;
    /**
     * Total budget consumed during execution of app calls in the transaction group.
     */
    'app-budget-consumed'?: number;
    /**
     * If present, indicates which transaction in this group caused the failure. This array represents the path to the failing transaction. Indexes are zero based, the first element indicates the top-level transaction, and successive elements indicate deeper inner transactions.
     */
    'failed-at'?: Array<(number)>;
    /**
     * If present, indicates that the transaction group failed and specifies why that happened
     */
    'failure-message'?: string;
    /**
     * Simulation result for individual transactions
     */
    'txn-results': Array<SimulateTransactionResult>;
    'unnamed-resources-accessed'?: SimulateUnnamedResourcesAccessed;
};
/**
 * Simulation result for an individual transaction
 */
export type SimulateTransactionResult = {
    /**
     * Budget used during execution of an app call transaction. This value includes budged used by inner app calls spawned by this transaction.
     */
    'app-budget-consumed'?: number;
    'exec-trace'?: SimulationTransactionExecTrace;
    /**
     * Budget used during execution of a logic sig transaction.
     */
    'logic-sig-budget-consumed'?: number;
    'txn-result': PendingTransactionResponse;
    'unnamed-resources-accessed'?: SimulateUnnamedResourcesAccessed;
};
/**
 * These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.
 */
export type SimulateUnnamedResourcesAccessed = {
    /**
     * The unnamed accounts that were referenced. The order of this array is arbitrary.
     */
    accounts?: Array<(string)>;
    /**
     * The unnamed application local states that were referenced. The order of this array is arbitrary.
     */
    'app-locals'?: Array<ApplicationLocalReference>;
    /**
     * The unnamed applications that were referenced. The order of this array is arbitrary.
     */
    apps?: Array<(number)>;
    /**
     * The unnamed asset holdings that were referenced. The order of this array is arbitrary.
     */
    'asset-holdings'?: Array<AssetHoldingReference>;
    /**
     * The unnamed assets that were referenced. The order of this array is arbitrary.
     */
    assets?: Array<(number)>;
    /**
     * The unnamed boxes that were referenced. The order of this array is arbitrary.
     */
    boxes?: Array<BoxReference>;
    /**
     * The number of extra box references used to increase the IO budget. This is in addition to the references defined in the input transaction group and any referenced to unnamed boxes.
     */
    'extra-box-refs'?: number;
};
/**
 * The set of parameters and limits override during simulation. If this set of parameters is present, then evaluation parameters may differ from standard evaluation in certain ways.
 */
export type SimulationEvalOverrides = {
    /**
     * If true, transactions without signatures are allowed and simulated as if they were properly signed.
     */
    'allow-empty-signatures'?: boolean;
    /**
     * If true, allows access to unnamed resources during simulation.
     */
    'allow-unnamed-resources'?: boolean;
    /**
     * The extra opcode budget added to each transaction group during simulation
     */
    'extra-opcode-budget'?: number;
    /**
     * The maximum log calls one can make during simulation
     */
    'max-log-calls'?: number;
    /**
     * The maximum byte number to log during simulation
     */
    'max-log-size'?: number;
};
/**
 * The set of trace information and effect from evaluating a single opcode.
 */
export type SimulationOpcodeTraceUnit = {
    /**
     * The program counter of the current opcode being evaluated.
     */
    pc: number;
    /**
     * The writes into scratch slots.
     */
    'scratch-changes'?: Array<ScratchChange>;
    /**
     * The indexes of the traces for inner transactions spawned by this opcode, if any.
     */
    'spawned-inners'?: Array<(number)>;
    /**
     * The values added by this opcode to the stack.
     */
    'stack-additions'?: Array<AvmValue>;
    /**
     * The number of deleted stack values by this opcode.
     */
    'stack-pop-count'?: number;
    /**
     * The operations against the current application's states.
     */
    'state-changes'?: Array<ApplicationStateOperation>;
};
/**
 * The execution trace of calling an app or a logic sig, containing the inner app call trace in a recursive way.
 */
export type SimulationTransactionExecTrace = {
    /**
     * SHA512_256 hash digest of the approval program executed in transaction.
     */
    'approval-program-hash'?: string;
    /**
     * Program trace that contains a trace of opcode effects in an approval program.
     */
    'approval-program-trace'?: Array<SimulationOpcodeTraceUnit>;
    /**
     * SHA512_256 hash digest of the clear state program executed in transaction.
     */
    'clear-state-program-hash'?: string;
    /**
     * Program trace that contains a trace of opcode effects in a clear state program.
     */
    'clear-state-program-trace'?: Array<SimulationOpcodeTraceUnit>;
    /**
     * If true, indicates that the clear state program failed and any persistent state changes it produced should be reverted once the program exits.
     */
    'clear-state-rollback'?: boolean;
    /**
     * The error message explaining why the clear state program failed. This field will only be populated if clear-state-rollback is true and the failure was due to an execution error.
     */
    'clear-state-rollback-error'?: string;
    /**
     * An array of SimulationTransactionExecTrace representing the execution trace of any inner transactions executed.
     */
    'inner-trace'?: Array<SimulationTransactionExecTrace>;
    /**
     * SHA512_256 hash digest of the logic sig executed in transaction.
     */
    'logic-sig-hash'?: string;
    /**
     * Program trace that contains a trace of opcode effects in a logic sig.
     */
    'logic-sig-trace'?: Array<SimulationOpcodeTraceUnit>;
};
/**
 * Application state delta.
 */
export type StateDelta = Array<EvalDeltaKeyValue>;
/**
 * Represents a state proof and its corresponding message
 */
export type StateProof = {
    Message: StateProofMessage;
    /**
     * The encoded StateProof for the message.
     */
    StateProof: string;
};
/**
 * Represents the message that the state proofs are attesting to.
 */
export type StateProofMessage = {
    /**
     * The vector commitment root on all light block headers within a state proof interval.
     */
    BlockHeadersCommitment: string;
    /**
     * The first round the message attests to.
     */
    FirstAttestedRound: number;
    /**
     * The last round the message attests to.
     */
    LastAttestedRound: number;
    /**
     * An integer value representing the natural log of the proven weight with 16 bits of precision. This value would be used to verify the next state proof.
     */
    LnProvenWeight: number;
    /**
     * The vector commitment root of the top N accounts to sign the next StateProof.
     */
    VotersCommitment: string;
};
/**
 * Represents a key-value pair in an application store.
 */
export type TealKeyValue = {
    key: string;
    value: TealValue;
};
/**
 * Represents a key-value store for use in an application.
 */
export type TealKeyValueStore = Array<TealKeyValue>;
/**
 * Represents a TEAL value.
 */
export type TealValue = {
    /**
     * \[tb\] bytes value.
     */
    bytes: string;
    /**
     * \[tt\] value type. Value `1` refers to **bytes**, value `2` refers to **uint**
     */
    type: number;
    /**
     * \[ui\] uint value.
     */
    uint: number;
};
/**
 * algod version information.
 */
export type Version = {
    build: BuildVersion;
    genesis_hash_b64: string;
    genesis_id: string;
    versions: Array<(string)>;
};
/**
 * account string
 */
export type Parameteraccount_id = string;
/**
 * Only include transactions with this address in one of the transaction fields.
 */
export type Parameteraddress = string;
/**
 * Combine with the address parameter to define what type of address to search for.
 */
export type Parameteraddress_role = 'sender' | 'receiver' | 'freeze-target';
/**
 * Include results after the given time. Must be an RFC 3339 formatted string.
 */
export type Parameterafter_time = string;
/**
 * Asset ID
 */
export type Parameterasset_id = number;
/**
 * Include results before the given time. Must be an RFC 3339 formatted string.
 */
export type Parameterbefore_time = string;
/**
 * A catch point
 */
export type Parametercatchpoint = string;
/**
 * Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
 */
export type Parametercurrency_greater_than = number;
/**
 * Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
 */
export type Parametercurrency_less_than = number;
/**
 * Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.
 */
export type Parameterexclude_close_to = boolean;
/**
 * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
 */
export type Parameterformat = 'json' | 'msgpack';
/**
 * Maximum number of results to return.
 */
export type Parameterlimit = number;
/**
 * Truncated number of transactions to display. If max=0, returns all pending txns.
 */
export type Parametermax = number;
/**
 * Include results at or before the specified max-round.
 */
export type Parametermax_round = number;
/**
 * Include results at or after the specified min-round.
 */
export type Parametermin_round = number;
/**
 * The next page of results. Use the next token provided by the previous results.
 */
export type Parameternext = string;
/**
 * Specifies a prefix which must be contained in the note field.
 */
export type Parameternote_prefix = string;
/**
 * Include results for the specified round.
 */
export type Parameterround = number;
/**
 * Round number
 */
export type Parameterround_number = number;
/**
 * SigType filters just results using the specified type of signature:
 * * sig - Standard
 * * msig - MultiSig
 * * lsig - LogicSig
 */
export type Parametersig_type = 'sig' | 'msig' | 'lsig';
/**
 * Lookup the specific transaction by ID.
 */
export type Parametertx_id = string;
export type Parametertx_type = 'pay' | 'keyreg' | 'acfg' | 'axfer' | 'afrz' | 'appl' | 'stpf';
export type GetDebugSettingsProfResponse = DebugSettingsProf;
export type PutDebugSettingsProfResponse = DebugSettingsProf;
export type AbortCatchupData = {
    /**
     * A catch point
     */
    catchpoint: string;
};
export type AbortCatchupResponse = {
    /**
     * Catchup abort response string
     */
    'catchup-message': string;
};
export type StartCatchupData = {
    /**
     * A catch point
     */
    catchpoint: string;
    /**
     * Specify the minimum number of blocks which the ledger must be advanced by in order to start the catchup. This is useful for simplifying tools which support fast catchup, they can run the catchup unconditionally and the node will skip the catchup if it is not needed.
     */
    min?: number;
};
export type StartCatchupResponse = {
    /**
     * Catchup start response string
     */
    'catchup-message': string;
};
export type GetParticipationKeysResponse = Array<ParticipationKey>;
export type AddParticipationKeyData = {
    /**
     * The participation key to add to the node
     */
    requestBody: (Blob | File);
};
export type AddParticipationKeyResponse = {
    /**
     * encoding of the participation ID.
     */
    partId: string;
};
export type GenerateParticipationKeysData = {
    /**
     * An account public key
     */
    address: string;
    /**
     * Key dilution for two-level participation keys (defaults to sqrt of validity window).
     */
    dilution?: number;
    /**
     * First round for participation key.
     */
    first: number;
    /**
     * Last round for participation key.
     */
    last: number;
};
export type GenerateParticipationKeysResponse = string;
export type DeleteParticipationKeyByIdData = {
    participationId: string;
};
export type DeleteParticipationKeyByIdResponse = unknown;
export type GetParticipationKeyByIdData = {
    participationId: string;
};
export type GetParticipationKeyByIdResponse = ParticipationKey;
export type AppendKeysData = {
    participationId: string;
    /**
     * The state proof keys to add to an existing participation ID
     */
    requestBody: (Blob | File);
};
export type AppendKeysResponse = ParticipationKey;
export type ShutdownNodeData = {
    timeout?: number;
};
export type ShutdownNodeResponse = {
    [key: string]: unknown;
};
export type GetGenesisResponse = string;
export type HealthCheckResponse = unknown;
export type MetricsResponse = unknown;
export type GetReadyResponse = unknown;
export type SwaggerJsonResponse = string;
export type AccountInformationData = {
    /**
     * An account public key
     */
    address: string;
    /**
     * When set to `all` will exclude asset holdings, application local state, created asset parameters, any created application parameters. Defaults to `none`.
     */
    exclude?: 'all' | 'none';
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
};
export type AccountInformationResponse = Account;
export type AccountApplicationInformationData = {
    /**
     * An account public key
     */
    address: string;
    /**
     * An application identifier
     */
    applicationId: number;
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
};
export type AccountApplicationInformationResponse = {
    'app-local-state'?: ApplicationLocalState;
    'created-app'?: ApplicationParams;
    /**
     * The round for which this information is relevant.
     */
    round: number;
};
export type AccountAssetsInformationData = {
    /**
     * An account public key
     */
    address: string;
    /**
     * Maximum number of results to return.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type AccountAssetsInformationResponse = {
    'asset-holdings'?: Array<AccountAssetHolding>;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
    /**
     * The round for which this information is relevant.
     */
    round: number;
};
export type AccountAssetInformationData = {
    /**
     * An account public key
     */
    address: string;
    /**
     * An asset identifier
     */
    assetId: number;
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
};
export type AccountAssetInformationResponse = {
    'asset-holding'?: AssetHolding;
    'created-asset'?: AssetParams;
    /**
     * The round for which this information is relevant.
     */
    round: number;
};
export type GetPendingTransactionsByAddressData = {
    /**
     * An account public key
     */
    address: string;
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * Truncated number of transactions to display. If max=0, returns all pending txns.
     */
    max?: number;
};
export type GetPendingTransactionsByAddressResponse = {
    /**
     * An array of signed transaction objects.
     */
    'top-transactions': Array<unknown>;
    /**
     * Total number of transactions in the pool.
     */
    'total-transactions': number;
};
export type GetApplicationByIdData = {
    /**
     * An application identifier
     */
    applicationId: number;
};
export type GetApplicationByIdResponse = Application;
export type GetApplicationBoxByNameData = {
    /**
     * An application identifier
     */
    applicationId: number;
    /**
     * A box name, in the goal app call arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     */
    name: string;
};
export type GetApplicationBoxByNameResponse = Box;
export type GetApplicationBoxesData = {
    /**
     * An application identifier
     */
    applicationId: number;
    /**
     * Max number of box names to return. If max is not set, or max == 0, returns all box-names.
     */
    max?: number;
};
export type GetApplicationBoxesResponse = {
    boxes: Array<BoxDescriptor>;
};
export type GetAssetByIdData = {
    /**
     * An asset identifier
     */
    assetId: number;
};
export type GetAssetByIdResponse = Asset;
export type GetBlockData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * The round from which to fetch block information.
     */
    round: number;
};
export type GetBlockResponse = {
    /**
     * Block header data.
     */
    block: unknown;
    /**
     * Optional certificate object. This is only included when the format is set to message pack.
     */
    cert?: unknown;
};
export type GetBlockHashData = {
    /**
     * The round from which to fetch block hash information.
     */
    round: number;
};
export type GetBlockHashResponse = {
    /**
     * Block header hash.
     */
    blockHash: string;
};
export type GetLightBlockHeaderProofData = {
    /**
     * The round to which the light block header belongs.
     */
    round: number;
};
export type GetLightBlockHeaderProofResponse = LightBlockHeaderProof;
export type GetBlockLogsData = {
    /**
     * The round from which to fetch block log information.
     */
    round: number;
};
export type GetBlockLogsResponse = {
    logs: Array<AppCallLogs>;
};
export type GetTransactionProofData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * The type of hash function used to create the proof, must be one of:
     * * sha512_256
     * * sha256
     */
    hashtype?: 'sha512_256' | 'sha256';
    /**
     * The round in which the transaction appears.
     */
    round: number;
    /**
     * The transaction ID for which to generate a proof.
     */
    txid: string;
};
export type GetTransactionProofResponse = {
    /**
     * The type of hash function used to create the proof, must be one of:
     * * sha512_256
     * * sha256
     */
    hashtype: 'sha512_256' | 'sha256';
    /**
     * Index of the transaction in the block's payset.
     */
    idx: number;
    /**
     * Proof of transaction membership.
     */
    proof: string;
    /**
     * Hash of SignedTxnInBlock for verifying proof.
     */
    stibhash: string;
    /**
     * Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.
     */
    treedepth: number;
};
export type GetBlockTxidsData = {
    /**
     * The round from which to fetch block transaction IDs.
     */
    round: number;
};
export type GetBlockTxidsResponse = {
    /**
     * Block transaction IDs.
     */
    blockTxids: Array<(string)>;
};
export type GetLedgerStateDeltaForTransactionGroupData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * A transaction ID, or transaction group ID
     */
    id: string;
};
export type GetLedgerStateDeltaForTransactionGroupResponse = LedgerStateDelta;
export type GetLedgerStateDeltaData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * The round for which the deltas are desired.
     */
    round: number;
};
export type GetLedgerStateDeltaResponse = LedgerStateDelta;
export type GetTransactionGroupLedgerStateDeltasForRoundData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * The round for which the deltas are desired.
     */
    round: number;
};
export type GetTransactionGroupLedgerStateDeltasForRoundResponse = {
    Deltas: Array<LedgerStateDeltaForTransactionGroup>;
};
export type GetBlockTimeStampOffsetResponse = {
    /**
     * Timestamp offset in seconds.
     */
    offset: number;
};
export type SetBlockTimeStampOffsetData = {
    /**
     * The timestamp offset for blocks in dev mode.
     */
    offset: number;
};
export type SetBlockTimeStampOffsetResponse = unknown;
export type ExperimentalCheckResponse = unknown;
export type GetSupplyResponse = {
    /**
     * Round
     */
    current_round: number;
    /**
     * OnlineMoney
     */
    'online-money': number;
    /**
     * TotalMoney
     */
    'total-money': number;
};
export type UnsetSyncRoundResponse = unknown;
export type GetSyncRoundResponse = {
    /**
     * The minimum sync round for the ledger.
     */
    round: number;
};
export type SetSyncRoundData = {
    /**
     * The round for which the deltas are desired.
     */
    round: number;
};
export type SetSyncRoundResponse = unknown;
export type GetStateProofData = {
    /**
     * The round for which a state proof is desired.
     */
    round: number;
};
export type GetStateProofResponse = StateProof;
export type GetStatusResponse = {
    /**
     * The current catchpoint that is being caught up to
     */
    catchpoint?: string;
    /**
     * The number of blocks that have already been obtained by the node as part of the catchup
     */
    'catchpoint-acquired-blocks'?: number;
    /**
     * The number of accounts from the current catchpoint that have been processed so far as part of the catchup
     */
    'catchpoint-processed-accounts'?: number;
    /**
     * The number of key-values (KVs) from the current catchpoint that have been processed so far as part of the catchup
     */
    'catchpoint-processed-kvs'?: number;
    /**
     * The total number of accounts included in the current catchpoint
     */
    'catchpoint-total-accounts'?: number;
    /**
     * The total number of blocks that are required to complete the current catchpoint catchup
     */
    'catchpoint-total-blocks'?: number;
    /**
     * The total number of key-values (KVs) included in the current catchpoint
     */
    'catchpoint-total-kvs'?: number;
    /**
     * The number of accounts from the current catchpoint that have been verified so far as part of the catchup
     */
    'catchpoint-verified-accounts'?: number;
    /**
     * The number of key-values (KVs) from the current catchpoint that have been verified so far as part of the catchup
     */
    'catchpoint-verified-kvs'?: number;
    /**
     * CatchupTime in nanoseconds
     */
    'catchup-time': number;
    /**
     * The last catchpoint seen by the node
     */
    'last-catchpoint'?: string;
    /**
     * LastRound indicates the last round seen
     */
    'last-round': number;
    /**
     * LastVersion indicates the last consensus version supported
     */
    'last-version': string;
    /**
     * NextVersion of consensus protocol to use
     */
    'next-version': string;
    /**
     * NextVersionRound is the round at which the next consensus version will apply
     */
    'next-version-round': number;
    /**
     * NextVersionSupported indicates whether the next consensus version is supported by this node
     */
    'next-version-supported': boolean;
    /**
     * StoppedAtUnsupportedRound indicates that the node does not support the new rounds and has stopped making progress
     */
    'stopped-at-unsupported-round': boolean;
    /**
     * TimeSinceLastRound in nanoseconds
     */
    'time-since-last-round': number;
    /**
     * Upgrade delay
     */
    'upgrade-delay'?: number;
    /**
     * Next protocol round
     */
    'upgrade-next-protocol-vote-before'?: number;
    /**
     * No votes cast for consensus upgrade
     */
    'upgrade-no-votes'?: number;
    /**
     * This node's upgrade vote
     */
    'upgrade-node-vote'?: boolean;
    /**
     * Total voting rounds for current upgrade
     */
    'upgrade-vote-rounds'?: number;
    /**
     * Total votes cast for consensus upgrade
     */
    'upgrade-votes'?: number;
    /**
     * Yes votes required for consensus upgrade
     */
    'upgrade-votes-required'?: number;
    /**
     * Yes votes cast for consensus upgrade
     */
    'upgrade-yes-votes'?: number;
};
export type WaitForBlockData = {
    /**
     * The round to wait until returning status
     */
    round: number;
};
export type WaitForBlockResponse = {
    /**
     * The current catchpoint that is being caught up to
     */
    catchpoint?: string;
    /**
     * The number of blocks that have already been obtained by the node as part of the catchup
     */
    'catchpoint-acquired-blocks'?: number;
    /**
     * The number of accounts from the current catchpoint that have been processed so far as part of the catchup
     */
    'catchpoint-processed-accounts'?: number;
    /**
     * The number of key-values (KVs) from the current catchpoint that have been processed so far as part of the catchup
     */
    'catchpoint-processed-kvs'?: number;
    /**
     * The total number of accounts included in the current catchpoint
     */
    'catchpoint-total-accounts'?: number;
    /**
     * The total number of blocks that are required to complete the current catchpoint catchup
     */
    'catchpoint-total-blocks'?: number;
    /**
     * The total number of key-values (KVs) included in the current catchpoint
     */
    'catchpoint-total-kvs'?: number;
    /**
     * The number of accounts from the current catchpoint that have been verified so far as part of the catchup
     */
    'catchpoint-verified-accounts'?: number;
    /**
     * The number of key-values (KVs) from the current catchpoint that have been verified so far as part of the catchup
     */
    'catchpoint-verified-kvs'?: number;
    /**
     * CatchupTime in nanoseconds
     */
    'catchup-time': number;
    /**
     * The last catchpoint seen by the node
     */
    'last-catchpoint'?: string;
    /**
     * LastRound indicates the last round seen
     */
    'last-round': number;
    /**
     * LastVersion indicates the last consensus version supported
     */
    'last-version': string;
    /**
     * NextVersion of consensus protocol to use
     */
    'next-version': string;
    /**
     * NextVersionRound is the round at which the next consensus version will apply
     */
    'next-version-round': number;
    /**
     * NextVersionSupported indicates whether the next consensus version is supported by this node
     */
    'next-version-supported': boolean;
    /**
     * StoppedAtUnsupportedRound indicates that the node does not support the new rounds and has stopped making progress
     */
    'stopped-at-unsupported-round': boolean;
    /**
     * TimeSinceLastRound in nanoseconds
     */
    'time-since-last-round': number;
    /**
     * Upgrade delay
     */
    'upgrade-delay'?: number;
    /**
     * Next protocol round
     */
    'upgrade-next-protocol-vote-before'?: number;
    /**
     * No votes cast for consensus upgrade
     */
    'upgrade-no-votes'?: number;
    /**
     * This node's upgrade vote
     */
    'upgrade-node-vote'?: boolean;
    /**
     * Total voting rounds for current upgrade
     */
    'upgrade-vote-rounds'?: number;
    /**
     * Total votes cast for consensus upgrade
     */
    'upgrade-votes'?: number;
    /**
     * Yes votes required for consensus upgrade
     */
    'upgrade-votes-required'?: number;
    /**
     * Yes votes cast for consensus upgrade
     */
    'upgrade-yes-votes'?: number;
};
export type TealCompileData = {
    /**
     * TEAL source code to be compiled
     */
    requestBody: (Blob | File);
    /**
     * When set to `true`, returns the source map of the program as a JSON. Defaults to `false`.
     */
    sourcemap?: boolean;
};
export type TealCompileResponse = {
    /**
     * base32 SHA512_256 of program bytes (Address style)
     */
    hash: string;
    /**
     * base64 encoded program bytes
     */
    result: string;
    /**
     * JSON of the source map
     */
    sourcemap?: unknown;
};
export type TealDisassembleData = {
    /**
     * TEAL program binary to be disassembled
     */
    requestBody: string;
};
export type TealDisassembleResponse = {
    /**
     * disassembled Teal code
     */
    result: string;
};
export type TealDryrunData = {
    /**
     * Transaction (or group) and any accompanying state-simulation data.
     */
    requestBody?: DryrunRequest;
};
export type TealDryrunResponse = {
    error: string;
    /**
     * Protocol version is the protocol version Dryrun was operated under.
     */
    'protocol-version': string;
    txns: Array<DryrunTxnResult>;
};
export type RawTransactionData = {
    /**
     * The byte encoded signed transaction to broadcast to network
     */
    requestBody: (Blob | File);
};
export type RawTransactionResponse = {
    /**
     * encoding of the transaction hash.
     */
    txId: string;
};
export type TransactionParamsResponse = {
    /**
     * ConsensusVersion indicates the consensus protocol version
     * as of LastRound.
     */
    'consensus-version': string;
    /**
     * Fee is the suggested transaction fee
     * Fee is in units of micro-Algos per byte.
     * Fee may fall to zero but transactions must still have a fee of
     * at least MinTxnFee for the current network protocol.
     */
    fee: number;
    /**
     * GenesisHash is the hash of the genesis block.
     */
    'genesis-hash': string;
    /**
     * GenesisID is an ID listed in the genesis block.
     */
    'genesis-id': string;
    /**
     * LastRound indicates the last round seen
     */
    'last-round': number;
    /**
     * The minimum transaction fee (not per byte) required for the
     * txn to validate for the current network protocol.
     */
    'min-fee': number;
};
export type GetPendingTransactionsData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * Truncated number of transactions to display. If max=0, returns all pending txns.
     */
    max?: number;
};
export type GetPendingTransactionsResponse = {
    /**
     * An array of signed transaction objects.
     */
    'top-transactions': Array<unknown>;
    /**
     * Total number of transactions in the pool.
     */
    'total-transactions': number;
};
export type PendingTransactionInformationData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * A transaction ID
     */
    txid: string;
};
export type PendingTransactionInformationResponse = PendingTransactionResponse;
export type SimulateTransactionData = {
    /**
     * Configures whether the response object is JSON or MessagePack encoded. If not provided, defaults to JSON.
     */
    format?: 'json' | 'msgpack';
    /**
     * The transactions to simulate, along with any other inputs.
     */
    requestBody: SimulateRequest;
};
export type SimulateTransactionResponse = {
    'eval-overrides'?: SimulationEvalOverrides;
    'exec-trace-config'?: SimulateTraceConfig;
    'initial-states'?: SimulateInitialStates;
    /**
     * The round immediately preceding this simulation. State changes through this round were used to run this simulation.
     */
    'last-round': number;
    /**
     * A result object for each transaction group that was simulated.
     */
    'txn-groups': Array<SimulateTransactionGroupResult>;
    /**
     * The version of this response object.
     */
    version: number;
};
export type GetVersionResponse = Version;
export type RawTransactionAsyncData = {
    /**
     * The byte encoded signed transaction to broadcast to network
     */
    requestBody: (Blob | File);
};
export type RawTransactionAsyncResponse = unknown;
export type $OpenApiTs = {
    '/debug/settings/pprof': {
        get: {
            res: {
                /**
                 * DebugPprof is the response to the /debug/extra/pprof endpoint
                 */
                200: DebugSettingsProf;
            };
        };
        put: {
            res: {
                /**
                 * DebugPprof is the response to the /debug/extra/pprof endpoint
                 */
                200: DebugSettingsProf;
            };
        };
    };
    '/v2/catchup/{catchpoint}': {
        delete: {
            req: AbortCatchupData;
            res: {
                200: {
                    /**
                     * Catchup abort response string
                     */
                    'catchup-message': string;
                };
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
        post: {
            req: StartCatchupData;
            res: {
                200: {
                    /**
                     * Catchup start response string
                     */
                    'catchup-message': string;
                };
                201: {
                    /**
                     * Catchup start response string
                     */
                    'catchup-message': string;
                };
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Request Timeout
                 */
                408: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/participation': {
        get: {
            res: {
                /**
                 * A list of participation keys
                 */
                200: Array<ParticipationKey>;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Participation Key Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
        post: {
            req: AddParticipationKeyData;
            res: {
                /**
                 * Participation ID of the submission
                 */
                200: {
                    /**
                     * encoding of the participation ID.
                     */
                    partId: string;
                };
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Participation Key Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/participation/generate/{address}': {
        post: {
            req: GenerateParticipationKeysData;
            res: {
                /**
                 * An empty JSON object is returned if the generation process was started. Currently no status is available.
                 */
                200: string;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/participation/{participation-id}': {
        delete: {
            req: DeleteParticipationKeyByIdData;
            res: {
                /**
                 * Participation key got deleted by ID
                 */
                200: unknown;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Participation Key Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
        get: {
            req: GetParticipationKeyByIdData;
            res: {
                /**
                 * A detailed description of a participation ID
                 */
                200: ParticipationKey;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Participation Key Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
        post: {
            req: AppendKeysData;
            res: {
                /**
                 * A detailed description of a participation ID
                 */
                200: ParticipationKey;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Participation Key Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/shutdown': {
        post: {
            req: ShutdownNodeData;
            res: {
                200: {
                    [key: string]: unknown;
                };
            };
        };
    };
    '/genesis': {
        get: {
            res: {
                /**
                 * The genesis file in json.
                 */
                200: string;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/health': {
        get: {
            res: {
                /**
                 * OK.
                 */
                200: unknown;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/metrics': {
        get: {
            res: {
                /**
                 * text with \#-comments and key:value lines
                 */
                200: unknown;
                /**
                 * metrics were compiled out
                 */
                404: unknown;
            };
        };
    };
    '/ready': {
        get: {
            res: {
                /**
                 * OK.
                 */
                200: unknown;
                /**
                 * Internal Error
                 */
                500: unknown;
                /**
                 * Node not ready yet
                 */
                503: unknown;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/swagger.json': {
        get: {
            res: {
                /**
                 * The current swagger spec
                 */
                200: string;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/accounts/{address}': {
        get: {
            req: AccountInformationData;
            res: {
                /**
                 * AccountResponse wraps the Account type in a response.
                 */
                200: Account;
                /**
                 * Bad request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/accounts/{address}/applications/{application-id}': {
        get: {
            req: AccountApplicationInformationData;
            res: {
                /**
                 * AccountApplicationResponse describes the account's application local state and global state (AppLocalState and AppParams, if either exists) for a specific application ID. Global state will only be returned if the provided address is the application's creator.
                 */
                200: {
                    'app-local-state'?: ApplicationLocalState;
                    'created-app'?: ApplicationParams;
                    /**
                     * The round for which this information is relevant.
                     */
                    round: number;
                };
                /**
                 * Malformed address or application ID
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/accounts/{address}/assets': {
        get: {
            req: AccountAssetsInformationData;
            res: {
                /**
                 * AccountAssetsInformationResponse contains a list of assets held by an account.
                 */
                200: {
                    'asset-holdings'?: Array<AccountAssetHolding>;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                    /**
                     * The round for which this information is relevant.
                     */
                    round: number;
                };
                /**
                 * Malformed address
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/accounts/{address}/assets/{asset-id}': {
        get: {
            req: AccountAssetInformationData;
            res: {
                /**
                 * AccountAssetResponse describes the account's asset holding and asset parameters (if either exist) for a specific asset ID. Asset parameters will only be returned if the provided address is the asset's creator.
                 */
                200: {
                    'asset-holding'?: AssetHolding;
                    'created-asset'?: AssetParams;
                    /**
                     * The round for which this information is relevant.
                     */
                    round: number;
                };
                /**
                 * Malformed address or asset ID
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/accounts/{address}/transactions/pending': {
        get: {
            req: GetPendingTransactionsByAddressData;
            res: {
                /**
                 * A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.
                 */
                200: {
                    /**
                     * An array of signed transaction objects.
                     */
                    'top-transactions': Array<unknown>;
                    /**
                     * Total number of transactions in the pool.
                     */
                    'total-transactions': number;
                };
                /**
                 * Max must be a non-negative integer
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/applications/{application-id}': {
        get: {
            req: GetApplicationByIdData;
            res: {
                /**
                 * Application information
                 */
                200: Application;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Application Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/applications/{application-id}/box': {
        get: {
            req: GetApplicationBoxByNameData;
            res: {
                /**
                 * Box information
                 */
                200: Box;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Box Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/applications/{application-id}/boxes': {
        get: {
            req: GetApplicationBoxesData;
            res: {
                /**
                 * Box names of an application
                 */
                200: {
                    boxes: Array<BoxDescriptor>;
                };
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/assets/{asset-id}': {
        get: {
            req: GetAssetByIdData;
            res: {
                /**
                 * Asset information
                 */
                200: Asset;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Application Not Found
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/blocks/{round}': {
        get: {
            req: GetBlockData;
            res: {
                /**
                 * Encoded block object.
                 */
                200: {
                    /**
                     * Block header data.
                     */
                    block: unknown;
                    /**
                     * Optional certificate object. This is only included when the format is set to message pack.
                     */
                    cert?: unknown;
                };
                /**
                 * Bad Request - Non integer number
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * None existing block
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/blocks/{round}/hash': {
        get: {
            req: GetBlockHashData;
            res: {
                /**
                 * Hash of a block header.
                 */
                200: {
                    /**
                     * Block header hash.
                     */
                    blockHash: string;
                };
                /**
                 * Bad Request - Non integer number
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * None existing block
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/blocks/{round}/lightheader/proof': {
        get: {
            req: GetLightBlockHeaderProofData;
            res: {
                /**
                 * Proof of a light block header.
                 */
                200: LightBlockHeaderProof;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Could not create proof since some data is missing
                 */
                404: ErrorResponse;
                /**
                 * timed out on request
                 */
                408: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/blocks/{round}/logs': {
        get: {
            req: GetBlockLogsData;
            res: {
                /**
                 * All logs emitted in the given round. Each app call, whether top-level or inner, that contains logs results in a separate AppCallLogs object. Therefore there may be multiple AppCallLogs with the same application ID and outer transaction ID in the event of multiple inner app calls to the same app. App calls with no logs are not included in the response. AppCallLogs are returned in the same order that their corresponding app call appeared in the block (pre-order traversal of inner app calls)
                 */
                200: {
                    logs: Array<AppCallLogs>;
                };
                /**
                 * Bad Request - Non integer number
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Nonexistent block
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
            };
        };
    };
    '/v2/blocks/{round}/transactions/{txid}/proof': {
        get: {
            req: GetTransactionProofData;
            res: {
                /**
                 * Proof of transaction in a block.
                 */
                200: {
                    /**
                     * The type of hash function used to create the proof, must be one of:
                     * * sha512_256
                     * * sha256
                     */
                    hashtype: 'sha512_256' | 'sha256';
                    /**
                     * Index of the transaction in the block's payset.
                     */
                    idx: number;
                    /**
                     * Proof of transaction membership.
                     */
                    proof: string;
                    /**
                     * Hash of SignedTxnInBlock for verifying proof.
                     */
                    stibhash: string;
                    /**
                     * Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.
                     */
                    treedepth: number;
                };
                /**
                 * Malformed round number or transaction ID
                 */
                400: ErrorResponse;
                /**
                 * Invalid API token
                 */
                401: ErrorResponse;
                /**
                 * Non-existent block or transaction
                 */
                404: ErrorResponse;
                /**
                 * Internal error, including protocol not supporting proofs.
                 */
                500: ErrorResponse;
                /**
                 * Unknown error
                 */
                default: unknown;
            };
        };
    };
    '/v2/blocks/{round}/txids': {
        get: {
            req: GetBlockTxidsData;
            res: {
                /**
                 * Top level transaction IDs in a block.
                 */
                200: {
                    /**
                     * Block transaction IDs.
                     */
                    blockTxids: Array<(string)>;
                };
                /**
                 * Bad Request - Non integer number
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Non existing block
                 */
                404: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/deltas/txn/group/{id}': {
        get: {
            req: GetLedgerStateDeltaForTransactionGroupData;
            res: {
                /**
                 * Response containing a ledger state delta for a single transaction group.
                 */
                200: LedgerStateDelta;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Could not find a delta for transaction ID or group ID
                 */
                404: ErrorResponse;
                /**
                 * timed out on request
                 */
                408: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Not Implemented
                 */
                501: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/deltas/{round}': {
        get: {
            req: GetLedgerStateDeltaData;
            res: {
                /**
                 * Contains ledger deltas
                 */
                200: LedgerStateDelta;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Could not find a delta for round
                 */
                404: ErrorResponse;
                /**
                 * timed out on request
                 */
                408: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/deltas/{round}/txn/group': {
        get: {
            req: GetTransactionGroupLedgerStateDeltasForRoundData;
            res: {
                /**
                 * Response containing all ledger state deltas for transaction groups, with their associated Ids, in a single round.
                 */
                200: {
                    Deltas: Array<LedgerStateDeltaForTransactionGroup>;
                };
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Could not find deltas for round
                 */
                404: ErrorResponse;
                /**
                 * timed out on request
                 */
                408: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Not Implemented
                 */
                501: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/devmode/blocks/offset': {
        get: {
            res: {
                /**
                 * Response containing the timestamp offset in seconds
                 */
                200: {
                    /**
                     * Timestamp offset in seconds.
                     */
                    offset: number;
                };
                /**
                 * TimeStamp offset not set.
                 */
                400: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/devmode/blocks/offset/{offset}': {
        post: {
            req: SetBlockTimeStampOffsetData;
            res: {
                /**
                 * OK
                 */
                200: unknown;
                /**
                 * Cannot set timestamp offset to a negative integer.
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/experimental': {
        get: {
            res: {
                /**
                 * Experimental API enabled
                 */
                200: unknown;
                /**
                 * Experimental API not enabled
                 */
                404: unknown;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/ledger/supply': {
        get: {
            res: {
                /**
                 * Supply represents the current supply of MicroAlgos in the system.
                 */
                200: {
                    /**
                     * Round
                     */
                    current_round: number;
                    /**
                     * OnlineMoney
                     */
                    'online-money': number;
                    /**
                     * TotalMoney
                     */
                    'total-money': number;
                };
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/ledger/sync': {
        delete: {
            res: {
                200: unknown;
                /**
                 * Sync round not set.
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
        get: {
            res: {
                /**
                 * Response containing the ledger's minimum sync round
                 */
                200: {
                    /**
                     * The minimum sync round for the ledger.
                     */
                    round: number;
                };
                /**
                 * Sync round not set.
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/ledger/sync/{round}': {
        post: {
            req: SetSyncRoundData;
            res: {
                200: unknown;
                /**
                 * Can not set sync round to an earlier round than the current round.
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/stateproofs/{round}': {
        get: {
            req: GetStateProofData;
            res: {
                /**
                 * StateProofResponse wraps the StateProof type in a response.
                 */
                200: StateProof;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Could not find a state proof that covers a given round
                 */
                404: ErrorResponse;
                /**
                 * timed out on request
                 */
                408: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/status': {
        get: {
            res: {
                200: {
                    /**
                     * The current catchpoint that is being caught up to
                     */
                    catchpoint?: string;
                    /**
                     * The number of blocks that have already been obtained by the node as part of the catchup
                     */
                    'catchpoint-acquired-blocks'?: number;
                    /**
                     * The number of accounts from the current catchpoint that have been processed so far as part of the catchup
                     */
                    'catchpoint-processed-accounts'?: number;
                    /**
                     * The number of key-values (KVs) from the current catchpoint that have been processed so far as part of the catchup
                     */
                    'catchpoint-processed-kvs'?: number;
                    /**
                     * The total number of accounts included in the current catchpoint
                     */
                    'catchpoint-total-accounts'?: number;
                    /**
                     * The total number of blocks that are required to complete the current catchpoint catchup
                     */
                    'catchpoint-total-blocks'?: number;
                    /**
                     * The total number of key-values (KVs) included in the current catchpoint
                     */
                    'catchpoint-total-kvs'?: number;
                    /**
                     * The number of accounts from the current catchpoint that have been verified so far as part of the catchup
                     */
                    'catchpoint-verified-accounts'?: number;
                    /**
                     * The number of key-values (KVs) from the current catchpoint that have been verified so far as part of the catchup
                     */
                    'catchpoint-verified-kvs'?: number;
                    /**
                     * CatchupTime in nanoseconds
                     */
                    'catchup-time': number;
                    /**
                     * The last catchpoint seen by the node
                     */
                    'last-catchpoint'?: string;
                    /**
                     * LastRound indicates the last round seen
                     */
                    'last-round': number;
                    /**
                     * LastVersion indicates the last consensus version supported
                     */
                    'last-version': string;
                    /**
                     * NextVersion of consensus protocol to use
                     */
                    'next-version': string;
                    /**
                     * NextVersionRound is the round at which the next consensus version will apply
                     */
                    'next-version-round': number;
                    /**
                     * NextVersionSupported indicates whether the next consensus version is supported by this node
                     */
                    'next-version-supported': boolean;
                    /**
                     * StoppedAtUnsupportedRound indicates that the node does not support the new rounds and has stopped making progress
                     */
                    'stopped-at-unsupported-round': boolean;
                    /**
                     * TimeSinceLastRound in nanoseconds
                     */
                    'time-since-last-round': number;
                    /**
                     * Upgrade delay
                     */
                    'upgrade-delay'?: number;
                    /**
                     * Next protocol round
                     */
                    'upgrade-next-protocol-vote-before'?: number;
                    /**
                     * No votes cast for consensus upgrade
                     */
                    'upgrade-no-votes'?: number;
                    /**
                     * This node's upgrade vote
                     */
                    'upgrade-node-vote'?: boolean;
                    /**
                     * Total voting rounds for current upgrade
                     */
                    'upgrade-vote-rounds'?: number;
                    /**
                     * Total votes cast for consensus upgrade
                     */
                    'upgrade-votes'?: number;
                    /**
                     * Yes votes required for consensus upgrade
                     */
                    'upgrade-votes-required'?: number;
                    /**
                     * Yes votes cast for consensus upgrade
                     */
                    'upgrade-yes-votes'?: number;
                };
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: string;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/status/wait-for-block-after/{round}': {
        get: {
            req: WaitForBlockData;
            res: {
                200: {
                    /**
                     * The current catchpoint that is being caught up to
                     */
                    catchpoint?: string;
                    /**
                     * The number of blocks that have already been obtained by the node as part of the catchup
                     */
                    'catchpoint-acquired-blocks'?: number;
                    /**
                     * The number of accounts from the current catchpoint that have been processed so far as part of the catchup
                     */
                    'catchpoint-processed-accounts'?: number;
                    /**
                     * The number of key-values (KVs) from the current catchpoint that have been processed so far as part of the catchup
                     */
                    'catchpoint-processed-kvs'?: number;
                    /**
                     * The total number of accounts included in the current catchpoint
                     */
                    'catchpoint-total-accounts'?: number;
                    /**
                     * The total number of blocks that are required to complete the current catchpoint catchup
                     */
                    'catchpoint-total-blocks'?: number;
                    /**
                     * The total number of key-values (KVs) included in the current catchpoint
                     */
                    'catchpoint-total-kvs'?: number;
                    /**
                     * The number of accounts from the current catchpoint that have been verified so far as part of the catchup
                     */
                    'catchpoint-verified-accounts'?: number;
                    /**
                     * The number of key-values (KVs) from the current catchpoint that have been verified so far as part of the catchup
                     */
                    'catchpoint-verified-kvs'?: number;
                    /**
                     * CatchupTime in nanoseconds
                     */
                    'catchup-time': number;
                    /**
                     * The last catchpoint seen by the node
                     */
                    'last-catchpoint'?: string;
                    /**
                     * LastRound indicates the last round seen
                     */
                    'last-round': number;
                    /**
                     * LastVersion indicates the last consensus version supported
                     */
                    'last-version': string;
                    /**
                     * NextVersion of consensus protocol to use
                     */
                    'next-version': string;
                    /**
                     * NextVersionRound is the round at which the next consensus version will apply
                     */
                    'next-version-round': number;
                    /**
                     * NextVersionSupported indicates whether the next consensus version is supported by this node
                     */
                    'next-version-supported': boolean;
                    /**
                     * StoppedAtUnsupportedRound indicates that the node does not support the new rounds and has stopped making progress
                     */
                    'stopped-at-unsupported-round': boolean;
                    /**
                     * TimeSinceLastRound in nanoseconds
                     */
                    'time-since-last-round': number;
                    /**
                     * Upgrade delay
                     */
                    'upgrade-delay'?: number;
                    /**
                     * Next protocol round
                     */
                    'upgrade-next-protocol-vote-before'?: number;
                    /**
                     * No votes cast for consensus upgrade
                     */
                    'upgrade-no-votes'?: number;
                    /**
                     * This node's upgrade vote
                     */
                    'upgrade-node-vote'?: boolean;
                    /**
                     * Total voting rounds for current upgrade
                     */
                    'upgrade-vote-rounds'?: number;
                    /**
                     * Total votes cast for consensus upgrade
                     */
                    'upgrade-votes'?: number;
                    /**
                     * Yes votes required for consensus upgrade
                     */
                    'upgrade-votes-required'?: number;
                    /**
                     * Yes votes cast for consensus upgrade
                     */
                    'upgrade-yes-votes'?: number;
                };
                /**
                 * Bad Request -- number must be non-negative integer
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/teal/compile': {
        post: {
            req: TealCompileData;
            res: {
                /**
                 * Teal compile Result
                 */
                200: {
                    /**
                     * base32 SHA512_256 of program bytes (Address style)
                     */
                    hash: string;
                    /**
                     * base64 encoded program bytes
                     */
                    result: string;
                    /**
                     * JSON of the source map
                     */
                    sourcemap?: unknown;
                };
                /**
                 * Bad Request - Teal Compile Error
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Developer API not enabled
                 */
                404: unknown;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/teal/disassemble': {
        post: {
            req: TealDisassembleData;
            res: {
                /**
                 * Teal disassembly Result
                 */
                200: {
                    /**
                     * disassembled Teal code
                     */
                    result: string;
                };
                /**
                 * Bad Request - Teal Compile Error
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Developer API not enabled
                 */
                404: unknown;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/teal/dryrun': {
        post: {
            req: TealDryrunData;
            res: {
                /**
                 * DryrunResponse contains per-txn debug information from a dryrun.
                 */
                200: {
                    error: string;
                    /**
                     * Protocol version is the protocol version Dryrun was operated under.
                     */
                    'protocol-version': string;
                    txns: Array<DryrunTxnResult>;
                };
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Developer API not enabled
                 */
                404: unknown;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/transactions': {
        post: {
            req: RawTransactionData;
            res: {
                /**
                 * Transaction ID of the submission.
                 */
                200: {
                    /**
                     * encoding of the transaction hash.
                     */
                    txId: string;
                };
                /**
                 * Bad Request - Malformed Algorand transaction
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/transactions/params': {
        get: {
            res: {
                /**
                 * TransactionParams contains the parameters that help a client construct a new transaction.
                 */
                200: {
                    /**
                     * ConsensusVersion indicates the consensus protocol version
                     * as of LastRound.
                     */
                    'consensus-version': string;
                    /**
                     * Fee is the suggested transaction fee
                     * Fee is in units of micro-Algos per byte.
                     * Fee may fall to zero but transactions must still have a fee of
                     * at least MinTxnFee for the current network protocol.
                     */
                    fee: number;
                    /**
                     * GenesisHash is the hash of the genesis block.
                     */
                    'genesis-hash': string;
                    /**
                     * GenesisID is an ID listed in the genesis block.
                     */
                    'genesis-id': string;
                    /**
                     * LastRound indicates the last round seen
                     */
                    'last-round': number;
                    /**
                     * The minimum transaction fee (not per byte) required for the
                     * txn to validate for the current network protocol.
                     */
                    'min-fee': number;
                };
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/transactions/pending': {
        get: {
            req: GetPendingTransactionsData;
            res: {
                /**
                 * A potentially truncated list of transactions currently in the node's transaction pool. You can compute whether or not the list is truncated if the number of elements in the **top-transactions** array is fewer than **total-transactions**.
                 */
                200: {
                    /**
                     * An array of signed transaction objects.
                     */
                    'top-transactions': Array<unknown>;
                    /**
                     * Total number of transactions in the pool.
                     */
                    'total-transactions': number;
                };
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/transactions/pending/{txid}': {
        get: {
            req: PendingTransactionInformationData;
            res: {
                /**
                 * Given a transaction ID of a recently submitted transaction, it returns information about it.  There are several cases when this might succeed:
                 * - transaction committed (committed round > 0)
                 * - transaction still in the pool (committed round = 0, pool error = "")
                 * - transaction removed from pool due to error (committed round = 0, pool error != "")
                 *
                 * Or the transaction may have happened sufficiently long ago that the node no longer remembers it, and this will return an error.
                 */
                200: PendingTransactionResponse;
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Transaction Not Found
                 */
                404: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/transactions/simulate': {
        post: {
            req: SimulateTransactionData;
            res: {
                /**
                 * Result of a transaction group simulation.
                 */
                200: {
                    'eval-overrides'?: SimulationEvalOverrides;
                    'exec-trace-config'?: SimulateTraceConfig;
                    'initial-states'?: SimulateInitialStates;
                    /**
                     * The round immediately preceding this simulation. State changes through this round were used to run this simulation.
                     */
                    'last-round': number;
                    /**
                     * A result object for each transaction group that was simulated.
                     */
                    'txn-groups': Array<SimulateTransactionGroupResult>;
                    /**
                     * The version of this response object.
                     */
                    version: number;
                };
                /**
                 * Bad Request
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/versions': {
        get: {
            res: {
                /**
                 * VersionsResponse is the response to 'GET /versions'
                 */
                200: Version;
            };
        };
    };
    '/v2/transactions/async': {
        post: {
            req: RawTransactionAsyncData;
            res: {
                200: unknown;
                /**
                 * Bad Request - Malformed Algorand transaction
                 */
                400: ErrorResponse;
                /**
                 * Invalid API Token
                 */
                401: ErrorResponse;
                /**
                 * Internal Error
                 */
                500: ErrorResponse;
                /**
                 * Service Temporarily Unavailable
                 */
                503: ErrorResponse;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
};
