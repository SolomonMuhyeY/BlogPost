import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className='grid grid-cols-4 bg-gray-800 text-white'>
      <header className='header sticky top-0 right-0 bg-gramy-800  text-center z-50  col-span-full border-b-2 border-b-slate-700'>
        <Header />
      </header>
      <main className='text-center  col-span-3'>
        <Outlet />
      </main>
      <sidebar className='col-span-1 shadow-sm shadow-slate-700'>
        <Sidebar />
      </sidebar>
    </div>
  );
};

export default Layout;
