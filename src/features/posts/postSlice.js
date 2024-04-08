import { createSlice, nanoid } from "@reduxjs/toolkit";
import { samplePosts } from "../../data/postsSample";

const initialState = {
  posts: samplePosts,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addNewPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(userId, title, content, timePosted) {
        return {
          payload: {
            id: nanoid(),
            title,
            timePosted,
            content,
            userId,
            reactions: {
              thumbsUp: 0,
              thumbsDown: 0,
              heart: 0,
              fire: 0,
            },
          },
        };
      },
    },
    updatePost: (state, action) => {
      const { id, title } = action.payload;
      console.log(title);
      const currentPost = state.posts.find((post) => post.id === Number(id));
      state.posts.push(currentPost);
    },
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const currentPost = state.posts.find((post) => post.id === postId);
      currentPost && currentPost.reactions[reaction]++;
    },
  },
});

export const { reactionAdded, updatePost } = postSlice.actions;
export const selectAllPosts = (state) => state.posts;
export const postReducer = postSlice.reducer;
