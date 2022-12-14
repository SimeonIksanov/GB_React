import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsersThunk = createAsyncThunk(
    'apicallsThunk',
    async (args, {rejectWithValue}) => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok)
            {
                throw new Error(`Async Request failed with status ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (err) {
            throw rejectWithValue(err.message);
        }
    }
)

export const ApiCallsSlice = createSlice({
    name: "apicalls",
    initialState: {
        "data": [],
        "loading": false,
        "error": ""
    },
    reducers: {
        //
    },
    extraReducers: {
        [getUsersThunk.pending]: (state, action) => {
            state.error = "";
            state.loading = true;
        },
        [getUsersThunk.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getUsersThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const {getUsers, setLoading, setError} = ApiCallsSlice.actions
export default ApiCallsSlice.reducer