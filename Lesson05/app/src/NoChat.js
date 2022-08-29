import ChatList from "./ChatList";

function NoChat({chats}) {
    return(
        <div>
            <p>No chat id specified or no such chat found</p>
            <ChatList chats={chats} chatId="0"/>
        </div>
    )
}

export default NoChat;