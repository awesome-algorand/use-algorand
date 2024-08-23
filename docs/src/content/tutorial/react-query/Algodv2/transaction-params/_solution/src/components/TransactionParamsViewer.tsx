import { useTransactionParams } from '@awesome-algorand/react-query';

export function TransactionParamsViewer() {
    const query = useTransactionParams();

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Fee: {query.data.fee.toString()}</h2>
        </div>
    )
}
