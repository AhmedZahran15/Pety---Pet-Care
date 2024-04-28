import PropTypes from "prop-types";
import { useRef, useState } from "react";
function ImageUpload({ imageAsPreview, handleImageChange, photo }) {
  const ref = useRef(null);
  const [error, setError] = useState("");
  return (
    <div className="flex items-center gap-x-4 md:-mt-3">
      <img
        src={imageAsPreview || photo || "/userImage.png"}
        alt="profile"
        className="h-[70px] w-[70px] rounded-full"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          ref.current.click();
        }}
        className="cursor-pointer rounded-md bg-emerald-200 px-4 py-2 text-sm font-semibold text-primary shadow-md shadow-neutral-300 hover:bg-emerald-300"
      >
        Choose Image
      </button>
      <span className={`text-neutral-500  ${error ? "hidden" : ""}`}>
        {photo?.name ? photo.name : "PNG,JPG,JPEG up to 2MB"}
      </span>
      <span>{error && <span className="text-red-500">{error}</span>}</span>
      <input
        ref={ref}
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={(e) => {
          if (e.target.files && e.target.files[0].size < 2097152) {
            setError("");
            handleImageChange(e);
          } else setError("Image size should be less than 2MB");
        }}
        className="hidden"
      />
    </div>
  );
}
ImageUpload.propTypes = {
  imageAsPreview: PropTypes.string,
  handleImageChange: PropTypes.func.isRequired,
  photo: PropTypes.string,
};
export default ImageUpload;
