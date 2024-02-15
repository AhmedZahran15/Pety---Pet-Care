import PropTypes from "prop-types";
import { useState } from "react";

function SortDropDown({ filterParams, setFilterParams }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex w-auto items-center gap-2">
      <h1 className=" text-xl font-normal text-black">Sort by :</h1>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center  rounded-lg border-[0.5px] border-[#b8b8b8] bg-white px-5 py-2.5 text-center text-sm font-medium text-black shadow-lg shadow-neutral-300 hover:bg-neutral-50"
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
                  prev.set("sort", "rating");
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
SortDropDown.propTypes = {
  filterParams: PropTypes.object.isRequired,
  setFilterParams: PropTypes.func.isRequired,
};
export default SortDropDown;
