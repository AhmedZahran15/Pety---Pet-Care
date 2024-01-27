import { Link } from "react-router-dom";
import PetSittingSvg from "../../public/images/features/PetSittingSvg.jsx";
import VetSvg from "../../public/images/features/VetSvg.jsx";
import PetGroomingSvg from "../../public/images/features/PetGroomingSvg.jsx";
const FeatureBar = () => {
  return (
    <div className="grid grid-cols-2 px-5 pt-12 md:grid-cols-4">
      <Link
        to="/"
        className="flex flex-col items-center justify-center gap-y-3"
      >
        <VetSvg />
        <p className='font-["Product  Sans Light"] text-center text-2xl font-semibold   text-teal-700 transition-all duration-300 hover:text-teal-900 sm:text-center '>
          Vet
        </p>
      </Link>

      <Link to="/" className="flex flex-col items-center justify-center">
        <PetSittingSvg />
        <p className="font-['Product Sans Light'] text-center text-2xl font-semibold text-black transition-all duration-300 hover:text-slate-700 sm:text-center">
          Pet Sitting
        </p>
      </Link>
      <Link to="/" className="flex flex-col items-center justify-center">
        <PetGroomingSvg />
        <p className="font-['Product Sans Light'] text-center text-2xl font-semibold text-amber-500 transition-all duration-300 hover:text-amber-600 sm:text-center">
          Pet Grooming
        </p>
      </Link>
      <div className="flex cursor-pointer flex-col items-center justify-center gap-y-[52px]">
        <a href="#" className="mt-16">
          <svg
            className=""
            width="60"
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
        <p className="font-['Product Sans Light'] text-center text-2xl font-semibold text-teal-700 transition-all  duration-300 hover:text-teal-800 sm:text-center">
          More
        </p>
      </div>
    </div>
  );
};

export default FeatureBar;
