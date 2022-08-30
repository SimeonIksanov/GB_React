import { useDispatch, useSelector } from 'react-redux'
import { getChats } from '../Store/selectors';

function ChatManager()
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
        <div>
            {Object.keys(chats).map((id, index)=>
                (
                    <button id={id} key={id} onClick={removeChat}>
                        Remove chat {chats[id].name}
                    </button>
                )
            )}
            <div>
                <button onClick={addChat}>add one</button>
            </div>
        </div>
    )
}

export default ChatManager;