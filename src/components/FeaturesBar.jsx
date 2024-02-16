import { Link } from "react-router-dom";
import PetSittingSvg from "../assets/PetSittingSvg.jsx";
import VetSvg from "../assets/VetSvg.jsx";
import PetGroomingSvg from "../assets/PetGroomingSvg.jsx";
import PropTypes from "prop-types";
const FeaturesBar = ({ imgSrc, filterParams }) => {
  const role = filterParams ? filterParams.get("role") : "";
  return (
    <>
      <img src={imgSrc} alt="Header image" className="w-full  bg-contain" />
      <div className="mx-20 -mt-16 grid grid-cols-2 items-center rounded-3xl bg-white px-5 py-4 shadow-xl   md:grid-cols-4">
        <Link
          to="/services?role=vet"
          className={`mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg px-12 hover:bg-neutral-100 ${role === "vet" ? "bg-neutral-100" : ""}`}
        >
          <VetSvg />
          <p className={`text-center text-xl text-primary`}>Vet</p>
        </Link>
        <Link
          to="/services?role=petSitter"
          className={`mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg hover:bg-neutral-100 ${role === "petSitter" ? "bg-neutral-100" : ""}`}
        >
          <PetSittingSvg />
          <p className={`text-center text-xl text-black`}>Pet Sitting</p>
        </Link>
        <Link
          to="/services?role=groomer"
          className={`mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg hover:bg-neutral-100 ${role === "groomer" ? "bg-neutral-100" : ""}`}
        >
          <PetGroomingSvg />
          <p className={`text-center text-xl text-secondary`}>Pet Grooming</p>
        </Link>
        <div className="mx-auto flex h-24 w-36 cursor-pointer flex-col items-center justify-between rounded-lg  hover:bg-neutral-100">
          <svg
            width="60"
            height="60"
            viewBox="0 0 54 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="more">
              <circle id="Ellipse 11" cx="6" cy="6" r="6" fill="black" />
              <circle id="Ellipse 12" cx="27" cy="6" r="6" fill="black" />
              <circle id="Ellipse 13" cx="48" cy="6" r="6" fill="black" />
            </g>
          </svg>
          <p className={`text-center text-2xl  text-black sm:text-center`}>
            More
          </p>
        </div>
      </div>
    </>
  );
};
FeaturesBar.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  filterParams: PropTypes.object,
};
export default FeaturesBar;
