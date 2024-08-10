import {useSupply} from '@awesome-algorand/react-query'

export function SupplyViewer(){
    const query = useSupply()

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Online: {query.data["online-money"]}</h2>
            <h2>Total: {query.data["total-money"]}</h2>
        </div>
    )
}
