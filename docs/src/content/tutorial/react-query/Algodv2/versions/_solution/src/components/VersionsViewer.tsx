import {useVersion} from '@awesome-algorand/react-query'

export function VersionsViewer(){
    const query = useVersion()

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Genesis: {query.data["genesis_id"]}</h2>
        </div>
    )
}
