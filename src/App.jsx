import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./features/posts/postSlice";
import PostContainer from "./components/PostContainer";
import Layout from "./components/Layout";
import SinglePost from "./components/SinglePost";
import EditPost from "./components/EditPost";
import Home from "./pages/Home";
function App() {
  const { posts } = useSelector(selectAllPosts);

  return (
    <div className='App'>
      {/* <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PostContainer />} />
          <Route path='post/:id' element={<SinglePost posts={posts} />}></Route>
          <Route path='post/:id/edit' element={<EditPost posts={posts} />} />
        </Route>
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
