import { useEffect, useState } from "react";
import ArrowSvg from "../../assets/ArrowSvg";
import PropTypes from "prop-types";
function Pagination({ filterParams, setFilterParams }) {
  const [numberOfPages, setNumberOfPages] = useState(1);
  useEffect(() => {
    async function fetchNumberOfPages() {
      const res = await fetch(
        `https://petcare-znql.onrender.com/api/pety/pages?${filterParams.toString()}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const returnData = await res.json();
      console.log(returnData);
      setNumberOfPages(() => returnData.data);
    }
    fetchNumberOfPages();
  }, [filterParams, setNumberOfPages]);
  return (
    <div className="flex items-center justify-center space-x-1">
      <button
        className="rounded-md bg-white text-black  transition-all duration-200 hover:bg-primary hover:text-white disabled:hidden"
        onClick={() =>
          setFilterParams((prev) => {
            prev.set("page", +prev.get("page") - 1);
            if (prev.get("page") === "1") prev.delete("page");
            return prev;
          })
        }
        disabled={+filterParams.get("page") === 1 || !filterParams.get("page")}
      >
        <ArrowSvg direction="left" />
      </button>
      {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`h-10 w-10 rounded-md  text-center font-fredoka text-2xl font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white ${
            +filterParams.get("page") === page
              ? " bg-primary text-white"
              : "bg-white"
          }`}
          onClick={() =>
            setFilterParams((prev) => {
              prev.set("page", page);
              return prev;
            })
          }
          disabled={+filterParams.get("page") === page}
        >
          {page}
        </button>
      ))}
      <button
        className="rounded-md bg-white text-black transition-all duration-200 hover:bg-primary hover:text-white disabled:hidden"
        onClick={() =>
          setFilterParams((prev) => {
            prev.set("page", +prev.get("page") + 1);
            return prev;
          })
        }
        disabled={+filterParams.get("page") === numberOfPages}
      >
        <ArrowSvg direction="right" />
      </button>
    </div>
  );
}
Pagination.propTypes = {
  filterParams: PropTypes.object.isRequired,
  setFilterParams: PropTypes.func.isRequired,
};
export default Pagination;
