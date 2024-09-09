import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./features/users/userSlice"; // Ensure the correct path

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
