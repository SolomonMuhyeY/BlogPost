/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Reactions from "./Reactions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
const SinglePost = ({ posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(posts);
  const goBack = () => {
    navigate(-1);
  };
  const currentPost = posts.find((post) => post.id === parseInt(id));
  return (
    <section key={currentPost.id} className='relative'>
      <div>
        <button
          onClick={goBack}
          className='absolute left-0 py-1.5 px-2.5  duration-500 hover:scale-105'
        >
          <i className='px-1.5'>
            <FontAwesomeIcon icon={faLeftLong} />
          </i>
          Go Back
        </button>
      </div>
      <div className='abt-author text-center pb-3'>
        <div className='w-32 h-32 my-2 m-auto rounded-full overflow-hidden '>
          <img
            className='h-full duration-500  hover:scale-105'
            src={currentPost.image}
            alt="auhtor's image"
          />
        </div>
        <p className='font-extralight text-sm text-lime-400'>
          {currentPost.author}
        </p>
      </div>
      <p className='text-center pb-3 text-4xl font-bold font-mono'>
        {currentPost.title}
      </p>
      <div className='md:w-3/4 m-auto'>
        <p>{currentPost.content}</p>
        <Reactions post={currentPost} />
        <Link to={`edit`} className='text-xs underline text-blue-400'>
          Edit Post
        </Link>
      </div>
    </section>
  );
};

export default SinglePost;
