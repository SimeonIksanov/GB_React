import ChatList from './ChatList';

import { useSelector, useDispatch } from 'react-redux'
import { getChats } from '../Store/selectors';

function ChatListComponent({chatId})
{
    const chats = useSelector(getChats);
    const dispatch = useDispatch();

    const removeChat = (event)=>
    {
        dispatch({type:'chats/removeChat', payload:{id: event.target.id}})
    }

    const addChat = (event) =>
    {
        let nextId = Object.keys(chats).length>0 ? (Math.max.apply(null, Object.keys(chats))+1) : 1
        dispatch({type:"chats/addChat", payload:{"name": `Chat${nextId}`}})
    }

    return (
        <ChatList
            chats={chats}
            chatId={chatId}
            addChat={addChat}
            removeChat={removeChat}
        />
    );
}

export default ChatListComponent