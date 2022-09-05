import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import checkboxReducer from './checkboxSlice'
import chatsReducer from './chatsSlice'

const persistConfig = {
    key: 'root',
    storage,
}

const reducers = combineReducers({
    chats: chatsReducer,
    checkbox: checkboxReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

const store =  configureStore({
    reducer: persistedReducer
})

export default store;

export const persistor = persistStore(store)