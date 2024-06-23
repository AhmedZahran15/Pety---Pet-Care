import { debounce } from "lodash";
import { useSearchParams } from "react-router-dom";
import SearchIcon from "../../assets/SearchIcon";

function SearchItem() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSearchChange = debounce((e) => {
    const search = e.target.value.trim();
    setSearchParams(
      (prev) => {
        prev.set("name", search);
        if (search === "") prev.delete("name");
        return prev;
      },
      { replace: true },
    );
  }, 300);
  return (
    <div className="relative w-full sm:w-[360px] lg:w-[500px] xl:-mr-32 xl:w-[600px]">
      <input
        className=" h-12 w-full rounded-[4px] bg-primaryDark px-2 pl-12 font-Montserrat text-base font-normal text-white placeholder:text-neutral-300 focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        defaultValue={searchParams.get("name") || ""}
        onChange={(e) => handleSearchChange(e)}
      />
      <button
        type="button"
        className=" absolute left-1 top-2 flex cursor-default items-center justify-center"
      >
        <SearchIcon className="mx-1 h-8 w-8 fill-white py-1" />
      </button>
    </div>
  );
}

export default SearchItem;
