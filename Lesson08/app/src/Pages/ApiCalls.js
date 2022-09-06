import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsersThunk } from '../Store/apiCallsSlice';

export default function ApiCalls()
{
    const dispatch = useDispatch();
    const users = useSelector(state => state.apicalls.data);
    const loading = useSelector(state => state.apicalls.loading);
    const error = useSelector(state => state.apicalls.error);

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
    return <ul>{users.map(renderItem)}</ul>
}