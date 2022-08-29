import { BrowserRouter, Routes, Route } from "react-router-dom";

import Chats from "../Pages/Chats";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import NoChat from "../Pages/NoChat";
import ChatManager from "../Pages/ChatManager";

import { useState } from "react";

const initialChats = {
    1: {
      name: "Chat1",
      messages: [{ text: "FirstMessage", author: "bot", sender:"human" }],
    },
    2: {
      name: "Chat2",
      messages: [{ text: "FirstMessageHereToo!", author: "me", sender:"human" }],
    },
  };

function Router() {
    const [chats, setChats] = useState(initialChats)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/chats" element={<Chats chats={chats} setChats={setChats} />}>
                    <Route path=":chatId" element={<Chats chats={chats} setChats={setChats} />} />
                </Route>
                <Route exact path="/nochats" element={<NoChat chats={chats} chatId="0"/>} />
                <Route path="/chatmanager" element={<ChatManager chats={chats} setChats={setChats} />} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<h3>404 page not found</h3>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;