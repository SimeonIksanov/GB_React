import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDocs, setDoc, deleteDoc } from 'firebase/firestore'
import { db } from "../Firebase/firebase";

export const addMessageThunk = createAsyncThunk(
    'addMessageThunk',
    async (args, thunkAPI) => {
        const messagesRef = collection(db, `Chats/${args.chatId}/Messages`);
        const newMessage = doc(messagesRef);
        await setDoc(newMessage, args.message);
        // thunkAPI.dispatch(addMessage(args))
        // if (args.message.sender==='human')
        // {
        //     setTimeout(() => {
        //         thunkAPI.dispatch(addMessage({"chatId":args.chatId, "message": {"text":`I'm watching you, ${args.message.author}`, "author":'robot', "sender":"robot"}}))
        //     }, 2000);
        // }
    }
)

export const getMessageList = createAsyncThunk(
    'getMessageListInChat',
    async (chatId) => {
        const messages = []
        try {
            const messagesRef = collection(db, `Chats/${chatId}/Messages`);
            const querySnapshot = await getDocs(messagesRef);
            querySnapshot.forEach(
                (doc) => messages.push(doc.data())
            )
        } catch (error) {
            console.log(error.message);
        }
        
        return {chatId, messages};
    }
)

export const getChatListWithThunk =  createAsyncThunk(
    'chats/getList',
    async () => {
        let chatList = {}
        try {
            const querySnapshot = await getDocs(collection(db, 'Chats'));
            querySnapshot.forEach((doc) => 
                chatList[doc.id] = doc.data()
            )
        } catch (error) {
            console.warn(error.message)
        }
        return chatList;
    }
)

export const addChatWithThunk =  createAsyncThunk(
    'chats/addChat',
    async () => {
        try {
            const newChatRef = doc(collection(db, 'Chats'));
            await setDoc(newChatRef, {name:"newChat"})
        } catch (error) {
            console.warn(error.message)
        }
    }
)

export const deleteChatWithThunk =  createAsyncThunk(
    'chats/deleteChat',
    async ({id}) => {
        try {
             await deleteDoc(doc(db, 'Chats', id));
        } catch (error) {
            console.warn(error.message)
        }
    }
)

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
    },
    reducers: {
        addMessage: (state, action) => {
            state[action.payload.chatId].messages.push(action.payload.message)
        },
    },
    extraReducers: {
        [addMessageThunk.pending]:(state, action) => {console.log("pending")},
        [addMessageThunk.fulfilled]:(state, action) => {
            console.log("fulfilled");
            if(action.payload)
            {
                state[action.payload.chatId].messages.push(action.payload.message)
            }
        },
        [addMessageThunk.rejected]:(state, action) => {console.log("rejected")},
        [getChatListWithThunk.fulfilled]:(state, action)=>{
            state = action.payload;
            return state
        },
        [getMessageList.fulfilled]:(state, action) => {
            state[action.payload.chatId].messages = action.payload.messages
        }
    }
})

export const { addMessage, addChat, removeChat } = chatsSlice.actions
export default chatsSlice.reducer
