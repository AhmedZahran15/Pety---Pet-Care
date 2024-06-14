import { useRef, useState } from "react";
import PropTypes from "prop-types";

function TableRow({ appointment, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const dialogRef = useRef(null);
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
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
              appointment.petyID.photo
                ? appointment.petyID.photo.url
                : "/userImage.png"
            }
            alt="pet worker"
            className="mx-auto aspect-square max-h-[40px] max-w-[40px] rounded-full object-cover"
          />
        </td>
        <td className="table-cell px-2 py-2">{appointment.petyID.petyName}</td>
        <td className="table-cell px-2 py-2 first-letter:capitalize">
          {appointment.petyID.role}
        </td>
        <td className="table-cell px-2 py-2">{appointment.date}</td>
        <td className="table-cell px-2 py-2">{appointment.time}</td>
        <td className="table-cell h-fit w-fit px-2 py-2 first-letter:capitalize">
          <span
            className={`${
              appointment.status === "pending"
                ? "bg-neutral-200 text-neutral-500"
                : appointment.status === "approved"
                  ? "bg-[#e0eded] text-primary"
                  : "bg-red-100 text-red-700"
            } rounded-lg px-2 pb-1 first-letter:capitalize`}
          >
            {appointment.status}
          </span>
        </td>
      </tr>
      {isOpen && (
        <tr
          className={`${isOpen ? "border-b-2 border-neutral-100 bg-neutral-50" : ""} table-row`}
        >
          <td colSpan={9} className="table-cell gap-x-4 px-4 py-2">
            {appointment?.hasHistory ? (
              <div className="flex flex-row"></div>
            ) : (
              <span className="text-neutral-500">
                This appointment has no history.
              </span>
            )}
          </td>
        </tr>
      )}
    </>
  );
}
TableRow.propTypes = {
  appointment: PropTypes.object,
  index: PropTypes.number,
};
export default TableRow;
