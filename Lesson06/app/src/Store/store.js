import { configureStore } from '@reduxjs/toolkit'
import checkboxReducer from './checkboxSlice'

export default configureStore({
    reducer: {
        checkbox: checkboxReducer
    }
})