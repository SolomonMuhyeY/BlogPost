import { faBloggerB, faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import {
  faChalkboardUser,
  faGear,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/component-styling.css";

const Sidebar = () => {
  return (
    <aside className='aside-bar w-16 overflow-hidden  transition-all ease-in-out duration-700 h-screen fixed top-0 grid items-center bg-gray-200 hover:w-1/3 md:hover:w-1/5'>
      <div className='item-container'>
        <div className='item flex'>
          <i className='bg-transparent px-5'>
            <FontAwesomeIcon icon={faBloggerB} />
          </i>
          <div>&nbsp;Blogs</div>
        </div>
        <hr className='h-0.5 bg-gray-400 my-1.5' />
        <div className='item flex'>
          <i className='bg-transparent px-5'>
            <FontAwesomeIcon icon={faSearch} />
          </i>
          <div>Search</div>
        </div>
        <div className='item flex'>
          <i className='bg-transparent px-5'>
            <FontAwesomeIcon icon={faChalkboardUser} />
          </i>
          <div>About</div>
        </div>
        <div className='item flex'>
          <i className='bg-transparent px-5'>
            <FontAwesomeIcon icon={faThinkPeaks} />
          </i>
          <div>Insights</div>
        </div>
        <div className='item flex'>
          <i className='bg-transparent px-5'>
            <FontAwesomeIcon icon={faGear} />
          </i>
          <div>Settings</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
