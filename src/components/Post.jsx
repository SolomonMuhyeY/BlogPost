import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postSlice";
import Reactions from "./Reactions";
const Post = () => {
  const { posts } = useSelector(selectAllPosts);
  const indvPost = posts.map((post) => {
    return (
      <div
        key={post.id}
        className='border-2 border-gray-700 m-3 p-4 rounded-xl'
      >
        <div className='text-center pb-3'>
          <div className='w-32 h-32 my-2 m-auto rounded-full overflow-hidden '>
            <img
              className='h-full duration-500  hover:scale-105'
              src={post.image}
              alt="auhtor's image"
            />
          </div>
          <p className='font-extralight text-sm text-lime-400'>{post.author}</p>
        </div>
        <p className='text-center leading-snug pb-3 text-2xl font-bold font-mono'>
          {post.title}
        </p>
        <div className=''>
          <p>{post.content}</p>
          <Reactions post={post} />
          <Link
            to={`post/${post.id}`}
            className='text-xs underline text-blue-400'
          >
            View Post
          </Link>
        </div>
      </div>
    );
  });
  return (
    <div className='grid md:grid-cols-2 gap-8 mx-5 justify-center'>
      {indvPost}
    </div>
  );
};

export default Post;
