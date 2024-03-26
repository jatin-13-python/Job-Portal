import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login/admin-login/",
        credentials
      );

      const token = response.data.token;
      localStorage.setItem("token", token);

      const user = response.data.user;

      // You may want to return the user or token as payload
      return user; // For example, returning user as payload
    } catch (error) {
      // You can handle errors here
      console.error("Login failed. Error:", error);
      // You might want to reject with a specific error message or error object
      return rejectWithValue("Login failed. Please check your credentials.");
    }
  }
);
