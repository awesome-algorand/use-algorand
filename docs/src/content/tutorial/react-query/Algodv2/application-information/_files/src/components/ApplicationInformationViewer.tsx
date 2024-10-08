import { useAccountInformation } from '@awesome-algorand/react-query';

export function ApplicationInformationViewer() {
    const data = {applicationId: 62368684}
    const query = {isLoading: true, isError: false, error: undefined, data: undefined};

    if(query.isLoading) return <div>Loading...</div>
    if(query.isError) return <div>Error: {query.error.message}</div>

    return (
        <div>
            <h2>Application: {query.data.id || "Unknown"}</h2>
            <h2>Creator: {query.data.params.creator || "Unknown"}</h2>
        </div>
    )
}
