import { createSlice } from "@reduxjs/toolkit";
import { samplePosts } from "../../data/postsSample";

const initialState = {
  posts: samplePosts,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: (state) => {
      console.log(state);
    },
  },
});
export const postReducer = postSlice.reducer;
export const selectAllPosts = (state) => state.posts;
