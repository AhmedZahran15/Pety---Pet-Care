import { Link } from "react-router-dom";

export const Input = ({
  text,
  type,
  placeholder,
  value,
  change,
  error,
  page,
}) => {
  return (
    <div className="mb-3 w-full">
      <label htmlFor={text}>
        <input
          type={type}
          name={text}
          id={text}
          value={value}
          placeholder={placeholder}
          className="w-full rounded-xl border-2 border-black bg-secondary px-3 py-2 focus:border-primary focus:outline-none"
          onChange={change}
        />
        <div className={"px-3 text-sm text-primary"}>{error}</div>
      </label>
    </div>
  );
};
