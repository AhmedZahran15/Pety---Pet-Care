import { useEffect } from "react";
import ArrowSvg from "../../assets/ArrowSvg";
import PropTypes from "prop-types";
function Pagination({
  filterParams,
  setFilterParams,
  setNumberOfPages,
  numberOfPages,
  scrollToTopOfPetWorkers,
}) {
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
      setNumberOfPages(() => returnData.data);
    }
    fetchNumberOfPages();
  }, [filterParams, setNumberOfPages, setFilterParams]);

  function handlePrevious() {
    setFilterParams((prev) => {
      prev.set("page", +prev.get("page") - 1);
      if (prev.get("page") === "1") prev.delete("page");
      return prev;
    });
    scrollToTopOfPetWorkers();
  }

  function handleNext() {
    setFilterParams((prev) => {
      prev.set("page", +prev.get("page") + 1);
      return prev;
    });
    scrollToTopOfPetWorkers();
  }

  function handlePageChange(page) {
    setFilterParams((prev) => {
      prev.set("page", page);
      return prev;
    });
    scrollToTopOfPetWorkers();
  }
  return (
    <div className="flex items-center justify-center space-x-1">
      <button
        className="rounded-md bg-white text-black  transition-all duration-200 hover:bg-primary hover:text-white disabled:hidden"
        onClick={handlePrevious}
        disabled={+filterParams.get("page") === 1 || !filterParams.get("page")}
      >
        <ArrowSvg direction="left" />
      </button>
      {Array.from({ length: numberOfPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          className={`h-10 w-10 rounded-md  text-center font-fredoka text-2xl font-medium text-primary transition-all duration-200 hover:bg-primary hover:text-white ${
            +filterParams.get("page") === page ||
            (!filterParams.get("page") && page === 1)
              ? " bg-primary text-white"
              : "bg-white"
          }`}
          onClick={() => handlePageChange(page)}
          disabled={+filterParams.get("page") === page}
        >
          {page}
        </button>
      ))}
      <button
        className="rounded-md bg-white text-black transition-all duration-200 hover:bg-primary hover:text-white disabled:hidden"
        onClick={handleNext}
        disabled={
          +filterParams.get("page") === numberOfPages ||
          !filterParams.get("page")
        }
      >
        <ArrowSvg direction="right" />
      </button>
    </div>
  );
}
Pagination.propTypes = {
  filterParams: PropTypes.object.isRequired,
  setFilterParams: PropTypes.func.isRequired,
  setNumberOfPages: PropTypes.func.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  scrollToTopOfPetWorkers: PropTypes.func.isRequired,
};
export default Pagination;
