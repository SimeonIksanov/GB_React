import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const signUpThunk = createAsyncThunk(
    'user/SignUpThunk',
    async ({email, password}) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const result = {
                email: response.user.email,
                id : response.user.uid
            };
            return result;
        } catch (err) {
            console.warn(err.code + ' : ' + err.message)
            // throw rejectWithValue(err.message);
        }
    }
)

export const signInThunk = createAsyncThunk(
    'user/SignInThunk',
    async ({email, password}) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const result = {
                email: response.user.email,
                id : response.user.uid
            };
            return result;
        } catch (err) {
            console.warn(err.code + ' : ' + err.message)
        }
    }
)

export const signOutThunk = createAsyncThunk(
    'user/SignOutThunk',
    async () => {
        return null;
    }
)

export const userAuthSlice = createSlice({
    name: "user",
    initialState: {
        "email": null,
        "id": null,
    },
    reducers: {
        //
    },
    extraReducers: {
        [signUpThunk.fulfilled]: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        [signInThunk.fulfilled]: (state, action) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
        },
        [signOutThunk.fulfilled]: (state, action) => {
            state.email = null;
            state.id = null;
        },
    }
})

export default userAuthSlice.reducer