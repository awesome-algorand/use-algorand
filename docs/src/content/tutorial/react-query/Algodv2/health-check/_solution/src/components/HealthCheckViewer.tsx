import {useHealthCheck} from '@awesome-algorand/react-query'

export function HealthCheckViewer(){
    const query = useHealthCheck()

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Ok: {JSON.stringify(query.data)}</h2>
        </div>
    )
}
