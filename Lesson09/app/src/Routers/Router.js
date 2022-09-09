import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chats from "../Pages/Chats";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
// import NoChat from "../Pages/NoChat";
import ApiCalls from "../Pages/ApiCalls"
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import SignOut from "../Pages/SignOut";
import PrivateRoute from './PrivateRoute';
import HeaderLine from '../Components/HeaderLine'

function Router() {

    return (
        <>
            <BrowserRouter>
                <HeaderLine />
                <Routes>
                    <Route path="/signup"     element={<SignUp />} />
                    <Route path="/signin"     element={<SignIn />} />
                    <Route path="/signout"    element={<SignOut />} />
                    <Route path="/ApiCalls"   element={<ApiCalls />} />
                    <Route path="/profile"    element={
                            <PrivateRoute>
                                <Profile />
                            </PrivateRoute>}
                    />
                    <Route path="/chats"      element={
                            <PrivateRoute>
                                <Chats />
                            </PrivateRoute>}
                    >
                        <Route path=":chatId" element={
                                <PrivateRoute>
                                    <Chats />
                                </PrivateRoute>}
                        />
                    </Route>
                    {/* <Route exact path="/nochats" element={<NoChat chatId="0"/>} /> */}
                    <Route path="/"           element={<Home />} exact />
                    <Route path="*"           element={<h3>404 page not found</h3>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;