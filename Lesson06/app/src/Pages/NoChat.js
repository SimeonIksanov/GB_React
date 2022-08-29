import ChatList from "../Components/ChatList";
import { useSelector } from 'react-redux'

function NoChat() {
    const chats = useSelector(state => state.chats)
    return(
        <div>
            <p>No chat id specified or no such chat found</p>
            <ChatList chats={chats} chatId="0"/>
        </div>
    )
}

export default NoChat;