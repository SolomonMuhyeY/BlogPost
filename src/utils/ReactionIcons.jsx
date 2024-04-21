import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faHeart,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
export const reactionIcons = {
  thumbsUp: (
    <i className='text-yellow-500'>
      <FontAwesomeIcon icon={faThumbsUp} />
    </i>
  ),
  thumbsDown: (
    <i className='text-gray-300'>
      <FontAwesomeIcon icon={faThumbsDown} />
    </i>
  ),
  heart: (
    <i className='text-green-500'>
      <FontAwesomeIcon icon={faHeart} />
    </i>
  ),
  fire: (
    <i className='text-red-500'>
      <FontAwesomeIcon icon={faFire} />
    </i>
  ),
};
