import { useAssetInformation } from '@awesome-algorand/react-query';

export function AssetInformationViewer() {
    const data = {assetId: 84633127}
    const query = useAssetInformation(data);

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Asset: {query.data.index || "Unknown"}</h2>
            <h2>Creator: {query.data.params.creator || "Unknown"}</h2>
        </div>
    )
}
