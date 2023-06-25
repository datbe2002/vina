//--testing--

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.headers.post["Content-Type"] = "application/json";
const axiosCus = axios.create({
    // baseURL: "https://vina-landing-page.onrender.com/api",
    baseURL: "http://localhost:3000/api",
});


const initialState = {
    blogCollection: [],
    msg: "",
    loading: false,
    error: "",
    USER: false
};

export const getBlog = createAsyncThunk("blog/getAll", async (params, thunkAPI) => {
    try {

        const result = await axiosCus.get("/blog");
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setUserAuth: (state, action) => {
            state.USER = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBlog.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.blogCollection = action.payload;
            })
    },
});
const { reducer: blogReducer, actions: { setUserAuth } } = blogSlice;

export { setUserAuth, blogReducer as default };