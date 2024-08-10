import { useAccountPendingTransactions } from '@awesome-algorand/react-query';

export function AccountPendingTransactionsViewer() {
    const data = {address: "BMG2OPCDNEVFG5LW4S6GT33PPEWXVJD7XEDLTED4BFWN5M4HXLZNCK3EWY"}
    const query = {isLoading: true, isError: false, error: undefined, data: undefined};

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Total: {query.data["total-transactions"]}</h2>
            <h2>Top Total: {query.data["top-transactions"].length}</h2>
        </div>
    )
}
