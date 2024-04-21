import { useEffect, useState } from "react";
import ArrowSvg from "../../assets/ArrowSvg";
import { useSearchParams } from "react-router-dom";
import { getCoordinates } from "../../utils/helpers";
function Pagination() {
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [filterParams, setFilterParams] = useSearchParams();
  useEffect(() => {
    async function fetchNumberOfPages() {
      const city = filterParams.get("city") ?? "";
      const governorate = filterParams.get("governorate") ?? "";
      const paramsWithoutAddress = new URLSearchParams(filterParams);
      paramsWithoutAddress.delete("city");
      paramsWithoutAddress.delete("governorate");
      if (city && governorate) {
        const address = `${city}, ${governorate}, Egypt`;
        const latlng = await getCoordinates(address);
        paramsWithoutAddress.set("latlng", latlng);
      }
      const res = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/pety/pages?limit=6&${paramsWithoutAddress.toString()}`,
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
  }, [filterParams]);

  function handlePrevious() {
    setFilterParams((prev) => {
      prev.set("page", +prev.get("page") - 1);
      if (prev.get("page") === "1") prev.delete("page");
      return prev;
    });
  }

  function handleNext() {
    setFilterParams((prev) => {
      prev.get("page")
        ? prev.set("page", +prev.get("page") + 1)
        : prev.set("page", 2);
      return prev;
    });
  }

  function handlePageChange(page) {
    setFilterParams((prev) => {
      prev.set("page", page);
      if (page === 1) prev.delete("page");
      return prev;
    });
  }
  return (
    <div className="flex items-center justify-center space-x-1">
      <button
        className="w-10 rounded-md bg-white text-black transition-all duration-200 hover:bg-primary hover:text-white disabled:hidden"
        onClick={handlePrevious}
        disabled={+filterParams.get("page") === 1 || !filterParams.get("page")}
      >
        <ArrowSvg
          className={
            "rotate-90 fill-primary transition-all duration-200 hover:fill-white"
          }
        />
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
          disabled={
            +filterParams.get("page") === page ||
            (!filterParams.get("page") && page === 1)
          }
        >
          {page}
        </button>
      ))}
      <button
        className="w-10 rounded-md bg-white text-black transition-all duration-200 hover:bg-primary hover:text-white disabled:hidden"
        onClick={handleNext}
        disabled={
          +filterParams.get("page") === numberOfPages ||
          (!filterParams.get("page"), numberOfPages === 1)
        }
      >
        <ArrowSvg
          className={
            "-rotate-90 fill-primary transition-all duration-200 hover:fill-white"
          }
        />
      </button>
    </div>
  );
}
export default Pagination;
