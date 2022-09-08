import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "../Pages/Chats";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import NoChat from "../Pages/NoChat";
import ApiCalls from "../Pages/ApiCalls"
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import SignOut from "../Pages/SignOut";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signout" element={<SignOut />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats" element={<Chats />}>
                    <Route path=":chatId" element={<Chats />} />
                </Route>
                <Route exact path="/nochats" element={<NoChat chatId="0"/>} />
                {/* <Route path="/chatmanager" element={<ChatManager />} /> */}
                <Route path="/ApiCalls" element={<ApiCalls />} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<h3>404 page not found</h3>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;