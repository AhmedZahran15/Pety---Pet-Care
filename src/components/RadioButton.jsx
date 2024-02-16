import PropTypes from "prop-types";
function RadioButton({ value, checked, name, id, label, onChange }) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <label className="ml-1 text-gray-600" htmlFor={id}>
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
