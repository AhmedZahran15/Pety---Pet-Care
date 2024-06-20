import { useRef, useState } from "react";
import PropTypes from "prop-types";
import Modal from "../../../components/Modal";

const icons = {
  cat: "/images/Dashboard/animals/cat.png",
  dog: "/images/Dashboard/animals/dog.png",
};
function TableRow({ appointment, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const animalModalRef = useRef(null);
  function toggleAnimalModal() {
    if (!animalModalRef.current) {
      return;
    }
    animalModalRef.current.hasAttribute("open")
      ? animalModalRef.current.close()
      : animalModalRef.current.showModal();
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
                  ? "bg-secondary text-primary"
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
          <td colSpan={7} className="table-cell gap-x-4 px-4 py-2">
            <Modal ref={animalModalRef} toggleDialog={toggleAnimalModal}>
              <div className="flex min-w-[300px] flex-col gap-y-4 p-4">
                <h1 className="text-lg font-semibold">Animal Details</h1>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col items-start">
                    <span>Animal Name</span>
                    <span className="text-neutral-500">
                      {selectedAnimal.animalName}
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span>Animal Type</span>
                    <span className="text-neutral-500">
                      {selectedAnimal.animalType}
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span>Diagnosis</span>
                    <span className="text-neutral-500">
                      {selectedAnimal.DiagnosisName}
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span>Symptoms</span>
                    <span className="text-neutral-500">
                      {selectedAnimal.symptoms}
                    </span>
                  </div>
                  <div className="flex flex-col items-start">
                    <span>Medicine</span>
                    <span className="text-neutral-500">
                      {selectedAnimal.medicineName}
                    </span>
                  </div>
                </div>
                <button
                  onClick={toggleAnimalModal}
                  className="w-full shrink-0 rounded-lg bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-300"
                >
                  Close
                </button>
              </div>
            </Modal>
            {appointment?.hasHistory ? (
              <div className="flex flex-row flex-wrap gap-4 px-4">
                {appointment.history.map((animal, index) => (
                  <button
                    onClick={() => {
                      setSelectedAnimal(animal);
                      toggleAnimalModal();
                    }}
                    key={index}
                    className="flex h-16 w-32 flex-row items-center rounded-lg border border-neutral-300 bg-white p-2"
                  >
                    <img
                      src={icons[animal.animalType.toLowerCase()]}
                      alt={animal.animalType}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex w-full flex-col items-center justify-center gap-y-0">
                      <span className="font-semibold capitalize">
                        {animal.animalName}
                      </span>
                      <span className="capitalize text-neutral-500">
                        {animal.animalType}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
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
