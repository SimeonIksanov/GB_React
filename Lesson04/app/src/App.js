import './App.css';
import Form from './Form'
import ChatList from './ChatList';
import Grid from '@mui/material/Grid';

import { useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import MessageList from './MessageList';

function App({chats, setChats}) {
  const params = useParams()

  useEffect(
    () => {
      if (chats[params.chatId]?.messages.length > 0) {
        let lastMessage = chats[params.chatId].messages[chats[params.chatId].messages.length - 1];
        if (lastMessage.sender === 'human') {
          setTimeout(() => {
            const newMessages = [...chats[params.chatId].messages, {"text":`hew, ${lastMessage.author}`, "author":'robot', "sender":"robot"} ]
            const newChat = {...chats[params.chatId], messages: newMessages}
            const newChats = {...chats, [params.chatId]:newChat}
            setChats(newChats)
          }, 1500);
        }
      }
    },
    [chats]
  );

  if (!params.chatId || !chats[params.chatId]){
    return <Navigate replace to="/nochats" />
  }

  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={2} minHeight="100vh">

          <ChatList chats={chats} chatId={params.chatId}/>

        </Grid>
        <Grid item xs={10}>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item xs={12}>

              <Form chats={chats} chatId={params.chatId} setChats={setChats}/>

            </Grid>
            <Grid item xs={12}>

              <div>
                <MessageList messages={chats[params.chatId]?.messages} />
              </div>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
