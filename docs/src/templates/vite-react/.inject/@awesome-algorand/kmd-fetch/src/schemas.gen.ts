// This file is auto-generated by @hey-api/openapi-ts

export const $APIV1DELETEKeyResponse = {
    description: `APIV1DELETEKeyResponse is the response to \`DELETE /v1/key\`
friendly:DeleteKeyResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1DELETEMultisigResponse = {
    description: `APIV1DELETEMultisigResponse is the response to POST /v1/multisig/delete\`
friendly:DeleteMultisigResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1GETWalletsResponse = {
    description: `APIV1GETWalletsResponse is the response to \`GET /v1/wallets\`
friendly:ListWalletsResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        wallets: {
            type: 'array',
            items: {
                '$ref': '#/definitions/APIV1Wallet'
            },
            'x-go-name': 'Wallets'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTKeyExportResponse = {
    description: `APIV1POSTKeyExportResponse is the response to \`POST /v1/key/export\`
friendly:ExportKeyResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        private_key: {
            '$ref': '#/definitions/PrivateKey'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTKeyImportResponse = {
    description: `APIV1POSTKeyImportResponse is the response to \`POST /v1/key/import\`
friendly:ImportKeyResponse`,
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTKeyListResponse = {
    description: `APIV1POSTKeyListResponse is the response to \`POST /v1/key/list\`
friendly:ListKeysResponse`,
    type: 'object',
    properties: {
        addresses: {
            type: 'array',
            items: {
                type: 'string'
            },
            'x-go-name': 'Addresses'
        },
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTKeyResponse = {
    description: `APIV1POSTKeyResponse is the response to \`POST /v1/key\`
friendly:GenerateKeyResponse`,
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTMasterKeyExportResponse = {
    description: `APIV1POSTMasterKeyExportResponse is the response to \`POST /v1/master-key/export\`
friendly:ExportMasterKeyResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        master_derivation_key: {
            '$ref': '#/definitions/MasterDerivationKey'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTMultisigExportResponse = {
    description: `APIV1POSTMultisigExportResponse is the response to \`POST /v1/multisig/export\`
friendly:ExportMultisigResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        multisig_version: {
            type: 'integer',
            format: 'uint8',
            'x-go-name': 'Version'
        },
        pks: {
            type: 'array',
            items: {
                '$ref': '#/definitions/PublicKey'
            },
            'x-go-name': 'PKs'
        },
        threshold: {
            type: 'integer',
            format: 'uint8',
            'x-go-name': 'Threshold'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTMultisigImportResponse = {
    description: `APIV1POSTMultisigImportResponse is the response to \`POST /v1/multisig/import\`
friendly:ImportMultisigResponse`,
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTMultisigListResponse = {
    description: `APIV1POSTMultisigListResponse is the response to \`POST /v1/multisig/list\`
friendly:ListMultisigResponse`,
    type: 'object',
    properties: {
        addresses: {
            type: 'array',
            items: {
                type: 'string'
            },
            'x-go-name': 'Addresses'
        },
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTMultisigProgramSignResponse = {
    description: `APIV1POSTMultisigProgramSignResponse is the response to \`POST /v1/multisig/signdata\`
friendly:SignProgramMultisigResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        multisig: {
            type: 'string',
            format: 'byte',
            'x-go-name': 'Multisig'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTMultisigTransactionSignResponse = {
    description: `APIV1POSTMultisigTransactionSignResponse is the response to \`POST /v1/multisig/sign\`
friendly:SignMultisigResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        multisig: {
            type: 'string',
            format: 'byte',
            'x-go-name': 'Multisig'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTProgramSignResponse = {
    description: `APIV1POSTProgramSignResponse is the response to \`POST /v1/data/sign\`
friendly:SignProgramResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        sig: {
            type: 'string',
            format: 'byte',
            'x-go-name': 'Signature'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTTransactionSignResponse = {
    description: `APIV1POSTTransactionSignResponse is the response to \`POST /v1/transaction/sign\`
friendly:SignTransactionResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        signed_transaction: {
            type: 'string',
            format: 'byte',
            'x-go-name': 'SignedTransaction'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTWalletInfoResponse = {
    description: `APIV1POSTWalletInfoResponse is the response to \`POST /v1/wallet/info\`
friendly:WalletInfoResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        wallet_handle: {
            '$ref': '#/definitions/APIV1WalletHandle'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTWalletInitResponse = {
    description: `APIV1POSTWalletInitResponse is the response to \`POST /v1/wallet/init\`
friendly:InitWalletHandleTokenResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTWalletReleaseResponse = {
    description: `APIV1POSTWalletReleaseResponse is the response to \`POST /v1/wallet/release\`
friendly:ReleaseWalletHandleTokenResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTWalletRenameResponse = {
    description: `APIV1POSTWalletRenameResponse is the response to \`POST /v1/wallet/rename\`
friendly:RenameWalletResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        wallet: {
            '$ref': '#/definitions/APIV1Wallet'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTWalletRenewResponse = {
    description: `APIV1POSTWalletRenewResponse is the response to \`POST /v1/wallet/renew\`
friendly:RenewWalletHandleTokenResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        wallet_handle: {
            '$ref': '#/definitions/APIV1WalletHandle'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1POSTWalletResponse = {
    description: `APIV1POSTWalletResponse is the response to \`POST /v1/wallet\`
friendly:CreateWalletResponse`,
    type: 'object',
    properties: {
        error: {
            type: 'boolean',
            'x-go-name': 'Error'
        },
        message: {
            type: 'string',
            'x-go-name': 'Message'
        },
        wallet: {
            '$ref': '#/definitions/APIV1Wallet'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1Wallet = {
    description: "APIV1Wallet is the API's representation of a wallet",
    type: 'object',
    properties: {
        driver_name: {
            type: 'string',
            'x-go-name': 'DriverName'
        },
        driver_version: {
            type: 'integer',
            format: 'uint32',
            'x-go-name': 'DriverVersion'
        },
        id: {
            type: 'string',
            'x-go-name': 'ID'
        },
        mnemonic_ux: {
            type: 'boolean',
            'x-go-name': 'SupportsMnemonicUX'
        },
        name: {
            type: 'string',
            'x-go-name': 'Name'
        },
        supported_txs: {
            type: 'array',
            items: {
                '$ref': '#/definitions/TxType'
            },
            'x-go-name': 'SupportedTransactions'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $APIV1WalletHandle = {
    description: `APIV1WalletHandle includes the wallet the handle corresponds to
and the number of number of seconds to expiration`,
    type: 'object',
    properties: {
        expires_seconds: {
            type: 'integer',
            format: 'int64',
            'x-go-name': 'ExpiresSeconds'
        },
        wallet: {
            '$ref': '#/definitions/APIV1Wallet'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $CreateWalletRequest = {
    description: 'APIV1POSTWalletRequest is the request for `POST /v1/wallet`',
    type: 'object',
    properties: {
        master_derivation_key: {
            '$ref': '#/definitions/MasterDerivationKey'
        },
        wallet_driver_name: {
            type: 'string',
            'x-go-name': 'WalletDriverName'
        },
        wallet_name: {
            type: 'string',
            'x-go-name': 'WalletName'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTWalletRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $DeleteKeyRequest = {
    description: 'APIV1DELETEKeyRequest is the request for `DELETE /v1/key`',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1DELETEKeyRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $DeleteMultisigRequest = {
    description: 'APIV1DELETEMultisigRequest is the request for `DELETE /v1/multisig`',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1DELETEMultisigRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $Digest = {
    type: 'array',
    title: 'Digest represents a 32-byte value holding the 256-bit Hash digest.',
    items: {
        type: 'integer',
        format: 'uint8'
    },
    'x-go-package': 'github.com/algorand/go-algorand/crypto'
} as const;

export const $ExportKeyRequest = {
    description: 'APIV1POSTKeyExportRequest is the request for `POST /v1/key/export`',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTKeyExportRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ExportMasterKeyRequest = {
    description: 'APIV1POSTMasterKeyExportRequest is the request for `POST /v1/master-key/export`',
    type: 'object',
    properties: {
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTMasterKeyExportRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ExportMultisigRequest = {
    description: 'APIV1POSTMultisigExportRequest is the request for `POST /v1/multisig/export`',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTMultisigExportRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $GenerateKeyRequest = {
    description: 'APIV1POSTKeyRequest is the request for `POST /v1/key`',
    type: 'object',
    properties: {
        display_mnemonic: {
            type: 'boolean',
            'x-go-name': 'DisplayMnemonic'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTKeyRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ImportKeyRequest = {
    description: 'APIV1POSTKeyImportRequest is the request for `POST /v1/key/import`',
    type: 'object',
    properties: {
        private_key: {
            '$ref': '#/definitions/PrivateKey'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTKeyImportRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ImportMultisigRequest = {
    description: 'APIV1POSTMultisigImportRequest is the request for `POST /v1/multisig/import`',
    type: 'object',
    properties: {
        multisig_version: {
            type: 'integer',
            format: 'uint8',
            'x-go-name': 'Version'
        },
        pks: {
            type: 'array',
            items: {
                '$ref': '#/definitions/PublicKey'
            },
            'x-go-name': 'PKs'
        },
        threshold: {
            type: 'integer',
            format: 'uint8',
            'x-go-name': 'Threshold'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTMultisigImportRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $InitWalletHandleTokenRequest = {
    description: 'APIV1POSTWalletInitRequest is the request for `POST /v1/wallet/init`',
    type: 'object',
    properties: {
        wallet_id: {
            type: 'string',
            'x-go-name': 'WalletID'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTWalletInitRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ListKeysRequest = {
    description: 'APIV1POSTKeyListRequest is the request for `POST /v1/key/list`',
    type: 'object',
    properties: {
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTKeyListRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ListMultisigRequest = {
    description: 'APIV1POSTMultisigListRequest is the request for `POST /v1/multisig/list`',
    type: 'object',
    properties: {
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTMultisigListRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ListWalletsRequest = {
    description: 'APIV1GETWalletsRequest is the request for `GET /v1/wallets`',
    type: 'object',
    'x-go-name': 'APIV1GETWalletsRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $MasterDerivationKey = {
    description: 'MasterDerivationKey is used to derive ed25519 keys for use in wallets',
    type: 'array',
    items: {
        type: 'integer',
        format: 'uint8'
    },
    'x-go-package': 'github.com/algorand/go-algorand/crypto'
} as const;

export const $MultisigSig = {
    description: 'MultisigSig is the structure that holds multiple Subsigs',
    type: 'object',
    properties: {
        Subsigs: {
            type: 'array',
            items: {
                '$ref': '#/definitions/MultisigSubsig'
            }
        },
        Threshold: {
            type: 'integer',
            format: 'uint8'
        },
        Version: {
            type: 'integer',
            format: 'uint8'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/crypto'
} as const;

export const $MultisigSubsig = {
    description: `MultisigSubsig is a struct that holds a pair of public key and signatures
signatures may be empty`,
    type: 'object',
    properties: {
        Key: {
            '$ref': '#/definitions/PublicKey'
        },
        Sig: {
            '$ref': '#/definitions/Signature'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/crypto'
} as const;

export const $PrivateKey = {
    description: 'PrivateKey is an exported ed25519PrivateKey',
    '$ref': '#/definitions/ed25519PrivateKey'
} as const;

export const $PublicKey = {
    description: 'PublicKey is an exported ed25519PublicKey',
    '$ref': '#/definitions/ed25519PublicKey'
} as const;

export const $ReleaseWalletHandleTokenRequest = {
    description: 'APIV1POSTWalletReleaseRequest is the request for `POST /v1/wallet/release`',
    type: 'object',
    properties: {
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTWalletReleaseRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $RenameWalletRequest = {
    description: 'APIV1POSTWalletRenameRequest is the request for `POST /v1/wallet/rename`',
    type: 'object',
    properties: {
        wallet_id: {
            type: 'string',
            'x-go-name': 'WalletID'
        },
        wallet_name: {
            type: 'string',
            'x-go-name': 'NewWalletName'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTWalletRenameRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $RenewWalletHandleTokenRequest = {
    description: 'APIV1POSTWalletRenewRequest is the request for `POST /v1/wallet/renew`',
    type: 'object',
    properties: {
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTWalletRenewRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $SignMultisigRequest = {
    description: 'APIV1POSTMultisigTransactionSignRequest is the request for `POST /v1/multisig/sign`',
    type: 'object',
    properties: {
        partial_multisig: {
            '$ref': '#/definitions/MultisigSig'
        },
        public_key: {
            '$ref': '#/definitions/PublicKey'
        },
        signer: {
            '$ref': '#/definitions/Digest'
        },
        transaction: {
            type: 'string',
            format: 'byte',
            'x-go-name': 'Transaction'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTMultisigTransactionSignRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $SignProgramMultisigRequest = {
    description: 'APIV1POSTMultisigProgramSignRequest is the request for `POST /v1/multisig/signprogram`',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        data: {
            type: 'string',
            format: 'byte',
            'x-go-name': 'Program'
        },
        partial_multisig: {
            '$ref': '#/definitions/MultisigSig'
        },
        public_key: {
            '$ref': '#/definitions/PublicKey'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTMultisigProgramSignRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $SignProgramRequest = {
    description: 'APIV1POSTProgramSignRequest is the request for `POST /v1/program/sign`',
    type: 'object',
    properties: {
        address: {
            type: 'string',
            'x-go-name': 'Address'
        },
        data: {
            type: 'string',
            format: 'byte',
            'x-go-name': 'Program'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTProgramSignRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $SignTransactionRequest = {
    description: 'APIV1POSTTransactionSignRequest is the request for `POST /v1/transaction/sign`',
    type: 'object',
    properties: {
        public_key: {
            '$ref': '#/definitions/PublicKey'
        },
        transaction: {
            description: `Base64 encoding of msgpack encoding of a \`Transaction\` object
Note: SDK and goal usually generate \`SignedTxn\` objects
in that case, the field \`txn\` / \`Transaction\` of the
generated \`SignedTxn\` object needs to be used`,
            type: 'string',
            format: 'byte',
            'x-go-name': 'Transaction'
        },
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        },
        wallet_password: {
            type: 'string',
            'x-go-name': 'WalletPassword'
        }
    },
    'x-go-name': 'APIV1POSTTransactionSignRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $Signature = {
    description: `A Signature is a cryptographic signature. It proves that a message was
produced by a holder of a cryptographic secret.`,
    '$ref': '#/definitions/ed25519Signature'
} as const;

export const $TxType = {
    description: 'TxType is the type of the transaction written to the ledger',
    type: 'string',
    'x-go-package': 'github.com/algorand/go-algorand/protocol'
} as const;

export const $VersionsRequest = {
    description: 'VersionsRequest is the request for `GET /versions`',
    type: 'object',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $VersionsResponse = {
    description: `VersionsResponse is the response to \`GET /versions\`
friendly:VersionsResponse`,
    type: 'object',
    properties: {
        versions: {
            type: 'array',
            items: {
                type: 'string'
            },
            'x-go-name': 'Versions'
        }
    },
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $WalletInfoRequest = {
    description: 'APIV1POSTWalletInfoRequest is the request for `POST /v1/wallet/info`',
    type: 'object',
    properties: {
        wallet_handle_token: {
            type: 'string',
            'x-go-name': 'WalletHandleToken'
        }
    },
    'x-go-name': 'APIV1POSTWalletInfoRequest',
    'x-go-package': 'github.com/algorand/go-algorand/daemon/kmd/lib/kmdapi'
} as const;

export const $ed25519PrivateKey = {
    type: 'array',
    items: {
        type: 'integer',
        format: 'uint8'
    },
    'x-go-package': 'github.com/algorand/go-algorand/crypto'
} as const;

export const $ed25519PublicKey = {
    type: 'array',
    items: {
        type: 'integer',
        format: 'uint8'
    },
    'x-go-package': 'github.com/algorand/go-algorand/crypto'
} as const;

export const $ed25519Signature = {
    type: 'array',
    title: 'Classical signatures */',
    items: {
        type: 'integer',
        format: 'uint8'
    },
    'x-go-package': 'github.com/algorand/go-algorand/crypto'
} as const;