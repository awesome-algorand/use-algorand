import { useAccountInformation } from '@awesome-algorand/react-query';

export function AccountInformationViewer() {
    const data = {address: "BMG2OPCDNEVFG5LW4S6GT33PPEWXVJD7XEDLTED4BFWN5M4HXLZNCK3EWY"}
    const query = {isLoading: true, isError: false, error: undefined, data: undefined};

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Round: {query.data.round || "Unknown"}</h2>
            <h2>Amount: {query.data.amount || 0}</h2>
        </div>
    )
}
