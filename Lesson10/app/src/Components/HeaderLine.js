import {Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";
import '../Assets/Styles/header.css'

function HeaderLine()
{
    const user = useAuth()
    return (
        <div className="header">
            <div className='headerItem'>
                <Link to={'/'}>Home</Link>
            </div>
            <div className='headerItem'>
                <Link to="/chats">Chats</Link>
            </div>

            <div className="rightItem headerItem">
                {
                    user.isAuth
                        ? <>
                            <span>{user.email}</span>
                            <Link className='headerItem' to={'/signout'}>SignOut</Link>
                            </>
                        : <>
                            <Link className='headerItem' to={'/signin'}>SignIn</Link>
                            <Link to={'/signup'}>SignUp</Link>
                            </>
                }
                    </div>
        </div>
    )
}

export default HeaderLine;