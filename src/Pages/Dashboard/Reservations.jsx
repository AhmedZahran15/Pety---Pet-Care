import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlockLoader } from "../../components/Loader";
function Reservations() {
  const [isLoading, setIsLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const { pathname } = useLocation();
  const role = pathname.split("/")[2];
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/dashboard/allAppointments/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ role }),
          },
        );
        if (response.ok) {
          const data = await response.json();
          setReservations(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [role]);
  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="relative mx-auto w-full"></div>
      )}
    </>
  );
}

export default Reservations;
