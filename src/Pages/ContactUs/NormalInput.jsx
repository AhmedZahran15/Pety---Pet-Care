import PropTypes from "prop-types";
function NormalInput({ value, onChange, error, placeholder }) {
  return (
    <div className="w-full">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-full py-3 pl-3 font-semibold text-neutral-800 shadow-md shadow-neutral-100 outline-primary ring-1 ring-neutral-300 placeholder:font-semibold placeholder:text-neutral-400"
      />
      <div className="px-1 text-sm font-medium text-primary">{error}</div>
    </div>
  );
}
NormalInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
export default NormalInput;
