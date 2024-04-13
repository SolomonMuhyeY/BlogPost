/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Reactions from "./Reactions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
const SinglePost = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(posts);
  const goBack = () => {
    navigate(-1);
  };
  const currentPost = posts.find((post) => post.id === parseInt(id));
  return (
    <div key={currentPost.id} className='my-6'>
      <div>
        <button
          onClick={goBack}
          className='absolute left-0 py-1.5 px-2.5 hover:text-green-200 duration-300 hover:scale-105'
        >
          <i className='px-1.5'>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </i>
          Go Back
        </button>
      </div>
      <div className='flex justify-center'>
        <div>
          <div className='flex gap-1'>
            <FontAwesomeIcon icon={faCircleUser} />
            <p className='font-extralight text-sm text-lime-400'>
              {currentPost.author}
            </p>
          </div>
          <p className='text-xs italic'>{currentPost.department}</p>
        </div>
      </div>
      <div className='text-center pb-3 my-6'>
        <div className='rounded-xl w-4/5 h-64 mx-auto overflow-hidden '>
          <img
            className='w-full object-cover h-full duration-500  hover:scale-105'
            src={currentPost.image}
            alt="auhtor's image"
          />
        </div>
      </div>
      <p className='text-center pb-3 text-3xl font-bold font-mono'>
        {currentPost.title}
      </p>
      <div className='w-3/4 m-auto'>
        <p className='text-sm font-serif'>{currentPost.content}</p>
        <Reactions post={currentPost} />
        <Link to={`edit`} className='text-xs underline text-blue-400'>
          Edit Post
        </Link>
      </div>
    </div>
  );
};

export default SinglePost;
