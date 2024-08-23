import { useAccountAssetInformation } from '@awesome-algorand/react-query';

export function AccountAssetInformationViewer() {
    const data = {address: "BMG2OPCDNEVFG5LW4S6GT33PPEWXVJD7XEDLTED4BFWN5M4HXLZNCK3EWY", assetId: 10458941}
    const query = useAccountAssetInformation(data);

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>
    // TODO: update assetId to BigInt
    return (
        <div>
            <h2>Round: {query.data.round.toString() || "Unknown"}</h2>
            <h2>Asset: {data.assetId}</h2>
            <h2>Amount: {query.data['asset-holding'].amount || 0}</h2>
        </div>
    )
}
