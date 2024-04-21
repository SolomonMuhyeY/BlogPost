/* eslint-disable react/prop-types */
import { reactionAdded } from "../features/posts/postSlice";
import { useDispatch } from "react-redux";
import { reactionIcons } from "../utils/ReactionIcons";

const Reactions = ({ post }) => {
  const dispatch = useDispatch();

  const rxnBtns = Object.entries(reactionIcons).map(([name, rxn]) => {
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
  return (
    <div className='flex justify-center font-thin font-serif py-2'>
      {rxnBtns}
    </div>
  );
};

export default Reactions;
