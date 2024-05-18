import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { BlockLoader } from "../../../components/Loader";
function History() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/history/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="relative mx-auto w-full">
          <Breadcrumb pageName={"History"} />
          <div className="rounded-lg"></div>
        </div>
      )}
    </>
  );
}

export default History;
