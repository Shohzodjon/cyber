import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state
const initialState = {
  users: [],
  status: 'idle', 
  error: null,
};
// Asynchronous thunk action to fetch users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async ({ limit, skip }) => {
  const response = await axios.get(`https://dummyjson.com/users?limit=${limit}&skip=${skip}`);
  return response.data; // Adjust based on the structure of the returned data
});

// Create slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload; // Set the fetched users to state
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { decrement, incrementByAmount } = usersSlice.actions;
export default usersSlice.reducer;
