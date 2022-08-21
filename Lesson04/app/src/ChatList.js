import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


function ChatList({chatList})
{
    return (
        <div className='ChatList'>
            Chat List
            <List>
                {chatList.map((e,i)=>
                (
                <ListItem disablePadding key={i}>
                <ListItemButton>
                    <ListItemText>
                    {e.name}
                    </ListItemText>
                </ListItemButton>
                </ListItem>
                ))}
            </List>
        </div>
      );
}

export default ChatList;