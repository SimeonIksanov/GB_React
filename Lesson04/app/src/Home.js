import { Link } from "react-router-dom";

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
            </ul>
        </div>
    )
}

export default Home;