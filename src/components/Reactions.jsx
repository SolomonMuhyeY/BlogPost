/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reactionAdded } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";
import {
  faFire,
  faHeart,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
const Reactions = ({ post }) => {
  const dispatch = useDispatch();
  const reactionIcons = {
    thumbsUp: (
      <i className='text-yellow-500'>
        <FontAwesomeIcon icon={faThumbsUp} />
      </i>
    ),
    thumbsDown: (
      <i className='text-gray-300'>
        <FontAwesomeIcon icon={faThumbsDown} />
      </i>
    ),
    heart: (
      <i className='text-green-500'>
        <FontAwesomeIcon icon={faHeart} />
      </i>
    ),
    fire: (
      <i className='text-red-500'>
        <FontAwesomeIcon icon={faFire} />
      </i>
    ),
  };
  const rxnBtns = Object.entries(reactionIcons).map(([name, rxn]) => {
    // console.log(post);
    return (
      <button
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
        key={name}
        className='px-1 cursor-pointer'
      >
        <span>{rxn}</span>
        <span>{post.reactions[name]}</span>
      </button>
    );
  });
  return <div className='flex py-2'>{rxnBtns}</div>;
};

export default Reactions;
