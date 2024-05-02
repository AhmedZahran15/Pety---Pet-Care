import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Modal from "../../components/Modal";
const icons = {
  cat: "/images/Dashboard/animals/cat.png",
  dog: "/images/Dashboard/animals/dog.png",
  other: "/images/Dashboard/animals/other.png",
};
function TableRow({ index, reservation, handleStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
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
          <picture className="rounded-full">
            <img
              src={
                reservation.owner[0].photo
                  ? reservation.owner[0].photo.url
                  : "/userImage.png"
              }
              alt="pet worker"
              className="mx-auto aspect-square h-full max-h-[30px] w-full max-w-[30px] scale-[1.3] overflow-clip rounded-full"
            />
          </picture>
        </td>
        <td className="table-cell px-2 py-2">
          {reservation.owner[0].firstName + " " + reservation.owner[0].lastName}
        </td>
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
                  Please provide reason for cancellation. (Optional)
                </label>
                <textarea
                  id="reason"
                  value={rejectReason}
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
