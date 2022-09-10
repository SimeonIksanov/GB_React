import '../Assets/Styles/Chats.css';
import Grid from '@mui/material/Grid';
import MessageList from '../Components/MessageList';
import ChatListComponent from '../Components/ChatListComponent';
import FormComponent from '../Components/FormComponent';
import {useEffect, useCallback} from 'react'
// import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addMessageThunk, getMessageList } from '../Store/chatsSlice';
import { getChats } from '../Store/selectors';

function Chats() {
  const chats = useSelector(getChats)
  const dispatch = useDispatch()
  const params = useParams()
  const chatId = params.chatId;

  const fetchChatMessages = useCallback((chatId) => {
    if (chatId){
      dispatch(getMessageList(chatId));
    }
  },[dispatch])

  const saveNewMessage = (message) => {
    dispatch(addMessageThunk({
      "chatId": chatId,
      "message": message
    }));
    fetchChatMessages(chatId)
  }
  useEffect(
    () => {fetchChatMessages(chatId)},
    [fetchChatMessages, chatId]
  )

  return (
    <div className="Chats">
      <Grid container spacing={0}>
        <Grid item xs={4} sm={3} md={2} lg={2} minHeight="97vh" style={{backgroundColor: "#F5F5F5"}}>

          <ChatListComponent chatId={chatId}/>

        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>

              {/* <Form sendMessage={saveNewMessage} /> */}
              {
                chatId && chats[chatId]
                  ? <FormComponent sendMessage={saveNewMessage} />
                  : <div>Please Select Chat</div>
              }

            </Grid>
            <Grid item>

                <MessageList messages={chats[chatId]?.messages} />

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Chats;
