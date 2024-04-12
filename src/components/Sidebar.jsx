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
    <>
      <div className='item-container fixed w-full'>
        <div className='item flex border-b-2 border-slate-700'>
          <i className='bg-transparent px-5'>
            <FontAwesomeIcon icon={faBloggerB} />
          </i>
          <div className='pb-2'>Blogs</div>
        </div>
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
    </>
  );
};

export default Sidebar;
