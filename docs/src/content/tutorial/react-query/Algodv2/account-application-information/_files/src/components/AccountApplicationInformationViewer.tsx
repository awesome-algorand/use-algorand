import { useAccountApplicationInformation } from '@awesome-algorand/react-query';

export function AccountApplicationInformationViewer() {
    const data = {address: "BMG2OPCDNEVFG5LW4S6GT33PPEWXVJD7XEDLTED4BFWN5M4HXLZNCK3EWY", applicationId: 62368684}
    const query = {isLoading: true, isError: false, error: undefined, data: undefined};

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Round: {query.data.round || "Unknown"}</h2>
            <pre>{JSON.stringify(query.data["app-local-state"], null, 2)}</pre>
        </div>
    )
}
