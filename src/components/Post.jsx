import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postSlice";
import Reactions from "./Reactions";
import { BookmarkIcon, UserCircleIcon } from "@heroicons/react/24/outline";
const Post = () => {
  function addToBookMark() {
    alert("Bookmark Added!");
  }
  const { posts } = useSelector(selectAllPosts);
  const indvPost = posts.map((post) => {
    return (
      <div
        key={post.id}
        className='border-2 border-slate-900 bordr-[1px]  px-1 py-3 rounded-xl'
      >
        <div className='flex mx-2'>
          <UserCircleIcon className='h-6 w-6' />
          <div className='mx-2'>
            <p className='font-extralight text-sm text-justify text-lime-400'>
              {post.author}
            </p>
            <p className='text-xs font-serif italic font-extralight'>
              {post.department}
            </p>
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
          <div className='flex justify-center items-center'>
            <Reactions post={post} />
            <button onClick={addToBookMark}>
              <BookmarkIcon className='w-4 h-4' />
            </button>
          </div>
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
