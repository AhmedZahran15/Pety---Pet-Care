import Star from "../../components/Star";
import TImeTableCarousel from "../../components/TImeTableCarousel";

import PropTypes from "prop-types";
function UserInfo({ src, alt, text }) {
  return (
    <div className="flex items-center gap-1 text-sm font-normal text-gray-500">
      <img src={src} alt={alt} className="h-4 w-4" />
      <span>{text}</span>
    </div>
  );
}
UserInfo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
function PetWorkerCard({ data }) {
  const { petyName, averageRate, description, price } = data;
  const animals = data.animals
    .map((item, i) => {
      if (i === data.animals.length - 1)
        return item[0].toUpperCase() + item.substring(1) + "s";
      return item[0].toUpperCase() + item.substring(1) + "s / ";
    })
    .join("");
  return (
    <div className="flex w-full min-w-[370px] cursor-pointer flex-col items-center justify-center gap-x-8 gap-y-6 rounded-xl border-[0.5px] border-black border-opacity-20 bg-white py-4 pl-2 shadow-lg shadow-neutral-300 hover:bg-neutral-50 md:flex-row xl:py-8">
      <div className="my-10 flex w-full items-center justify-center gap-6 px-6 md:w-4/12 ">
        <img
          src="images/vetImg.jpg"
          alt="pet worker"
          className="h-32 w-32 rounded-full shadow-md shadow-gray-400"
        />
        <div className="flex flex-col gap-1">
          <h2 className=" text-2xl font-bold first-letter:capitalize">
            {petyName}
          </h2>
          <div className="flex">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} full={i + 1 <= averageRate} />
            ))}
          </div>
          <UserInfo
            src="images/filters/filterArrow.png"
            alt="Description Icon"
            text={description}
          />
          <UserInfo
            src="images/filters/markerIcon.png"
            alt="Marker Icon"
            text="Location PlaceHolder"
          />
          <UserInfo
            src="images/filters/dollarIcon.png"
            alt="Dollar Icon"
            text={`Fees: ${price} LE`}
          />
          <UserInfo
            src="images/filters/Clock.png"
            alt="Clock Icon"
            text="Waiting Time placeHolder"
          />
          <UserInfo
            src="images/filters/animalsIcon.png"
            alt="Animals Icon"
            text={animals}
          />
        </div>
      </div>
      <TImeTableCarousel />
    </div>
  );
}

PetWorkerCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default PetWorkerCard;
