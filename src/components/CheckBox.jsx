import PropTypes from "prop-types";
function CheckBox({ title, label, value, onChange, checked, id }) {
  return (
    <div>
      <input
        title={title}
        checked={typeof checked === "undefined" ? false : checked}
        type="checkbox"
        id={id}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id} className="ml-1">
        {label}
      </label>
    </div>
  );
}
CheckBox.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
};
export default CheckBox;
