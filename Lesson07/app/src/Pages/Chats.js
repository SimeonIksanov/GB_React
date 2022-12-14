import '../Assets/Styles/Chats.css';
import Grid from '@mui/material/Grid';
import MessageList from '../Components/MessageList';
import ChatListComponent from '../Components/ChatListComponent';
import FormComponent from '../Components/FormComponent';

// import { Navigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addMessageThunk } from '../Store/chatsSlice';
import { getChats } from '../Store/selectors';

function Chats() {
  const chats = useSelector(getChats)
  const dispatch = useDispatch()
  const params = useParams()

  // if (!params.chatId || !chats[params.chatId]){
  //   return <Navigate replace to="/nochats" />
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

          <ChatListComponent chatId={params.chatId}/>

        </Grid>
        <Grid item xs={8}>
          <Grid container direction="column" alignItems="center" spacing={1}>
            <Grid item>

              {/* <Form sendMessage={saveNewMessage} /> */}
              {
                params.chatId && chats[params.chatId]
                  ? <FormComponent sendMessage={saveNewMessage} />
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
