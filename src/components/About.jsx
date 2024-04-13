import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  // console.log(posts);
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className='h-[100vh]'>
      <div>
        <button
          onClick={goBack}
          className='text-justify py-1.5 px-2.5 hover:text-green-200 duration-300 hover:scale-105'
        >
          <i className='px-1.5'>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </i>
          Go Back
        </button>
      </div>
      <div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          iusto! Nam, voluptas veritatis. Architecto nostrum a ducimus nam ut
          vel atque quibusdam at, temporibus accusantium debitis ex eum modi
          facere iusto odio fuga nulla unde aliquid consequatur necessitatibus
          esse recusandae sequi! Aspernatur voluptate incidunt obcaecati.
        </p>
      </div>
    </div>
  );
}
