import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

function ChatList({chats, chatId, addChat, removeChat})
{
    return (
        <div className='ChatList'>
            Chat List
            <List>
                {Object.keys(chats).map((id, i) =>
                    (
                        <Link key={i} to={`/chats/${id}`}>
                            <ListItem disablePadding secondaryAction={<Button id={id} onClick={removeChat}>del</Button>}>
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