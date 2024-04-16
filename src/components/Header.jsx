import { faM, faS } from "@fortawesome/free-solid-svg-icons";
import {
  ArrowTrendingUpIcon,
  BellIcon,
  BookmarkIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [counter, setCounter] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  function incrementNotf() {
    setCounter((prev) => prev + 1);
  }
  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }
  return (
    <nav className='grid grid-cols-4 justify-center items-center py-2'>
      <div className='flex justify-start mx-4'>
        <FontAwesomeIcon icon={faS} />
        <FontAwesomeIcon icon={faM} />
      </div>
      <div className='hidden relative md:grid grid-cols-3 justify-between mx-3 col-span-2 bg-gray-800 border-gray-700  py-1 rounded-lg border-2'>
        <div className=' col-span-2'>
          <i className='mx-3'>
            <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
          </i>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent w-4/5 h-full rounded-lg outline-none '
          />
        </div>
        <div className='flex justify-end mx-2'>
          <small className='italic font-bold'>ctrl + K</small>
        </div>
      </div>

      <div className='col-span-3 md:col-span-1'>
        <ul className='flex justify-end items-center gap-6 mx-6 text-lg'>
          <li
            onClick={incrementNotf}
            className='relative cursor-pointer hover:scale-110 transition-all duration-200 hover:text-slate-400'
          >
            <i className='absolute text-[10px] flex justify-center items-center border-2 rounded-full p-1 w-4 h-4 border-green-500 text-slate-50 -top-1 -right-2'>
              {counter}
            </i>
            <BellIcon className='h-6 w-6' />
          </li>
          <li className='hover:scale-110 transition-all duration-200 hover:text-slate-400'>
            <ArrowTrendingUpIcon className='h-6 w-6 font-extrabold' />
          </li>
          <li className='hover:scale-110 transition-all duration-200 hover:text-slate-400'>
            <BookmarkIcon className='h-6 w-6' />
          </li>
          <li
            onClick={toggleDarkMode}
            className='hover:scale-110 transition-all duration-200 hover:text-slate-400'
          >
            {darkMode ? (
              <MoonIcon className='h-5 w-5' />
            ) : (
              <SunIcon className='h-6 w-6' />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
