function Input({ text, type, change, error }) {
  return (
    <div className="w-full">
      <div className="relative mt-7 h-10 w-full ">
        <input
          id={text}
          name={text}
          type={type}
          className="border-blue-gray-200 text-md placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer h-full
    w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-sans font-normal
    outline outline-0 transition-all
    placeholder-shown:border-2 placeholder-shown:border-black focus:border-2
    focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0"
          placeholder=" "
          onChange={change}
        />
        <label
          className="before:content[' '] after:content[' ']  before:border-blue-gray-200 after:border-blue-gray-200 
      pointer-events-none absolute -top-1.5 left-0  flex h-full
    w-full select-none text-[13px] font-semibold leading-tight
    text-gray-600 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] 
    before:box-border before:block before:h-1.5 before:w-2.5
    before:rounded-tl-md before:border-l before:border-t before:transition-all
    after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5
    after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r
    after:border-t after:transition-all
    peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
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
      <div className={"px-3 text-sm text-primary"}>{error}</div>
    </div>
  );
}

export default Input;
