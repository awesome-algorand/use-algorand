import { useQuery } from "@tanstack/react-query";
import { accountApplicationInformation, accountAssetInformation, accountInformation, getApplicationById, getApplicationBoxes, getAssetById, getBlock, getBlockHash, getGenesis, healthCheck, pendingTransactionInformation, getPendingTransactions, getPendingTransactionsByAddress, getStatus, getSupply, transactionParams, getVersion, waitForBlock } from "@awesome-algorand/query-core/algosdk/algod";
import { useWallet } from "@txnlab/use-wallet-react";
function useAccountApplicationInformation(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(accountApplicationInformation(walletManager.algodClient, data, options));
}
function useAccountAssetInformation(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(accountAssetInformation(walletManager.algodClient, data, options));
}
function useAccountInformation(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(accountInformation(walletManager.algodClient, data, options));
}
function useApplicationInformation(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(getApplicationById(walletManager.algodClient, data, options));
}
function useApplicationBoxes(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(getApplicationBoxes(walletManager.algodClient, data, options));
}
function useAssetInformation(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(getAssetById(walletManager.algodClient, data, options));
}
function useBlockInformation(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(getBlock(walletManager.algodClient, data, options));
}
function useBlockHash(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(getBlockHash(walletManager.algodClient, data, options));
}
function useGenesis(options = {}) {
  const walletManager = useWallet();
  return useQuery(getGenesis(walletManager.algodClient, options));
}
function useHealthCheck(options = {}) {
  const walletManager = useWallet();
  return useQuery(healthCheck(walletManager.algodClient, options));
}
function usePendingTransaction(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(pendingTransactionInformation(walletManager.algodClient, data, options));
}
function usePendingTransactions(options = {}) {
  const walletManager = useWallet();
  return useQuery(getPendingTransactions(walletManager.algodClient, options));
}
function useAccountPendingTransactions(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(getPendingTransactionsByAddress(walletManager.algodClient, data, options));
}
function useStatus(options = {}) {
  const walletManager = useWallet();
  return useQuery(getStatus(walletManager.algodClient, options));
}
function useSupply(options = {}) {
  const walletManager = useWallet();
  return useQuery(getSupply(walletManager.algodClient, options));
}
function useTransactionParams(options = {}) {
  const walletManager = useWallet();
  return useQuery(transactionParams(walletManager.algodClient, options));
}
function useVersion(options = {}) {
  const walletManager = useWallet();
  return useQuery(getVersion(walletManager.algodClient, options));
}
function useWaitForBlock(data, options = {}) {
  const walletManager = useWallet();
  return useQuery(waitForBlock(walletManager.algodClient, data, options));
}
export {
  useAccountApplicationInformation,
  useAccountAssetInformation,
  useAccountInformation,
  useAccountPendingTransactions,
  useApplicationBoxes,
  useApplicationInformation,
  useAssetInformation,
  useBlockHash,
  useBlockInformation,
  useGenesis,
  useHealthCheck,
  usePendingTransaction,
  usePendingTransactions,
  useStatus,
  useSupply,
  useTransactionParams,
  useVersion,
  useWaitForBlock
};
