import { createSlice } from "@reduxjs/toolkit";

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
    }
})

export const { addMessage, addChat, removeChat } = chatsSlice.actions
export default chatsSlice.reducer
