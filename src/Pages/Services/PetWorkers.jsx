import { useEffect, useState } from "react";
import { Loader, LoaderQuote } from "../../components/Loader";
import PetWorkerCard from "./PetWorkerCard";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import { getCoordinates } from "../../utils/helpers";
function PetWorkers() {
  const [filterParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchServices() {
      try {
        setIsLoading((prev) => !prev);
        const city = filterParams.get("city") ?? "";
        const governorate = filterParams.get("governorate") ?? "";
        const paramsWithoutAddress = new URLSearchParams(filterParams);
        paramsWithoutAddress.delete("city");
        paramsWithoutAddress.delete("governorate");
        if (city && governorate) {
          const address = `${city}, ${governorate}, Egypt`;
          const lnglat = await getCoordinates(address);
          paramsWithoutAddress.set("lnglat", lnglat);
        }
        const res = await fetch(
          `https://petcare-znql.onrender.com/api/pety?limit=6&${paramsWithoutAddress.toString()}`,
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
    <div className="flex w-full flex-col items-center justify-start gap-y-4 md:mt-10">
      {isLoading ? (
        <>
          <Loader width="100px" height="100px" />
          <LoaderQuote />
        </>
      ) : data.length === 0 && !isLoading ? (
        <h1 className="text-center font-fredoka text-xl font-medium text-neutral-500 sm:text-2xl">
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
