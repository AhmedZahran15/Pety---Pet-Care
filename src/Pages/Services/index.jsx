import { useEffect, useState } from "react";
import FeaturesBar from "../../components/FeaturesBar";
import Filters from "./Filters";
import PetWorkers from "./PetWorkers";
import PetWorkerCard from "./PetWorkerCard";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";
import ScrollToTop from "../../components/ScrollToTop";
function Services() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterParams, setFilterParams] = useSearchParams({
    role: "vet",
    limit: "6",
    page: "1",
  });
  useEffect(() => {
    const controller = new AbortController();
    async function fetchServices() {
      try {
        setIsLoading(true);
        console.log(filterParams.toString());
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
        console.log(returnData.data);
      } catch (err) {
        if (err.name === "AbortError") return;
      } finally {
        setIsLoading(false);
      }
    }
    fetchServices();
    return () => {
      controller.abort();
    };
  }, [filterParams, setData]);

  return (
    <div className="m-auto flex flex-col overflow-hidden bg-neutral-100">
      <FeaturesBar imgSrc="/images/services.png" />
      <div className="my-20 flex w-full flex-col items-center justify-around gap-y-16 lg:flex-row lg:items-start">
        <Filters
          setData={setData}
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />
        <div className="flex w-9/12 max-w-[900px] flex-col items-center justify-start gap-16 lg:w-7/12">
          {data.length === 0 ? (
            <h1 className="mt-40 text-2xl font-semibold">
              No{" "}
              <span className=" first-letter:capitalize">
                {filterParams.get("role")}s
              </span>{" "}
              are available with current filters 😢
            </h1>
          ) : (
            <>
              <PetWorkers isLoading={isLoading}>
                {data.map((petWorker) => (
                  <PetWorkerCard key={petWorker._id} data={petWorker} />
                ))}
              </PetWorkers>
              <Pagination
                filterParams={filterParams}
                setFilterParams={setFilterParams}
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
