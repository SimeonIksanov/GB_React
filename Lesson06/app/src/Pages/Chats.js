import '../Assets/Styles/Chats.css';
import Form from '../Components/Form'
import ChatList from '../Components/ChatList';
import Grid from '@mui/material/Grid';

import { useEffect } from "react";
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import MessageList from '../Components/MessageList';
import { addMessage } from '../Store/chatsSlice';
import { getChats } from '../Store/selectors';

function Chats() {
  const chats = useSelector(getChats)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(
    () => {
      if (chats[params.chatId]?.messages.length > 0) {
        let lastMessage = chats[params.chatId].messages[chats[params.chatId].messages.length - 1];
        if (lastMessage.sender === 'human') {
          setTimeout(() => {
            const newMessage = {"text":`hey, ${lastMessage.author}`, "author":'robot', "sender":"robot"}
            dispatch(addMessage({"chatId":params.chatId, "message": newMessage}))
          }, 1500);
        }
      }
    },
    [chats, params.chatId, dispatch]
  );

  if (!params.chatId || !chats[params.chatId]){
    return <Navigate replace to="/nochats" />
  }

  const saveNewMessage = (message) => {
    dispatch(addMessage({
      "chatId": params.chatId,
      "message": message
    }))
  }

  return (
    <div className="Chats">
      <Grid container spacing={2}>
        <Grid item xs={2} minHeight="100vh">

          <ChatList chatId={params.chatId}/>

        </Grid>
        <Grid item xs={10}>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item xs={12}>

              <Form sendMessage={saveNewMessage} />

            </Grid>
            <Grid item xs={12}>

                <MessageList messages={chats[params.chatId]?.messages} />

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chats;
