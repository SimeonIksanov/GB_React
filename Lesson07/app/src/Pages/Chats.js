import '../Assets/Styles/Chats.css';
import Form from '../Components/Form'
import ChatList from '../Components/ChatList';
import Grid from '@mui/material/Grid';

import { useEffect } from "react";
// import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import MessageList from '../Components/MessageList';
import { addMessage, addMessageThunk } from '../Store/chatsSlice';

import { getChats } from '../Store/selectors';

function Chats() {
  const chats = useSelector(getChats)
  const dispatch = useDispatch()
  const params = useParams()

  // useEffect(
  //   () => {
  //     if (chats[params.chatId]?.messages.length > 0) {
  //       let lastMessage = chats[params.chatId].messages[chats[params.chatId].messages.length - 1];
  //       if (lastMessage.sender === 'human') {
  //         setTimeout(() => {
  //           const newMessage = {"text":`hey, ${lastMessage.author}`, "author":'robot', "sender":"robot"}
  //           dispatch(addMessage({"chatId":params.chatId, "message": newMessage}))
  //         }, 1500);
  //       }
  //     }
  //   },
  //   [chats, params.chatId, dispatch]
  // );

  // if (!params.chatId || !chats[params.chatId]){
  //   return <Navigate replace to="/nochats" />
  // }

  // const saveNewMessage = (message) => {
  //   dispatch(addMessage({
  //     "chatId": params.chatId,
  //     "message": message
  //   }))
  // }
  const saveNewMessage = (message) => {
    dispatch(addMessageThunk({
      "chatId": params.chatId,
      "message": message
    }))
  }

  return (
    <div className="Chats">
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={2} lg={1} minHeight="100vh" style={{backgroundColor: "#F5F5F5"}}>

          <ChatList chatId={params.chatId}/>

        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>

              {/* <Form sendMessage={saveNewMessage} /> */}
              {
                params.chatId && chats[params.chatId]
                  ? <Form sendMessage={saveNewMessage} />
                  : <div>Please Select Chat</div>
              }

            </Grid>
            <Grid item>

                <MessageList messages={chats[params.chatId]?.messages} />

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chats;
