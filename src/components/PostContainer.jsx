import Post from "./Post";

const PostContainer = () => {
  return (
    <div className='m-auto pb-24'>
      <h1 className='text-center py-6 text-4xl italic font-extrabold'>
        Poly Blog
      </h1>
      <section>
        <Post />
      </section>
    </div>
  );
};

export default PostContainer;
