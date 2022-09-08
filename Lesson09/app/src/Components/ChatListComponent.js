import ChatList from './ChatList';
import { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getChats } from '../Store/selectors';
import { addChatWithThunk, deleteChatWithThunk, getChatListWithThunk } from '../Store/chatsSlice';

function ChatListComponent({chatId})
{
    const chats = useSelector(getChats);
    const dispatch = useDispatch();
    const fetchChatList = () => {dispatch(getChatListWithThunk())}

    useEffect(
        fetchChatList,
        [dispatch]        
    )

    const removeChat = (event)=>
    {
        dispatch(deleteChatWithThunk({id: event.target.id}))
        fetchChatList()
    }

    const addChat = (event) =>
    {
        dispatch(addChatWithThunk())
        fetchChatList()
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