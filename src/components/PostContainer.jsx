import GeneralBoard from "./GeneralBoard";
import Post from "./Post";

const PostContainer = () => {
  // console.log(indvPost);
  return (
    <div className='m-auto pb-24'>
      <h1 className='text-center py-6 text-4xl font-serif italic font-extrabold'>
        Poly Blog
      </h1>
      <section className='flex flex-row-reverse'>
        <GeneralBoard />
        <Post />
      </section>
    </div>
  );
};

export default PostContainer;
