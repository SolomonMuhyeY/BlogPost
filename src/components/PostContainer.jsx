import Post from "./Post";

const PostContainer = () => {
  // console.log(indvPost);
  return (
    <div className='w-4/5 m-auto pb-24'>
      <h1 className='text-center py-6 text-4xl font-serif font-extrabold'>
        Blog Posts
      </h1>
      <section>
        <Post />
      </section>
    </div>
  );
};

export default PostContainer;
