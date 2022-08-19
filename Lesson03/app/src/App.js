import './App.css';
import Form from './Form'
import Message from './Message'

import Grid from '@mui/material/Grid';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { useState, useEffect } from "react";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList, setChatList] = useState([{"id": 1, "name":"Chat01"},{"id": 2, "name":"Chat02"}])

  useEffect(
    () => {
      if (messageList.length > 0) {
        let lastMessage = messageList[messageList.length - 1];
        if (lastMessage.sender === 'human') {
          setTimeout(() => {
            setMessageList(prev => [...prev, { author: "robot", message: `hey, ${lastMessage.author}`, sender: 'robot' }]);
          }, 1500);
        }
      }
    },
    [messageList]
  );

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={2} minHeight="100vh">
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
        </Grid>

        <Grid item xs={10}>
          <Grid container direction="column"  alignItems="center" spacing={1}>
            <Grid item xs={12}>
              <Form setMessageList={setMessageList} />
            </Grid>
            <Grid item xs={12}>
              <div className='Messages'>
                {messageList.map((item, index) => <Message author={item.author} message={item.message} sender={item.sender} />)}
              </div>
            </Grid>
            
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
