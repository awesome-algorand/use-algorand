/**
 * APIV1DELETEKeyResponse is the response to `DELETE /v1/key`
 * friendly:DeleteKeyResponse
 */
export type APIV1DELETEKeyResponse = {
    error?: boolean;
    message?: string;
};
/**
 * APIV1DELETEMultisigResponse is the response to POST /v1/multisig/delete`
 * friendly:DeleteMultisigResponse
 */
export type APIV1DELETEMultisigResponse = {
    error?: boolean;
    message?: string;
};
/**
 * APIV1GETWalletsResponse is the response to `GET /v1/wallets`
 * friendly:ListWalletsResponse
 */
export type APIV1GETWalletsResponse = {
    error?: boolean;
    message?: string;
    wallets?: Array<APIV1Wallet>;
};
/**
 * APIV1POSTKeyExportResponse is the response to `POST /v1/key/export`
 * friendly:ExportKeyResponse
 */
export type APIV1POSTKeyExportResponse = {
    error?: boolean;
    message?: string;
    private_key?: PrivateKey;
};
/**
 * APIV1POSTKeyImportResponse is the response to `POST /v1/key/import`
 * friendly:ImportKeyResponse
 */
export type APIV1POSTKeyImportResponse = {
    address?: string;
    error?: boolean;
    message?: string;
};
/**
 * APIV1POSTKeyListResponse is the response to `POST /v1/key/list`
 * friendly:ListKeysResponse
 */
export type APIV1POSTKeyListResponse = {
    addresses?: Array<(string)>;
    error?: boolean;
    message?: string;
};
/**
 * APIV1POSTKeyResponse is the response to `POST /v1/key`
 * friendly:GenerateKeyResponse
 */
export type APIV1POSTKeyResponse = {
    address?: string;
    error?: boolean;
    message?: string;
};
/**
 * APIV1POSTMasterKeyExportResponse is the response to `POST /v1/master-key/export`
 * friendly:ExportMasterKeyResponse
 */
export type APIV1POSTMasterKeyExportResponse = {
    error?: boolean;
    master_derivation_key?: MasterDerivationKey;
    message?: string;
};
/**
 * APIV1POSTMultisigExportResponse is the response to `POST /v1/multisig/export`
 * friendly:ExportMultisigResponse
 */
export type APIV1POSTMultisigExportResponse = {
    error?: boolean;
    message?: string;
    multisig_version?: number;
    pks?: Array<PublicKey>;
    threshold?: number;
};
/**
 * APIV1POSTMultisigImportResponse is the response to `POST /v1/multisig/import`
 * friendly:ImportMultisigResponse
 */
export type APIV1POSTMultisigImportResponse = {
    address?: string;
    error?: boolean;
    message?: string;
};
/**
 * APIV1POSTMultisigListResponse is the response to `POST /v1/multisig/list`
 * friendly:ListMultisigResponse
 */
export type APIV1POSTMultisigListResponse = {
    addresses?: Array<(string)>;
    error?: boolean;
    message?: string;
};
/**
 * APIV1POSTMultisigProgramSignResponse is the response to `POST /v1/multisig/signdata`
 * friendly:SignProgramMultisigResponse
 */
export type APIV1POSTMultisigProgramSignResponse = {
    error?: boolean;
    message?: string;
    multisig?: string;
};
/**
 * APIV1POSTMultisigTransactionSignResponse is the response to `POST /v1/multisig/sign`
 * friendly:SignMultisigResponse
 */
export type APIV1POSTMultisigTransactionSignResponse = {
    error?: boolean;
    message?: string;
    multisig?: string;
};
/**
 * APIV1POSTProgramSignResponse is the response to `POST /v1/data/sign`
 * friendly:SignProgramResponse
 */
export type APIV1POSTProgramSignResponse = {
    error?: boolean;
    message?: string;
    sig?: string;
};
/**
 * APIV1POSTTransactionSignResponse is the response to `POST /v1/transaction/sign`
 * friendly:SignTransactionResponse
 */
export type APIV1POSTTransactionSignResponse = {
    error?: boolean;
    message?: string;
    signed_transaction?: string;
};
/**
 * APIV1POSTWalletInfoResponse is the response to `POST /v1/wallet/info`
 * friendly:WalletInfoResponse
 */
export type APIV1POSTWalletInfoResponse = {
    error?: boolean;
    message?: string;
    wallet_handle?: APIV1WalletHandle;
};
/**
 * APIV1POSTWalletInitResponse is the response to `POST /v1/wallet/init`
 * friendly:InitWalletHandleTokenResponse
 */
export type APIV1POSTWalletInitResponse = {
    error?: boolean;
    message?: string;
    wallet_handle_token?: string;
};
/**
 * APIV1POSTWalletReleaseResponse is the response to `POST /v1/wallet/release`
 * friendly:ReleaseWalletHandleTokenResponse
 */
export type APIV1POSTWalletReleaseResponse = {
    error?: boolean;
    message?: string;
};
/**
 * APIV1POSTWalletRenameResponse is the response to `POST /v1/wallet/rename`
 * friendly:RenameWalletResponse
 */
export type APIV1POSTWalletRenameResponse = {
    error?: boolean;
    message?: string;
    wallet?: APIV1Wallet;
};
/**
 * APIV1POSTWalletRenewResponse is the response to `POST /v1/wallet/renew`
 * friendly:RenewWalletHandleTokenResponse
 */
export type APIV1POSTWalletRenewResponse = {
    error?: boolean;
    message?: string;
    wallet_handle?: APIV1WalletHandle;
};
/**
 * APIV1POSTWalletResponse is the response to `POST /v1/wallet`
 * friendly:CreateWalletResponse
 */
export type APIV1POSTWalletResponse = {
    error?: boolean;
    message?: string;
    wallet?: APIV1Wallet;
};
/**
 * APIV1Wallet is the API's representation of a wallet
 */
export type APIV1Wallet = {
    driver_name?: string;
    driver_version?: number;
    id?: string;
    mnemonic_ux?: boolean;
    name?: string;
    supported_txs?: Array<TxType>;
};
/**
 * APIV1WalletHandle includes the wallet the handle corresponds to
 * and the number of number of seconds to expiration
 */
export type APIV1WalletHandle = {
    expires_seconds?: number;
    wallet?: APIV1Wallet;
};
/**
 * APIV1POSTWalletRequest is the request for `POST /v1/wallet`
 */
export type CreateWalletRequest = {
    master_derivation_key?: MasterDerivationKey;
    wallet_driver_name?: string;
    wallet_name?: string;
    wallet_password?: string;
};
/**
 * APIV1DELETEKeyRequest is the request for `DELETE /v1/key`
 */
export type DeleteKeyRequest = {
    address?: string;
    wallet_handle_token?: string;
    wallet_password?: string;
};
/**
 * APIV1DELETEMultisigRequest is the request for `DELETE /v1/multisig`
 */
export type DeleteMultisigRequest = {
    address?: string;
    wallet_handle_token?: string;
    wallet_password?: string;
};
export type Digest = Array<(number)>;
/**
 * APIV1POSTKeyExportRequest is the request for `POST /v1/key/export`
 */
export type ExportKeyRequest = {
    address?: string;
    wallet_handle_token?: string;
    wallet_password?: string;
};
/**
 * APIV1POSTMasterKeyExportRequest is the request for `POST /v1/master-key/export`
 */
export type ExportMasterKeyRequest = {
    wallet_handle_token?: string;
    wallet_password?: string;
};
/**
 * APIV1POSTMultisigExportRequest is the request for `POST /v1/multisig/export`
 */
export type ExportMultisigRequest = {
    address?: string;
    wallet_handle_token?: string;
};
/**
 * APIV1POSTKeyRequest is the request for `POST /v1/key`
 */
export type GenerateKeyRequest = {
    display_mnemonic?: boolean;
    wallet_handle_token?: string;
};
/**
 * APIV1POSTKeyImportRequest is the request for `POST /v1/key/import`
 */
export type ImportKeyRequest = {
    private_key?: PrivateKey;
    wallet_handle_token?: string;
};
/**
 * APIV1POSTMultisigImportRequest is the request for `POST /v1/multisig/import`
 */
export type ImportMultisigRequest = {
    multisig_version?: number;
    pks?: Array<PublicKey>;
    threshold?: number;
    wallet_handle_token?: string;
};
/**
 * APIV1POSTWalletInitRequest is the request for `POST /v1/wallet/init`
 */
export type InitWalletHandleTokenRequest = {
    wallet_id?: string;
    wallet_password?: string;
};
/**
 * APIV1POSTKeyListRequest is the request for `POST /v1/key/list`
 */
export type ListKeysRequest = {
    wallet_handle_token?: string;
};
/**
 * APIV1POSTMultisigListRequest is the request for `POST /v1/multisig/list`
 */
export type ListMultisigRequest = {
    wallet_handle_token?: string;
};
/**
 * APIV1GETWalletsRequest is the request for `GET /v1/wallets`
 */
export type ListWalletsRequest = unknown;
/**
 * MasterDerivationKey is used to derive ed25519 keys for use in wallets
 */
export type MasterDerivationKey = Array<(number)>;
/**
 * MultisigSig is the structure that holds multiple Subsigs
 */
export type MultisigSig = {
    Subsigs?: Array<MultisigSubsig>;
    Threshold?: number;
    Version?: number;
};
/**
 * MultisigSubsig is a struct that holds a pair of public key and signatures
 * signatures may be empty
 */
export type MultisigSubsig = {
    Key?: PublicKey;
    Sig?: Signature;
};
/**
 * PrivateKey is an exported ed25519PrivateKey
 */
export type PrivateKey = ed25519PrivateKey;
/**
 * PublicKey is an exported ed25519PublicKey
 */
export type PublicKey = ed25519PublicKey;
/**
 * APIV1POSTWalletReleaseRequest is the request for `POST /v1/wallet/release`
 */
export type ReleaseWalletHandleTokenRequest = {
    wallet_handle_token?: string;
};
/**
 * APIV1POSTWalletRenameRequest is the request for `POST /v1/wallet/rename`
 */
export type RenameWalletRequest = {
    wallet_id?: string;
    wallet_name?: string;
    wallet_password?: string;
};
/**
 * APIV1POSTWalletRenewRequest is the request for `POST /v1/wallet/renew`
 */
export type RenewWalletHandleTokenRequest = {
    wallet_handle_token?: string;
};
/**
 * APIV1POSTMultisigTransactionSignRequest is the request for `POST /v1/multisig/sign`
 */
export type SignMultisigRequest = {
    partial_multisig?: MultisigSig;
    public_key?: PublicKey;
    signer?: Digest;
    transaction?: string;
    wallet_handle_token?: string;
    wallet_password?: string;
};
/**
 * APIV1POSTMultisigProgramSignRequest is the request for `POST /v1/multisig/signprogram`
 */
export type SignProgramMultisigRequest = {
    address?: string;
    data?: string;
    partial_multisig?: MultisigSig;
    public_key?: PublicKey;
    wallet_handle_token?: string;
    wallet_password?: string;
};
/**
 * APIV1POSTProgramSignRequest is the request for `POST /v1/program/sign`
 */
export type SignProgramRequest = {
    address?: string;
    data?: string;
    wallet_handle_token?: string;
    wallet_password?: string;
};
/**
 * APIV1POSTTransactionSignRequest is the request for `POST /v1/transaction/sign`
 */
export type SignTransactionRequest = {
    public_key?: PublicKey;
    /**
     * Base64 encoding of msgpack encoding of a `Transaction` object
     * Note: SDK and goal usually generate `SignedTxn` objects
     * in that case, the field `txn` / `Transaction` of the
     * generated `SignedTxn` object needs to be used
     */
    transaction?: string;
    wallet_handle_token?: string;
    wallet_password?: string;
};
/**
 * A Signature is a cryptographic signature. It proves that a message was
 * produced by a holder of a cryptographic secret.
 */
export type Signature = ed25519Signature;
/**
 * TxType is the type of the transaction written to the ledger
 */
export type TxType = string;
/**
 * VersionsRequest is the request for `GET /versions`
 */
export type VersionsRequest = unknown;
/**
 * VersionsResponse is the response to `GET /versions`
 * friendly:VersionsResponse
 */
export type VersionsResponse = {
    versions?: Array<(string)>;
};
/**
 * APIV1POSTWalletInfoRequest is the request for `POST /v1/wallet/info`
 */
export type WalletInfoRequest = {
    wallet_handle_token?: string;
};
export type ed25519PrivateKey = Array<(number)>;
export type ed25519PublicKey = Array<(number)>;
export type ed25519Signature = Array<(number)>;
export type SwaggerHandlerResponse = string;
export type GenerateKeyData = {
    generateKeyRequest: GenerateKeyRequest;
};
export type GenerateKeyResponse = APIV1POSTKeyResponse;
export type DeleteKeyData = {
    deleteKeyRequest: DeleteKeyRequest;
};
export type DeleteKeyResponse = APIV1DELETEKeyResponse;
export type ExportKeyData = {
    exportKeyRequest: ExportKeyRequest;
};
export type ExportKeyResponse = APIV1POSTKeyExportResponse;
export type ImportKeyData = {
    importKeyRequest: ImportKeyRequest;
};
export type ImportKeyResponse = APIV1POSTKeyImportResponse;
export type ListKeysInWalletData = {
    listKeysRequest: ListKeysRequest;
};
export type ListKeysInWalletResponse = APIV1POSTKeyListResponse;
export type ExportMasterKeyData = {
    exportMasterKeyRequest: ExportMasterKeyRequest;
};
export type ExportMasterKeyResponse = APIV1POSTMasterKeyExportResponse;
export type DeleteMultisigData = {
    deleteMultisigRequest: DeleteMultisigRequest;
};
export type DeleteMultisigResponse = APIV1DELETEMultisigResponse;
export type ExportMultisigData = {
    exportMultisigRequest: ExportMultisigRequest;
};
export type ExportMultisigResponse = APIV1POSTMultisigExportResponse;
export type ImportMultisigData = {
    importMultisigRequest: ImportMultisigRequest;
};
export type ImportMultisigResponse = APIV1POSTMultisigImportResponse;
export type ListMultisgData = {
    listMultisigRequest: ListMultisigRequest;
};
export type ListMultisgResponse = APIV1POSTMultisigListResponse;
export type SignMultisigTransactionData = {
    signMultisigTransactionRequest: SignMultisigRequest;
};
export type SignMultisigTransactionResponse = APIV1POSTMultisigTransactionSignResponse;
export type SignMultisigProgramData = {
    signMultisigProgramRequest: SignProgramMultisigRequest;
};
export type SignMultisigProgramResponse = APIV1POSTMultisigProgramSignResponse;
export type SignProgramData = {
    signProgramRequest: SignProgramRequest;
};
export type SignProgramResponse = APIV1POSTProgramSignResponse;
export type SignTransactionData = {
    signTransactionRequest: SignTransactionRequest;
};
export type SignTransactionResponse = APIV1POSTTransactionSignResponse;
export type CreateWalletData = {
    createWalletRequest: CreateWalletRequest;
};
export type CreateWalletResponse = APIV1POSTWalletResponse;
export type GetWalletInfoData = {
    getWalletInfoRequest: WalletInfoRequest;
};
export type GetWalletInfoResponse = APIV1POSTWalletInfoResponse;
export type InitWalletHandleTokenData = {
    initializeWalletHandleTokenRequest: InitWalletHandleTokenRequest;
};
export type InitWalletHandleTokenResponse = APIV1POSTWalletInitResponse;
export type ReleaseWalletHandleTokenData = {
    releaseWalletHandleTokenRequest: ReleaseWalletHandleTokenRequest;
};
export type ReleaseWalletHandleTokenResponse = APIV1POSTWalletReleaseResponse;
export type RenameWalletData = {
    renameWalletRequest: RenameWalletRequest;
};
export type RenameWalletResponse = APIV1POSTWalletRenameResponse;
export type RenewWalletHandleTokenData = {
    renewWalletHandleTokenRequest: RenewWalletHandleTokenRequest;
};
export type RenewWalletHandleTokenResponse = APIV1POSTWalletRenewResponse;
export type ListWalletsData = {
    listWalletRequest?: ListWalletsRequest;
};
export type ListWalletsResponse = APIV1GETWalletsResponse;
export type GetVersionData = {
    versionsRequest?: VersionsRequest;
};
export type GetVersionResponse = VersionsResponse;
export type $OpenApiTs = {
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
    '/v1/key': {
        post: {
            req: GenerateKeyData;
            res: {
                /**
                 * Response to `POST /v1/key`
                 */
                200: APIV1POSTKeyResponse;
            };
        };
        delete: {
            req: DeleteKeyData;
            res: {
                /**
                 * Response to `DELETE /v1/key`
                 */
                200: APIV1DELETEKeyResponse;
            };
        };
    };
    '/v1/key/export': {
        post: {
            req: ExportKeyData;
            res: {
                /**
                 * Response to `POST /v1/key/export`
                 */
                200: APIV1POSTKeyExportResponse;
            };
        };
    };
    '/v1/key/import': {
        post: {
            req: ImportKeyData;
            res: {
                /**
                 * Response to `POST /v1/key/import`
                 */
                200: APIV1POSTKeyImportResponse;
            };
        };
    };
    '/v1/key/list': {
        post: {
            req: ListKeysInWalletData;
            res: {
                /**
                 * Response to `POST /v1/key/list`
                 */
                200: APIV1POSTKeyListResponse;
            };
        };
    };
    '/v1/master-key/export': {
        post: {
            req: ExportMasterKeyData;
            res: {
                /**
                 * Response to `POST /v1/master-key/export`
                 */
                200: APIV1POSTMasterKeyExportResponse;
            };
        };
    };
    '/v1/multisig': {
        delete: {
            req: DeleteMultisigData;
            res: {
                /**
                 * Response to POST /v1/multisig/delete
                 */
                200: APIV1DELETEMultisigResponse;
            };
        };
    };
    '/v1/multisig/export': {
        post: {
            req: ExportMultisigData;
            res: {
                /**
                 * Response to `POST /v1/multisig/export`
                 */
                200: APIV1POSTMultisigExportResponse;
            };
        };
    };
    '/v1/multisig/import': {
        post: {
            req: ImportMultisigData;
            res: {
                /**
                 * Response to `POST /v1/multisig/import`
                 */
                200: APIV1POSTMultisigImportResponse;
            };
        };
    };
    '/v1/multisig/list': {
        post: {
            req: ListMultisgData;
            res: {
                /**
                 * Response to `POST /v1/multisig/list`
                 */
                200: APIV1POSTMultisigListResponse;
            };
        };
    };
    '/v1/multisig/sign': {
        post: {
            req: SignMultisigTransactionData;
            res: {
                /**
                 * Response to `POST /v1/multisig/sign`
                 */
                200: APIV1POSTMultisigTransactionSignResponse;
            };
        };
    };
    '/v1/multisig/signprogram': {
        post: {
            req: SignMultisigProgramData;
            res: {
                /**
                 * Response to `POST /v1/multisig/signdata`
                 */
                200: APIV1POSTMultisigProgramSignResponse;
            };
        };
    };
    '/v1/program/sign': {
        post: {
            req: SignProgramData;
            res: {
                /**
                 * Response to `POST /v1/data/sign`
                 */
                200: APIV1POSTProgramSignResponse;
            };
        };
    };
    '/v1/transaction/sign': {
        post: {
            req: SignTransactionData;
            res: {
                /**
                 * Response to `POST /v1/transaction/sign`
                 */
                200: APIV1POSTTransactionSignResponse;
            };
        };
    };
    '/v1/wallet': {
        post: {
            req: CreateWalletData;
            res: {
                /**
                 * Response to `POST /v1/wallet`
                 */
                200: APIV1POSTWalletResponse;
            };
        };
    };
    '/v1/wallet/info': {
        post: {
            req: GetWalletInfoData;
            res: {
                /**
                 * Response to `POST /v1/wallet/info`
                 */
                200: APIV1POSTWalletInfoResponse;
            };
        };
    };
    '/v1/wallet/init': {
        post: {
            req: InitWalletHandleTokenData;
            res: {
                /**
                 * Response to `POST /v1/wallet/init`
                 */
                200: APIV1POSTWalletInitResponse;
            };
        };
    };
    '/v1/wallet/release': {
        post: {
            req: ReleaseWalletHandleTokenData;
            res: {
                /**
                 * Response to `POST /v1/wallet/release`
                 */
                200: APIV1POSTWalletReleaseResponse;
            };
        };
    };
    '/v1/wallet/rename': {
        post: {
            req: RenameWalletData;
            res: {
                /**
                 * Response to `POST /v1/wallet/rename`
                 */
                200: APIV1POSTWalletRenameResponse;
            };
        };
    };
    '/v1/wallet/renew': {
        post: {
            req: RenewWalletHandleTokenData;
            res: {
                /**
                 * Response `POST /v1/wallet/renew`
                 */
                200: APIV1POSTWalletRenewResponse;
            };
        };
    };
    '/v1/wallets': {
        get: {
            req: ListWalletsData;
            res: {
                /**
                 * Response to `GET /v1/wallets`
                 */
                200: APIV1GETWalletsResponse;
            };
        };
    };
    '/versions': {
        get: {
            req: GetVersionData;
            res: {
                /**
                 * Response to `GET /versions`
                 */
                200: VersionsResponse;
            };
        };
    };
};
