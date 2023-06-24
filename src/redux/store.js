import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import blogReducer from './slice/blogSlice';

const rootReducer = combineReducers({
    blog: blogReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
