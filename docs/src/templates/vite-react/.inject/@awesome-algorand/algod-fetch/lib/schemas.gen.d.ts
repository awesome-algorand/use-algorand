export declare const $Account: {
    readonly description: "Account information at a given round.\n\nDefinition:\ndata/basics/userBalance.go : AccountData\n";
    readonly properties: {
        readonly address: {
            readonly description: "the account public key";
            readonly type: "string";
        };
        readonly amount: {
            readonly description: "\\[algo\\] total number of MicroAlgos in the account";
            readonly type: "integer";
        };
        readonly 'amount-without-pending-rewards': {
            readonly description: "specifies the amount of MicroAlgos in the account, without the pending rewards.";
            readonly type: "integer";
        };
        readonly 'apps-local-state': {
            readonly description: "[appl] applications local data stored in this account.\n\nNote the raw object uses `map[int] -> AppLocalState` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/ApplicationLocalState";
            };
            readonly type: "array";
        };
        readonly 'apps-total-extra-pages': {
            readonly description: "\\[teap\\] the sum of all extra application program pages for this account.";
            readonly type: "integer";
        };
        readonly 'apps-total-schema': {
            readonly $ref: "#/components/schemas/ApplicationStateSchema";
        };
        readonly assets: {
            readonly description: "[asset] assets held by this account.\n\nNote the raw object uses `map[int] -> AssetHolding` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/AssetHolding";
            };
            readonly type: "array";
        };
        readonly 'auth-addr': {
            readonly description: "\\[spend\\] the address against which signing should be checked. If empty, the address of the current account is used. This field can be updated in any transaction by setting the RekeyTo field.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'created-apps': {
            readonly description: "[appp] parameters of applications created by this account including app global data.\n\nNote: the raw account uses `map[int] -> AppParams` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/Application";
            };
            readonly type: "array";
        };
        readonly 'created-assets': {
            readonly description: "[apar] parameters of assets created by this account.\n\nNote: the raw account uses `map[int] -> Asset` for this type.";
            readonly items: {
                readonly $ref: "#/components/schemas/Asset";
            };
            readonly type: "array";
        };
        readonly 'incentive-eligible': {
            readonly description: "Whether or not the account can receive block incentives if its balance is in range at proposal time.";
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
            readonly description: "\\[ebase\\] used as part of the rewards computation. Only applicable to accounts which are participating.";
            readonly type: "integer";
        };
        readonly rewards: {
            readonly description: "\\[ern\\] total rewards of MicroAlgos the account has received, including pending rewards.";
            readonly type: "integer";
        };
        readonly round: {
            readonly description: "The round for which this information is relevant.";
            readonly type: "integer";
        };
        readonly 'sig-type': {
            readonly description: "Indicates what type of signature is used by this account, must be one of:\n* sig\n* msig\n* lsig";
            readonly enum: readonly ["sig", "msig", "lsig"];
            readonly type: "string";
        };
        readonly status: {
            readonly description: "[onl] delegation status of the account's MicroAlgos\n* Offline - indicates that the associated account is delegated.\n*  Online  - indicates that the associated account used as part of the delegation pool.\n*   NotParticipating - indicates that the associated account is neither a delegator nor a delegate.";
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
            readonly description: "\\[tbxb\\] The total number of bytes used by this account's app's box keys and values.";
            readonly type: "integer";
        };
        readonly 'total-boxes': {
            readonly description: "\\[tbx\\] The number of existing boxes created by this account's app.";
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
    readonly required: readonly ["address", "amount", "amount-without-pending-rewards", "min-balance", "pending-rewards", "rewards", "round", "status", "total-apps-opted-in", "total-assets-opted-in", "total-created-apps", "total-created-assets"];
    readonly type: "object";
};
export declare const $AccountAssetHolding: {
    readonly description: "AccountAssetHolding describes the account's asset holding and asset parameters (if either exist) for a specific asset ID.";
    readonly properties: {
        readonly 'asset-holding': {
            readonly $ref: "#/components/schemas/AssetHolding";
        };
        readonly 'asset-params': {
            readonly $ref: "#/components/schemas/AssetParams";
        };
    };
    readonly required: readonly ["asset-holding"];
    readonly type: "object";
};
export declare const $AccountParticipation: {
    readonly description: "AccountParticipation describes the parameters used by this account in consensus protocol.";
    readonly properties: {
        readonly 'selection-participation-key': {
            readonly description: "\\[sel\\] Selection public key (if any) currently registered for this round.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'state-proof-key': {
            readonly description: "\\[stprf\\] Root of the state proof key (if any)";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'vote-first-valid': {
            readonly description: "\\[voteFst\\] First round for which this participation is valid.";
            readonly type: "integer";
        };
        readonly 'vote-key-dilution': {
            readonly description: "\\[voteKD\\] Number of subkeys in each batch of participation keys.";
            readonly type: "integer";
        };
        readonly 'vote-last-valid': {
            readonly description: "\\[voteLst\\] Last round for which this participation is valid.";
            readonly type: "integer";
        };
        readonly 'vote-participation-key': {
            readonly description: "\\[vote\\] root participation public key (if any) currently registered for this round.";
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
export declare const $AppCallLogs: {
    readonly description: "The logged messages from an app call along with the app ID and outer transaction ID. Logs appear in the same order that they were emitted.";
    readonly properties: {
        readonly 'application-index': {
            readonly description: "The application from which the logs were generated";
            readonly type: "integer";
        };
        readonly logs: {
            readonly description: "An array of logs";
            readonly items: {
                readonly format: "byte";
                readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly txId: {
            readonly description: "The transaction ID of the outer app call that lead to these logs";
            readonly type: "string";
        };
    };
    readonly required: readonly ["application-index", "logs", "txId"];
    readonly type: "object";
};
export declare const $Application: {
    readonly description: "Application index and its parameters";
    readonly properties: {
        readonly id: {
            readonly description: "\\[appidx\\] application index.";
            readonly type: "integer";
        };
        readonly params: {
            readonly $ref: "#/components/schemas/ApplicationParams";
        };
    };
    readonly required: readonly ["id", "params"];
    readonly type: "object";
};
export declare const $ApplicationInitialStates: {
    readonly description: "An application's initial global/local/box states that were accessed during simulation.";
    readonly properties: {
        readonly 'app-boxes': {
            readonly $ref: "#/components/schemas/ApplicationKVStorage";
        };
        readonly 'app-globals': {
            readonly $ref: "#/components/schemas/ApplicationKVStorage";
        };
        readonly 'app-locals': {
            readonly description: "An application's initial local states tied to different accounts.";
            readonly items: {
                readonly $ref: "#/components/schemas/ApplicationKVStorage";
            };
            readonly type: "array";
        };
        readonly id: {
            readonly description: "Application index.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["id"];
    readonly type: "object";
};
export declare const $ApplicationKVStorage: {
    readonly description: "An application's global/local/box state.";
    readonly properties: {
        readonly account: {
            readonly description: "The address of the account associated with the local state.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly kvs: {
            readonly description: "Key-Value pairs representing application states.";
            readonly items: {
                readonly $ref: "#/components/schemas/AvmKeyValue";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["kvs"];
    readonly type: "object";
};
export declare const $ApplicationLocalReference: {
    readonly description: "References an account's local state for an application.";
    readonly properties: {
        readonly account: {
            readonly description: "Address of the account with the local state.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly app: {
            readonly description: "Application ID of the local state application.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["account", "app"];
    readonly type: "object";
};
export declare const $ApplicationLocalState: {
    readonly description: "Stores local state associated with an application.";
    readonly properties: {
        readonly id: {
            readonly description: "The application which this local state is for.";
            readonly type: "integer";
        };
        readonly 'key-value': {
            readonly $ref: "#/components/schemas/TealKeyValueStore";
        };
        readonly schema: {
            readonly $ref: "#/components/schemas/ApplicationStateSchema";
        };
    };
    readonly required: readonly ["id", "schema"];
    readonly type: "object";
};
export declare const $ApplicationParams: {
    readonly description: "Stores the global information associated with an application.";
    readonly properties: {
        readonly 'approval-program': {
            readonly description: "\\[approv\\] approval program.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
            readonly 'x-algorand-format': "TEALProgram";
        };
        readonly 'clear-state-program': {
            readonly description: "\\[clearp\\] approval program.";
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
            readonly description: "\\[epp\\] the amount of extra program pages available to this app.";
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
    readonly required: readonly ["approval-program", "clear-state-program", "creator"];
    readonly type: "object";
};
export declare const $ApplicationStateOperation: {
    readonly description: "An operation against an application's global/local/box state.";
    readonly properties: {
        readonly account: {
            readonly description: "For local state changes, the address of the account associated with the local state.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'app-state-type': {
            readonly description: "Type of application state. Value `g` is **global state**, `l` is **local state**, `b` is **boxes**.";
            readonly type: "string";
        };
        readonly key: {
            readonly description: "The key (name) of the global/local/box state.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'new-value': {
            readonly $ref: "#/components/schemas/AvmValue";
        };
        readonly operation: {
            readonly description: "Operation type. Value `w` is **write**, `d` is **delete**.";
            readonly type: "string";
        };
    };
    readonly required: readonly ["app-state-type", "key", "operation"];
    readonly type: "object";
};
export declare const $ApplicationStateSchema: {
    readonly description: "Specifies maximums on the number of each type that may be stored.";
    readonly properties: {
        readonly 'num-byte-slice': {
            readonly description: "\\[nbs\\] num of byte slices.";
            readonly type: "integer";
        };
        readonly 'num-uint': {
            readonly description: "\\[nui\\] num of uints.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["num-byte-slice", "num-uint"];
    readonly type: "object";
};
export declare const $Asset: {
    readonly description: "Specifies both the unique identifier and the parameters for an asset";
    readonly properties: {
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
            readonly description: "\\[a\\] number of units held.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'asset-id': {
            readonly description: "Asset ID of the holding.";
            readonly type: "integer";
            readonly 'x-go-name': "AssetID";
        };
        readonly 'is-frozen': {
            readonly description: "\\[f\\] whether or not the holding is frozen.";
            readonly type: "boolean";
        };
    };
    readonly required: readonly ["amount", "asset-id", "is-frozen"];
    readonly type: "object";
};
export declare const $AssetHoldingReference: {
    readonly description: "References an asset held by an account.";
    readonly properties: {
        readonly account: {
            readonly description: "Address of the account holding the asset.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly asset: {
            readonly description: "Asset ID of the holding.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["account", "asset"];
    readonly type: "object";
};
export declare const $AssetParams: {
    readonly description: "AssetParams specifies the parameters for an asset.\n\n[apar] when part of an AssetConfig transaction.\n\nDefinition:\ndata/transactions/asset.go : AssetParams";
    readonly properties: {
        readonly clawback: {
            readonly description: "\\[c\\] Address of account used to clawback holdings of this asset.  If empty, clawback is not permitted.";
            readonly type: "string";
        };
        readonly creator: {
            readonly description: "The address that created this asset. This is the address where the parameters for this asset can be found, and also the address where unwanted asset units can be sent in the worst case.";
            readonly type: "string";
        };
        readonly decimals: {
            readonly description: "\\[dc\\] The number of digits to use after the decimal point when displaying this asset. If 0, the asset is not divisible. If 1, the base unit of the asset is in tenths. If 2, the base unit of the asset is in hundredths, and so on. This value must be between 0 and 19 (inclusive).";
            readonly maximum: 19;
            readonly minimum: 0;
            readonly type: "integer";
        };
        readonly 'default-frozen': {
            readonly description: "\\[df\\] Whether holdings of this asset are frozen by default.";
            readonly type: "boolean";
        };
        readonly freeze: {
            readonly description: "\\[f\\] Address of account used to freeze holdings of this asset.  If empty, freezing is not permitted.";
            readonly type: "string";
        };
        readonly manager: {
            readonly description: "\\[m\\] Address of account used to manage the keys of this asset and to destroy it.";
            readonly type: "string";
        };
        readonly 'metadata-hash': {
            readonly description: "\\[am\\] A commitment to some unspecified asset metadata. The format of this metadata is up to the application.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly name: {
            readonly description: "\\[an\\] Name of this asset, as supplied by the creator. Included only when the asset name is composed of printable utf-8 characters.";
            readonly type: "string";
        };
        readonly 'name-b64': {
            readonly description: "Base64 encoded name of this asset, as supplied by the creator.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly reserve: {
            readonly description: "\\[r\\] Address of account holding reserve (non-minted) units of this asset.";
            readonly type: "string";
        };
        readonly total: {
            readonly description: "\\[t\\] The total number of units of this asset.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'unit-name': {
            readonly description: "\\[un\\] Name of a unit of this asset, as supplied by the creator. Included only when the name of a unit of this asset is composed of printable utf-8 characters.";
            readonly type: "string";
        };
        readonly 'unit-name-b64': {
            readonly description: "Base64 encoded name of a unit of this asset, as supplied by the creator.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly url: {
            readonly description: "\\[au\\] URL where more information about the asset can be retrieved. Included only when the URL is composed of printable utf-8 characters.";
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
export declare const $AvmKeyValue: {
    readonly description: "Represents an AVM key-value pair in an application store.";
    readonly properties: {
        readonly key: {
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly value: {
            readonly $ref: "#/components/schemas/AvmValue";
        };
    };
    readonly required: readonly ["key", "value"];
    readonly type: "object";
};
export declare const $AvmValue: {
    readonly description: "Represents an AVM value.";
    readonly properties: {
        readonly bytes: {
            readonly description: "bytes value.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly type: {
            readonly description: "value type. Value `1` refers to **bytes**, value `2` refers to **uint64**";
            readonly type: "integer";
        };
        readonly uint: {
            readonly description: "uint value.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["type"];
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
    readonly description: "Box descriptor describes a Box.";
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
export declare const $BoxReference: {
    readonly description: "References a box of an application.";
    readonly properties: {
        readonly app: {
            readonly description: "Application ID which this box belongs to";
            readonly type: "integer";
        };
        readonly name: {
            readonly description: "Base64 encoded box name";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["app", "name"];
    readonly type: "object";
};
export declare const $BuildVersion: {
    readonly properties: {
        readonly branch: {
            readonly type: "string";
        };
        readonly build_number: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly channel: {
            readonly type: "string";
        };
        readonly commit_hash: {
            readonly type: "string";
        };
        readonly major: {
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly minor: {
            readonly format: "int64";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["branch", "build_number", "channel", "commit_hash", "major", "minor"];
    readonly title: "BuildVersion contains the current algod build version information.";
    readonly type: "object";
};
export declare const $DebugSettingsProf: {
    readonly description: "algod mutex and blocking profiling state.";
    readonly properties: {
        readonly 'block-rate': {
            readonly description: "The rate of blocking events. The profiler aims to sample an average of one blocking event per rate nanoseconds spent blocked. To turn off profiling entirely, pass rate 0.";
            readonly example: 1000;
            readonly type: "integer";
        };
        readonly 'mutex-rate': {
            readonly description: "The rate of mutex events. On average 1/rate events are reported. To turn off profiling entirely, pass rate 0";
            readonly example: 1000;
            readonly type: "integer";
        };
    };
    readonly title: "algod mutex and blocking profiling state.";
    readonly type: "object";
};
export declare const $DryrunRequest: {
    readonly description: "Request data type for dryrun endpoint. Given the Transactions and simulated ledger state upload, run TEAL scripts and return debugging information.";
    readonly properties: {
        readonly accounts: {
            readonly items: {
                readonly $ref: "#/components/schemas/Account";
            };
            readonly type: "array";
        };
        readonly apps: {
            readonly items: {
                readonly $ref: "#/components/schemas/Application";
            };
            readonly type: "array";
        };
        readonly 'latest-timestamp': {
            readonly description: "LatestTimestamp is available to some TEAL scripts. Defaults to the latest confirmed timestamp this algod is attached to.";
            readonly format: "int64";
            readonly type: "integer";
        };
        readonly 'protocol-version': {
            readonly description: "ProtocolVersion specifies a specific version string to operate under, otherwise whatever the current protocol of the network this algod is running in.";
            readonly type: "string";
        };
        readonly round: {
            readonly description: "Round is available to some TEAL scripts. Defaults to the current round on the network this algod is attached to.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly sources: {
            readonly items: {
                readonly $ref: "#/components/schemas/DryrunSource";
            };
            readonly type: "array";
        };
        readonly txns: {
            readonly items: {
                readonly description: "SignedTxn object. Must be canonically encoded.";
                readonly format: "json";
                readonly type: "string";
                readonly 'x-algorand-format': "SignedTransaction";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["accounts", "apps", "latest-timestamp", "protocol-version", "round", "sources", "txns"];
    readonly type: "object";
};
export declare const $DryrunSource: {
    readonly description: "DryrunSource is TEAL source text that gets uploaded, compiled, and inserted into transactions or application state.";
    readonly properties: {
        readonly 'app-index': {
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'field-name': {
            readonly description: "FieldName is what kind of sources this is. If lsig then it goes into the transactions[this.TxnIndex].LogicSig. If approv or clearp it goes into the Approval Program or Clear State Program of application[this.AppIndex].";
            readonly type: "string";
        };
        readonly source: {
            readonly type: "string";
        };
        readonly 'txn-index': {
            readonly type: "integer";
        };
    };
    readonly required: readonly ["app-index", "field-name", "source", "txn-index"];
    readonly type: "object";
};
export declare const $DryrunState: {
    readonly description: "Stores the TEAL eval step data";
    readonly properties: {
        readonly error: {
            readonly description: "Evaluation error if any";
            readonly type: "string";
        };
        readonly line: {
            readonly description: "Line number";
            readonly type: "integer";
        };
        readonly pc: {
            readonly description: "Program counter";
            readonly type: "integer";
        };
        readonly scratch: {
            readonly items: {
                readonly $ref: "#/components/schemas/TealValue";
            };
            readonly type: "array";
        };
        readonly stack: {
            readonly items: {
                readonly $ref: "#/components/schemas/TealValue";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["line", "pc", "stack"];
    readonly type: "object";
};
export declare const $DryrunTxnResult: {
    readonly description: "DryrunTxnResult contains any LogicSig or ApplicationCall program debug information and state updates from a dryrun.";
    readonly properties: {
        readonly 'app-call-messages': {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'app-call-trace': {
            readonly items: {
                readonly $ref: "#/components/schemas/DryrunState";
            };
            readonly type: "array";
        };
        readonly 'budget-added': {
            readonly description: "Budget added during execution of app call transaction.";
            readonly type: "integer";
        };
        readonly 'budget-consumed': {
            readonly description: "Budget consumed during execution of app call transaction.";
            readonly type: "integer";
        };
        readonly disassembly: {
            readonly description: "Disassembled program line by line.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'global-delta': {
            readonly $ref: "#/components/schemas/StateDelta";
        };
        readonly 'local-deltas': {
            readonly items: {
                readonly $ref: "#/components/schemas/AccountStateDelta";
            };
            readonly type: "array";
        };
        readonly 'logic-sig-disassembly': {
            readonly description: "Disassembled lsig program line by line.";
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'logic-sig-messages': {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'logic-sig-trace': {
            readonly items: {
                readonly $ref: "#/components/schemas/DryrunState";
            };
            readonly type: "array";
        };
        readonly logs: {
            readonly items: {
                readonly format: "byte";
                readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["disassembly"];
    readonly type: "object";
};
export declare const $ErrorResponse: {
    readonly description: "An error response with optional data field.";
    readonly properties: {
        readonly data: {
            readonly properties: {};
            readonly type: "object";
        };
        readonly message: {
            readonly type: "string";
        };
    };
    readonly required: readonly ["message"];
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
export declare const $KvDelta: {
    readonly description: "A single Delta containing the key, the previous value and the current value for a single round.";
    readonly properties: {
        readonly key: {
            readonly description: "The key, base64 encoded.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly value: {
            readonly description: "The new value of the KV store entry, base64 encoded.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly type: "object";
};
export declare const $LedgerStateDelta: {
    readonly description: "Ledger StateDelta object";
    readonly type: "object";
    readonly 'x-algorand-format': "StateDelta";
};
export declare const $LedgerStateDeltaForTransactionGroup: {
    readonly description: "Contains a ledger delta for a single transaction group";
    readonly properties: {
        readonly Delta: {
            readonly $ref: "#/components/schemas/LedgerStateDelta";
        };
        readonly Ids: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["Delta", "Ids"];
    readonly type: "object";
};
export declare const $LightBlockHeaderProof: {
    readonly description: "Proof of membership and position of a light block header.";
    readonly properties: {
        readonly index: {
            readonly description: "The index of the light block header in the vector commitment tree";
            readonly type: "integer";
        };
        readonly proof: {
            readonly description: "The encoded proof.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly treedepth: {
            readonly description: "Represents the depth of the tree that is being proven, i.e. the number of edges from a leaf to the root.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["index", "proof", "treedepth"];
    readonly type: "object";
};
export declare const $ParticipationKey: {
    readonly description: "Represents a participation key used by the node.";
    readonly properties: {
        readonly address: {
            readonly description: "Address the key was generated for.";
            readonly type: "string";
            readonly 'x-algorand-format': "Address";
        };
        readonly 'effective-first-valid': {
            readonly description: "When registered, this is the first round it may be used.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly 'effective-last-valid': {
            readonly description: "When registered, this is the last round it may be used.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly id: {
            readonly description: "The key's ParticipationID.";
            readonly type: "string";
        };
        readonly key: {
            readonly $ref: "#/components/schemas/AccountParticipation";
        };
        readonly 'last-block-proposal': {
            readonly description: "Round when this key was last used to propose a block.";
            readonly type: "integer";
        };
        readonly 'last-state-proof': {
            readonly description: "Round when this key was last used to generate a state proof.";
            readonly type: "integer";
        };
        readonly 'last-vote': {
            readonly description: "Round when this key was last used to vote.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["address", "id", "key"];
    readonly type: "object";
};
export declare const $PendingTransactionResponse: {
    readonly description: "Details about a pending transaction. If the transaction was recently confirmed, includes confirmation details like the round and reward details.";
    readonly properties: {
        readonly 'application-index': {
            readonly description: "The application index if the transaction was found and it created an application.";
            readonly type: "integer";
        };
        readonly 'asset-closing-amount': {
            readonly description: "The number of the asset's unit that were transferred to the close-to address.";
            readonly type: "integer";
        };
        readonly 'asset-index': {
            readonly description: "The asset index if the transaction was found and it created an asset.";
            readonly type: "integer";
        };
        readonly 'close-rewards': {
            readonly description: "Rewards in microalgos applied to the close remainder to account.";
            readonly type: "integer";
        };
        readonly 'closing-amount': {
            readonly description: "Closing amount for the transaction.";
            readonly type: "integer";
        };
        readonly 'confirmed-round': {
            readonly description: "The round where this transaction was confirmed, if present.";
            readonly type: "integer";
        };
        readonly 'global-state-delta': {
            readonly $ref: "#/components/schemas/StateDelta";
        };
        readonly 'inner-txns': {
            readonly description: "Inner transactions produced by application execution.";
            readonly items: {
                readonly $ref: "#/components/schemas/PendingTransactionResponse";
            };
            readonly type: "array";
        };
        readonly 'local-state-delta': {
            readonly description: "Local state key/value changes for the application being executed by this transaction.";
            readonly items: {
                readonly $ref: "#/components/schemas/AccountStateDelta";
            };
            readonly type: "array";
        };
        readonly logs: {
            readonly description: "Logs for the application being executed by this transaction.";
            readonly items: {
                readonly format: "byte";
                readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
                readonly type: "string";
            };
            readonly type: "array";
        };
        readonly 'pool-error': {
            readonly description: "Indicates that the transaction was kicked out of this node's transaction pool (and specifies why that happened).  An empty string indicates the transaction wasn't kicked out of this node's txpool due to an error.\n";
            readonly type: "string";
        };
        readonly 'receiver-rewards': {
            readonly description: "Rewards in microalgos applied to the receiver account.";
            readonly type: "integer";
        };
        readonly 'sender-rewards': {
            readonly description: "Rewards in microalgos applied to the sender account.";
            readonly type: "integer";
        };
        readonly txn: {
            readonly description: "The raw signed transaction.";
            readonly properties: {};
            readonly type: "object";
            readonly 'x-algorand-format': "SignedTransaction";
        };
    };
    readonly required: readonly ["pool-error", "txn"];
    readonly type: "object";
};
export declare const $ScratchChange: {
    readonly description: "A write operation into a scratch slot.";
    readonly properties: {
        readonly 'new-value': {
            readonly $ref: "#/components/schemas/AvmValue";
        };
        readonly slot: {
            readonly description: "The scratch slot written.";
            readonly type: "integer";
        };
    };
    readonly required: readonly ["new-value", "slot"];
    readonly type: "object";
};
export declare const $SimulateInitialStates: {
    readonly description: "Initial states of resources that were accessed during simulation.";
    readonly properties: {
        readonly 'app-initial-states': {
            readonly description: "The initial states of accessed application before simulation. The order of this array is arbitrary.";
            readonly items: {
                readonly $ref: "#/components/schemas/ApplicationInitialStates";
            };
            readonly type: "array";
        };
    };
    readonly type: "object";
};
export declare const $SimulateRequest: {
    readonly description: "Request type for simulation endpoint.";
    readonly properties: {
        readonly 'allow-empty-signatures': {
            readonly description: "Allows transactions without signatures to be simulated as if they had correct signatures.";
            readonly type: "boolean";
        };
        readonly 'allow-more-logging': {
            readonly description: "Lifts limits on log opcode usage during simulation.";
            readonly type: "boolean";
        };
        readonly 'allow-unnamed-resources': {
            readonly description: "Allows access to unnamed resources during simulation.";
            readonly type: "boolean";
        };
        readonly 'exec-trace-config': {
            readonly $ref: "#/components/schemas/SimulateTraceConfig";
        };
        readonly 'extra-opcode-budget': {
            readonly description: "Applies extra opcode budget during simulation for each transaction group.";
            readonly type: "integer";
        };
        readonly round: {
            readonly description: "If provided, specifies the round preceding the simulation. State changes through this round will be used to run this simulation. Usually only the 4 most recent rounds will be available (controlled by the node config value MaxAcctLookback). If not specified, defaults to the latest available round.";
            readonly type: "integer";
        };
        readonly 'txn-groups': {
            readonly description: "The transaction groups to simulate.";
            readonly items: {
                readonly $ref: "#/components/schemas/SimulateRequestTransactionGroup";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["txn-groups"];
    readonly type: "object";
};
export declare const $SimulateRequestTransactionGroup: {
    readonly description: "A transaction group to simulate.";
    readonly properties: {
        readonly txns: {
            readonly description: "An atomic transaction group.";
            readonly items: {
                readonly description: "SignedTxn object. Must be canonically encoded.";
                readonly format: "json";
                readonly type: "string";
                readonly 'x-algorand-format': "SignedTransaction";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["txns"];
    readonly type: "object";
};
export declare const $SimulateTraceConfig: {
    readonly description: "An object that configures simulation execution trace.";
    readonly properties: {
        readonly enable: {
            readonly description: "A boolean option for opting in execution trace features simulation endpoint.";
            readonly type: "boolean";
        };
        readonly 'scratch-change': {
            readonly description: "A boolean option enabling returning scratch slot changes together with execution trace during simulation.";
            readonly type: "boolean";
        };
        readonly 'stack-change': {
            readonly description: "A boolean option enabling returning stack changes together with execution trace during simulation.";
            readonly type: "boolean";
        };
        readonly 'state-change': {
            readonly description: "A boolean option enabling returning application state changes (global, local, and box changes) with the execution trace during simulation.";
            readonly type: "boolean";
        };
    };
    readonly type: "object";
};
export declare const $SimulateTransactionGroupResult: {
    readonly description: "Simulation result for an atomic transaction group";
    readonly properties: {
        readonly 'app-budget-added': {
            readonly description: "Total budget added during execution of app calls in the transaction group.";
            readonly type: "integer";
        };
        readonly 'app-budget-consumed': {
            readonly description: "Total budget consumed during execution of app calls in the transaction group.";
            readonly type: "integer";
        };
        readonly 'failed-at': {
            readonly description: "If present, indicates which transaction in this group caused the failure. This array represents the path to the failing transaction. Indexes are zero based, the first element indicates the top-level transaction, and successive elements indicate deeper inner transactions.";
            readonly items: {
                readonly type: "integer";
            };
            readonly type: "array";
        };
        readonly 'failure-message': {
            readonly description: "If present, indicates that the transaction group failed and specifies why that happened";
            readonly type: "string";
        };
        readonly 'txn-results': {
            readonly description: "Simulation result for individual transactions";
            readonly items: {
                readonly $ref: "#/components/schemas/SimulateTransactionResult";
            };
            readonly type: "array";
        };
        readonly 'unnamed-resources-accessed': {
            readonly $ref: "#/components/schemas/SimulateUnnamedResourcesAccessed";
        };
    };
    readonly required: readonly ["txn-results"];
    readonly type: "object";
};
export declare const $SimulateTransactionResult: {
    readonly description: "Simulation result for an individual transaction";
    readonly properties: {
        readonly 'app-budget-consumed': {
            readonly description: "Budget used during execution of an app call transaction. This value includes budged used by inner app calls spawned by this transaction.";
            readonly type: "integer";
        };
        readonly 'exec-trace': {
            readonly $ref: "#/components/schemas/SimulationTransactionExecTrace";
        };
        readonly 'logic-sig-budget-consumed': {
            readonly description: "Budget used during execution of a logic sig transaction.";
            readonly type: "integer";
        };
        readonly 'txn-result': {
            readonly $ref: "#/components/schemas/PendingTransactionResponse";
        };
        readonly 'unnamed-resources-accessed': {
            readonly $ref: "#/components/schemas/SimulateUnnamedResourcesAccessed";
        };
    };
    readonly required: readonly ["txn-result"];
    readonly type: "object";
};
export declare const $SimulateUnnamedResourcesAccessed: {
    readonly description: "These are resources that were accessed by this group that would normally have caused failure, but were allowed in simulation. Depending on where this object is in the response, the unnamed resources it contains may or may not qualify for group resource sharing. If this is a field in SimulateTransactionGroupResult, the resources do qualify, but if this is a field in SimulateTransactionResult, they do not qualify. In order to make this group valid for actual submission, resources that qualify for group sharing can be made available by any transaction of the group; otherwise, resources must be placed in the same transaction which accessed them.";
    readonly properties: {
        readonly accounts: {
            readonly description: "The unnamed accounts that were referenced. The order of this array is arbitrary.";
            readonly items: {
                readonly type: "string";
                readonly 'x-algorand-format': "Address";
            };
            readonly type: "array";
        };
        readonly 'app-locals': {
            readonly description: "The unnamed application local states that were referenced. The order of this array is arbitrary.";
            readonly items: {
                readonly $ref: "#/components/schemas/ApplicationLocalReference";
            };
            readonly type: "array";
        };
        readonly apps: {
            readonly description: "The unnamed applications that were referenced. The order of this array is arbitrary.";
            readonly items: {
                readonly type: "integer";
                readonly 'x-algorand-format': "uint64";
            };
            readonly type: "array";
        };
        readonly 'asset-holdings': {
            readonly description: "The unnamed asset holdings that were referenced. The order of this array is arbitrary.";
            readonly items: {
                readonly $ref: "#/components/schemas/AssetHoldingReference";
            };
            readonly type: "array";
        };
        readonly assets: {
            readonly description: "The unnamed assets that were referenced. The order of this array is arbitrary.";
            readonly items: {
                readonly type: "integer";
                readonly 'x-algorand-format': "uint64";
            };
            readonly type: "array";
        };
        readonly boxes: {
            readonly description: "The unnamed boxes that were referenced. The order of this array is arbitrary.";
            readonly items: {
                readonly $ref: "#/components/schemas/BoxReference";
            };
            readonly type: "array";
        };
        readonly 'extra-box-refs': {
            readonly description: "The number of extra box references used to increase the IO budget. This is in addition to the references defined in the input transaction group and any referenced to unnamed boxes.";
            readonly type: "integer";
        };
    };
    readonly type: "object";
};
export declare const $SimulationEvalOverrides: {
    readonly description: "The set of parameters and limits override during simulation. If this set of parameters is present, then evaluation parameters may differ from standard evaluation in certain ways.";
    readonly properties: {
        readonly 'allow-empty-signatures': {
            readonly description: "If true, transactions without signatures are allowed and simulated as if they were properly signed.";
            readonly type: "boolean";
        };
        readonly 'allow-unnamed-resources': {
            readonly description: "If true, allows access to unnamed resources during simulation.";
            readonly type: "boolean";
        };
        readonly 'extra-opcode-budget': {
            readonly description: "The extra opcode budget added to each transaction group during simulation";
            readonly type: "integer";
        };
        readonly 'max-log-calls': {
            readonly description: "The maximum log calls one can make during simulation";
            readonly type: "integer";
        };
        readonly 'max-log-size': {
            readonly description: "The maximum byte number to log during simulation";
            readonly type: "integer";
        };
    };
    readonly type: "object";
};
export declare const $SimulationOpcodeTraceUnit: {
    readonly description: "The set of trace information and effect from evaluating a single opcode.";
    readonly properties: {
        readonly pc: {
            readonly description: "The program counter of the current opcode being evaluated.";
            readonly type: "integer";
        };
        readonly 'scratch-changes': {
            readonly description: "The writes into scratch slots.";
            readonly items: {
                readonly $ref: "#/components/schemas/ScratchChange";
            };
            readonly type: "array";
        };
        readonly 'spawned-inners': {
            readonly description: "The indexes of the traces for inner transactions spawned by this opcode, if any.";
            readonly items: {
                readonly type: "integer";
            };
            readonly type: "array";
        };
        readonly 'stack-additions': {
            readonly description: "The values added by this opcode to the stack.";
            readonly items: {
                readonly $ref: "#/components/schemas/AvmValue";
            };
            readonly type: "array";
        };
        readonly 'stack-pop-count': {
            readonly description: "The number of deleted stack values by this opcode.";
            readonly type: "integer";
        };
        readonly 'state-changes': {
            readonly description: "The operations against the current application's states.";
            readonly items: {
                readonly $ref: "#/components/schemas/ApplicationStateOperation";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["pc"];
    readonly type: "object";
};
export declare const $SimulationTransactionExecTrace: {
    readonly description: "The execution trace of calling an app or a logic sig, containing the inner app call trace in a recursive way.";
    readonly properties: {
        readonly 'approval-program-hash': {
            readonly description: "SHA512_256 hash digest of the approval program executed in transaction.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'approval-program-trace': {
            readonly description: "Program trace that contains a trace of opcode effects in an approval program.";
            readonly items: {
                readonly $ref: "#/components/schemas/SimulationOpcodeTraceUnit";
            };
            readonly type: "array";
        };
        readonly 'clear-state-program-hash': {
            readonly description: "SHA512_256 hash digest of the clear state program executed in transaction.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'clear-state-program-trace': {
            readonly description: "Program trace that contains a trace of opcode effects in a clear state program.";
            readonly items: {
                readonly $ref: "#/components/schemas/SimulationOpcodeTraceUnit";
            };
            readonly type: "array";
        };
        readonly 'clear-state-rollback': {
            readonly description: "If true, indicates that the clear state program failed and any persistent state changes it produced should be reverted once the program exits.";
            readonly type: "boolean";
        };
        readonly 'clear-state-rollback-error': {
            readonly description: "The error message explaining why the clear state program failed. This field will only be populated if clear-state-rollback is true and the failure was due to an execution error.";
            readonly type: "string";
        };
        readonly 'inner-trace': {
            readonly description: "An array of SimulationTransactionExecTrace representing the execution trace of any inner transactions executed.";
            readonly items: {
                readonly $ref: "#/components/schemas/SimulationTransactionExecTrace";
            };
            readonly type: "array";
        };
        readonly 'logic-sig-hash': {
            readonly description: "SHA512_256 hash digest of the logic sig executed in transaction.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly 'logic-sig-trace': {
            readonly description: "Program trace that contains a trace of opcode effects in a logic sig.";
            readonly items: {
                readonly $ref: "#/components/schemas/SimulationOpcodeTraceUnit";
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
export declare const $StateProof: {
    readonly description: "Represents a state proof and its corresponding message";
    readonly properties: {
        readonly Message: {
            readonly $ref: "#/components/schemas/StateProofMessage";
        };
        readonly StateProof: {
            readonly description: "The encoded StateProof for the message.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["Message", "StateProof"];
    readonly type: "object";
};
export declare const $StateProofMessage: {
    readonly description: "Represents the message that the state proofs are attesting to.";
    readonly properties: {
        readonly BlockHeadersCommitment: {
            readonly description: "The vector commitment root on all light block headers within a state proof interval.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly FirstAttestedRound: {
            readonly description: "The first round the message attests to.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly LastAttestedRound: {
            readonly description: "The last round the message attests to.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly LnProvenWeight: {
            readonly description: "An integer value representing the natural log of the proven weight with 16 bits of precision. This value would be used to verify the next state proof.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
        readonly VotersCommitment: {
            readonly description: "The vector commitment root of the top N accounts to sign the next StateProof.";
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
    };
    readonly required: readonly ["BlockHeadersCommitment", "FirstAttestedRound", "LastAttestedRound", "LnProvenWeight", "VotersCommitment"];
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
            readonly description: "\\[tb\\] bytes value.";
            readonly type: "string";
        };
        readonly type: {
            readonly description: "\\[tt\\] value type. Value `1` refers to **bytes**, value `2` refers to **uint**";
            readonly type: "integer";
        };
        readonly uint: {
            readonly description: "\\[ui\\] uint value.";
            readonly type: "integer";
            readonly 'x-algorand-format': "uint64";
        };
    };
    readonly required: readonly ["bytes", "type", "uint"];
    readonly type: "object";
};
export declare const $Version: {
    readonly description: "algod version information.";
    readonly properties: {
        readonly build: {
            readonly $ref: "#/components/schemas/BuildVersion";
        };
        readonly genesis_hash_b64: {
            readonly format: "byte";
            readonly pattern: "^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$";
            readonly type: "string";
        };
        readonly genesis_id: {
            readonly type: "string";
        };
        readonly versions: {
            readonly items: {
                readonly type: "string";
            };
            readonly type: "array";
        };
    };
    readonly required: readonly ["build", "genesis_hash_b64", "genesis_id", "versions"];
    readonly title: "Version contains the current algod version.";
    readonly type: "object";
};
