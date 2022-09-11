import { Navigate } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuth'


function PrivateRoute({children})
{
    return useAuth().isAuth
        ? children
        : <Navigate to={"/signin"} replace />
}

export default PrivateRoute