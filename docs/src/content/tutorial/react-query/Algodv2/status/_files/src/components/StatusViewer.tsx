import {useStatus} from '@awesome-algorand/react-query'

export function StatusViewer(){
    const query = {isLoading: true, isError: false, error: undefined, data: undefined};

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Time Since Last Round: {query.data["time-since-last-round"]}</h2>
            <h2>Last Round: {query.data["last-round"]}</h2>
        </div>
    )
}
