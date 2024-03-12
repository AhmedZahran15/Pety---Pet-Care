import PropTypes from "prop-types";
function RadioButton({ value, checked, name, id, label, onChange }) {
  return (
    <div className="flex flex-row items-center gap-2">
      <input
        className="h-4 w-4"
        type="radio"
        id={id}
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <label className="text-gray-600" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
RadioButton.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};
export default RadioButton;
