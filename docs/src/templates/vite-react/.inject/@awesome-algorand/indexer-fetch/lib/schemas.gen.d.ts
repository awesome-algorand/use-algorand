export declare const $Account: {
    readonly description: "Account information at a given round.\n\nDefinition:\ndata/basics/userBalance.go : AccountData\n";
    readonly properties: {
        readonly address: {
            readonly description: "the account public key";
            readonly type: "string";
        };
        readonly amount: {
            readonly description: "total number of MicroAlgos in the account";
            readonly type: "integer";
        };
        readonly 'amount-without-pending-rewards': {
            readonly description: "specifies the amount of MicroAlgos in the account, without the pending rewards.";
            readonly type: "integer";
        };
        readonly 'apps-local-state': {
            readonly description: "application local data stored in this account.\n\nNote the raw object uses `map[int] -> AppLocalState` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/ApplicationLocalState";
            };
            readonly type: "array";
        };
        readonly 'apps-total-extra-pages': {
            readonly description: "the sum of all extra application program pages for this account.";
            readonly type: "integer";
        };
        readonly 'apps-total-schema': {
            readonly $ref: "#/components/schemas/ApplicationStateSchema";
        };
        readonly assets: {
            readonly description: "assets held by this account.\n\nNote the raw object uses `map[int] -> AssetHolding` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/AssetHolding";
            };
            readonly type: "array";
        };
        readonly 'auth-addr': {
            readonly description: "The address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'closed-at-round': {
            readonly description: "Round during which this account was most recently closed.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'created-apps': {
            readonly description: "parameters of applications created by this account including app global data.\n\nNote: the raw account uses `map[int] -> AppParams` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/Application";
            };
            readonly type: "array";
        };
        readonly 'created-assets': {
            readonly description: "parameters of assets created by this account.\n\nNote: the raw account uses `map[int] -> Asset` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/Asset";
            };
            readonly type: "array";
        };
        readonly 'created-at-round': {
            readonly description: "Round during which this account first appeared in a transaction.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly deleted: {
            readonly description: "Whether or not this account is currently closed.";
            readonly type: "boolean";
        };
        readonly 'incentive-eligible': {
            readonly description: "can the account receive block incentives if its balance is in range at proposal time.";
            readonly type: "boolean";
        };
        readonly 'last-heartbeat': {
            readonly description: "The round in which this account last went online, or explicitly renewed their online status.";
            readonly type: "integer";
        };
        readonly 'last-proposed': {
            readonly description: "The round in which this account last proposed the block.";
            readonly type: "integer";
        };
        readonly 'min-balance': {
            readonly description: "MicroAlgo balance required by the account.\n\nThe requirement grows based on asset and application usage.";
            readonly type: "integer";
        };
        readonly participation: {
            readonly $ref: "#/components/schemas/AccountParticipation";
        };
        readonly 'pending-rewards': {
            readonly description: "amount of MicroAlgos of pending rewards in this account.";
            readonly type: "integer";
        };
        readonly 'reward-base': {
            readonly description: "used as part of the rewards computation. Only applicable to accounts which are participating.";
            readonly type: "integer";
        };
        readonly rewards: {
            readonly description: "total rewards of MicroAlgos the account has received, including pending rewards.";
            readonly type: "integer";
        };
        readonly round: {
            readonly description: "The round for which this information is relevant.";
            readonly type: "integer";
        };
        readonly 'sig-type': {
            readonly description: "the type of signature used by this account, must be one of:\n* sig\n* msig\n* lsig\n* or null if unknown";
            readonly enum: readonly ["sig", "msig", "lsig"];
            readonly type: "string";
        };
        readonly status: {
            readonly description: "voting status of the account's MicroAlgos\n* Offline - indicates that the associated account is delegated.\n*  Online  - indicates that the associated account used as part of the delegation pool.\n*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.";
            readonly type: "string";
        };
        readonly 'total-apps-opted-in': {
            readonly description: "The count of all applications that have been opted in, equivalent to the count of application local data (AppLocalState objects) stored in this account.";
            readonly type: "integer";
        };
        readonly 'total-assets-opted-in': {
            readonly description: "The count of all assets that have been opted in, equivalent to the count of AssetHolding objects held by this account.";
            readonly type: "integer";
        };
        readonly 'total-box-bytes': {
            readonly description: "For app-accounts only. The total number of bytes allocated for the keys and values of boxes which belong to the associated application.";
            readonly type: "integer";
        };
        readonly 'total-boxes': {
            readonly description: "For app-accounts only. The total number of boxes which belong to the associated application.";
            readonly type: "integer";
        };
        readonly 'total-created-apps': {
            readonly description: "The count of all apps (AppParams objects) created by this account.";
            readonly type: "integer";
        };
        readonly 'total-created-assets': {
            readonly description: "The count of all assets (AssetParams objects) created by this account.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["address", "amount", "amount-without-pending-rewards", "min-balance", "pending-rewards", "rewards", "round", "status", "total-apps-opted-in", "total-assets-opted-in", "total-box-bytes", "total-boxes", "total-created-apps", "total-created-assets"];
    readonly type: "object";
};
export declare const $AccountParticipation: {
    readonly description: "AccountParticipation describes the parameters used by this account in consensus protocol.";
    readonly properties: {
        readonly 'selection-participation-key': {
            readonly description: "Selection public key (if any) currently registered for this round.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'state-proof-key': {
            readonly description: "Root of the state proof key (if any)";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'vote-first-valid': {
            readonly description: "First round for which this participation is valid.";
            readonly type: "integer";
        };
        readonly 'vote-key-dilution': {
            readonly description: "Number of subkeys in each batch of participation keys.";
            readonly type: "integer";
        };
        readonly 'vote-last-valid': {
            readonly description: "Last round for which this participation is valid.";
            readonly type: "integer";
        };
        readonly 'vote-participation-key': {
            readonly description: "root participation public key (if any) currently registered for this round.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["selection-participation-key", "vote-first-valid", "vote-key-dilution", "vote-last-valid", "vote-participation-key"];
    readonly type: "object";
};
export declare const $AccountStateDelta: {
    readonly description: "Application state delta.";
    readonly properties: {
        readonly address: {
            readonly type: "string";
        };
        readonly delta: {
            readonly $ref: "#/components/schemas/StateDelta";
        };
    };
    readonly required: readonly ["address", "delta"];
    readonly type: "object";
};
export declare const $Application: {
    readonly description: "Application index and its parameters";
    readonly properties: {
        readonly 'created-at-round': {
            readonly description: "Round when this application was created.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly deleted: {
            readonly description: "Whether or not this application is currently deleted.";
            readonly type: "boolean";
        };
        readonly 'deleted-at-round': {
            readonly description: "Round when this application was deleted.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly id: {
            readonly description: "application index.";
            readonly type: "integer";
        };
        readonly params: {
            readonly $ref: "#/components/schemas/ApplicationParams";
        };
    };
    readonly required: readonly ["id", "params"];
    readonly type: "object";
};
export declare const $ApplicationLocalState: {
    readonly description: "Stores local state associated with an application.";
    readonly properties: {
        readonly 'closed-out-at-round': {
            readonly description: "Round when account closed out of the application.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly deleted: {
            readonly description: "Whether or not the application local state is currently deleted from its account.";
            readonly type: "boolean";
        };
        readonly id: {
            readonly description: "The application which this local state is for.";
            readonly type: "integer";
        };
        readonly 'key-value': {
            readonly $ref: "#/components/schemas/TealKeyValueStore";
        };
        readonly 'opted-in-at-round': {
            readonly description: "Round when the account opted into the application.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly schema: {
            readonly $ref: "#/components/schemas/ApplicationStateSchema";
        };
    };
    readonly required: readonly ["id", "schema"];
    readonly type: "object";
};
export declare const $ApplicationLogData: {
    readonly description: "Stores the global information associated with an application.";
    readonly properties: {
        readonly logs: {
            readonly description: "Logs for the application being executed by the transaction.";
            readonly items: {
                readonly format: "byte";
                readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly txid: {
            readonly description: "Transaction ID";
            readonly type: "string";
        };
    };
    readonly required: readonly ["logs", "txid"];
    readonly type: "object";
};
export declare const $ApplicationParams: {
    readonly description: "Stores the global information associated with an application.";
    readonly properties: {
        readonly 'approval-program': {
            readonly description: "approval program.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
            readonly 'x-algorand-format': "TEALProgram";
        };
        readonly 'clear-state-program': {
            readonly description: "clear state program.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
            readonly 'x-algorand-format': "TEALProgram";
        };
        readonly creator: {
            readonly description: "The address that created this application. This is the address where the parameters and global state for this application can be found.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'extra-program-pages': {
            readonly description: "the number of extra program pages available to this app.";
            readonly type: "integer";
        };
        readonly 'global-state': {
            readonly $ref: "#/components/schemas/TealKeyValueStore";
        };
        readonly 'global-state-schema': {
            readonly $ref: "#/components/schemas/ApplicationStateSchema";
        };
        readonly 'local-state-schema': {
            readonly $ref: "#/components/schemas/ApplicationStateSchema";
        };
    };
    readonly required: readonly ["approval-program", "clear-state-program"];
    readonly type: "object";
};
export declare const $ApplicationStateSchema: {
    readonly description: "Specifies maximums on the number of each type that may be stored.";
    readonly properties: {
        readonly 'num-byte-slice': {
            readonly description: "number of byte slices.";
            readonly type: "integer";
        };
        readonly 'num-uint': {
            readonly description: "number of uints.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["num-byte-slice", "num-uint"];
    readonly type: "object";
};
export declare const $Asset: {
    readonly description: "Specifies both the unique identifier and the parameters for an asset";
    readonly properties: {
        readonly 'created-at-round': {
            readonly description: "Round during which this asset was created.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly deleted: {
            readonly description: "Whether or not this asset is currently deleted.";
            readonly type: "boolean";
        };
        readonly 'destroyed-at-round': {
            readonly description: "Round during which this asset was destroyed.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly index: {
            readonly description: "unique asset identifier";
            readonly type: "integer";
        };
        readonly params: {
            readonly $ref: "#/components/schemas/AssetParams";
        };
    };
    readonly required: readonly ["index", "params"];
    readonly type: "object";
};
export declare const $AssetHolding: {
    readonly description: "Describes an asset held by an account.\n\nDefinition:\ndata/basics/userBalance.go : AssetHolding";
    readonly properties: {
        readonly amount: {
            readonly description: "number of units held.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'asset-id': {
            readonly description: "Asset ID of the holding.";
            readonly type: "integer";
        };
        readonly deleted: {
            readonly description: "Whether or not the asset holding is currently deleted from its account.";
            readonly type: "boolean";
        };
        readonly 'is-frozen': {
            readonly description: "whether or not the holding is frozen.";
            readonly type: "boolean";
        };
        readonly 'opted-in-at-round': {
            readonly description: "Round during which the account opted into this asset holding.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'opted-out-at-round': {
            readonly description: "Round during which the account opted out of this asset holding.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["amount", "asset-id", "is-frozen"];
    readonly type: "object";
};
export declare const $AssetParams: {
    readonly description: "AssetParams specifies the parameters for an asset.\n\n[apar] when part of an AssetConfig transaction.\n\nDefinition:\ndata/transactions/asset.go : AssetParams";
    readonly properties: {
        readonly clawback: {
            readonly description: "Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.";
            readonly type: "string";
        };
        readonly creator: {
            readonly description: "The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.";
            readonly type: "string";
        };
        readonly decimals: {
            readonly description: "The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).";
            readonly maximum: 19;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly 'default-frozen': {
            readonly description: "Whether holdings of this asset are frozen by default.";
            readonly type: "boolean";
        };
        readonly freeze: {
            readonly description: "Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.";
            readonly type: "string";
        };
        readonly manager: {
            readonly description: "Address of account used to manage the keys of this asset and to destroy it.";
            readonly type: "string";
        };
        readonly 'metadata-hash': {
            readonly description: "A commitment to some unspecified asset metadata. The format of this metadata is up to the application.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly name: {
            readonly description: "Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.";
            readonly type: "string";
        };
        readonly 'name-b64': {
            readonly description: "Base64 encoded name of this asset, as supplied by the creator.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly reserve: {
            readonly description: "Address of account holding reserve (non-minted) units of this asset.";
            readonly type: "string";
        };
        readonly total: {
            readonly description: "The total number of units of this asset.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'unit-name': {
            readonly description: "Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.";
            readonly type: "string";
        };
        readonly 'unit-name-b64': {
            readonly description: "Base64 encoded name of a unit of this asset, as supplied by the creator.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly url: {
            readonly description: "URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.";
            readonly type: "string";
        };
        readonly 'url-b64': {
            readonly description: "Base64 encoded URL where more information about the asset can be retrieved.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["creator", "decimals", "total"];
    readonly type: "object";
};
export declare const $Block: {
    readonly description: "Block information.\n\nDefinition:\ndata/bookkeeping/block.go : Block";
    readonly properties: {
        readonly bonus: {
            readonly description: "the potential bonus payout for this block.";
            readonly type: "integer";
        };
        readonly 'fees-collected': {
            readonly description: "the sum of all fees paid by transactions in this block.";
            readonly type: "integer";
        };
        readonly 'genesis-hash': {
            readonly description: "\\[gh\\] hash to which this block belongs.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'genesis-id': {
            readonly description: "\\[gen\\] ID to which this block belongs.";
            readonly type: "string";
        };
        readonly 'participation-updates': {
            readonly $ref: "#/components/schemas/ParticipationUpdates";
        };
        readonly 'previous-block-hash': {
            readonly description: "\\[prev\\] Previous block hash.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly proposer: {
            readonly description: "the proposer of this block.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'proposer-payout': {
            readonly description: "the actual amount transferred to the proposer from the fee sink.";
            readonly type: "integer";
        };
        readonly rewards: {
            readonly $ref: "#/components/schemas/BlockRewards";
        };
        readonly round: {
            readonly description: "\\[rnd\\] Current round on which this block was appended to the chain.";
            readonly type: "integer";
        };
        readonly seed: {
            readonly description: "\\[seed\\] Sortition seed.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'state-proof-tracking': {
            readonly description: "Tracks the status of state proofs.";
            readonly items: {
                readonly $ref: "#/components/schemas/StateProofTracking";
            };
            readonly type: "array";
        };
        readonly timestamp: {
            readonly description: "\\[ts\\] Block creation timestamp in seconds since eposh";
            readonly type: "integer";
        };
        readonly transactions: {
            readonly description: "\\[txns\\] list of transactions corresponding to a given round.";
            readonly items: {
                readonly $ref: "#/components/schemas/Transaction";
            };
            readonly type: "array";
        };
        readonly 'transactions-root': {
            readonly description: "\\[txn\\] TransactionsRoot authenticates the set of transactions appearing in the block. More specifically, it's the root of a merkle tree whose leaves are the block's Txids, in lexicographic order. For the empty block, it's 0. Note that the TxnRoot does not authenticate the signatures on the transactions, only the transactions themselves. Two blocks with the same transactions but in a different order and with different signatures will have the same TxnRoot.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'transactions-root-sha256': {
            readonly description: "\\[txn256\\] TransactionsRootSHA256 is an auxiliary TransactionRoot, built using a vector commitment instead of a merkle tree, and SHA256 hash function instead of the default SHA512_256. This commitment can be used on environments where only the SHA256 function exists.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'txn-counter': {
            readonly description: "[tc] TxnCounter counts the number of transactions committed in the ledger, from the time at which support for this feature was introduced.\n\nSpecifically, TxnCounter is the number of the next transaction that will be committed after this block.  It is 0 when no transactions have ever been committed (since TxnCounter started being supported).";
            readonly type: "integer";
        };
        readonly 'upgrade-state': {
            readonly $ref: "#/components/schemas/BlockUpgradeState";
        };
        readonly 'upgrade-vote': {
            readonly $ref: "#/components/schemas/BlockUpgradeVote";
        };
    };
    readonly required: readonly ["genesis-hash", "genesis-id", "previous-block-hash", "round", "seed", "timestamp", "transactions-root", "transactions-root-sha256"];
    readonly type: "object";
};
export declare const $BlockRewards: {
    readonly description: "Fields relating to rewards,";
    readonly properties: {
        readonly 'fee-sink': {
            readonly description: "\\[fees\\] accepts transaction fees, it can only spend to the incentive pool.";
            readonly type: "string";
        };
        readonly 'rewards-calculation-round': {
            readonly description: "\\[rwcalr\\] number of leftover MicroAlgos after the distribution of rewards-rate MicroAlgos for every reward unit in the next round.";
            readonly type: "integer";
        };
        readonly 'rewards-level': {
            readonly description: "\\[earn\\] How many rewards, in MicroAlgos, have been distributed to each RewardUnit of MicroAlgos since genesis.";
            readonly type: "integer";
        };
        readonly 'rewards-pool': {
            readonly description: "\\[rwd\\] accepts periodic injections from the fee-sink and continually redistributes them as rewards.";
            readonly type: "string";
        };
        readonly 'rewards-rate': {
            readonly description: "\\[rate\\] Number of new MicroAlgos added to the participation stake from rewards at the next round.";
            readonly type: "integer";
        };
        readonly 'rewards-residue': {
            readonly description: "\\[frac\\] Number of leftover MicroAlgos after the distribution of RewardsRate/rewardUnits MicroAlgos for every reward unit in the next round.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["fee-sink", "rewards-calculation-round", "rewards-level", "rewards-pool", "rewards-rate", "rewards-residue"];
    readonly type: "object";
};
export declare const $BlockUpgradeState: {
    readonly description: "Fields relating to a protocol upgrade.";
    readonly properties: {
        readonly 'current-protocol': {
            readonly description: "\\[proto\\] The current protocol version.";
            readonly type: "string";
        };
        readonly 'next-protocol': {
            readonly description: "\\[nextproto\\] The next proposed protocol version.";
            readonly type: "string";
        };
        readonly 'next-protocol-approvals': {
            readonly description: "\\[nextyes\\] Number of blocks which approved the protocol upgrade.";
            readonly type: "integer";
        };
        readonly 'next-protocol-switch-on': {
            readonly description: "\\[nextswitch\\] Round on which the protocol upgrade will take effect.";
            readonly type: "integer";
        };
        readonly 'next-protocol-vote-before': {
            readonly description: "\\[nextbefore\\] Deadline round for this protocol upgrade (No votes will be consider after this round).";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["current-protocol"];
    readonly type: "object";
};
export declare const $BlockUpgradeVote: {
    readonly description: "Fields relating to voting for a protocol upgrade.";
    readonly properties: {
        readonly 'upgrade-approve': {
            readonly description: "\\[upgradeyes\\] Indicates a yes vote for the current proposal.";
            readonly type: "boolean";
        };
        readonly 'upgrade-delay': {
            readonly description: "\\[upgradedelay\\] Indicates the time between acceptance and execution.";
            readonly type: "integer";
        };
        readonly 'upgrade-propose': {
            readonly description: "\\[upgradeprop\\] Indicates a proposed upgrade.";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $Box: {
    readonly description: "Box name and its content.";
    readonly properties: {
        readonly name: {
            readonly description: "\\[name\\] box name, base64 encoded";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly round: {
            readonly description: "The round for which this information is relevant";
            readonly type: "integer";
        };
        readonly value: {
            readonly description: "\\[value\\] box value, base64 encoded.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["name", "round", "value"];
    readonly type: "object";
};
export declare const $BoxDescriptor: {
    readonly description: "Box descriptor describes an app box without a value.";
    readonly properties: {
        readonly name: {
            readonly description: "Base64 encoded box name";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["name"];
    readonly type: "object";
};
export declare const $EvalDelta: {
    readonly description: "Represents a TEAL value delta.";
    readonly properties: {
        readonly action: {
            readonly description: "\\[at\\] delta action.";
            readonly type: "integer";
        };
        readonly bytes: {
            readonly description: "\\[bs\\] bytes value.";
            readonly type: "string";
        };
        readonly uint: {
            readonly description: "\\[ui\\] uint value.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["action"];
    readonly type: "object";
};
export declare const $EvalDeltaKeyValue: {
    readonly description: "Key-value pairs for StateDelta.";
    readonly properties: {
        readonly key: {
            readonly type: "string";
        };
        readonly value: {
            readonly $ref: "#/components/schemas/EvalDelta";
        };
    };
    readonly required: readonly ["key", "value"];
    readonly type: "object";
};
export declare const $HashFactory: {
    readonly properties: {
        readonly 'hash-type': {
            readonly description: "\\[t\\]";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint16";
        };
    };
    readonly type: "object";
};
export declare const $Hashtype: {
    readonly description: "The type of hash function used to create the proof, must be one of: \n* sha512_256 \n* sha256";
    readonly enum: readonly ["sha512_256", "sha256"];
    readonly type: "string";
};
export declare const $HealthCheck: {
    readonly description: "A health check response.";
    readonly properties: {
        readonly data: {
            readonly properties: {};
            readonly type: "object";
        };
        readonly 'db-available': {
            readonly type: "boolean";
        };
        readonly errors: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'is-migrating': {
            readonly type: "boolean";
        };
        readonly message: {
            readonly type: "string";
        };
        readonly round: {
            readonly type: "integer";
        };
        readonly version: {
            readonly description: "Current version.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["db-available", "is-migrating", "message", "round", "version"];
    readonly type: "object";
};
export declare const $IndexerStateProofMessage: {
    readonly properties: {
        readonly 'block-headers-commitment': {
            readonly description: "\\[b\\]";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'first-attested-round': {
            readonly description: "\\[f\\]";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'latest-attested-round': {
            readonly description: "\\[l\\]";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'ln-proven-weight': {
            readonly description: "\\[P\\]";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'voters-commitment': {
            readonly description: "\\[v\\]";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $MerkleArrayProof: {
    readonly properties: {
        readonly 'hash-factory': {
            readonly $ref: "#/components/schemas/HashFactory";
        };
        readonly path: {
            readonly description: "\\[pth\\]";
            readonly items: {
                readonly format: "byte";
                readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'tree-depth': {
            readonly description: "\\[td\\]";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint8";
        };
    };
    readonly type: "object";
};
export declare const $MiniAssetHolding: {
    readonly description: "A simplified version of AssetHolding ";
    readonly properties: {
        readonly address: {
            readonly type: "string";
        };
        readonly amount: {
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly deleted: {
            readonly description: "Whether or not this asset holding is currently deleted from its account.";
            readonly type: "boolean";
        };
        readonly 'is-frozen': {
            readonly type: "boolean";
        };
        readonly 'opted-in-at-round': {
            readonly description: "Round during which the account opted into the asset.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'opted-out-at-round': {
            readonly description: "Round during which the account opted out of the asset.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["address", "amount", "is-frozen"];
    readonly type: "object";
};
export declare const $OnCompletion: {
    readonly description: "[apan] defines the what additional actions occur with the transaction.\n\nValid types:\n* noop\n* optin\n* closeout\n* clear\n* update\n* update\n* delete";
    readonly enum: readonly ["noop", "optin", "closeout", "clear", "update", "delete"];
    readonly type: "string";
};
export declare const $ParticipationUpdates: {
    readonly description: "Participation account data that needs to be checked/acted on by the network.";
    readonly properties: {
        readonly 'absent-participation-accounts': {
            readonly description: "\\[partupabs\\] a list of online accounts that need to be suspended.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'expired-participation-accounts': {
            readonly description: "\\[partupdrmv\\] a list of online accounts that needs to be converted to offline since their participation key expired.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $StateDelta: {
    readonly description: "Application state delta.";
    readonly items: {
        readonly $ref: "#/components/schemas/EvalDeltaKeyValue";
    };
    readonly type: "array";
};
export declare const $StateProofFields: {
    readonly description: "[sp] represents a state proof.\n\nDefinition:\ncrypto/stateproof/structs.go : StateProof";
    readonly properties: {
        readonly 'part-proofs': {
            readonly $ref: "#/components/schemas/MerkleArrayProof";
        };
        readonly 'positions-to-reveal': {
            readonly description: "\\[pr\\] Sequence of reveal positions.";
            readonly items: {
                readonly type: "integer";
                readonly 'x-algorand-format': "uint64";
            };
            readonly type: "array";
        };
        readonly reveals: {
            readonly description: "\\[r\\] Note that this is actually stored as a map[uint64] - Reveal in the actual msgp";
            readonly items: {
                readonly $ref: "#/components/schemas/StateProofReveal";
            };
            readonly type: "array";
        };
        readonly 'salt-version': {
            readonly description: "\\[v\\] Salt version of the merkle signature.";
            readonly type: "integer";
        };
        readonly 'sig-commit': {
            readonly description: "\\[c\\]";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'sig-proofs': {
            readonly $ref: "#/components/schemas/MerkleArrayProof";
        };
        readonly 'signed-weight': {
            readonly description: "\\[w\\]";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly type: "object";
};
export declare const $StateProofParticipant: {
    readonly properties: {
        readonly verifier: {
            readonly $ref: "#/components/schemas/StateProofVerifier";
        };
        readonly weight: {
            readonly description: "\\[w\\]";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly type: "object";
};
export declare const $StateProofReveal: {
    readonly properties: {
        readonly participant: {
            readonly $ref: "#/components/schemas/StateProofParticipant";
        };
        readonly position: {
            readonly description: "The position in the signature and participants arrays corresponding to this entry.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'sig-slot': {
            readonly $ref: "#/components/schemas/StateProofSigSlot";
        };
    };
    readonly type: "object";
};
export declare const $StateProofSigSlot: {
    readonly properties: {
        readonly 'lower-sig-weight': {
            readonly description: "\\[l\\] The total weight of signatures in the lower-numbered slots.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly signature: {
            readonly $ref: "#/components/schemas/StateProofSignature";
        };
    };
    readonly type: "object";
};
export declare const $StateProofSignature: {
    readonly properties: {
        readonly 'falcon-signature': {
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'merkle-array-index': {
            readonly type: "integer";
            readonly 'x-algorand-foramt': "uint64";
        };
        readonly proof: {
            readonly $ref: "#/components/schemas/MerkleArrayProof";
        };
        readonly 'verifying-key': {
            readonly description: "\\[vkey\\]";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $StateProofTracking: {
    readonly properties: {
        readonly 'next-round': {
            readonly description: "\\[n\\] Next round for which we will accept a state proof transaction.";
            readonly type: "integer";
        };
        readonly 'online-total-weight': {
            readonly description: "\\[t\\] The total number of microalgos held by the online accounts during the StateProof round.";
            readonly type: "integer";
        };
        readonly type: {
            readonly description: "State Proof Type. Note the raw object uses map with this as key.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'voters-commitment': {
            readonly description: "\\[v\\] Root of a vector commitment containing online accounts that will help sign the proof.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $StateProofVerifier: {
    readonly properties: {
        readonly commitment: {
            readonly description: "\\[cmt\\] Represents the root of the vector commitment tree.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'key-lifetime': {
            readonly description: "\\[lf\\] Key lifetime.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly type: "object";
};
export declare const $StateSchema: {
    readonly description: "Represents a \\[apls\\] local-state or \\[apgs\\] global-state schema. These schemas determine how much storage may be used in a local-state or global-state for an application. The more space used, the larger minimum balance must be maintained in the account holding the data.";
    readonly properties: {
        readonly 'num-byte-slice': {
            readonly description: "Maximum number of TEAL byte slices that may be stored in the key/value store.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'num-uint': {
            readonly description: "Maximum number of TEAL uints that may be stored in the key/value store.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["num-byte-slice", "num-uint"];
    readonly type: "object";
};
export declare const $TealKeyValue: {
    readonly description: "Represents a key-value pair in an application store.";
    readonly properties: {
        readonly key: {
            readonly type: "string";
        };
        readonly value: {
            readonly $ref: "#/components/schemas/TealValue";
        };
    };
    readonly required: readonly ["key", "value"];
    readonly type: "object";
};
export declare const $TealKeyValueStore: {
    readonly description: "Represents a key-value store for use in an application.";
    readonly items: {
        readonly $ref: "#/components/schemas/TealKeyValue";
    };
    readonly type: "array";
};
export declare const $TealValue: {
    readonly description: "Represents a TEAL value.";
    readonly properties: {
        readonly bytes: {
            readonly description: "bytes value.";
            readonly type: "string";
        };
        readonly type: {
            readonly description: "type of the value. Value `1` refers to **bytes**, value `2` refers to **uint**";
            readonly type: "integer";
        };
        readonly uint: {
            readonly description: "uint value.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["bytes", "type", "uint"];
    readonly type: "object";
};
export declare const $Transaction: {
    readonly description: "Contains all fields common to all transactions and serves as an envelope to all transactions type. Represents both regular and inner transactions.\n\nDefinition:\ndata/transactions/signedtxn.go : SignedTxn\ndata/transactions/transaction.go : Transaction\n";
    readonly properties: {
        readonly 'application-transaction': {
            readonly $ref: "#/components/schemas/TransactionApplication";
        };
        readonly 'asset-config-transaction': {
            readonly $ref: "#/components/schemas/TransactionAssetConfig";
        };
        readonly 'asset-freeze-transaction': {
            readonly $ref: "#/components/schemas/TransactionAssetFreeze";
        };
        readonly 'asset-transfer-transaction': {
            readonly $ref: "#/components/schemas/TransactionAssetTransfer";
        };
        readonly 'auth-addr': {
            readonly description: "\\[sgnr\\] this is included with signed transactions when the signing address does not equal the sender. The backend can use this to ensure that auth addr is equal to the accounts auth addr.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'close-rewards': {
            readonly description: "\\[rc\\] rewards applied to close-remainder-to account.";
            readonly type: "integer";
        };
        readonly 'closing-amount': {
            readonly description: "\\[ca\\] closing amount for transaction.";
            readonly type: "integer";
        };
        readonly 'confirmed-round': {
            readonly description: "Round when the transaction was confirmed.";
            readonly type: "integer";
        };
        readonly 'created-application-index': {
            readonly description: "Specifies an application index (ID) if an application was created with this transaction.";
            readonly type: "integer";
        };
        readonly 'created-asset-index': {
            readonly description: "Specifies an asset index (ID) if an asset was created with this transaction.";
            readonly type: "integer";
        };
        readonly fee: {
            readonly description: "\\[fee\\] Transaction fee.";
            readonly type: "integer";
        };
        readonly 'first-valid': {
            readonly description: "\\[fv\\] First valid round for this transaction.";
            readonly type: "integer";
        };
        readonly 'genesis-hash': {
            readonly description: "\\[gh\\] Hash of genesis block.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'genesis-id': {
            readonly description: "\\[gen\\] genesis block ID.";
            readonly type: "string";
        };
        readonly 'global-state-delta': {
            readonly $ref: "#/components/schemas/StateDelta";
        };
        readonly group: {
            readonly description: "\\[grp\\] Base64 encoded byte array of a sha512/256 digest. When present indicates that this transaction is part of a transaction group and the value is the sha512/256 hash of the transactions in that group.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly id: {
            readonly description: "Transaction ID";
            readonly type: "string";
        };
        readonly 'inner-txns': {
            readonly description: "Inner transactions produced by application execution.";
            readonly items: {
                readonly $ref: "#/components/schemas/Transaction";
            };
            readonly type: "array";
        };
        readonly 'intra-round-offset': {
            readonly description: "Offset into the round where this transaction was confirmed.";
            readonly type: "integer";
        };
        readonly 'keyreg-transaction': {
            readonly $ref: "#/components/schemas/TransactionKeyreg";
        };
        readonly 'last-valid': {
            readonly description: "\\[lv\\] Last valid round for this transaction.";
            readonly type: "integer";
        };
        readonly lease: {
            readonly description: "\\[lx\\] Base64 encoded 32-byte array. Lease enforces mutual exclusion of transactions.  If this field is nonzero, then once the transaction is confirmed, it acquires the lease identified by the (Sender, Lease) pair of the transaction until the LastValid round passes.  While this transaction possesses the lease, no other transaction specifying this lease can be confirmed.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'local-state-delta': {
            readonly description: "\\[ld\\] Local state key/value changes for the application being executed by this transaction.";
            readonly items: {
                readonly $ref: "#/components/schemas/AccountStateDelta";
            };
            readonly type: "array";
        };
        readonly logs: {
            readonly description: "\\[lg\\] Logs for the application being executed by this transaction.";
            readonly items: {
                readonly format: "byte";
                readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly note: {
            readonly description: "\\[note\\] Free form data.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'payment-transaction': {
            readonly $ref: "#/components/schemas/TransactionPayment";
        };
        readonly 'receiver-rewards': {
            readonly description: "\\[rr\\] rewards applied to receiver account.";
            readonly type: "integer";
        };
        readonly 'rekey-to': {
            readonly description: "\\[rekey\\] when included in a valid transaction, the accounts auth addr will be updated with this value and future signatures must be signed with the key represented by this address.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'round-time': {
            readonly description: "Time when the block this transaction is in was confirmed.";
            readonly type: "integer";
        };
        readonly sender: {
            readonly description: "\\[snd\\] Sender's address.";
            readonly type: "string";
        };
        readonly 'sender-rewards': {
            readonly description: "\\[rs\\] rewards applied to sender account.";
            readonly type: "integer";
        };
        readonly signature: {
            readonly $ref: "#/components/schemas/TransactionSignature";
        };
        readonly 'state-proof-transaction': {
            readonly $ref: "#/components/schemas/TransactionStateProof";
        };
        readonly 'tx-type': {
            readonly description: "[type] Indicates what type of transaction this is. Different types have different fields.\n\nValid types, and where their fields are stored:\n* [pay] payment-transaction\n* [keyreg] keyreg-transaction\n* [acfg] asset-config-transaction\n* [axfer] asset-transfer-transaction\n* [afrz] asset-freeze-transaction\n* [appl] application-transaction\n* [stpf] state-proof-transaction";
            readonly enum: readonly ["pay", "keyreg", "acfg", "axfer", "afrz", "appl", "stpf"];
            readonly type: "string";
            readonly 'x-algorand-format': "tx-type-enum";
        };
    };
    readonly required: readonly ["fee", "first-valid", "last-valid", "sender", "tx-type"];
    readonly type: "object";
};
export declare const $TransactionApplication: {
    readonly description: "Fields for application transactions.\n\nDefinition:\ndata/transactions/application.go : ApplicationCallTxnFields";
    readonly properties: {
        readonly accounts: {
            readonly description: "\\[apat\\] List of accounts in addition to the sender that may be accessed from the application's approval-program and clear-state-program.";
            readonly items: {
                readonly type: "string";
                readonly 'x-algorand-format': "Address";
            };
            readonly type: "array";
        };
        readonly 'application-args': {
            readonly description: "\\[apaa\\] transaction specific arguments accessed from the application's approval-program and clear-state-program.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'application-id': {
            readonly description: "\\[apid\\] ID of the application being configured or empty if creating.";
            readonly type: "integer";
        };
        readonly 'approval-program': {
            readonly description: "\\[apap\\] Logic executed for every application transaction, except when on-completion is set to \"clear\". It can read and write global state for the application, as well as account-specific local state. Approval programs may reject the transaction.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
            readonly 'x-algorand-format': "TEALProgram";
        };
        readonly 'clear-state-program': {
            readonly description: "\\[apsu\\] Logic executed for application transactions with on-completion set to \"clear\". It can read and write global state for the application, as well as account-specific local state. Clear state programs cannot reject the transaction.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
            readonly 'x-algorand-format': "TEALProgram";
        };
        readonly 'extra-program-pages': {
            readonly description: "\\[epp\\] specifies the additional app program len requested in pages.";
            readonly type: "integer";
        };
        readonly 'foreign-apps': {
            readonly description: "\\[apfa\\] Lists the applications in addition to the application-id whose global states may be accessed by this application's approval-program and clear-state-program. The access is read-only.";
            readonly items: {
                readonly type: "integer";
            };
            readonly type: "array";
        };
        readonly 'foreign-assets': {
            readonly description: "\\[apas\\] lists the assets whose parameters may be accessed by this application's ApprovalProgram and ClearStateProgram. The access is read-only.";
            readonly items: {
                readonly type: "integer";
            };
            readonly type: "array";
        };
        readonly 'global-state-schema': {
            readonly $ref: "#/components/schemas/StateSchema";
        };
        readonly 'local-state-schema': {
            readonly $ref: "#/components/schemas/StateSchema";
        };
        readonly 'on-completion': {
            readonly $ref: "#/components/schemas/OnCompletion";
        };
    };
    readonly required: readonly ["application-id", "on-completion"];
    readonly type: "object";
};
export declare const $TransactionAssetConfig: {
    readonly description: "Fields for asset allocation, re-configuration, and destruction.\n\n\nA zero value for asset-id indicates asset creation.\nA zero value for the params indicates asset destruction.\n\nDefinition:\ndata/transactions/asset.go : AssetConfigTxnFields";
    readonly properties: {
        readonly 'asset-id': {
            readonly description: "\\[xaid\\] ID of the asset being configured or empty if creating.";
            readonly type: "integer";
        };
        readonly params: {
            readonly $ref: "#/components/schemas/AssetParams";
        };
    };
    readonly type: "object";
};
export declare const $TransactionAssetFreeze: {
    readonly description: "Fields for an asset freeze transaction.\n\nDefinition:\ndata/transactions/asset.go : AssetFreezeTxnFields";
    readonly properties: {
        readonly address: {
            readonly description: "\\[fadd\\] Address of the account whose asset is being frozen or thawed.";
            readonly type: "string";
        };
        readonly 'asset-id': {
            readonly description: "\\[faid\\] ID of the asset being frozen or thawed.";
            readonly type: "integer";
        };
        readonly 'new-freeze-status': {
            readonly description: "\\[afrz\\] The new freeze status.";
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["address", "asset-id", "new-freeze-status"];
    readonly type: "object";
};
export declare const $TransactionAssetTransfer: {
    readonly description: "Fields for an asset transfer transaction.\n\nDefinition:\ndata/transactions/asset.go : AssetTransferTxnFields";
    readonly properties: {
        readonly amount: {
            readonly description: "\\[aamt\\] Amount of asset to transfer. A zero amount transferred to self allocates that asset in the account's Assets map.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'asset-id': {
            readonly description: "\\[xaid\\] ID of the asset being transferred.";
            readonly type: "integer";
        };
        readonly 'close-amount': {
            readonly description: "Number of assets transferred to the close-to account as part of the transaction.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'close-to': {
            readonly description: "\\[aclose\\] Indicates that the asset should be removed from the account's Assets map, and specifies where the remaining asset holdings should be transferred.  It's always valid to transfer remaining asset holdings to the creator account.";
            readonly type: "string";
        };
        readonly receiver: {
            readonly description: "\\[arcv\\] Recipient address of the transfer.";
            readonly type: "string";
        };
        readonly sender: {
            readonly description: "\\[asnd\\] The effective sender during a clawback transactions. If this is not a zero value, the real transaction sender must be the Clawback address from the AssetParams.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["amount", "asset-id", "receiver"];
    readonly type: "object";
};
export declare const $TransactionKeyreg: {
    readonly description: "Fields for a keyreg transaction.\n\nDefinition:\ndata/transactions/keyreg.go : KeyregTxnFields";
    readonly properties: {
        readonly 'non-participation': {
            readonly description: "\\[nonpart\\] Mark the account as participating or non-participating.";
            readonly type: "boolean";
        };
        readonly 'selection-participation-key': {
            readonly description: "\\[selkey\\] Public key used with the Verified Random Function (VRF) result during committee selection.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'state-proof-key': {
            readonly description: "\\[sprfkey\\] State proof key used in key registration transactions.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'vote-first-valid': {
            readonly description: "\\[votefst\\] First round this participation key is valid.";
            readonly type: "integer";
        };
        readonly 'vote-key-dilution': {
            readonly description: "\\[votekd\\] Number of subkeys in each batch of participation keys.";
            readonly type: "integer";
        };
        readonly 'vote-last-valid': {
            readonly description: "\\[votelst\\] Last round this participation key is valid.";
            readonly type: "integer";
        };
        readonly 'vote-participation-key': {
            readonly description: "\\[votekey\\] Participation public key used in key registration transactions.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $TransactionPayment: {
    readonly description: "Fields for a payment transaction.\n\nDefinition:\ndata/transactions/payment.go : PaymentTxnFields";
    readonly properties: {
        readonly amount: {
            readonly description: "\\[amt\\] number of MicroAlgos intended to be transferred.";
            readonly type: "integer";
        };
        readonly 'close-amount': {
            readonly description: "Number of MicroAlgos that were sent to the close-remainder-to address when closing the sender account.";
            readonly type: "integer";
        };
        readonly 'close-remainder-to': {
            readonly description: "\\[close\\] when set, indicates that the sending account should be closed and all remaining funds be transferred to this address.";
            readonly type: "string";
        };
        readonly receiver: {
            readonly description: "\\[rcv\\] receiver's address.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["amount", "receiver"];
    readonly type: "object";
};
export declare const $TransactionSignature: {
    readonly description: "Validation signature associated with some data. Only one of the signatures should be provided.";
    readonly properties: {
        readonly logicsig: {
            readonly $ref: "#/components/schemas/TransactionSignatureLogicsig";
        };
        readonly multisig: {
            readonly $ref: "#/components/schemas/TransactionSignatureMultisig";
        };
        readonly sig: {
            readonly description: "\\[sig\\] Standard ed25519 signature.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $TransactionSignatureLogicsig: {
    readonly description: "[lsig] Programatic transaction signature.\n\nDefinition:\ndata/transactions/logicsig.go";
    readonly properties: {
        readonly args: {
            readonly description: "\\[arg\\] Logic arguments, base64 encoded.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly logic: {
            readonly description: "\\[l\\] Program signed by a signature or multi signature, or hashed to be the address of ana ccount. Base64 encoded TEAL program.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'multisig-signature': {
            readonly $ref: "#/components/schemas/TransactionSignatureMultisig";
        };
        readonly signature: {
            readonly description: "\\[sig\\] ed25519 signature.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["logic"];
    readonly type: "object";
};
export declare const $TransactionSignatureMultisig: {
    readonly description: "[msig] structure holding multiple subsignatures.\n\nDefinition:\ncrypto/multisig.go : MultisigSig";
    readonly properties: {
        readonly subsignature: {
            readonly description: "\\[subsig\\] holds pairs of public key and signatures.";
            readonly items: {
                readonly $ref: "#/components/schemas/TransactionSignatureMultisigSubsignature";
            };
            readonly type: "array";
        };
        readonly threshold: {
            readonly description: "\\[thr\\]";
            readonly type: "integer";
        };
        readonly version: {
            readonly description: "\\[v\\]";
            readonly type: "integer";
        };
    };
    readonly type: "object";
};
export declare const $TransactionSignatureMultisigSubsignature: {
    readonly properties: {
        readonly 'public-key': {
            readonly description: "\\[pk\\]";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly signature: {
            readonly description: "\\[s\\]";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $TransactionStateProof: {
    readonly description: "Fields for a state proof transaction. \n\nDefinition:\ndata/transactions/stateproof.go : StateProofTxnFields";
    readonly properties: {
        readonly message: {
            readonly $ref: "#/components/schemas/IndexerStateProofMessage";
        };
        readonly 'state-proof': {
            readonly $ref: "#/components/schemas/StateProofFields";
        };
        readonly 'state-proof-type': {
            readonly description: "\\[sptype\\] Type of the state proof. Integer representing an entry defined in protocol/stateproof.go";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly type: "object";
};
