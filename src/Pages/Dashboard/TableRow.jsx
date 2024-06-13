import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Modal from "../../components/Modal";
import { Link } from "react-router-dom";
const icons = {
  cat: "/images/Dashboard/animals/cat.png",
  dog: "/images/Dashboard/animals/dog.png",
  other: "/images/Dashboard/animals/other.png",
};
function TableRow({ index, reservation, handleStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const role = location.pathname.split("/")[2];
  const dialogRef = useRef(null);
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    setRejectReason("");
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }
  return (
    <>
      <tr
        className={`${isOpen ? "bg-neutral-50" : "border-b-2 border-neutral-100"} table-row cursor-pointer hover:bg-neutral-50`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <td className="table-cell px-2 py-2">{index + 1}</td>
        <td className="table-cell px-2 py-2">
          <img
            src={
              reservation.owner[0].photo
                ? reservation.owner[0].photo.url
                : "/userImage.png"
            }
            alt="pet worker"
            className="mx-auto aspect-square max-h-[40px] max-w-[40px] rounded-full object-cover"
          />
        </td>
        <td className="table-cell px-2 py-2">
          {reservation.owner[0].firstName + " " + reservation.owner[0].lastName}
        </td>
        <td className="table-cell px-2 py-2">{reservation.numberOfVisits}</td>
        <td className="table-cell px-2 py-2">{reservation.owner[0].phone}</td>
        <td className="table-cell px-2 py-2">{reservation.date}</td>
        <td className="table-cell px-2 py-2">{reservation.time}</td>
        <td className="table-cell h-fit w-fit px-2 py-2 first-letter:capitalize">
          <span
            className={`${
              reservation.status === "pending"
                ? "bg-neutral-200 text-neutral-500"
                : reservation.status === "approved"
                  ? "bg-[#e0eded] text-primary"
                  : "bg-red-100 text-red-700"
            } rounded-lg px-2 pb-1 first-letter:capitalize`}
          >
            {reservation.status}
          </span>
        </td>
        <td
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="table-cell cursor-default px-2 py-2"
        >
          <Modal ref={dialogRef} toggleDialog={toggleDialog}>
            <form
              method="dialog"
              onSubmit={() => {
                toggleDialog();
                handleStatusChange(reservation._id, "rejected", rejectReason);
              }}
              className="flex cursor-default flex-col gap-y-4 p-4"
            >
              <h2 className="text-lg font-semibold text-neutral-900">
                Are you sure you want to cancel the reservation?
              </h2>
              <div className="flex flex-col items-start gap-y-1">
                <label
                  htmlFor="reason"
                  className="font-medium text-neutral-800"
                >
                  Please provide reason for cancellation.
                </label>
                <textarea
                  id="reason"
                  value={rejectReason}
                  required
                  onChange={(e) => setRejectReason(e.target.value)}
                  className="h-24 w-full rounded-md border border-neutral-300 p-2"
                />
              </div>
              <div className="flex min-w-[220px] justify-end gap-x-2 self-end">
                <button
                  type="button"
                  onClick={toggleDialog}
                  className="basis-1/2 rounded-md bg-neutral-600 px-4 py-1 text-white"
                >
                  Cancel
                </button>
                <button
                  role="submit"
                  className="basis-1/2 rounded-md bg-red-600 px-4 py-1 text-white"
                >
                  Confirm
                </button>
              </div>
            </form>
          </Modal>
          <div className="flex items-center justify-center gap-x-2">
            {reservation.status === "pending" ? (
              <>
                <button
                  className=" rounded-md bg-red-600 px-4 py-1 text-white"
                  onClick={toggleDialog}
                >
                  Reject
                </button>
                <button
                  className="rounded-md bg-primary px-4 py-1 text-white"
                  onClick={() =>
                    handleStatusChange(reservation._id, "approved")
                  }
                >
                  Accept
                </button>
              </>
            ) : (
              <span className="px-4 py-1">No Action Needed</span>
            )}
          </div>
        </td>
      </tr>
      {isOpen && (
        <tr
          className={`${isOpen ? "border-b-2 border-neutral-100 bg-neutral-50" : ""} table-row`}
        >
          <td colSpan={8} className="table-cell gap-x-4 px-4 py-2">
            <div className="flex flex-row">
              <span>Animals: </span>
              <div className="flex flex-row divide-x-2 divide-neutral-300">
                {reservation.animals.map((animal) => (
                  <div key={animal._id} className="flex gap-x-1 px-4">
                    <img
                      src={icons[animal.pet]}
                      alt={animal.pet}
                      className="h-7 w-7"
                    />
                    <span>
                      {animal.pet}: {animal.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </td>
          <td className="table-cell gap-x-4 px-4 py-2">
            {reservation.numberOfVisits > 1 && (
              <Link
                className="mx-auto flex w-fit items-center gap-2 text-primary"
                to={`/dashboard/${role}/history/${reservation.owner[0]._id}`}
              >
                <span>
                  <svg
                    className="h-7 w-7 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path d="m13.1 1a10.927 10.927 0 0 0 -10.534 8.223l-.732-1.107a1 1 0 1 0 -1.668 1.1l2.2 3.334a1.084 1.084 0 0 0 .634.425 1.024 1.024 0 0 0 .756-.145l3.3-2.223a1 1 0 1 0 -1.115-1.659l-1.501 1.012a8.909 8.909 0 1 1 8.66 11.04 8.892 8.892 0 0 1 -7.281-3.822 1 1 0 1 0 -1.64 1.143 10.881 10.881 0 0 0 19.821-6.321 10.963 10.963 0 0 0 -10.9-11z" />
                      <path d="m13 5.95a1 1 0 0 0 -1 1v5.05a1.04 1.04 0 0 0 .293.707l3 3.027a1.013 1.013 0 0 0 1.414.007 1 1 0 0 0 .006-1.414l-2.713-2.738v-4.639a1 1 0 0 0 -1-1z" />
                    </g>
                  </svg>
                </span>
                <span className="font-fredoka text-lg font-semibold underline">
                  History
                </span>
              </Link>
            )}
          </td>
        </tr>
      )}
    </>
  );
}
TableRow.propTypes = {
  index: PropTypes.number,
  reservation: PropTypes.object,
  handleStatusChange: PropTypes.func,
};
export default TableRow;
