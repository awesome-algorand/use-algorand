import {useGenesis} from '@awesome-algorand/react-query'

export function GenesisViewer(){
    const query = {isLoading: true, isError: false, error: undefined, data: undefined};

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Network: {query.data.network}</h2>
            <h2>Allocations: {query.data.alloc.length}</h2>
        </div>
    )
}
