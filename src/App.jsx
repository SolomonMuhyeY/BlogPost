import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostContainer from "./components/PostContainer";
import Layout from "./components/Layout";
import SinglePost from "./components/SinglePost";
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<PostContainer />} />
            <Route path='/:id' element={<SinglePost />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
