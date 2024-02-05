import PropTypes from "prop-types";

function Input({ text, type, onChange, error, value }) {
  return (
    <div className="w-full">
      <div className="relative w-full ">
        <input
          autoComplete="off"
          id={text}
          name={text}
          type={type}
          value={value}
          className="text-md disabled:bg-blue-gray-50 peer h-full w-full rounded-[7px]
    border border-gray-300 border-t-transparent bg-transparent px-3 py-3.5 font-sans font-normal outline
    outline-0 transition-all placeholder-shown:border-2
    placeholder-shown:border-gray-300 placeholder-shown:border-t-gray-300 focus:border-2
    focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0"
          placeholder=""
          onChange={onChange}
        />
        <label
          className="before:content[' '] after:content[' ']  pointer-events-none absolute 
      -top-1.5 left-0 flex h-full  w-full select-none
    text-[13px] font-normal leading-tight text-gray-500 transition-all
    before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block 
    before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l
    before:border-t before:border-gray-300 before:transition-all after:pointer-events-none
    after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5
    after:flex-grow after:rounded-tr-md after:border-r after:border-t
    after:border-gray-300 after:transition-all
    peer-placeholder-shown:text-lg peer-placeholder-shown:leading-[3.5]
    peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent
    peer-focus:text-[15px] peer-focus:font-semibold peer-focus:leading-tight peer-focus:text-primary
    peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-primary 
    peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-primary 
    peer-disabled:text-transparent peer-disabled:before:border-transparent 
    peer-disabled:after:border-transparent"
        >
          {text}
        </label>
      </div>
      <div className={"px-3 text-sm font-medium text-primary"}>{error}</div>
    </div>
  );
}

export default Input;
Input.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  error: PropTypes.string,
  value: PropTypes.string,
};
