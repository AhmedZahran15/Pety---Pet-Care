import PropTypes from "prop-types";

function SearchBar({ filterParams, setFilterParams }) {
  function handleSearchChange(e) {
    const search = e.target.value.trim();
    setFilterParams(
      (prev) => {
        prev.set("petyName", search);
        if (search === "") prev.delete("petyName");
        return prev;
      },
      { replace: true },
    );
  }
  return (
    <div className="relative w-full shadow-lg shadow-neutral-300">
      <input
        className="h-12 w-full rounded-[4px] border-[0.1rem] border-[#999999]  bg-white px-2 pr-16 font-fredoka text-base font-normal focus:outline-none"
        type="search"
        name="search"
        value={filterParams.get("petyName") || ""}
        placeholder="Search"
        onChange={handleSearchChange}
      />
      <button
        type="button"
        className=" absolute right-1 top-2 flex cursor-default items-center justify-center border-l-2"
      >
        <svg
          className="mx-2 h-8 w-8 py-1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          fill="#006e72"
          x="0px"
          y="0px"
          viewBox="0 0 56.966 56.966"
          xmlSpace="preserve"
          width="512px"
          height="512px"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
        </svg>
      </button>
    </div>
  );
}
SearchBar.propTypes = {
  filterParams: PropTypes.object.isRequired,
  setFilterParams: PropTypes.func.isRequired,
};
export default SearchBar;
