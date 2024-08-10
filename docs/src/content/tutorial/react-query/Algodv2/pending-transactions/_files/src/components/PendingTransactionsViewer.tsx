import { usePendingTransactions } from '@awesome-algorand/react-query';

export function PendingTransactionsViewer() {
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
