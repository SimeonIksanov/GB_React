import { configureStore } from '@reduxjs/toolkit'
import checkboxReducer from './checkboxSlice'
import chatsReducer from './chatsSlice'

export default configureStore({
    reducer: {
        checkbox: checkboxReducer,
        chats: chatsReducer
    }
})