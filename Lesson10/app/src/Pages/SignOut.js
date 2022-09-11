import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signOutThunk } from '../Store/userAuthSlice';
import { useAuth } from '../Hooks/useAuth';

export default function SignOut()
{
    const dispatch = useDispatch();

    const doSignOut = () => {
        dispatch(signOutThunk());
        console.log('doSignOut');
    }

    return (
        useAuth().isAuth
            ? doSignOut() 
            : <Navigate to="/signin" />
    )
}