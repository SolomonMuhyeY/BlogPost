import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postSlice";
import Reactions from "./Reactions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDot,
  faCircleUser,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
const Post = () => {
  const { posts } = useSelector(selectAllPosts);
  const indvPost = posts.map((post) => {
    return (
      <div
        key={post.id}
        className='border-2 border-slate-700 px-1 py-3 rounded-xl'
      >
        <div className='flex mx-2'>
          <FontAwesomeIcon icon={faCircleUser} />
          <div className='mx-2'>
            <p className='font-extralight text-sm text-justify text-lime-400'>
              {post.author}
            </p>
            <p className='text-xs italic font-extralight'>{post.department}</p>
          </div>
        </div>
        <div className='text-center pb-3'>
          <h1 className='w-4/5 mx-auto py-5 text-xl italic font-bold'>
            {post.title}
          </h1>
          <div className='rounded-xl w-4/5 h-64 mx-auto overflow-hidden '>
            <img
              className='w-full object-cover h-full duration-500  hover:scale-105'
              src={post.image}
              alt="auhtor's image"
            />
          </div>
        </div>
        <div className='text-justify px-3'>
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
    <div className='grid md:grid-cols-2 gap-8 mx-12 justify-center'>
      {indvPost}
    </div>
  );
};

export default Post;
