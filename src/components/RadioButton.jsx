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

export default RadioButton;
