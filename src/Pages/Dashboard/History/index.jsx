import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb";
import { BlockLoader } from "../../../components/Loader";
import TableRow from "./TableRow";

const Table_Head = ["ID", "Photo", "Name", "Role", "Date", "Time", "Status"];
function History() {
  const [history, setHistory] = useState([]);
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
          setHistory(data.data);
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
          <div className="overflow-x-auto rounded-lg border border-neutral-200">
            <table className=" font- w-full min-w-max table-auto  rounded-lg text-center text-base font-medium text-neutral-700">
              <thead className="bg-secondary text-primary">
                <tr>
                  {Table_Head.map((head, index) => (
                    <th key={index} className="px-2 py-3">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="">
                {history.length === 0 && (
                  <tr>
                    <td colSpan="8" className="py-4">
                      No History Found
                    </td>
                  </tr>
                )}
                {history.map((appointment, index) => (
                  <TableRow
                    key={appointment._id}
                    index={index}
                    appointment={appointment}
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

export default History;
