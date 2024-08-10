export declare const $APIV1DELETEKeyResponse: {
    readonly description: "APIV1DELETEKeyResponse is the response to `DELETE /v1/key`\nfriendly:DeleteKeyResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1DELETEMultisigResponse: {
    readonly description: "APIV1DELETEMultisigResponse is the response to POST /v1/multisig/delete`\nfriendly:DeleteMultisigResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1GETWalletsResponse: {
    readonly description: "APIV1GETWalletsResponse is the response to `GET /v1/wallets`\nfriendly:ListWalletsResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly wallets: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/APIV1Wallet";
            };
            readonly 'x-go-name': "Wallets";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTKeyExportResponse: {
    readonly description: "APIV1POSTKeyExportResponse is the response to `POST /v1/key/export`\nfriendly:ExportKeyResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly private_key: {
            readonly $ref: "#/definitions/PrivateKey";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTKeyImportResponse: {
    readonly description: "APIV1POSTKeyImportResponse is the response to `POST /v1/key/import`\nfriendly:ImportKeyResponse";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTKeyListResponse: {
    readonly description: "APIV1POSTKeyListResponse is the response to `POST /v1/key/list`\nfriendly:ListKeysResponse";
    readonly type: "object";
    readonly properties: {
        readonly addresses: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly 'x-go-name': "Addresses";
        };
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTKeyResponse: {
    readonly description: "APIV1POSTKeyResponse is the response to `POST /v1/key`\nfriendly:GenerateKeyResponse";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTMasterKeyExportResponse: {
    readonly description: "APIV1POSTMasterKeyExportResponse is the response to `POST /v1/master-key/export`\nfriendly:ExportMasterKeyResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly master_derivation_key: {
            readonly $ref: "#/definitions/MasterDerivationKey";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTMultisigExportResponse: {
    readonly description: "APIV1POSTMultisigExportResponse is the response to `POST /v1/multisig/export`\nfriendly:ExportMultisigResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly multisig_version: {
            readonly type: "integer";
            readonly format: "uint8";
            readonly 'x-go-name': "Version";
        };
        readonly pks: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PublicKey";
            };
            readonly 'x-go-name': "PKs";
        };
        readonly threshold: {
            readonly type: "integer";
            readonly format: "uint8";
            readonly 'x-go-name': "Threshold";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTMultisigImportResponse: {
    readonly description: "APIV1POSTMultisigImportResponse is the response to `POST /v1/multisig/import`\nfriendly:ImportMultisigResponse";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTMultisigListResponse: {
    readonly description: "APIV1POSTMultisigListResponse is the response to `POST /v1/multisig/list`\nfriendly:ListMultisigResponse";
    readonly type: "object";
    readonly properties: {
        readonly addresses: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly 'x-go-name': "Addresses";
        };
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTMultisigProgramSignResponse: {
    readonly description: "APIV1POSTMultisigProgramSignResponse is the response to `POST /v1/multisig/signdata`\nfriendly:SignProgramMultisigResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly multisig: {
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "Multisig";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTMultisigTransactionSignResponse: {
    readonly description: "APIV1POSTMultisigTransactionSignResponse is the response to `POST /v1/multisig/sign`\nfriendly:SignMultisigResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly multisig: {
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "Multisig";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTProgramSignResponse: {
    readonly description: "APIV1POSTProgramSignResponse is the response to `POST /v1/data/sign`\nfriendly:SignProgramResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly sig: {
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "Signature";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTTransactionSignResponse: {
    readonly description: "APIV1POSTTransactionSignResponse is the response to `POST /v1/transaction/sign`\nfriendly:SignTransactionResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly signed_transaction: {
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "SignedTransaction";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTWalletInfoResponse: {
    readonly description: "APIV1POSTWalletInfoResponse is the response to `POST /v1/wallet/info`\nfriendly:WalletInfoResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly wallet_handle: {
            readonly $ref: "#/definitions/APIV1WalletHandle";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTWalletInitResponse: {
    readonly description: "APIV1POSTWalletInitResponse is the response to `POST /v1/wallet/init`\nfriendly:InitWalletHandleTokenResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTWalletReleaseResponse: {
    readonly description: "APIV1POSTWalletReleaseResponse is the response to `POST /v1/wallet/release`\nfriendly:ReleaseWalletHandleTokenResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTWalletRenameResponse: {
    readonly description: "APIV1POSTWalletRenameResponse is the response to `POST /v1/wallet/rename`\nfriendly:RenameWalletResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly wallet: {
            readonly $ref: "#/definitions/APIV1Wallet";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTWalletRenewResponse: {
    readonly description: "APIV1POSTWalletRenewResponse is the response to `POST /v1/wallet/renew`\nfriendly:RenewWalletHandleTokenResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly wallet_handle: {
            readonly $ref: "#/definitions/APIV1WalletHandle";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1POSTWalletResponse: {
    readonly description: "APIV1POSTWalletResponse is the response to `POST /v1/wallet`\nfriendly:CreateWalletResponse";
    readonly type: "object";
    readonly properties: {
        readonly error: {
            readonly type: "boolean";
            readonly 'x-go-name': "Error";
        };
        readonly message: {
            readonly type: "string";
            readonly 'x-go-name': "Message";
        };
        readonly wallet: {
            readonly $ref: "#/definitions/APIV1Wallet";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1Wallet: {
    readonly description: "APIV1Wallet is the API's representation of a wallet";
    readonly type: "object";
    readonly properties: {
        readonly driver_name: {
            readonly type: "string";
            readonly 'x-go-name': "DriverName";
        };
        readonly driver_version: {
            readonly type: "integer";
            readonly format: "uint32";
            readonly 'x-go-name': "DriverVersion";
        };
        readonly id: {
            readonly type: "string";
            readonly 'x-go-name': "ID";
        };
        readonly mnemonic_ux: {
            readonly type: "boolean";
            readonly 'x-go-name': "SupportsMnemonicUX";
        };
        readonly name: {
            readonly type: "string";
            readonly 'x-go-name': "Name";
        };
        readonly supported_txs: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/TxType";
            };
            readonly 'x-go-name': "SupportedTransactions";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $APIV1WalletHandle: {
    readonly description: "APIV1WalletHandle includes the wallet the handle corresponds to\nand the number of number of seconds to expiration";
    readonly type: "object";
    readonly properties: {
        readonly expires_seconds: {
            readonly type: "integer";
            readonly format: "int64";
            readonly 'x-go-name': "ExpiresSeconds";
        };
        readonly wallet: {
            readonly $ref: "#/definitions/APIV1Wallet";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $CreateWalletRequest: {
    readonly description: "APIV1POSTWalletRequest is the request for `POST /v1/wallet`";
    readonly type: "object";
    readonly properties: {
        readonly master_derivation_key: {
            readonly $ref: "#/definitions/MasterDerivationKey";
        };
        readonly wallet_driver_name: {
            readonly type: "string";
            readonly 'x-go-name': "WalletDriverName";
        };
        readonly wallet_name: {
            readonly type: "string";
            readonly 'x-go-name': "WalletName";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTWalletRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $DeleteKeyRequest: {
    readonly description: "APIV1DELETEKeyRequest is the request for `DELETE /v1/key`";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1DELETEKeyRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $DeleteMultisigRequest: {
    readonly description: "APIV1DELETEMultisigRequest is the request for `DELETE /v1/multisig`";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1DELETEMultisigRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $Digest: {
    readonly type: "array";
    readonly title: "Digest represents a 32-byte value holding the 256-bit Hash digest.";
    readonly items: {
        readonly type: "integer";
        readonly format: "uint8";
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/crypto";
};
export declare const $ExportKeyRequest: {
    readonly description: "APIV1POSTKeyExportRequest is the request for `POST /v1/key/export`";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTKeyExportRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ExportMasterKeyRequest: {
    readonly description: "APIV1POSTMasterKeyExportRequest is the request for `POST /v1/master-key/export`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTMasterKeyExportRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ExportMultisigRequest: {
    readonly description: "APIV1POSTMultisigExportRequest is the request for `POST /v1/multisig/export`";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTMultisigExportRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $GenerateKeyRequest: {
    readonly description: "APIV1POSTKeyRequest is the request for `POST /v1/key`";
    readonly type: "object";
    readonly properties: {
        readonly display_mnemonic: {
            readonly type: "boolean";
            readonly 'x-go-name': "DisplayMnemonic";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTKeyRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ImportKeyRequest: {
    readonly description: "APIV1POSTKeyImportRequest is the request for `POST /v1/key/import`";
    readonly type: "object";
    readonly properties: {
        readonly private_key: {
            readonly $ref: "#/definitions/PrivateKey";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTKeyImportRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ImportMultisigRequest: {
    readonly description: "APIV1POSTMultisigImportRequest is the request for `POST /v1/multisig/import`";
    readonly type: "object";
    readonly properties: {
        readonly multisig_version: {
            readonly type: "integer";
            readonly format: "uint8";
            readonly 'x-go-name': "Version";
        };
        readonly pks: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/PublicKey";
            };
            readonly 'x-go-name': "PKs";
        };
        readonly threshold: {
            readonly type: "integer";
            readonly format: "uint8";
            readonly 'x-go-name': "Threshold";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTMultisigImportRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $InitWalletHandleTokenRequest: {
    readonly description: "APIV1POSTWalletInitRequest is the request for `POST /v1/wallet/init`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_id: {
            readonly type: "string";
            readonly 'x-go-name': "WalletID";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTWalletInitRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ListKeysRequest: {
    readonly description: "APIV1POSTKeyListRequest is the request for `POST /v1/key/list`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTKeyListRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ListMultisigRequest: {
    readonly description: "APIV1POSTMultisigListRequest is the request for `POST /v1/multisig/list`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTMultisigListRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ListWalletsRequest: {
    readonly description: "APIV1GETWalletsRequest is the request for `GET /v1/wallets`";
    readonly type: "object";
    readonly 'x-go-name': "APIV1GETWalletsRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $MasterDerivationKey: {
    readonly description: "MasterDerivationKey is used to derive ed25519 keys for use in wallets";
    readonly type: "array";
    readonly items: {
        readonly type: "integer";
        readonly format: "uint8";
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/crypto";
};
export declare const $MultisigSig: {
    readonly description: "MultisigSig is the structure that holds multiple Subsigs";
    readonly type: "object";
    readonly properties: {
        readonly Subsigs: {
            readonly type: "array";
            readonly items: {
                readonly $ref: "#/definitions/MultisigSubsig";
            };
        };
        readonly Threshold: {
            readonly type: "integer";
            readonly format: "uint8";
        };
        readonly Version: {
            readonly type: "integer";
            readonly format: "uint8";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/crypto";
};
export declare const $MultisigSubsig: {
    readonly description: "MultisigSubsig is a struct that holds a pair of public key and signatures\nsignatures may be empty";
    readonly type: "object";
    readonly properties: {
        readonly Key: {
            readonly $ref: "#/definitions/PublicKey";
        };
        readonly Sig: {
            readonly $ref: "#/definitions/Signature";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/crypto";
};
export declare const $PrivateKey: {
    readonly description: "PrivateKey is an exported ed25519PrivateKey";
    readonly $ref: "#/definitions/ed25519PrivateKey";
};
export declare const $PublicKey: {
    readonly description: "PublicKey is an exported ed25519PublicKey";
    readonly $ref: "#/definitions/ed25519PublicKey";
};
export declare const $ReleaseWalletHandleTokenRequest: {
    readonly description: "APIV1POSTWalletReleaseRequest is the request for `POST /v1/wallet/release`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTWalletReleaseRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $RenameWalletRequest: {
    readonly description: "APIV1POSTWalletRenameRequest is the request for `POST /v1/wallet/rename`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_id: {
            readonly type: "string";
            readonly 'x-go-name': "WalletID";
        };
        readonly wallet_name: {
            readonly type: "string";
            readonly 'x-go-name': "NewWalletName";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTWalletRenameRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $RenewWalletHandleTokenRequest: {
    readonly description: "APIV1POSTWalletRenewRequest is the request for `POST /v1/wallet/renew`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTWalletRenewRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $SignMultisigRequest: {
    readonly description: "APIV1POSTMultisigTransactionSignRequest is the request for `POST /v1/multisig/sign`";
    readonly type: "object";
    readonly properties: {
        readonly partial_multisig: {
            readonly $ref: "#/definitions/MultisigSig";
        };
        readonly public_key: {
            readonly $ref: "#/definitions/PublicKey";
        };
        readonly signer: {
            readonly $ref: "#/definitions/Digest";
        };
        readonly transaction: {
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "Transaction";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTMultisigTransactionSignRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $SignProgramMultisigRequest: {
    readonly description: "APIV1POSTMultisigProgramSignRequest is the request for `POST /v1/multisig/signprogram`";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly data: {
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "Program";
        };
        readonly partial_multisig: {
            readonly $ref: "#/definitions/MultisigSig";
        };
        readonly public_key: {
            readonly $ref: "#/definitions/PublicKey";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTMultisigProgramSignRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $SignProgramRequest: {
    readonly description: "APIV1POSTProgramSignRequest is the request for `POST /v1/program/sign`";
    readonly type: "object";
    readonly properties: {
        readonly address: {
            readonly type: "string";
            readonly 'x-go-name': "Address";
        };
        readonly data: {
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "Program";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTProgramSignRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $SignTransactionRequest: {
    readonly description: "APIV1POSTTransactionSignRequest is the request for `POST /v1/transaction/sign`";
    readonly type: "object";
    readonly properties: {
        readonly public_key: {
            readonly $ref: "#/definitions/PublicKey";
        };
        readonly transaction: {
            readonly description: "Base64 encoding of msgpack encoding of a `Transaction` object\nNote: SDK and goal usually generate `SignedTxn` objects\nin that case, the field `txn` / `Transaction` of the\ngenerated `SignedTxn` object needs to be used";
            readonly type: "string";
            readonly format: "byte";
            readonly 'x-go-name': "Transaction";
        };
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
        readonly wallet_password: {
            readonly type: "string";
            readonly 'x-go-name': "WalletPassword";
        };
    };
    readonly 'x-go-name': "APIV1POSTTransactionSignRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $Signature: {
    readonly description: "A Signature is a cryptographic signature. It proves that a message was\nproduced by a holder of a cryptographic secret.";
    readonly $ref: "#/definitions/ed25519Signature";
};
export declare const $TxType: {
    readonly description: "TxType is the type of the transaction written to the ledger";
    readonly type: "string";
    readonly 'x-go-package': "github.com/algorand/go-algorand/protocol";
};
export declare const $VersionsRequest: {
    readonly description: "VersionsRequest is the request for `GET /versions`";
    readonly type: "object";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $VersionsResponse: {
    readonly description: "VersionsResponse is the response to `GET /versions`\nfriendly:VersionsResponse";
    readonly type: "object";
    readonly properties: {
        readonly versions: {
            readonly type: "array";
            readonly items: {
                readonly type: "string";
            };
            readonly 'x-go-name': "Versions";
        };
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $WalletInfoRequest: {
    readonly description: "APIV1POSTWalletInfoRequest is the request for `POST /v1/wallet/info`";
    readonly type: "object";
    readonly properties: {
        readonly wallet_handle_token: {
            readonly type: "string";
            readonly 'x-go-name': "WalletHandleToken";
        };
    };
    readonly 'x-go-name': "APIV1POSTWalletInfoRequest";
    readonly 'x-go-package': "github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi";
};
export declare const $ed25519PrivateKey: {
    readonly type: "array";
    readonly items: {
        readonly type: "integer";
        readonly format: "uint8";
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/crypto";
};
export declare const $ed25519PublicKey: {
    readonly type: "array";
    readonly items: {
        readonly type: "integer";
        readonly format: "uint8";
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/crypto";
};
export declare const $ed25519Signature: {
    readonly type: "array";
    readonly title: "Classical signatures */";
    readonly items: {
        readonly type: "integer";
        readonly format: "uint8";
    };
    readonly 'x-go-package': "github.com/algorand/go-algorand/crypto";
};
