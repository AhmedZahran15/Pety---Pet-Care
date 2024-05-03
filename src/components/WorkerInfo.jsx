import PropTypes from "prop-types";
import Star from "./Star";
import { animalsToString } from "../utils/helpers";
import infoMarkers from "../assets/InfoMarkers";
function UserInfo({ src, alt, text }) {
  return (
    <div className="flex items-center gap-1 text-sm font-normal text-gray-500 md:text-base">
      <img src={src} alt={alt} className="h-4 w-4 md:h-[20px] md:w-[20px]" />
      <span title={text} className="max-w-[150px] truncate sm:max-w-[250px]">
        {text}
      </span>
    </div>
  );
}
UserInfo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

function WorkerInfo({ data }) {
  const {
    petyName,
    averageRate,
    description,
    price,
    animals,
    _id,
    address,
    photo,
  } = data;
  return (
    <div className="flex w-full items-center justify-center gap-x-4 self-center py-2 md:w-[450px] md:max-w-[450px]">
      <picture className="max-h-[140px] min-h-[140px] min-w-[140px] max-w-[140px] justify-self-start overflow-hidden rounded-full border-[1px] border-neutral-400 shadow-md shadow-gray-400">
        <img
          src={photo ? photo.url : "/images/defaultWorkerImage.png"}
          alt="pet worker"
          className="max-h-[140px] min-h-[140px] min-w-[140px] max-w-[140px] object-cover object-center"
        />
      </picture>
      <div className="flex w-fit flex-col  gap-1 xl:w-full">
        <h2
          title={petyName}
          className="max-w-[150px] truncate text-2xl font-bold first-letter:capitalize sm:max-w-[250px]"
        >
          {petyName}
        </h2>
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i + _id} full={i + 1 <= averageRate} />
          ))}
        </div>
        {infoMarkers.map((marker, index) => {
          return (
            <UserInfo
              key={index}
              src={marker.src}
              alt={marker.alt}
              text={
                index === 0
                  ? description
                  : index === 1
                    ? address
                    : index === 2
                      ? `${price} EGP`
                      : index === 3
                        ? "Waiting time placeHolder"
                        : animalsToString(animals)
              }
            />
          );
        })}
      </div>
    </div>
  );
}
WorkerInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
export default WorkerInfo;
