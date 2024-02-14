function CheckBox({ title, label, value, onChange, checked, id }) {
  return (
    <div>
      <input
        title={title}
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
