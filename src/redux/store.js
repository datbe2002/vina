import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import blogReducer from "./slice/blogSlice";

const rootReducer = combineReducers({
  blog: blogReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: false,
});

export default store;
