import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const addMessageThunk = createAsyncThunk(
    'addMessageThunk',
    (args, thunkAPI) => {
        thunkAPI.dispatch(addMessage(args))
        if (args.message.sender==='human')
        {
            // return {"chatId":args.chatId, "message": {"text":`I'm watching you, ${args.message.author}`, "author":'robot', "sender":"robot"}};
            setTimeout(() => {
                thunkAPI.dispatch(addMessage({"chatId":args.chatId, "message": {"text":`I'm watching you, ${args.message.author}`, "author":'robot', "sender":"robot"}}))
            }, 2000);
        }
    }
)

export const chatsSlice = createSlice({
    name: 'chats',
    initialState: {
        1:{
            "name": "Chat1",
            "messages": []
        }
    },
    reducers: {
        addMessage: (state, action) => {
            state[action.payload.chatId].messages.push(action.payload.message)
        },
        addChat: (state, action) => {
            let nextId = Object.keys(state).length > 0
                ? (Math.max.apply(null, Object.keys(state))+1)
                : 1;            
            return {...state, [nextId]:{"name": action.payload.name, "messages": []}}
        },
        removeChat: (state, action) => {
            let newChats = {...state}
            delete newChats[action.payload.id]
            return newChats
        }
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
        [addMessageThunk.rejected]:(state, action) => {console.log("rejected")}
    }
})

export const { addMessage, addChat, removeChat } = chatsSlice.actions
export default chatsSlice.reducer
