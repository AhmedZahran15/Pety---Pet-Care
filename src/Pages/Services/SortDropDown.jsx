import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SortDropDown() {
  const [filterParams, setFilterParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex h-[50px] w-auto items-center gap-2">
      <h1 className=" text-md font-Montserrat font-medium text-black sm:text-lg md:text-xl">
        Sort by :
      </h1>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-4 rounded-lg border-[0.5px] border-[#b8b8b8] bg-white px-3 py-2.5 text-center text-sm font-medium text-black shadow-lg shadow-neutral-300 hover:bg-neutral-50"
        type="button"
      >
        {filterParams.get("sort")
          ? filterParams.get("sort") === "price"
            ? "Price low to high"
            : filterParams.get("sort") === "-price"
              ? "Price high to low"
              : "Top rated"
          : "Default"}
        <svg
          className="ms-3 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-12 z-10 w-full divide-y divide-gray-100 rounded-lg border-[0.5px] border-[#b8b8b8] bg-white shadow">
          <ul className="text-sm text-gray-700 ">
            <li
              onClick={() => {
                setFilterParams((prev) => {
                  prev.delete("sort");
                  return prev;
                });
                setIsOpen(false);
              }}
              className="block cursor-pointer rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Default
            </li>
            <li
              onClick={() => {
                setFilterParams((prev) => {
                  prev.set("sort", "price");
                  return prev;
                });
                setIsOpen(false);
              }}
              className="block cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              Price low to high
            </li>
            <li
              onClick={() => {
                setFilterParams((prev) => {
                  prev.set("sort", "-price");
                  return prev;
                });
                setIsOpen(false);
              }}
              className="block cursor-pointer px-4 py-2 hover:bg-gray-100"
            >
              Price high to low
            </li>
            <li
              onClick={() => {
                setFilterParams((prev) => {
                  prev.set("sort", "-averageRate");
                  return prev;
                });
                setIsOpen(false);
              }}
              className="block cursor-pointer rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Top rated
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
export default SortDropDown;
