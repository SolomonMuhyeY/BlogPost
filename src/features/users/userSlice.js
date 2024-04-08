import { createSlice } from "@reduxjs/toolkit";
const users = ["AeCou Msnk", "Banuo Deook", "Manga ioweE", "NunGorx Kpwi"];

const userSlice = createSlice({
  name: "users",
  initialState: users,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export const userReducer = userSlice.reducer;
