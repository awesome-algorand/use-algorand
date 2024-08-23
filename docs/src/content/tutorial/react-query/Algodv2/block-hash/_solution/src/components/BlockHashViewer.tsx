import {useBlockHash} from '@awesome-algorand/react-query'

export function BlockHashViewer(){
    const data = {round: 1}
    const query = useBlockHash(data)

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Round: {data.round}</h2>
            <h2>Hash: {query.data.blockhash}</h2>
        </div>
    )
}
