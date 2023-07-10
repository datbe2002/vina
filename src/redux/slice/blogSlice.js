//--testing--

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const axiosCus = axios.create({
    baseURL: "https://vina-landing-page.onrender.com/api",
    // baseURL: "http://localhost:3000/api",
});


const initialState = {
    blogCollection: [],
    blogCollectionDateOnly: [],
    contactCollection: [],
    contactCollectionDateOnly: [],
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

export const getBlogDateOnly = createAsyncThunk("blog/getAllBlogWithDate", async (params, thunkAPI) => {
    try {
        const result = await axiosCus.get("/blog/date/blogDate");
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const createBlog = createAsyncThunk("blog/create", async (params, thunkAPI) => {
    try {
        const data = params
        const result = await axiosCus.post("/blog", data);
        thunkAPI.dispatch(getBlog())
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const submitForm = createAsyncThunk("blog/submit-from", async (params, thunkAPI) => {
    try {
        const data = params
        const result = await axiosCus.post("/contact/submitform", data);
        toast.success("Send form successfully", {
            position: "top-right",
        })
        return result.data;
    } catch (error) {
        toast.error("Error :(", {
            position: "top-right",
        })
        throw new Error("exception");
    }
});

export const updateBlog = createAsyncThunk("blog/update", async (params, thunkAPI) => {
    try {
        const { data, navigate } = params
        const result = await axiosCus.put("/blog", data);
        navigate('/admin/control/Mxh8m6fIlKps3L5qDdi0')
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const deleteBlog = createAsyncThunk("blog/delete-blog", async (params, thunkAPI) => {
    try {
        const { id } = params
        const result = await axiosCus.post(`/blog/${id}`);
        thunkAPI.dispatch(getBlogDateOnly())
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

export const getAllContactDateOnly = createAsyncThunk("blog/get-all-date-only", async (params, thunkAPI) => {
    try {

        const result = await axiosCus.get("/contact/date-only");
        return result.data;
    } catch (error) {
        throw new Error("exception");
    }
});

export const deleteContact = createAsyncThunk("blog/delete-contact", async (params, thunkAPI) => {
    try {
        const { id } = params
        const result = await axiosCus.delete(`/contact/${id}`);
        thunkAPI.dispatch(getAllContactDateOnly())
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
            .addCase(getBlogDateOnly.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBlogDateOnly.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getBlogDateOnly.fulfilled, (state, action) => {
                state.loading = false;
                state.blogCollectionDateOnly = action.payload;
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
            .addCase(getAllContactDateOnly.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllContactDateOnly.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(getAllContactDateOnly.fulfilled, (state, action) => {
                state.loading = false;
                state.msg = action.payload;
                state.contactCollectionDateOnly = action.payload;
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
            .addCase(deleteContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.loading = false;
                state.msg = action.payload;
            })
    },
});
const { reducer: blogReducer, actions: { setUserAuth } } = blogSlice;

export { setUserAuth, blogReducer as default };