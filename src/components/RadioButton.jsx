function RadioButton({ value, checked, name, id, label, onClick }) {
  return (
    <div>
      <input
        type="radio"
        id={id}
        checked={checked === value}
        value={value}
        name={name}
        onClick={onClick}
      />
      <label className="ml-1 text-gray-600" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
