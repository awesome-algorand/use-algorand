import { useApplicationBoxes } from '@awesome-algorand/react-query';

export function ApplicationBoxesViewer() {
    const data = {applicationId: 62368684};
    const query = {isLoading: true, isError: false, error: undefined, data: undefined};

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Application: {data.applicationId}</h2>
            <h2>Boxes: {query.data.boxes.length}</h2>
        </div>
    )
}
