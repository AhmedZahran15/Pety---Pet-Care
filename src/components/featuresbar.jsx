import { Link } from "react-router-dom";
import PetSittingSvg from "../assets/PetSittingSvg.jsx";
import VetSvg from "../assets/VetSvg.jsx";
import PetGroomingSvg from "../assets/PetGroomingSvg.jsx";
const FeaturesBar = () => {
  return (
    <div className="mx-20 -mt-16 grid grid-cols-2 items-center  rounded-3xl bg-white  px-5   md:grid-cols-4">
      <Link
        to="/"
        className=" flex h-32 flex-col items-center justify-center  "
      >
        <VetSvg />
        <p className="text-center text-2xl  text-black transition-all duration-300 hover:text-teal-900 sm:text-center ">
          Vet
        </p>
      </Link>

      <Link to="/" className=" flex h-32 flex-col items-center justify-center">
        <PetSittingSvg />
        <p className="text-center text-2xl text-black transition-all duration-300 hover:text-slate-700 sm:text-center">
          Pet Sitting
        </p>
      </Link>
      <Link to="/" className=" flex h-32 flex-col items-center justify-center">
        <PetGroomingSvg />
        <p className="text-center text-2xl  text-black transition-all duration-300 hover:text-amber-600 sm:text-center">
          Pet Grooming
        </p>
      </Link>
      <div className="flex h-full cursor-pointer flex-col items-center justify-between py-5">
        <svg
          className=""
          width="60"
          height="60"
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
        <p className="text-center text-2xl  text-black transition-all  duration-300 hover:text-teal-800 sm:text-center">
          More
        </p>
      </div>
    </div>
  );
};

export default FeaturesBar;
