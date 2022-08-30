import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import { getChats } from '../Store/selectors';
import { Button } from '@mui/material';

function ChatList({chatId})
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
        <div className='ChatList'>
            Chat List
            <List>
                {Object.keys(chats).map((id, i) =>
                    (
                        <Link to={`/chats/${id}`}>
                            <ListItem disablePadding key={i} secondaryAction={<Button id={id} onClick={removeChat}>del</Button>}>
                                <ListItemButton>
                                    <ListItemText>
                                            <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                                                {chats[id].name}
                                            </b>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    )
                )}
            </List>
            <Button onClick={addChat}>Add Chat</Button>
        </div>
      );
}

export default ChatList;