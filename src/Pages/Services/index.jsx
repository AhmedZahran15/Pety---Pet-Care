import { useEffect, useRef, useState } from "react";
import FeaturesBar from "../../components/FeaturesBar";
import Filters from "./Filters";
import PetWorkers from "./PetWorkers";
import PetWorkerCard from "./PetWorkerCard";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import ScrollToTop from "../../components/ScrollToTop";
import PetWorkersHeader from "./PetWorkersHeader";
import SortDropDown from "./SortDropDown";
import WorkersName from "./WorkersName";
function Services() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [filterParams, setFilterParams] = useSearchParams({
    role: "vet",
    limit: "6",
    page: "1",
  });
  const elementRef = useRef(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchServices() {
      try {
        setIsLoading((prev) => !prev);
        const res = await fetch(
          `https://petcare-znql.onrender.com/api/pety?${filterParams.toString()}`,
          {
            method: "GET",
            signal: controller.signal,
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        if (!res.ok) {
          toast.error("Something went wrong");
          throw new Error("Something went wrong");
        }
        const returnData = await res.json();
        setData(() => returnData.data);
      } catch (err) {
        if (err.name === "AbortError") return;
      } finally {
        setIsLoading((prev) => !prev);
      }
    }
    fetchServices();
    elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    return () => {
      controller.abort();
    };
  }, [filterParams, setData]);
  return (
    <div className=" flex flex-col bg-neutral-100">
      <FeaturesBar imgSrc="/images/services.png" filterParams={filterParams} />
      <div className="relative my-20 flex w-full flex-col items-center justify-around gap-y-16 lg:flex-row lg:items-start">
        <Filters
          setData={setData}
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />
        <div
          ref={elementRef}
          className="flex w-11/12 max-w-[900px] flex-col items-center justify-start gap-16 lg:w-7/12"
        >
          {filterParams.get("page") > numberOfPages &&
          filterParams.get("page") !== "1" ? (
            <>
              <h1 className="mt-40 text-2xl font-semibold">
                This page does not exist.😢
              </h1>
              <Pagination
                filterParams={filterParams}
                setFilterParams={setFilterParams}
                setNumberOfPages={setNumberOfPages}
                numberOfPages={numberOfPages}
              />
            </>
          ) : data.length === 0 && !isLoading ? (
            <h1 className="mt-40 text-2xl font-semibold">
              No&nbsp;
              <span className=" first-letter:capitalize">
                {filterParams.get("role")}s&nbsp;
              </span>
              are available with current filters 😢
            </h1>
          ) : (
            <>
              <PetWorkersHeader>
                <WorkersName filterParams={filterParams} />
                <SortDropDown
                  setFilterParams={setFilterParams}
                  filterParams={filterParams}
                />
              </PetWorkersHeader>
              <PetWorkers isLoading={isLoading}>
                {data.map((petWorker) => (
                  <PetWorkerCard key={petWorker._id} data={petWorker} />
                ))}
              </PetWorkers>
              <Pagination
                filterParams={filterParams}
                setFilterParams={setFilterParams}
                setNumberOfPages={setNumberOfPages}
                numberOfPages={numberOfPages}
              />
            </>
          )}
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Services;
