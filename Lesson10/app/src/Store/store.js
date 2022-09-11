import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import checkboxReducer from './checkboxSlice'
import chatsReducer from './chatsSlice'
import apicallsReducer from './apiCallsSlice'
import userReducer from './userAuthSlice'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:[]
    // whitelist:['chats']
}

const reducers = combineReducers({
    chats: chatsReducer,
    checkbox: checkboxReducer,
    apicalls: apicallsReducer,
    user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store =  configureStore({
    reducer: persistedReducer
})

export default store;

export const persistor = persistStore(store)