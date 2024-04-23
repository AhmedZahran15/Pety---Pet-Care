import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BlockLoader } from "../../components/Loader";
import Breadcrumb from "./Breadcrumb";
import TableRow from "./TableRow";

const Table_Head = [
  "ID",
  "Photo",
  "Name",
  "Phone",
  "Date",
  "Time",
  "Status",
  "Actions",
];
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
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    }
    fetchData();
  }, [role]);

  const handleStatusChange = async (id, status) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/dashboard/changeAppointment`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ id, role, status }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          const updatedReservations = reservations.map((reservation) => {
            if (reservation._id === id) {
              reservation.status = status;
            }
            return reservation;
          });
          setReservations(updatedReservations);
        }
      }
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="relative mx-auto w-full">
          <Breadcrumb pageName={"Reservations"} />
          <div className="overflow-x-auto rounded-lg border border-neutral-200">
            <table className=" font- w-full min-w-max table-auto  rounded-lg text-center text-base font-medium text-neutral-700">
              <thead className="bg-neutral-100 text-primary">
                <tr>
                  {Table_Head.map((head, index) => (
                    <th key={index} className="px-2 py-3">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {reservations.map((reservation, index) => (
                  <TableRow
                    key={reservation._id}
                    reservation={reservation}
                    index={index}
                    handleStatusChange={handleStatusChange}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Reservations;
