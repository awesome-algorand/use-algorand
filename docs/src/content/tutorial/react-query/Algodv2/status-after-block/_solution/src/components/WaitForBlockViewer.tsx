import {useWaitForBlock} from '@awesome-algorand/react-query'

export function WaitForBlockViewer(){
    const data = {round: 1}
    const query = useWaitForBlock(data)

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Time Since Last Round: {query.data["time-since-last-round"]}</h2>
            <h2>Last Round: {query.data["last-round"]}</h2>
        </div>
    )
}
