function CheckBox({ label, value, onChange, checked, id }) {
  return (
    <div>
      <input
        checked={checked}
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

export default CheckBox;
