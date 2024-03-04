import PropTypes from "prop-types";
import Star from "./Star";
import { animalsToString } from "../utils/helpers";
function UserInfo({ src, alt, text }) {
  return (
    <div className="flex items-center gap-1 text-base font-normal text-gray-500">
      <img src={src} alt={alt} className="h-[20px] w-[20px]" />
      <span>{text}</span>
    </div>
  );
}
UserInfo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
function WorkerInfo({ data }) {
  const { petyName, averageRate, description, price, animals, _id } = data;
  return (
    <div className="flex items-center justify-center gap-6 self-center px-6 py-2">
      <img
        src="images/vetImg.jpg"
        alt="pet worker"
        className="h-32 w-32 rounded-full shadow-md shadow-gray-400"
      />
      <div className="flex w-full flex-col gap-1">
        <div className="flex w-full items-center justify-between gap-x-8">
          <h2 className=" text-2xl font-bold first-letter:capitalize">
            {petyName}
          </h2>
          <div className="flex flex-grow justify-end">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i + _id} full={i + 1 <= averageRate} />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
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
            text={animalsToString(animals)}
          />
        </div>
      </div>
    </div>
  );
}
WorkerInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
export default WorkerInfo;
