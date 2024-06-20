import { useSearchParams } from "react-router-dom";
import { debounce } from "lodash";
import PropTypes from "prop-types";
import SearchIcon from "../../assets/SearchIcon";
function SearchBar({ name }) {
  const [filterParams, setFilterParams] = useSearchParams();
  const handleSearchChange = debounce((e) => {
    const search = e.target.value.trim();
    setFilterParams(
      (prev) => {
        prev.set(name, search);
        if (search === "") prev.delete(name);
        prev.delete("page");
        return prev;
      },
      { replace: true },
    );
  }, 300);
  return (
    <div className="relative w-full shadow-sm shadow-neutral-200">
      <input
        className="font-fredoka h-[54px] w-full rounded-[4px] border border-neutral-300 bg-white px-2 pr-16 text-lg font-normal focus:border-primary focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        defaultValue={filterParams.get(name) || ""}
        onChange={(e) => handleSearchChange(e)}
      />
      <button
        type="button"
        className=" absolute right-1 top-2 flex cursor-default items-center justify-center border-l-2"
      >
        <SearchIcon className="mx-1 h-9 w-9 fill-primary py-1" />
      </button>
    </div>
  );
}
SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SearchBar;
