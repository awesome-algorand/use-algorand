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
     * total number of MicroAlgos in the account
     */
    amount: number;
    /**
     * specifies the amount of MicroAlgos in the account, without the pending rewards.
     */
    'amount-without-pending-rewards': number;
    /**
     * application local data stored in this account.
     *
     * Note the raw object uses `map[int] -> AppLocalState` for this type.
     */
    'apps-local-state'?: Array<ApplicationLocalState>;
    /**
     * the sum of all extra application program pages for this account.
     */
    'apps-total-extra-pages'?: number;
    'apps-total-schema'?: ApplicationStateSchema;
    /**
     * assets held by this account.
     *
     * Note the raw object uses `map[int] -> AssetHolding` for this type.
     */
    assets?: Array<AssetHolding>;
    /**
     * The address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.
     */
    'auth-addr'?: string;
    /**
     * Round during which this account was most recently closed.
     */
    'closed-at-round'?: number;
    /**
     * parameters of applications created by this account including app global data.
     *
     * Note: the raw account uses `map[int] -> AppParams` for this type.
     */
    'created-apps'?: Array<Application>;
    /**
     * parameters of assets created by this account.
     *
     * Note: the raw account uses `map[int] -> Asset` for this type.
     */
    'created-assets'?: Array<Asset>;
    /**
     * Round during which this account first appeared in a transaction.
     */
    'created-at-round'?: number;
    /**
     * Whether or not this account is currently closed.
     */
    deleted?: boolean;
    /**
     * can the account receive block incentives if its balance is in range at proposal time.
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
     * used as part of the rewards computation. Only applicable to accounts which are participating.
     */
    'reward-base'?: number;
    /**
     * total rewards of MicroAlgos the account has received, including pending rewards.
     */
    rewards: number;
    /**
     * The round for which this information is relevant.
     */
    round: number;
    /**
     * the type of signature used by this account, must be one of:
     * * sig
     * * msig
     * * lsig
     * * or null if unknown
     */
    'sig-type'?: 'sig' | 'msig' | 'lsig';
    /**
     * voting status of the account's MicroAlgos
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
     * For app-accounts only. The total number of bytes allocated for the keys and values of boxes which belong to the associated application.
     */
    'total-box-bytes': number;
    /**
     * For app-accounts only. The total number of boxes which belong to the associated application.
     */
    'total-boxes': number;
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
 * the type of signature used by this account, must be one of:
 * * sig
 * * msig
 * * lsig
 * * or null if unknown
 */
export type sig_type = 'sig' | 'msig' | 'lsig';
/**
 * AccountParticipation describes the parameters used by this account in consensus protocol.
 */
export type AccountParticipation = {
    /**
     * Selection public key (if any) currently registered for this round.
     */
    'selection-participation-key': string;
    /**
     * Root of the state proof key (if any)
     */
    'state-proof-key'?: string;
    /**
     * First round for which this participation is valid.
     */
    'vote-first-valid': number;
    /**
     * Number of subkeys in each batch of participation keys.
     */
    'vote-key-dilution': number;
    /**
     * Last round for which this participation is valid.
     */
    'vote-last-valid': number;
    /**
     * root participation public key (if any) currently registered for this round.
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
 * Application index and its parameters
 */
export type Application = {
    /**
     * Round when this application was created.
     */
    'created-at-round'?: number;
    /**
     * Whether or not this application is currently deleted.
     */
    deleted?: boolean;
    /**
     * Round when this application was deleted.
     */
    'deleted-at-round'?: number;
    /**
     * application index.
     */
    id: number;
    params: ApplicationParams;
};
/**
 * Stores local state associated with an application.
 */
export type ApplicationLocalState = {
    /**
     * Round when account closed out of the application.
     */
    'closed-out-at-round'?: number;
    /**
     * Whether or not the application local state is currently deleted from its account.
     */
    deleted?: boolean;
    /**
     * The application which this local state is for.
     */
    id: number;
    'key-value'?: TealKeyValueStore;
    /**
     * Round when the account opted into the application.
     */
    'opted-in-at-round'?: number;
    schema: ApplicationStateSchema;
};
/**
 * Stores the global information associated with an application.
 */
export type ApplicationLogData = {
    /**
     * Logs for the application being executed by the transaction.
     */
    logs: Array<(string)>;
    /**
     * Transaction ID
     */
    txid: string;
};
/**
 * Stores the global information associated with an application.
 */
export type ApplicationParams = {
    /**
     * approval program.
     */
    'approval-program': string;
    /**
     * clear state program.
     */
    'clear-state-program': string;
    /**
     * The address that created this application. This is the address where the parameters and global state for this application can be found.
     */
    creator?: string;
    /**
     * the number of extra program pages available to this app.
     */
    'extra-program-pages'?: number;
    'global-state'?: TealKeyValueStore;
    'global-state-schema'?: ApplicationStateSchema;
    'local-state-schema'?: ApplicationStateSchema;
};
/**
 * Specifies maximums on the number of each type that may be stored.
 */
export type ApplicationStateSchema = {
    /**
     * number of byte slices.
     */
    'num-byte-slice': number;
    /**
     * number of uints.
     */
    'num-uint': number;
};
/**
 * Specifies both the unique identifier and the parameters for an asset
 */
export type Asset = {
    /**
     * Round during which this asset was created.
     */
    'created-at-round'?: number;
    /**
     * Whether or not this asset is currently deleted.
     */
    deleted?: boolean;
    /**
     * Round during which this asset was destroyed.
     */
    'destroyed-at-round'?: number;
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
     * number of units held.
     */
    amount: number;
    /**
     * Asset ID of the holding.
     */
    'asset-id': number;
    /**
     * Whether or not the asset holding is currently deleted from its account.
     */
    deleted?: boolean;
    /**
     * whether or not the holding is frozen.
     */
    'is-frozen': boolean;
    /**
     * Round during which the account opted into this asset holding.
     */
    'opted-in-at-round'?: number;
    /**
     * Round during which the account opted out of this asset holding.
     */
    'opted-out-at-round'?: number;
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
     * Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.
     */
    clawback?: string;
    /**
     * The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.
     */
    creator: string;
    /**
     * The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).
     */
    decimals: number;
    /**
     * Whether holdings of this asset are frozen by default.
     */
    'default-frozen'?: boolean;
    /**
     * Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.
     */
    freeze?: string;
    /**
     * Address of account used to manage the keys of this asset and to destroy it.
     */
    manager?: string;
    /**
     * A commitment to some unspecified asset metadata. The format of this metadata is up to the application.
     */
    'metadata-hash'?: string;
    /**
     * Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.
     */
    name?: string;
    /**
     * Base64 encoded name of this asset, as supplied by the creator.
     */
    'name-b64'?: string;
    /**
     * Address of account holding reserve (non-minted) units of this asset.
     */
    reserve?: string;
    /**
     * The total number of units of this asset.
     */
    total: number;
    /**
     * Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.
     */
    'unit-name'?: string;
    /**
     * Base64 encoded name of a unit of this asset, as supplied by the creator.
     */
    'unit-name-b64'?: string;
    /**
     * URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.
     */
    url?: string;
    /**
     * Base64 encoded URL where more information about the asset can be retrieved.
     */
    'url-b64'?: string;
};
/**
 * Block information.
 *
 * Definition:
 * data/bookkeeping/block.go : Block
 */
export type Block = {
    /**
     * the potential bonus payout for this block.
     */
    bonus?: number;
    /**
     * the sum of all fees paid by transactions in this block.
     */
    'fees-collected'?: number;
    /**
     * \[gh\] hash to which this block belongs.
     */
    'genesis-hash': string;
    /**
     * \[gen\] ID to which this block belongs.
     */
    'genesis-id': string;
    'participation-updates'?: ParticipationUpdates;
    /**
     * \[prev\] Previous block hash.
     */
    'previous-block-hash': string;
    /**
     * the proposer of this block.
     */
    proposer?: string;
    /**
     * the actual amount transferred to the proposer from the fee sink.
     */
    'proposer-payout'?: number;
    rewards?: BlockRewards;
    /**
     * \[rnd\] Current round on which this block was appended to the chain.
     */
    round: number;
    /**
     * \[seed\] Sortition seed.
     */
    seed: string;
    /**
     * Tracks the status of state proofs.
     */
    'state-proof-tracking'?: Array<StateProofTracking>;
    /**
     * \[ts\] Block creation timestamp in seconds since eposh
     */
    timestamp: number;
    /**
     * \[txns\] list of transactions corresponding to a given round.
     */
    transactions?: Array<Transaction>;
    /**
     * \[txn\] TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.
     */
    'transactions-root': string;
    /**
     * \[txn256\] TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.
     */
    'transactions-root-sha256': string;
    /**
     * \[tc\] TxnCounter counts the number of transactions committed in the ledger, from the time at which support for this feature was introduced.
     *
     * Specifically, TxnCounter is the number of the next transaction that will be committed after this block.  It is 0 when no transactions have ever been committed (since TxnCounter started being supported).
     */
    'txn-counter'?: number;
    'upgrade-state'?: BlockUpgradeState;
    'upgrade-vote'?: BlockUpgradeVote;
};
/**
 * Fields relating to rewards,
 */
export type BlockRewards = {
    /**
     * \[fees\] accepts transaction fees, it can only spend to the incentive pool.
     */
    'fee-sink': string;
    /**
     * \[rwcalr\] number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.
     */
    'rewards-calculation-round': number;
    /**
     * \[earn\] How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.
     */
    'rewards-level': number;
    /**
     * \[rwd\] accepts periodic injections from the fee-sink and continually redistributes them as rewards.
     */
    'rewards-pool': string;
    /**
     * \[rate\] Number of new MicroAlgos added to the participation stake from rewards at the next round.
     */
    'rewards-rate': number;
    /**
     * \[frac\] Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.
     */
    'rewards-residue': number;
};
/**
 * Fields relating to a protocol upgrade.
 */
export type BlockUpgradeState = {
    /**
     * \[proto\] The current protocol version.
     */
    'current-protocol': string;
    /**
     * \[nextproto\] The next proposed protocol version.
     */
    'next-protocol'?: string;
    /**
     * \[nextyes\] Number of blocks which approved the protocol upgrade.
     */
    'next-protocol-approvals'?: number;
    /**
     * \[nextswitch\] Round on which the protocol upgrade will take effect.
     */
    'next-protocol-switch-on'?: number;
    /**
     * \[nextbefore\] Deadline round for this protocol upgrade (No votes will be consider after this round).
     */
    'next-protocol-vote-before'?: number;
};
/**
 * Fields relating to voting for a protocol upgrade.
 */
export type BlockUpgradeVote = {
    /**
     * \[upgradeyes\] Indicates a yes vote for the current proposal.
     */
    'upgrade-approve'?: boolean;
    /**
     * \[upgradedelay\] Indicates the time between acceptance and execution.
     */
    'upgrade-delay'?: number;
    /**
     * \[upgradeprop\] Indicates a proposed upgrade.
     */
    'upgrade-propose'?: string;
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
 * Box descriptor describes an app box without a value.
 */
export type BoxDescriptor = {
    /**
     * Base64 encoded box name
     */
    name: string;
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
export type HashFactory = {
    /**
     * \[t\]
     */
    'hash-type'?: number;
};
/**
 * The type of hash function used to create the proof, must be one of:
 * * sha512_256
 * * sha256
 */
export type Hashtype = 'sha512_256' | 'sha256';
/**
 * A health check response.
 */
export type HealthCheck = {
    data?: unknown;
    'db-available': boolean;
    errors?: Array<(string)>;
    'is-migrating': boolean;
    message: string;
    round: number;
    /**
     * Current version.
     */
    version: string;
};
export type IndexerStateProofMessage = {
    /**
     * \[b\]
     */
    'block-headers-commitment'?: string;
    /**
     * \[f\]
     */
    'first-attested-round'?: number;
    /**
     * \[l\]
     */
    'latest-attested-round'?: number;
    /**
     * \[P\]
     */
    'ln-proven-weight'?: number;
    /**
     * \[v\]
     */
    'voters-commitment'?: string;
};
export type MerkleArrayProof = {
    'hash-factory'?: HashFactory;
    /**
     * \[pth\]
     */
    path?: Array<(string)>;
    /**
     * \[td\]
     */
    'tree-depth'?: number;
};
/**
 * A simplified version of AssetHolding
 */
export type MiniAssetHolding = {
    address: string;
    amount: number;
    /**
     * Whether or not this asset holding is currently deleted from its account.
     */
    deleted?: boolean;
    'is-frozen': boolean;
    /**
     * Round during which the account opted into the asset.
     */
    'opted-in-at-round'?: number;
    /**
     * Round during which the account opted out of the asset.
     */
    'opted-out-at-round'?: number;
};
/**
 * \[apan\] defines the what additional actions occur with the transaction.
 *
 * Valid types:
 * * noop
 * * optin
 * * closeout
 * * clear
 * * update
 * * update
 * * delete
 */
export type OnCompletion = 'noop' | 'optin' | 'closeout' | 'clear' | 'update' | 'delete';
/**
 * Participation account data that needs to be checked/acted on by the network.
 */
export type ParticipationUpdates = {
    /**
     * \[partupabs\] a list of online accounts that need to be suspended.
     */
    'absent-participation-accounts'?: Array<(string)>;
    /**
     * \[partupdrmv\] a list of online accounts that needs to be converted to offline since their participation key expired.
     */
    'expired-participation-accounts'?: Array<(string)>;
};
/**
 * Application state delta.
 */
export type StateDelta = Array<EvalDeltaKeyValue>;
/**
 * \[sp\] represents a state proof.
 *
 * Definition:
 * crypto/stateproof/structs.go : StateProof
 */
export type StateProofFields = {
    'part-proofs'?: MerkleArrayProof;
    /**
     * \[pr\] Sequence of reveal positions.
     */
    'positions-to-reveal'?: Array<(number)>;
    /**
     * \[r\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp
     */
    reveals?: Array<StateProofReveal>;
    /**
     * \[v\] Salt version of the merkle signature.
     */
    'salt-version'?: number;
    /**
     * \[c\]
     */
    'sig-commit'?: string;
    'sig-proofs'?: MerkleArrayProof;
    /**
     * \[w\]
     */
    'signed-weight'?: number;
};
export type StateProofParticipant = {
    verifier?: StateProofVerifier;
    /**
     * \[w\]
     */
    weight?: number;
};
export type StateProofReveal = {
    participant?: StateProofParticipant;
    /**
     * The position in the signature and participants arrays corresponding to this entry.
     */
    position?: number;
    'sig-slot'?: StateProofSigSlot;
};
export type StateProofSigSlot = {
    /**
     * \[l\] The total weight of signatures in the lower-numbered slots.
     */
    'lower-sig-weight'?: number;
    signature?: StateProofSignature;
};
export type StateProofSignature = {
    'falcon-signature'?: string;
    'merkle-array-index'?: number;
    proof?: MerkleArrayProof;
    /**
     * \[vkey\]
     */
    'verifying-key'?: string;
};
export type StateProofTracking = {
    /**
     * \[n\] Next round for which we will accept a state proof transaction.
     */
    'next-round'?: number;
    /**
     * \[t\] The total number of microalgos held by the online accounts during the StateProof round.
     */
    'online-total-weight'?: number;
    /**
     * State Proof Type. Note the raw object uses map with this as key.
     */
    type?: number;
    /**
     * \[v\] Root of a vector commitment containing online accounts that will help sign the proof.
     */
    'voters-commitment'?: string;
};
export type StateProofVerifier = {
    /**
     * \[cmt\] Represents the root of the vector commitment tree.
     */
    commitment?: string;
    /**
     * \[lf\] Key lifetime.
     */
    'key-lifetime'?: number;
};
/**
 * Represents a \[apls\] local-state or \[apgs\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.
 */
export type StateSchema = {
    /**
     * Maximum number of TEAL byte slices that may be stored in the key/value store.
     */
    'num-byte-slice': number;
    /**
     * Maximum number of TEAL uints that may be stored in the key/value store.
     */
    'num-uint': number;
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
     * bytes value.
     */
    bytes: string;
    /**
     * type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**
     */
    type: number;
    /**
     * uint value.
     */
    uint: number;
};
/**
 * Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.
 *
 * Definition:
 * data/transactions/signedtxn.go : SignedTxn
 * data/transactions/transaction.go : Transaction
 *
 */
export type Transaction = {
    'application-transaction'?: TransactionApplication;
    'asset-config-transaction'?: TransactionAssetConfig;
    'asset-freeze-transaction'?: TransactionAssetFreeze;
    'asset-transfer-transaction'?: TransactionAssetTransfer;
    /**
     * \[sgnr\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.
     */
    'auth-addr'?: string;
    /**
     * \[rc\] rewards applied to close-remainder-to account.
     */
    'close-rewards'?: number;
    /**
     * \[ca\] closing amount for transaction.
     */
    'closing-amount'?: number;
    /**
     * Round when the transaction was confirmed.
     */
    'confirmed-round'?: number;
    /**
     * Specifies an application index (ID) if an application was created with this transaction.
     */
    'created-application-index'?: number;
    /**
     * Specifies an asset index (ID) if an asset was created with this transaction.
     */
    'created-asset-index'?: number;
    /**
     * \[fee\] Transaction fee.
     */
    fee: number;
    /**
     * \[fv\] First valid round for this transaction.
     */
    'first-valid': number;
    /**
     * \[gh\] Hash of genesis block.
     */
    'genesis-hash'?: string;
    /**
     * \[gen\] genesis block ID.
     */
    'genesis-id'?: string;
    'global-state-delta'?: StateDelta;
    /**
     * \[grp\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.
     */
    group?: string;
    /**
     * Transaction ID
     */
    id?: string;
    /**
     * Inner transactions produced by application execution.
     */
    'inner-txns'?: Array<Transaction>;
    /**
     * Offset into the round where this transaction was confirmed.
     */
    'intra-round-offset'?: number;
    'keyreg-transaction'?: TransactionKeyreg;
    /**
     * \[lv\] Last valid round for this transaction.
     */
    'last-valid': number;
    /**
     * \[lx\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.
     */
    lease?: string;
    /**
     * \[ld\] Local state key/value changes for the application being executed by this transaction.
     */
    'local-state-delta'?: Array<AccountStateDelta>;
    /**
     * \[lg\] Logs for the application being executed by this transaction.
     */
    logs?: Array<(string)>;
    /**
     * \[note\] Free form data.
     */
    note?: string;
    'payment-transaction'?: TransactionPayment;
    /**
     * \[rr\] rewards applied to receiver account.
     */
    'receiver-rewards'?: number;
    /**
     * \[rekey\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.
     */
    'rekey-to'?: string;
    /**
     * Time when the block this transaction is in was confirmed.
     */
    'round-time'?: number;
    /**
     * \[snd\] Sender's address.
     */
    sender: string;
    /**
     * \[rs\] rewards applied to sender account.
     */
    'sender-rewards'?: number;
    signature?: TransactionSignature;
    'state-proof-transaction'?: TransactionStateProof;
    /**
     * \[type\] Indicates what type of transaction this is. Different types have different fields.
     *
     * Valid types, and where their fields are stored:
     * * \[pay\] payment-transaction
     * * \[keyreg\] keyreg-transaction
     * * \[acfg\] asset-config-transaction
     * * \[axfer\] asset-transfer-transaction
     * * \[afrz\] asset-freeze-transaction
     * * \[appl\] application-transaction
     * * \[stpf\] state-proof-transaction
     */
    'tx-type': 'pay' | 'keyreg' | 'acfg' | 'axfer' | 'afrz' | 'appl' | 'stpf';
};
/**
 * \[type\] Indicates what type of transaction this is. Different types have different fields.
 *
 * Valid types, and where their fields are stored:
 * * \[pay\] payment-transaction
 * * \[keyreg\] keyreg-transaction
 * * \[acfg\] asset-config-transaction
 * * \[axfer\] asset-transfer-transaction
 * * \[afrz\] asset-freeze-transaction
 * * \[appl\] application-transaction
 * * \[stpf\] state-proof-transaction
 */
export type tx_type = 'pay' | 'keyreg' | 'acfg' | 'axfer' | 'afrz' | 'appl' | 'stpf';
/**
 * Fields for application transactions.
 *
 * Definition:
 * data/transactions/application.go : ApplicationCallTxnFields
 */
export type TransactionApplication = {
    /**
     * \[apat\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.
     */
    accounts?: Array<(string)>;
    /**
     * \[apaa\] transaction specific arguments accessed from the application's approval-program and clear-state-program.
     */
    'application-args'?: Array<(string)>;
    /**
     * \[apid\] ID of the application being configured or empty if creating.
     */
    'application-id': number;
    /**
     * \[apap\] Logic executed for every application transaction, except when on-completion is set to "clear". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.
     */
    'approval-program'?: string;
    /**
     * \[apsu\] Logic executed for application transactions with on-completion set to "clear". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.
     */
    'clear-state-program'?: string;
    /**
     * \[epp\] specifies the additional app program len requested in pages.
     */
    'extra-program-pages'?: number;
    /**
     * \[apfa\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.
     */
    'foreign-apps'?: Array<(number)>;
    /**
     * \[apas\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.
     */
    'foreign-assets'?: Array<(number)>;
    'global-state-schema'?: StateSchema;
    'local-state-schema'?: StateSchema;
    'on-completion': OnCompletion;
};
/**
 * Fields for asset allocation, re-configuration, and destruction.
 *
 *
 * A zero value for asset-id indicates asset creation.
 * A zero value for the params indicates asset destruction.
 *
 * Definition:
 * data/transactions/asset.go : AssetConfigTxnFields
 */
export type TransactionAssetConfig = {
    /**
     * \[xaid\] ID of the asset being configured or empty if creating.
     */
    'asset-id'?: number;
    params?: AssetParams;
};
/**
 * Fields for an asset freeze transaction.
 *
 * Definition:
 * data/transactions/asset.go : AssetFreezeTxnFields
 */
export type TransactionAssetFreeze = {
    /**
     * \[fadd\] Address of the account whose asset is being frozen or thawed.
     */
    address: string;
    /**
     * \[faid\] ID of the asset being frozen or thawed.
     */
    'asset-id': number;
    /**
     * \[afrz\] The new freeze status.
     */
    'new-freeze-status': boolean;
};
/**
 * Fields for an asset transfer transaction.
 *
 * Definition:
 * data/transactions/asset.go : AssetTransferTxnFields
 */
export type TransactionAssetTransfer = {
    /**
     * \[aamt\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.
     */
    amount: number;
    /**
     * \[xaid\] ID of the asset being transferred.
     */
    'asset-id': number;
    /**
     * Number of assets transferred to the close-to account as part of the transaction.
     */
    'close-amount'?: number;
    /**
     * \[aclose\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.
     */
    'close-to'?: string;
    /**
     * \[arcv\] Recipient address of the transfer.
     */
    receiver: string;
    /**
     * \[asnd\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.
     */
    sender?: string;
};
/**
 * Fields for a keyreg transaction.
 *
 * Definition:
 * data/transactions/keyreg.go : KeyregTxnFields
 */
export type TransactionKeyreg = {
    /**
     * \[nonpart\] Mark the account as participating or non-participating.
     */
    'non-participation'?: boolean;
    /**
     * \[selkey\] Public key used with the Verified Random Function (VRF) result during committee selection.
     */
    'selection-participation-key'?: string;
    /**
     * \[sprfkey\] State proof key used in key registration transactions.
     */
    'state-proof-key'?: string;
    /**
     * \[votefst\] First round this participation key is valid.
     */
    'vote-first-valid'?: number;
    /**
     * \[votekd\] Number of subkeys in each batch of participation keys.
     */
    'vote-key-dilution'?: number;
    /**
     * \[votelst\] Last round this participation key is valid.
     */
    'vote-last-valid'?: number;
    /**
     * \[votekey\] Participation public key used in key registration transactions.
     */
    'vote-participation-key'?: string;
};
/**
 * Fields for a payment transaction.
 *
 * Definition:
 * data/transactions/payment.go : PaymentTxnFields
 */
export type TransactionPayment = {
    /**
     * \[amt\] number of MicroAlgos intended to be transferred.
     */
    amount: number;
    /**
     * Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.
     */
    'close-amount'?: number;
    /**
     * \[close\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.
     */
    'close-remainder-to'?: string;
    /**
     * \[rcv\] receiver's address.
     */
    receiver: string;
};
/**
 * Validation signature associated with some data. Only one of the signatures should be provided.
 */
export type TransactionSignature = {
    logicsig?: TransactionSignatureLogicsig;
    multisig?: TransactionSignatureMultisig;
    /**
     * \[sig\] Standard ed25519 signature.
     */
    sig?: string;
};
/**
 * \[lsig\] Programatic transaction signature.
 *
 * Definition:
 * data/transactions/logicsig.go
 */
export type TransactionSignatureLogicsig = {
    /**
     * \[arg\] Logic arguments, base64 encoded.
     */
    args?: Array<(string)>;
    /**
     * \[l\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.
     */
    logic: string;
    'multisig-signature'?: TransactionSignatureMultisig;
    /**
     * \[sig\] ed25519 signature.
     */
    signature?: string;
};
/**
 * \[msig\] structure holding multiple subsignatures.
 *
 * Definition:
 * crypto/multisig.go : MultisigSig
 */
export type TransactionSignatureMultisig = {
    /**
     * \[subsig\] holds pairs of public key and signatures.
     */
    subsignature?: Array<TransactionSignatureMultisigSubsignature>;
    /**
     * \[thr\]
     */
    threshold?: number;
    /**
     * \[v\]
     */
    version?: number;
};
export type TransactionSignatureMultisigSubsignature = {
    /**
     * \[pk\]
     */
    'public-key'?: string;
    /**
     * \[s\]
     */
    signature?: string;
};
/**
 * Fields for a state proof transaction.
 *
 * Definition:
 * data/transactions/stateproof.go : StateProofTxnFields
 */
export type TransactionStateProof = {
    message?: IndexerStateProofMessage;
    'state-proof'?: StateProofFields;
    /**
     * \[sptype\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go
     */
    'state-proof-type'?: number;
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
 * Application ID
 */
export type Parameterapplication_id = number;
/**
 * Asset ID
 */
export type Parameterasset_id = number;
/**
 * Include accounts configured to use this spending key.
 */
export type Parameterauth_addr = string;
/**
 * Include results before the given time. Must be an RFC 3339 formatted string.
 */
export type Parameterbefore_time = string;
/**
 * A box name in goal-arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
 */
export type Parameterbox_name = string;
/**
 * Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
 */
export type Parametercurrency_greater_than = number;
/**
 * Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
 */
export type Parametercurrency_less_than = number;
/**
 * Exclude additional items such as asset holdings, application local data stored for this account, asset parameters created by this account, and application parameters created by this account.
 */
export type Parameterexclude = Array<('all' | 'assets' | 'created-assets' | 'apps-local-state' | 'created-apps' | 'none')>;
/**
 * Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.
 */
export type Parameterexclude_close_to = boolean;
/**
 * Header only flag. When this is set to true, returned block does not contain the transactions
 */
export type Parameterheader_only = boolean;
/**
 * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
 */
export type Parameterinclude_all = boolean;
/**
 * Maximum number of results to return. There could be additional pages even if the limit is not reached.
 */
export type Parameterlimit = number;
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
 * Include results which include the rekey-to field.
 */
export type Parameterrekey_to = boolean;
/**
 * Include results for the specified round.
 */
export type Parameterround = number;
/**
 * Round number
 */
export type Parameterround_number = number;
/**
 * Only include transactions with this sender address.
 */
export type Parametersender_address = string;
/**
 * SigType filters just results using the specified type of signature:
 * * sig - Standard
 * * msig - MultiSig
 * * lsig - LogicSig
 */
export type Parametersig_type = 'sig' | 'msig' | 'lsig';
export type Parametertx_type = 'pay' | 'keyreg' | 'acfg' | 'axfer' | 'afrz' | 'appl' | 'stpf';
/**
 * Lookup the specific transaction by ID.
 */
export type Parametertxid = string;
export type MakeHealthCheckResponse = HealthCheck;
export type SearchForAccountsData = {
    /**
     * Application ID
     */
    applicationId?: number;
    /**
     * Asset ID
     */
    assetId?: number;
    /**
     * Include accounts configured to use this spending key.
     */
    authAddr?: string;
    /**
     * Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyGreaterThan?: number;
    /**
     * Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyLessThan?: number;
    /**
     * Exclude additional items such as asset holdings, application local data stored for this account, asset parameters created by this account, and application parameters created by this account.
     */
    exclude?: Array<('all' | 'assets' | 'created-assets' | 'apps-local-state' | 'created-apps' | 'none')>;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
    /**
     * Include results for the specified round. For performance reasons, this parameter may be disabled on some configurations. Using application-id or asset-id filters will return both creator and opt-in accounts. Filtering by include-all will return creator and opt-in accounts for deleted assets and accounts. Non-opt-in managers are not included in the results when asset-id is used.
     */
    round?: number;
};
export type SearchForAccountsResponse = {
    accounts: Array<Account>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type SearchForApplicationsData = {
    /**
     * Application ID
     */
    applicationId?: number;
    /**
     * Filter just applications with the given creator address.
     */
    creator?: string;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type SearchForApplicationsResponse = {
    applications: Array<Application>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type SearchForApplicationBoxesData = {
    applicationId: number;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type SearchForApplicationBoxesResponse = {
    /**
     * \[appidx\] application index.
     */
    'application-id': number;
    boxes: Array<BoxDescriptor>;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type SearchForAssetsData = {
    /**
     * Asset ID
     */
    assetId?: number;
    /**
     * Filter just assets with the given creator address.
     */
    creator?: string;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * Filter just assets with the given name.
     */
    name?: string;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
    /**
     * Filter just assets with the given unit.
     */
    unit?: string;
};
export type SearchForAssetsResponse = {
    assets: Array<Asset>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type SearchForTransactionsData = {
    /**
     * Only include transactions with this address in one of the transaction fields.
     */
    address?: string;
    /**
     * Combine with the address parameter to define what type of address to search for.
     */
    addressRole?: 'sender' | 'receiver' | 'freeze-target';
    /**
     * Include results after the given time. Must be an RFC 3339 formatted string.
     */
    afterTime?: string;
    /**
     * Application ID
     */
    applicationId?: number;
    /**
     * Asset ID
     */
    assetId?: number;
    /**
     * Include results before the given time. Must be an RFC 3339 formatted string.
     */
    beforeTime?: string;
    /**
     * Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyGreaterThan?: number;
    /**
     * Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyLessThan?: number;
    /**
     * Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.
     */
    excludeCloseTo?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * Include results at or before the specified max-round.
     */
    maxRound?: number;
    /**
     * Include results at or after the specified min-round.
     */
    minRound?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
    /**
     * Specifies a prefix which must be contained in the note field.
     */
    notePrefix?: string;
    /**
     * Include results which include the rekey-to field.
     */
    rekeyTo?: boolean;
    /**
     * Include results for the specified round.
     */
    round?: number;
    /**
     * SigType filters just results using the specified type of signature:
     * * sig - Standard
     * * msig - MultiSig
     * * lsig - LogicSig
     */
    sigType?: 'sig' | 'msig' | 'lsig';
    /**
     * Lookup the specific transaction by ID.
     */
    txid?: string;
    txType?: 'pay' | 'keyreg' | 'acfg' | 'axfer' | 'afrz' | 'appl' | 'stpf';
};
export type SearchForTransactionsResponse = {
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
    transactions: Array<Transaction>;
};
export type LookupAccountByIdData = {
    /**
     * account string
     */
    accountId: string;
    /**
     * Exclude additional items such as asset holdings, application local data stored for this account, asset parameters created by this account, and application parameters created by this account.
     */
    exclude?: Array<('all' | 'assets' | 'created-assets' | 'apps-local-state' | 'created-apps' | 'none')>;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Include results for the specified round.
     */
    round?: number;
};
export type LookupAccountByIdResponse = {
    account: Account;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
};
export type LookupAccountAppLocalStatesData = {
    /**
     * account string
     */
    accountId: string;
    /**
     * Application ID
     */
    applicationId?: number;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type LookupAccountAppLocalStatesResponse = {
    'apps-local-states': Array<ApplicationLocalState>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type LookupAccountAssetsData = {
    /**
     * account string
     */
    accountId: string;
    /**
     * Asset ID
     */
    assetId?: number;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type LookupAccountAssetsResponse = {
    assets: Array<AssetHolding>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type LookupAccountCreatedApplicationsData = {
    /**
     * account string
     */
    accountId: string;
    /**
     * Application ID
     */
    applicationId?: number;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type LookupAccountCreatedApplicationsResponse = {
    applications: Array<Application>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type LookupAccountCreatedAssetsData = {
    /**
     * account string
     */
    accountId: string;
    /**
     * Asset ID
     */
    assetId?: number;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type LookupAccountCreatedAssetsResponse = {
    assets: Array<Asset>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type LookupAccountTransactionsData = {
    /**
     * account string
     */
    accountId: string;
    /**
     * Include results after the given time. Must be an RFC 3339 formatted string.
     */
    afterTime?: string;
    /**
     * Asset ID
     */
    assetId?: number;
    /**
     * Include results before the given time. Must be an RFC 3339 formatted string.
     */
    beforeTime?: string;
    /**
     * Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyGreaterThan?: number;
    /**
     * Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyLessThan?: number;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * Include results at or before the specified max-round.
     */
    maxRound?: number;
    /**
     * Include results at or after the specified min-round.
     */
    minRound?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
    /**
     * Specifies a prefix which must be contained in the note field.
     */
    notePrefix?: string;
    /**
     * Include results which include the rekey-to field.
     */
    rekeyTo?: boolean;
    /**
     * Include results for the specified round.
     */
    round?: number;
    /**
     * SigType filters just results using the specified type of signature:
     * * sig - Standard
     * * msig - MultiSig
     * * lsig - LogicSig
     */
    sigType?: 'sig' | 'msig' | 'lsig';
    /**
     * Lookup the specific transaction by ID.
     */
    txid?: string;
    txType?: 'pay' | 'keyreg' | 'acfg' | 'axfer' | 'afrz' | 'appl' | 'stpf';
};
export type LookupAccountTransactionsResponse = {
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
    transactions: Array<Transaction>;
};
export type LookupApplicationByIdData = {
    applicationId: number;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
};
export type LookupApplicationByIdResponse = {
    application?: Application;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
};
export type LookupApplicationBoxByIdAndNameData = {
    applicationId: number;
    /**
     * A box name in goal-arg form 'encoding:value'. For ints, use the form 'int:1234'. For raw bytes, use the form 'b64:A=='. For printable strings, use the form 'str:hello'. For addresses, use the form 'addr:XYZ...'.
     */
    name: string;
};
export type LookupApplicationBoxByIdAndNameResponse = Box;
export type LookupApplicationLogsByIdData = {
    applicationId: number;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * Include results at or before the specified max-round.
     */
    maxRound?: number;
    /**
     * Include results at or after the specified min-round.
     */
    minRound?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
    /**
     * Only include transactions with this sender address.
     */
    senderAddress?: string;
    /**
     * Lookup the specific transaction by ID.
     */
    txid?: string;
};
export type LookupApplicationLogsByIdResponse = {
    /**
     * \[appidx\] application index.
     */
    'application-id': number;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    'log-data'?: Array<ApplicationLogData>;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type LookupAssetByIdData = {
    assetId: number;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
};
export type LookupAssetByIdResponse = {
    asset: Asset;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
};
export type LookupAssetBalancesData = {
    assetId: number;
    /**
     * Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyGreaterThan?: number;
    /**
     * Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyLessThan?: number;
    /**
     * Include all items including closed accounts, deleted applications, destroyed assets, opted-out asset holdings, and closed-out application localstates.
     */
    includeAll?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
};
export type LookupAssetBalancesResponse = {
    balances: Array<MiniAssetHolding>;
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
};
export type LookupAssetTransactionsData = {
    /**
     * Only include transactions with this address in one of the transaction fields.
     */
    address?: string;
    /**
     * Combine with the address parameter to define what type of address to search for.
     */
    addressRole?: 'sender' | 'receiver' | 'freeze-target';
    /**
     * Include results after the given time. Must be an RFC 3339 formatted string.
     */
    afterTime?: string;
    assetId: number;
    /**
     * Include results before the given time. Must be an RFC 3339 formatted string.
     */
    beforeTime?: string;
    /**
     * Results should have an amount greater than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyGreaterThan?: number;
    /**
     * Results should have an amount less than this value. MicroAlgos are the default currency unless an asset-id is provided, in which case the asset will be used.
     */
    currencyLessThan?: number;
    /**
     * Combine with address and address-role parameters to define what type of address to search for. The close to fields are normally treated as a receiver, if you would like to exclude them set this parameter to true.
     */
    excludeCloseTo?: boolean;
    /**
     * Maximum number of results to return. There could be additional pages even if the limit is not reached.
     */
    limit?: number;
    /**
     * Include results at or before the specified max-round.
     */
    maxRound?: number;
    /**
     * Include results at or after the specified min-round.
     */
    minRound?: number;
    /**
     * The next page of results. Use the next token provided by the previous results.
     */
    next?: string;
    /**
     * Specifies a prefix which must be contained in the note field.
     */
    notePrefix?: string;
    /**
     * Include results which include the rekey-to field.
     */
    rekeyTo?: boolean;
    /**
     * Include results for the specified round.
     */
    round?: number;
    /**
     * SigType filters just results using the specified type of signature:
     * * sig - Standard
     * * msig - MultiSig
     * * lsig - LogicSig
     */
    sigType?: 'sig' | 'msig' | 'lsig';
    /**
     * Lookup the specific transaction by ID.
     */
    txid?: string;
    txType?: 'pay' | 'keyreg' | 'acfg' | 'axfer' | 'afrz' | 'appl' | 'stpf';
};
export type LookupAssetTransactionsResponse = {
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    /**
     * Used for pagination, when making another request provide this token with the next parameter.
     */
    'next-token'?: string;
    transactions: Array<Transaction>;
};
export type LookupBlockData = {
    /**
     * Header only flag. When this is set to true, returned block does not contain the transactions
     */
    headerOnly?: boolean;
    /**
     * Round number
     */
    roundNumber: number;
};
export type LookupBlockResponse = Block;
export type LookupTransactionData = {
    txid: string;
};
export type LookupTransactionResponse = {
    /**
     * Round at which the results were computed.
     */
    'current-round': number;
    transaction: Transaction;
};
export type $OpenApiTs = {
    '/health': {
        get: {
            res: {
                /**
                 * (empty)
                 */
                200: HealthCheck;
                /**
                 * Unknown Error
                 */
                default: unknown;
            };
        };
    };
    '/v2/accounts': {
        get: {
            req: SearchForAccountsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    accounts: Array<Account>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/applications': {
        get: {
            req: SearchForApplicationsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    applications: Array<Application>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/applications/{application-id}/boxes': {
        get: {
            req: SearchForApplicationBoxesData;
            res: {
                /**
                 * Box names of an application
                 */
                200: {
                    /**
                     * \[appidx\] application index.
                     */
                    'application-id': number;
                    boxes: Array<BoxDescriptor>;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/assets': {
        get: {
            req: SearchForAssetsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    assets: Array<Asset>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/transactions': {
        get: {
            req: SearchForTransactionsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                    transactions: Array<Transaction>;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/accounts/{account-id}': {
        get: {
            req: LookupAccountByIdData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    account: Account;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/accounts/{account-id}/apps-local-state': {
        get: {
            req: LookupAccountAppLocalStatesData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    'apps-local-states': Array<ApplicationLocalState>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/accounts/{account-id}/assets': {
        get: {
            req: LookupAccountAssetsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    assets: Array<AssetHolding>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/accounts/{account-id}/created-applications': {
        get: {
            req: LookupAccountCreatedApplicationsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    applications: Array<Application>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/accounts/{account-id}/created-assets': {
        get: {
            req: LookupAccountCreatedAssetsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    assets: Array<Asset>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/accounts/{account-id}/transactions': {
        get: {
            req: LookupAccountTransactionsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                    transactions: Array<Transaction>;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/applications/{application-id}': {
        get: {
            req: LookupApplicationByIdData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    application?: Application;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/applications/{application-id}/box': {
        get: {
            req: LookupApplicationBoxByIdAndNameData;
            res: {
                /**
                 * Box information
                 */
                200: Box;
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/applications/{application-id}/logs': {
        get: {
            req: LookupApplicationLogsByIdData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    /**
                     * \[appidx\] application index.
                     */
                    'application-id': number;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    'log-data'?: Array<ApplicationLogData>;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
            };
        };
    };
    '/v2/assets/{asset-id}': {
        get: {
            req: LookupAssetByIdData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    asset: Asset;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/assets/{asset-id}/balances': {
        get: {
            req: LookupAssetBalancesData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    balances: Array<MiniAssetHolding>;
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/assets/{asset-id}/transactions': {
        get: {
            req: LookupAssetTransactionsData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    /**
                     * Used for pagination, when making another request provide this token with the next parameter.
                     */
                    'next-token'?: string;
                    transactions: Array<Transaction>;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/blocks/{round-number}': {
        get: {
            req: LookupBlockData;
            res: {
                /**
                 * (empty)
                 */
                200: Block;
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
    '/v2/transactions/{txid}': {
        get: {
            req: LookupTransactionData;
            res: {
                /**
                 * (empty)
                 */
                200: {
                    /**
                     * Round at which the results were computed.
                     */
                    'current-round': number;
                    transaction: Transaction;
                };
                /**
                 * Response for errors
                 */
                400: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                404: {
                    data?: unknown;
                    message: string;
                };
                /**
                 * Response for errors
                 */
                500: {
                    data?: unknown;
                    message: string;
                };
            };
        };
    };
};
