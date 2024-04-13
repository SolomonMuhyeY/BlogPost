/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../features/users/userSlice";
import { updatePost } from "../features/posts/postSlice";

const EditPost = ({ posts }) => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  console.log(posts);
  const postAuthors = users.map((user, index) => (
    <option defaultValue={user} className='p-1' key={index}>
      {user}
    </option>
  ));
  const { id } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id: id, title: currentPost.title }));
  };
  const onValueChage = (e) => e.target.value;
  const handleTitleChange = (e) => e.target.value;

  const currentPost = posts.find((post) => post.id === Number(id));
  return (
    <form
      onSubmit={handleSubmit}
      className='w-3/5 my-12 py-4 flex flex-col gap-4 border-2 m-auto text-center text-black'
    >
      <div className='flex justify-center gap-2'>
        <label htmlFor='title'>Title</label>
        <input
          className='p-1'
          type='text'
          onChange={handleTitleChange}
          defaultValue={currentPost.title}
        />
      </div>
      <div className='flex justify-center gap-2'>
        <label htmlFor='author'>Auhtor</label>
        <select name='author' id='auhtor'>
          <option className='p-1' defaultValue=''></option>
          {postAuthors}
        </select>
      </div>
      <div className='flex justify-center gap-2'>
        <label htmlFor='content'>Content</label>
        <textarea
          className='p-1'
          onChange={(e) => onValueChage(e)}
          type='textarea'
          cols='30'
          rows='5'
          defaultValue={currentPost.content}
        />
      </div>
      <div>
        <button className='shadow-md rounded-md shadow-slate-500 px-2 py-1'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditPost;
