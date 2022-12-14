import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';


function ChatList({chats, chatId})
{
    return (
        <div className='ChatList'>
            Chat List
            <List>
                {Object.keys(chats).map((id, i) =>
                    (
                        <ListItem disablePadding key={i}>
                            <ListItemButton>
                                <ListItemText>
                                    <Link to={`/chats/${id}`}>
                                        <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                                            {chats[id].name}
                                        </b>
                                    </Link>
                                </ListItemText>
                            </ListItemButton>
                            
                        </ListItem>
                    )
                )}
            </List>
        </div>
      );
}

export default ChatList;