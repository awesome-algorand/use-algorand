import { useQuery } from "@tanstack/react-query";
import { AlgodClient } from "@awesome-algorand/algod-fetch";
function accountApplicationInformation(client2, data, options = {}) {
  return {
    queryKey: [client2.request.config.BASE, "accountApplicationInformation", data],
    queryFn: () => client2.public.accountApplicationInformation(data),
    ...options
  };
}
function accountInformation(client2, data, options = {}) {
  return {
    queryKey: [client2.request.config.BASE, "accountInformation", data],
    queryFn: () => client2.public.accountInformation(data),
    ...options
  };
}
function getBlock(client2, data, options = {}) {
  return {
    queryKey: [client2.request.config.BASE, "getBlock", data],
    queryFn: () => client2.public.getBlock(data),
    staleTime: Infinity,
    cacheTime: Infinity,
    ...options
  };
}
const client = new AlgodClient({
  BASE: "https://testnet-api.algonode.cloud"
});
function useBlock(data, options = {}) {
  return useQuery(getBlock(client, data, options));
}
function useAccountInformation(data, options = {}) {
  return useQuery(accountInformation(client, data, options));
}
function useAccountApplicationInformation(data, options = {}) {
  return useQuery(accountApplicationInformation(client, data, options));
}
export {
  useAccountApplicationInformation,
  useAccountInformation,
  useBlock
};
