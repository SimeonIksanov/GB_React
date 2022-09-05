import { createSlice } from "@reduxjs/toolkit";

export const checkboxSlice = createSlice({
    name: 'checkbox',
    initialState: {
        value: false
    },
    reducers: {
        swap: state => {
            state.value = !state.value
        }
    }
})

export const { swap } = checkboxSlice.actions

export default checkboxSlice.reducer