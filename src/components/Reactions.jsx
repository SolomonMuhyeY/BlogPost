/* eslint-disable react/prop-types */
const Reactions = ({ post }) => {
  const reactionIcons = {
    thumbsUp: "👍",
    thumbsDown: "👎",
    heart: "💗",
    fire: "🔥",
  };
  const rxnBtns = Object.entries(reactionIcons).map(([name, rxn]) => {
    console.log(post);
    return (
      <button key={name} className='px-0.5 cursor-pointer'>
        <span>{rxn}</span>
        <span>{post.reactions[name]}</span>
      </button>
    );
  });
  return <div className='flex py-2'>{rxnBtns}</div>;
};

export default Reactions;
