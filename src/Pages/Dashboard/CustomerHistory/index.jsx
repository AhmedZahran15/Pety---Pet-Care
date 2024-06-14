import { useEffect, useState } from "react";
import { BlockLoader } from "../../../components/Loader";
import Breadcrumb from "../Breadcrumb";
import { useParams } from "react-router-dom";
import UserDisplay from "./UserDisplay";
import TableRow from "./TableRow";

function CustomerHistory() {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const role = location.pathname.split("/")[2];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/history/user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ owner: userId, role }),
          },
        );
        if (response.ok) {
          const data = await response.json();
          setHistory(data.data.appointments);
          setUser(data.user.owner);
          console.log(data);
        }
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userId, role]);
  return (
    <>
      {isLoading ? (
        <BlockLoader />
      ) : (
        <div className="relative mx-auto w-full">
          <Breadcrumb
            pageName={`Reservations / ${user.firstName + " " + user.lastName}`}
          />
          <UserDisplay user={user} />
          <div className="overflow-x-auto mt-4 rounded-lg border border-neutral-200">
            <table className=" font- w-full min-w-max table-auto  rounded-lg text-center text-base font-medium text-neutral-700">
              <thead className="bg-neutral-100 text-primary">
                <tr className="table-row">
                  <th className="table-cell px-2 py-2">ID</th>
                  <th className="table-cell px-2 py-2">Date</th>
                  <th className="table-cell px-2 py-2">Time</th>
                  <th className="table-cell px-2 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {history.map((reservation, index) => (
                  <TableRow key={reservation._id} index={index} reservation={reservation} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomerHistory;
