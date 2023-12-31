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
        className='bg-white ml-16 border-2 my-8 p-6 md:w-4/5 m-auto'
      >
        <div className='abt-author text-center pb-3'>
          <div className='w-32 h-32 my-2 m-auto rounded-full overflow-hidden '>
            <img
              className='h-full duration-500  hover:scale-105'
              src={post.authImage}
              alt="auhtor's image"
            />
          </div>
          <p className='font-extralight text-sm text-lime-400'>{post.author}</p>
        </div>
        <p className='text-center pb-3 text-4xl font-bold font-mono'>
          {post.title}
        </p>
        <div className='md:w-3/4 m-auto'>
          <p>{post.content}</p>
          <Reactions post={post} />
          <Link to={`${post.id}`} className='text-xs underline text-blue-400'>
            View Post
          </Link>
        </div>
      </div>
    );
  });
  return <div>{indvPost}</div>;
};

export default Post;
