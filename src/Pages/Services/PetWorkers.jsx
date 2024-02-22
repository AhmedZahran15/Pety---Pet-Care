import { useEffect, useState } from "react";
import { Loader, LoaderQuote } from "../../components/Loader";
import PetWorkerCard from "./PetWorkerCard";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
function PetWorkers() {
  const [filterParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchServices() {
      try {
        setIsLoading((prev) => !prev);
        const res = await fetch(
          `https://petcare-znql.onrender.com/api/pety?limit=6&${filterParams.toString()}`,
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
    return () => {
      controller.abort();
    };
  }, [filterParams]);
  return (
    <div className="flex w-full flex-col items-center justify-start gap-y-4">
      {isLoading ? (
        <>
          <div className="mt-6">
            <Loader width="100px" height="100px" />
          </div>
          <LoaderQuote />
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
        data.map((petWorker) => (
          <PetWorkerCard key={petWorker._id} data={petWorker} />
        ))
      )}
    </div>
  );
}
export default PetWorkers;
