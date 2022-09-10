import { Link } from "react-router-dom";

function Home()
{
    return (
        <div>
            <h1>Home page</h1>
            <ul>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/chats">Chats</Link>
                </li>
                <li>
                    <Link to="/ApiCalls">Learning Api calls</Link>
                </li>
            </ul>
        </div>
    )
}

export default Home;