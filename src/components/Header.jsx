import { faMagento, faUps } from "@fortawesome/free-brands-svg-icons";
import { faBell, faM, faS, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [counter, setCounter] = useState(0);
  function incrementNotf() {
    setCounter((prev) => prev + 1);
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
            <FontAwesomeIcon icon={faSearch} />
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
        <ul className='flex justify-end gap-6 mx-6 text-lg'>
          <li
            onClick={incrementNotf}
            className='relative cursor-pointer hover:scale-110 transition-all duration-200 hover:text-slate-400'
          >
            <i className='absolute text-[10px] flex justify-center items-center border-2 rounded-full p-1 w-4 h-4 border-green-500 text-slate-50 -top-1 -right-2'>
              {counter}
            </i>
            <FontAwesomeIcon icon={faBell} />
          </li>
          <li className='hover:scale-110 transition-all duration-200 hover:text-slate-400'>
            <FontAwesomeIcon icon={faMagento} />
          </li>
          <li className='hover:scale-110 transition-all duration-200 hover:text-slate-400'>
            <FontAwesomeIcon icon={faUps} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
