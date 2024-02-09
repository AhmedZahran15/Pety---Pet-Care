import { Link, useParams } from "react-router-dom";
import PetSittingSvg from "../assets/PetSittingSvg.jsx";
import VetSvg from "../assets/VetSvg.jsx";
import PetGroomingSvg from "../assets/PetGroomingSvg.jsx";
import PropTypes from "prop-types";
import { useState } from "react";
const FeaturesBar = ({ imgSrc }) => {
  const { role } = useParams();
  const [petSittingHover, setPetSittingHover] = useState(role === "petSitter");
  const [petGroomingHover, setPetGroomingHover] = useState(
    role === "petGroomer",
  );
  const [vetHover, setVetHover] = useState(role === "vet");
  const [moreHover, setMoreHover] = useState(false);
  return (
    <>
      <img src={imgSrc} alt="Header image" className="w-full  bg-contain" />
      <div className="mx-20 -mt-16 grid grid-cols-2 items-center rounded-3xl bg-white px-5 py-4  shadow-xl  md:grid-cols-4">
        <Link
          to="/services/vet"
          onMouseEnter={() => setVetHover(true)}
          onMouseLeave={() => (role != "vet" ? setVetHover(false) : null)}
          className={`mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg px-12 ${vetHover ? "bg-gray-100" : ""}  `}
        >
          <VetSvg hover={vetHover} />
          <p
            className={`text-center text-xl ${vetHover ? "text-secondary" : ""} `}
          >
            Vet
          </p>
        </Link>
        <Link
          to="/services/petSitter"
          onMouseEnter={() => setPetSittingHover(true)}
          onMouseLeave={() => setPetSittingHover(false)}
          className="mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg hover:bg-gray-100"
        >
          <PetSittingSvg hover={petSittingHover} />
          <p
            className={`text-center text-xl text-black ${petSittingHover ? "text-secondary" : ""}`}
          >
            Pet Sitting
          </p>
        </Link>
        <Link
          to="/services/petGroomer"
          onMouseEnter={() => setPetGroomingHover(true)}
          onMouseLeave={() => setPetGroomingHover(false)}
          className="mx-auto flex h-24 w-36 flex-col items-center justify-center rounded-lg hover:bg-gray-100"
        >
          <PetGroomingSvg hover={petGroomingHover} />
          <p
            className={`text-center text-xl ${petGroomingHover ? "text-secondary" : ""}`}
          >
            Pet Grooming
          </p>
        </Link>
        <div
          className="mx-auto flex h-24 w-36 cursor-pointer flex-col items-center justify-between rounded-lg  hover:bg-gray-100"
          onMouseEnter={() => setMoreHover(true)}
          onMouseLeave={() => setMoreHover(false)}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 54 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="more">
              <circle
                id="Ellipse 11"
                cx="6"
                cy="6"
                r="6"
                fill={moreHover ? "#FFA500" : "black"}
              />
              <circle
                id="Ellipse 12"
                cx="27"
                cy="6"
                r="6"
                fill={moreHover ? "#FFA500" : "black"}
              />
              <circle
                id="Ellipse 13"
                cx="48"
                cy="6"
                r="6"
                fill={moreHover ? "#FFA500" : "black"}
              />
            </g>
          </svg>
          <p
            className={`text-center text-2xl  text-black sm:text-center ${moreHover ? "text-secondary" : ""}`}
          >
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
