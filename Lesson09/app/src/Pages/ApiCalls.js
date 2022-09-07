import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersThunk } from '../Store/apiCallsSlice';

export default function ApiCalls()
{
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector(state => state.apicalls);

    const renderItem = useCallback(
        (item) => <li key={item.id}>{item.name || 'No name'}</li>,
        []
    )
    const requestUsers = useCallback( ()=>dispatch(getUsersThunk()), [dispatch] );

    useEffect( () => {requestUsers()}, [requestUsers] );

    if(loading) { return ("loading") }

    if (error) 
    {
        return (
            <>
            <h3>Error</h3>
            <button onClick={requestUsers}>retry</button>
            </>
        )
    }
    return <ul>{data.map(renderItem)}</ul>
}