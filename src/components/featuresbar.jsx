import { Link } from "react-router-dom";
import VetSVG from "../../public/VetSVG.jsx";
const FeatureBar = () => {
  return (
    <div className="flex flex-wrap justify-around gap-x-[90px] gap-y-12 px-5 pt-12 sm:gap-0">
      <Link to="/">
        <VetSVG />
        <p className='font-["Product  Sans Light"] text-2xl  font-normal text-teal-700 transition-all duration-300 hover:text-teal-900 sm:text-center '>
          Vet
        </p>
      </Link>

      <Link to="/">
        <img className=" h-32 w-32" src="images/features/Pet Setting.png" />
        <p className="font-['Product Sans Light'] text-2xl font-normal text-black transition-all duration-300 hover:text-slate-700 sm:text-center">
          Pet Sitting
        </p>
      </Link>
      <Link to="/">
        <img className=" h-32 w-32" src="images/features/Pet Grooming.png" />
        <p className="font-['Product Sans Light'] text-2xl font-normal text-amber-500 transition-all duration-300 hover:text-amber-600 sm:text-center">
          Pet Grooming
        </p>
      </Link>
      <div className="flex cursor-pointer  flex-col justify-between">
        <a href="#" className="mt-16">
          <svg
            className=""
            width="54"
            height="12"
            viewBox="0 0 54 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="more">
              <circle id="Ellipse 11" cx="6" cy="6" r="6" fill="#00777B" />
              <circle id="Ellipse 12" cx="27" cy="6" r="6" fill="#00777B" />
              <circle id="Ellipse 13" cx="48" cy="6" r="6" fill="#00777B" />
            </g>
          </svg>
        </a>
        <p className="font-['Product Sans Light'] text-start text-2xl font-normal text-teal-700 transition-all  duration-300 hover:text-teal-800 sm:text-center">
          More
        </p>
      </div>
    </div>
  );
};

export default FeatureBar;
