import {useBlockInformation} from '@awesome-algorand/react-query'

export function BlockInformationViewer(){
    const data = {round: 1}
    const query = useBlockInformation(data)

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Round: {query.data.block.header.round.toString()}</h2>
            <h2>Network: {query.data.block.header.genesisID}</h2>
            <h2>Txns: {query.data.block.header.txnCounter.toString() || 0}</h2>
        </div>
    )
}
