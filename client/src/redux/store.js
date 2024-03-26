// store.js
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice"; 

const store = configureStore({
  reducer: {
    auth: authSlice,
    // Add other reducers if needed
  },
});

export default store;
