import { Link, useSearchParams } from "react-router-dom";
import VetSvg from "../assets/VetSvg.jsx";
import PetGroomingSvg from "../assets/PetGroomingSvg.jsx";
import PropTypes from "prop-types";
import PetSitter from "../assets/PetSitterSVG.jsx";
const FeaturesBar = ({ imgSrc }) => {
  const [filterParams] = useSearchParams();
  const role = filterParams ? filterParams.get("role") : "";
  return (
    <>
      <img src={imgSrc} alt="Header image" className="w-full  bg-contain" />
      <div className="mx-8 -mt-16 grid grid-cols-2 items-center rounded-3xl bg-white px-5 py-4 shadow-xl sm:container sm:mx-auto md:grid-cols-4">
        <Link
          to="/services?role=vet"
          className={`group mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg px-12 hover:bg-neutral-100 ${role === "vet" ? "bg-neutral-100" : ""}`}
        >
          <VetSvg
            className={`h-16 w-16 transition-all duration-200 group-hover:fill-secondary ${role === "vet" ? "fill-secondary" : ""}`}
          />
          <p
            className={`text-center text-xl transition-all duration-200 group-hover:text-secondary ${role === "vet" ? "text-secondary" : ""}`}
          >
            Vet
          </p>
        </Link>
        <Link
          to="/services?role=petSitter"
          className={`group mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg hover:bg-neutral-100 ${role === "petSitter" ? "bg-neutral-100" : ""}`}
        >
          <PetSitter
            className={`${role === "petSitter" ? "stroke-secondary" : "stroke-black"} h-16 w-16 transition-all duration-200 group-hover:stroke-secondary`}
          />
          <p
            className={`text-center text-xl transition-all duration-200 group-hover:text-secondary ${role === "petSitter" ? "text-secondary" : ""}`}
          >
            Pet Sitting
          </p>
        </Link>
        <Link
          to="/services?role=groomer"
          className={`group mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg hover:bg-neutral-100 ${role === "groomer" ? "bg-neutral-100" : ""}`}
        >
          <PetGroomingSvg
            className={`${role === "groomer" ? "fill-secondary" : "fill-black"} h-16 w-16 transition-all duration-200 group-hover:fill-secondary`}
          />
          <p
            className={`text-center text-xl transition-all duration-200 group-hover:text-secondary ${role === "groomer" ? "text-secondary" : ""}`}
          >
            Pet Grooming
          </p>
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
};
export default FeaturesBar;
