import PropTypes from "prop-types";
function ImageUpload({ imageAsPreview, handleImageChange, photo }) {
  return (
    <div className="flex items-center gap-x-4 md:-mt-3">
      <img
        src={imageAsPreview || photo || "/userImage.png"}
        alt="profile"
        className="h-[70px] w-[70px] rounded-full"
      />
      <input
        type="file"
        onChange={handleImageChange}
        className="block w-full text-sm file:mr-4
      file:rounded-md file:border-0 file:bg-emerald-100 file:px-4 file:py-2
      file:text-sm  file:font-semibold file:text-primary file:shadow-md file:shadow-neutral-300
       file:hover:bg-emerald-200
      hover:file:bg-pink-100"
      />
    </div>
  );
}
ImageUpload.propTypes = {
  imageAsPreview: PropTypes.string,
  handleImageChange: PropTypes.func,
  photo: PropTypes.string,
};
export default ImageUpload;
