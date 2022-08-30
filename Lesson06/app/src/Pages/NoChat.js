import ChatList from "../Components/ChatList";
import { useSelector } from 'react-redux'
import { getChats } from "../Store/selectors";

function NoChat() {
    const chats = useSelector(getChats)
    return(
        <div>
            <p>No chat id specified or no such chat found</p>
            <ChatList chats={chats} chatId="0"/>
        </div>
    )
}

export default NoChat;