import PostContainer from "../components/PostContainer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className='grid grid-cols-4 bg-gray-800 text-white'>
      <header className='sticky container top-0 bg-gray-800  text-center z-50  col-span-full border-b-2 border-b-slate-700'>
        <Header />
      </header>
      <main className='text-center col-span-3'>
        <PostContainer />
      </main>
      <sidebar className='col-span-1 shadow-sm shadow-red-50'>
        <Sidebar />
      </sidebar>
    </div>
  );
}
