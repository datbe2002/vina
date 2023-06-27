//--testing--

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const axiosCus = axios.create({
    // baseURL: "https://vina-landing-page.onrender.com/api",
    baseURL: "http://localhost:3000/api",
});


const initialState = {
    blogCollection: [],
    contactCollection: [],
    msg: "",
    loading: false,
    error: "",
    USER: true

};

export const getBlog = createAsyncThunk("blog/getAll", async (params, thunkAPI) => {
    try {

        const result = await axiosCus.get("/blog");
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const createBlog = createAsyncThunk("blog/create", async (params, thunkAPI) => {
    try {
        const data = params
        console.log(data)
        const result = await axiosCus.post("/blog", data);
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const submitForm = createAsyncThunk("blog/submit-from", async (params, thunkAPI) => {
    try {
        const data = params
        console.log(data)
        const result = await axiosCus.post("/contact/submitform", data);
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const getAllContact = createAsyncThunk("blog/get-all", async (params, thunkAPI) => {
    try {

        const result = await axiosCus.get("/contact/submitform");
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const deleteBlog = createAsyncThunk("blog/delete", async (params, thunkAPI) => {
    try {
        const { id } = params
        console.log(id)
        const result = await axiosCus.delete(`/blog/${id}`);
        thunkAPI.dispatch(getBlog())
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
            .addCase(createBlog.pending, (state) => {
                state.loading = true;
            })
            .addCase(createBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(createBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.msg = action.payload;
            })
            .addCase(submitForm.pending, (state) => {
                state.loading = true;
            })
            .addCase(submitForm.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(submitForm.fulfilled, (state, action) => {
                state.loading = false;
                state.msg = action.payload;
            })
            .addCase(getAllContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getAllContact.fulfilled, (state, action) => {
                state.loading = false;
                state.msg = action.payload;
                state.contactCollection = action.payload;
            })
            .addCase(deleteBlog.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(deleteBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.msg = action.payload;
            })
    },
});
const { reducer: blogReducer, actions: { setUserAuth } } = blogSlice;

export { setUserAuth, blogReducer as default };