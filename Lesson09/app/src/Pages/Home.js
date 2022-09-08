import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

function Home()
{
    return (
        <div>
            <h1>Home page</h1>
            <ul>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/chats">chats</Link>
                </li>
                <li>
                    <Link to="/ApiCalls">Learning Api calls</Link>
                </li>
                {
                    useAuth().isAuth
                        ? <li><Link to="/signout">Sign Out</Link></li>
                        : <><li><Link to="/signin">Sign In</Link></li><li><Link to="/signup">Sign Up</Link></li></>
                }
            </ul>
        </div>
    )
}

export default Home;