import PropTypes from "prop-types";
import Star from "./Star";
import { animalsToString } from "../utils/helpers";
import infoMarkers from "../assets/InfoMarkers";
function UserInfo({ src, alt, text }) {
  return (
    <div className="flex items-center gap-1 text-sm font-normal text-gray-500 md:text-base">
      <img src={src} alt={alt} className="h-4 w-4 md:h-[20px] md:w-[20px]" />
      <span className="max-w-[250px] truncate">{text}</span>
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
    <div className="flex w-[450px] max-w-[450px] items-center justify-between gap-x-2 self-center py-2">
      <picture className="w-1/2 min-w-[100px] max-w-[160px] overflow-hidden rounded-full border-[1px] border-neutral-400 shadow-md shadow-gray-400">
        <img
          src={photo ? photo.url : "images/defaultWorkerImage.png"}
          alt="pet worker"
          className="scale-[1.3]"
        />
      </picture>
      <div className="flex w-[320px]  flex-col gap-1">
        <h2 className="max-w-[250px] truncate text-2xl font-bold first-letter:capitalize">
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
