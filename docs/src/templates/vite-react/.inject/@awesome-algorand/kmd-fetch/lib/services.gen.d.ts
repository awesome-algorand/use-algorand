import type { CancelablePromise } from './core/CancelablePromise.js';
import type { BaseHttpRequest } from './core/BaseHttpRequest.js';
import type { SwaggerHandlerResponse, GenerateKeyData, GenerateKeyResponse, DeleteKeyData, DeleteKeyResponse, ExportKeyData, ExportKeyResponse, ImportKeyData, ImportKeyResponse, ListKeysInWalletData, ListKeysInWalletResponse, ExportMasterKeyData, ExportMasterKeyResponse, DeleteMultisigData, DeleteMultisigResponse, ExportMultisigData, ExportMultisigResponse, ImportMultisigData, ImportMultisigResponse, ListMultisgData, ListMultisgResponse, SignMultisigTransactionData, SignMultisigTransactionResponse, SignMultisigProgramData, SignMultisigProgramResponse, SignProgramData, SignProgramResponse, SignTransactionData, SignTransactionResponse, CreateWalletData, CreateWalletResponse, GetWalletInfoData, GetWalletInfoResponse, InitWalletHandleTokenData, InitWalletHandleTokenResponse, ReleaseWalletHandleTokenData, ReleaseWalletHandleTokenResponse, RenameWalletData, RenameWalletResponse, RenewWalletHandleTokenData, RenewWalletHandleTokenResponse, ListWalletsData, ListWalletsResponse, GetVersionData, GetVersionResponse } from './types.gen.js';
export declare class DefaultService {
    readonly httpRequest: BaseHttpRequest;
    constructor(httpRequest: BaseHttpRequest);
    /**
     * Gets the current swagger spec.
     * Returns the entire swagger spec in json.
     * @returns string The current swagger spec
     * @throws ApiError
     */
    swaggerHandler(): CancelablePromise<SwaggerHandlerResponse>;
    /**
     * Generate a key
     * Generates the next key in the deterministic key sequence (as determined by the master derivation key) and adds it to the wallet, returning the public key.
     *
     * @param data The data for the request.
     * @param data.generateKeyRequest
     * @returns APIV1POSTKeyResponse Response to `POST /v1/key`
     * @throws ApiError
     */
    generateKey(data: GenerateKeyData): CancelablePromise<GenerateKeyResponse>;
    /**
     * Delete a key
     * Deletes the key with the passed public key from the wallet.
     * @param data The data for the request.
     * @param data.deleteKeyRequest
     * @returns APIV1DELETEKeyResponse Response to `DELETE /v1/key`
     * @throws ApiError
     */
    deleteKey(data: DeleteKeyData): CancelablePromise<DeleteKeyResponse>;
    /**
     * Export a key
     * Export the secret key associated with the passed public key.
     * @param data The data for the request.
     * @param data.exportKeyRequest
     * @returns APIV1POSTKeyExportResponse Response to `POST /v1/key/export`
     * @throws ApiError
     */
    exportKey(data: ExportKeyData): CancelablePromise<ExportKeyResponse>;
    /**
     * Import a key
     * Import an externally generated key into the wallet. Note that if you wish to back up the imported key, you must do so by backing up the entire wallet database, because imported keys were not derived from the wallet's master derivation key.
     *
     * @param data The data for the request.
     * @param data.importKeyRequest
     * @returns APIV1POSTKeyImportResponse Response to `POST /v1/key/import`
     * @throws ApiError
     */
    importKey(data: ImportKeyData): CancelablePromise<ImportKeyResponse>;
    /**
     * List keys in wallet
     * Lists all of the public keys in this wallet. All of them have a stored private key.
     * @param data The data for the request.
     * @param data.listKeysRequest
     * @returns APIV1POSTKeyListResponse Response to `POST /v1/key/list`
     * @throws ApiError
     */
    listKeysInWallet(data: ListKeysInWalletData): CancelablePromise<ListKeysInWalletResponse>;
    /**
     * Export the master derivation key from a wallet
     * Export the master derivation key from the wallet. This key is a master "backup" key for the underlying wallet. With it, you can regenerate all of the wallets that have been generated with this wallet's `POST /v1/key` endpoint. This key will not allow you to recover keys imported from other wallets, however.
     *
     * @param data The data for the request.
     * @param data.exportMasterKeyRequest
     * @returns APIV1POSTMasterKeyExportResponse Response to `POST /v1/master-key/export`
     * @throws ApiError
     */
    exportMasterKey(data: ExportMasterKeyData): CancelablePromise<ExportMasterKeyResponse>;
    /**
     * Delete a multisig
     * Deletes multisig preimage information for the passed address from the wallet.
     *
     * @param data The data for the request.
     * @param data.deleteMultisigRequest
     * @returns APIV1DELETEMultisigResponse Response to POST /v1/multisig/delete
     * @throws ApiError
     */
    deleteMultisig(data: DeleteMultisigData): CancelablePromise<DeleteMultisigResponse>;
    /**
     * Export multisig address metadata
     * Given a multisig address whose preimage this wallet stores, returns the information used to generate the address, including public keys, threshold, and multisig version.
     *
     * @param data The data for the request.
     * @param data.exportMultisigRequest
     * @returns APIV1POSTMultisigExportResponse Response to `POST /v1/multisig/export`
     * @throws ApiError
     */
    exportMultisig(data: ExportMultisigData): CancelablePromise<ExportMultisigResponse>;
    /**
     * Import a multisig account
     * Generates a multisig account from the passed public keys array and multisig metadata, and stores all of this in the wallet.
     *
     * @param data The data for the request.
     * @param data.importMultisigRequest
     * @returns APIV1POSTMultisigImportResponse Response to `POST /v1/multisig/import`
     * @throws ApiError
     */
    importMultisig(data: ImportMultisigData): CancelablePromise<ImportMultisigResponse>;
    /**
     * List multisig accounts
     * Lists all of the multisig accounts whose preimages this wallet stores
     * @param data The data for the request.
     * @param data.listMultisigRequest
     * @returns APIV1POSTMultisigListResponse Response to `POST /v1/multisig/list`
     * @throws ApiError
     */
    listMultisg(data: ListMultisgData): CancelablePromise<ListMultisgResponse>;
    /**
     * Sign a multisig transaction
     * Start a multisig signature, or add a signature to a partially completed multisig signature object.
     *
     * @param data The data for the request.
     * @param data.signMultisigTransactionRequest
     * @returns APIV1POSTMultisigTransactionSignResponse Response to `POST /v1/multisig/sign`
     * @throws ApiError
     */
    signMultisigTransaction(data: SignMultisigTransactionData): CancelablePromise<SignMultisigTransactionResponse>;
    /**
     * Sign a program for a multisig account
     * Start a multisig signature, or add a signature to a partially completed multisig signature object.
     *
     * @param data The data for the request.
     * @param data.signMultisigProgramRequest
     * @returns APIV1POSTMultisigProgramSignResponse Response to `POST /v1/multisig/signdata`
     * @throws ApiError
     */
    signMultisigProgram(data: SignMultisigProgramData): CancelablePromise<SignMultisigProgramResponse>;
    /**
     * Sign program
     * Signs the passed program with a key from the wallet, determined by the account named in the request.
     *
     * @param data The data for the request.
     * @param data.signProgramRequest
     * @returns APIV1POSTProgramSignResponse Response to `POST /v1/data/sign`
     * @throws ApiError
     */
    signProgram(data: SignProgramData): CancelablePromise<SignProgramResponse>;
    /**
     * Sign a transaction
     * Signs the passed transaction with a key from the wallet, determined by the sender encoded in the transaction.
     *
     * @param data The data for the request.
     * @param data.signTransactionRequest
     * @returns APIV1POSTTransactionSignResponse Response to `POST /v1/transaction/sign`
     * @throws ApiError
     */
    signTransaction(data: SignTransactionData): CancelablePromise<SignTransactionResponse>;
    /**
     * Create a wallet
     * Create a new wallet (collection of keys) with the given parameters.
     * @param data The data for the request.
     * @param data.createWalletRequest
     * @returns APIV1POSTWalletResponse Response to `POST /v1/wallet`
     * @throws ApiError
     */
    createWallet(data: CreateWalletData): CancelablePromise<CreateWalletResponse>;
    /**
     * Get wallet info
     * Returns information about the wallet associated with the passed wallet handle token. Additionally returns expiration information about the token itself.
     *
     * @param data The data for the request.
     * @param data.getWalletInfoRequest
     * @returns APIV1POSTWalletInfoResponse Response to `POST /v1/wallet/info`
     * @throws ApiError
     */
    getWalletInfo(data: GetWalletInfoData): CancelablePromise<GetWalletInfoResponse>;
    /**
     * Initialize a wallet handle token
     * Unlock the wallet and return a wallet handle token that can be used for subsequent operations. These tokens expire periodically and must be renewed. You can `POST` the token to `/v1/wallet/info` to see how much time remains until expiration, and renew it with `/v1/wallet/renew`. When you're done, you can invalidate the token with `/v1/wallet/release`.
     *
     * @param data The data for the request.
     * @param data.initializeWalletHandleTokenRequest
     * @returns APIV1POSTWalletInitResponse Response to `POST /v1/wallet/init`
     * @throws ApiError
     */
    initWalletHandleToken(data: InitWalletHandleTokenData): CancelablePromise<InitWalletHandleTokenResponse>;
    /**
     * Release a wallet handle token
     * Invalidate the passed wallet handle token, making it invalid for use in subsequent requests.
     * @param data The data for the request.
     * @param data.releaseWalletHandleTokenRequest
     * @returns APIV1POSTWalletReleaseResponse Response to `POST /v1/wallet/release`
     * @throws ApiError
     */
    releaseWalletHandleToken(data: ReleaseWalletHandleTokenData): CancelablePromise<ReleaseWalletHandleTokenResponse>;
    /**
     * Rename a wallet
     * Rename the underlying wallet to something else
     * @param data The data for the request.
     * @param data.renameWalletRequest
     * @returns APIV1POSTWalletRenameResponse Response to `POST /v1/wallet/rename`
     * @throws ApiError
     */
    renameWallet(data: RenameWalletData): CancelablePromise<RenameWalletResponse>;
    /**
     * Renew a wallet handle token
     * Renew a wallet handle token, increasing its expiration duration to its initial value
     * @param data The data for the request.
     * @param data.renewWalletHandleTokenRequest
     * @returns APIV1POSTWalletRenewResponse Response `POST /v1/wallet/renew`
     * @throws ApiError
     */
    renewWalletHandleToken(data: RenewWalletHandleTokenData): CancelablePromise<RenewWalletHandleTokenResponse>;
    /**
     * List wallets
     * Lists all of the wallets that kmd is aware of.
     * @param data The data for the request.
     * @param data.listWalletRequest
     * @returns APIV1GETWalletsResponse Response to `GET /v1/wallets`
     * @throws ApiError
     */
    listWallets(data?: ListWalletsData): CancelablePromise<ListWalletsResponse>;
    /**
     * Retrieves the current version
     * @param data The data for the request.
     * @param data.versionsRequest
     * @returns VersionsResponse Response to `GET /versions`
     * @throws ApiError
     */
    getVersion(data?: GetVersionData): CancelablePromise<GetVersionResponse>;
}
