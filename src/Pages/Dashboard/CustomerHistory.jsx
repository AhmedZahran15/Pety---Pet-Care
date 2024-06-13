import { useEffect, useState } from "react";
import { BlockLoader } from "../../components/Loader";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";

function CustomerHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/history/user/${userId}`,
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
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userId]);
  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="relative mx-auto w-full">
          <Breadcrumb pageName={"Reservations / Username"} />
          <div className="overflow-x-auto rounded-lg border border-neutral-200"></div>
        </div>
      )}
    </>
  );
}

export default CustomerHistory;
