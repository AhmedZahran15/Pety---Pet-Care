import PropTypes from "prop-types";
function CheckBox({ name, label, value, onClick, defaultChecked, id }) {
  return (
    <div className="flex items-center gap-x-2">
      <input
        className="h-4 w-4"
        name={name}
        defaultChecked={defaultChecked}
        type="checkbox"
        id={id}
        onClick={onClick}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
CheckBox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string.isRequired,
};
export default CheckBox;
