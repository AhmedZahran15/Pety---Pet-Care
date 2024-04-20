import PropTypes from "prop-types";
function Counter({ animal, animals, setAnimals }) {
  function handleCountMinus() {
    setAnimals((prevState) => ({
      ...prevState,
      [animal.toLowerCase()]: prevState[animal.toLowerCase()] - 1,
    }));
  }
  function handleCountPlus() {
    setAnimals((prevState) => ({
      ...prevState,
      [animal.toLowerCase()]: prevState[animal.toLowerCase()] + 1,
    }));
  }
  return (
    <div className="flex items-center gap-1">
      <button
        onClick={handleCountMinus}
        className="my-auto box-border min-w-[30px] rounded-md border-[1px] border-neutral-200 bg-white p-0 text-primary  transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-[#7fcbce]"
        disabled={animals[animal.toLowerCase()] === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-md border-[1px] border-neutral-200 text-lg font-semibold">
        {animals[animal.toLowerCase()]}
      </span>
      <button
        className="my-auto box-border min-w-[30px] rounded-md border-[1px] border-neutral-200 bg-white p-0  text-primary transition-all duration-200 hover:bg-primary hover:text-white"
        onClick={handleCountPlus}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
Counter.propTypes = {
  animal: PropTypes.string,
  animals: PropTypes.object,
  setAnimals: PropTypes.func,
};
export default Counter;
