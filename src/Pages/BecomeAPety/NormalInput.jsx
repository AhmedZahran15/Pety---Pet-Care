import PropTypes from "prop-types";
function NormalInput({ label, value, onChange, error, type = "text" }) {
  return (
    <div>
      <label className="block text-base font-medium">{label}</label>
      <div className="mt-1 flex flex-col gap-0.5  sm:max-w-md">
        <input
          type={type}
          min={type === "number" ? 0 : ""}
          onInput={
            type === "number"
              ? (e) => (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              : null
          }
          value={value}
          onChange={onChange}
          className="rounded-md py-3 pl-2 shadow-md  shadow-gray-100 outline-primary ring-1 ring-gray-300"
        />
        <div className=" px-1 text-sm font-medium text-primary">{error}</div>
      </div>
    </div>
  );
}
NormalInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string,
};
export default NormalInput;
