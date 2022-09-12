import { useSelector } from 'react-redux'

export const useAuth = () => {
    const {email, id} = useSelector(state => state.user);
    return (
        {
            isAuth: email && id ? true : false,
            email,
            id
        }
    )
}