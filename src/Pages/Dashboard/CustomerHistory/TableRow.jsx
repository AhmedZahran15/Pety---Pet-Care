import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Modal from "../../../components/Modal";
import toast from "react-hot-toast";
import { Loader } from "../../../components/Loader";
const icons = {
  cat: "/images/Dashboard/animals/cat.png",
  dog: "/images/Dashboard/animals/dog.png",
};
function TableRow({ index, reservation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [appointmentHistory, setAppointmentHistory] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState({});
  const [animal, setAnimal] = useState({
    animalName: "",
    animalType: "",
    DiagnosisName: "",
    symptoms: "",
    medicineName: "",
  });
  const dialogRef = useRef(null);
  const animalModalRef = useRef(null);
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }
  function toggleAnimalModal() {
    if (!animalModalRef.current) {
      return;
    }
    animalModalRef.current.hasAttribute("open")
      ? animalModalRef.current.close()
      : animalModalRef.current.showModal();
  }
  function handleChange(e) {
    setAnimal({ ...animal, [e.target.name]: e.target.value });
  }
  async function fetchAnimals() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/history/appoinment/${reservation._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      if (!response.ok) throw new Error("Failed to fetch animals");
      const data = await response.json();
      setAppointmentHistory(data.data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/history`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            appointmentId: reservation._id,
            history: [animal],
          }),
        },
      );
      if (!response.ok) throw new Error("Failed to add prescription");
      const result = await response.json();
      toast.success("Prescription added successfully");
      setAppointmentHistory([
        ...appointmentHistory,
        result.data.history[result.data.history.length - 1],
      ]);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
    setAnimal({
      animalName: "",
      animalType: "",
      DiagnosisName: "",
      symptoms: "",
      medicineName: "",
    });
    toggleDialog();
  }
  return (
    <>
      <tr
        className={`${isOpen ? "bg-neutral-50" : "border-b-2 border-neutral-100"} table-row cursor-pointer hover:bg-neutral-50`}
        onClick={() => {
          setIsOpen(!isOpen);
          fetchAnimals();
        }}
      >
        <td className="table-cell px-2 py-2">{index + 1}</td>
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
      </tr>
      {isOpen && (
        <tr
          className={`${isOpen ? "border-b-2 border-neutral-100 bg-neutral-50" : ""} table-row`}
        >
          <td colSpan={4} className="table-cell gap-x-4 px-4 py-2">
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
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-row flex-wrap gap-4 px-4">
                {isLoading ? (
                  <div className="mx-auto flex items-center justify-center">
                    <Loader />
                  </div>
                ) : (
                  appointmentHistory.map((animal, index) => (
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
                  ))
                )}
              </div>
              <button
                onClick={toggleDialog}
                className="mx-auto flex w-fit items-center justify-center gap-x-2 text-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 349.03 349.031"
                  xmlSpace="preserve"
                  className="inline-block h-6 w-6 rounded-md bg-primary fill-white p-1"
                >
                  <path d="M349.03 141.226v66.579a9.078 9.078 0 01-9.079 9.079H216.884v123.067a9.077 9.077 0 01-9.079 9.079h-66.579c-5.009 0-9.079-4.061-9.079-9.079V216.884H9.079A9.08 9.08 0 010 207.805v-66.579a9.079 9.079 0 019.079-9.079h123.068V9.079c0-5.018 4.069-9.079 9.079-9.079h66.579a9.078 9.078 0 019.079 9.079v123.068h123.067a9.077 9.077 0 019.079 9.079z" />
                </svg>
                <span>Add a Prescription</span>
              </button>
            </div>
            <Modal ref={dialogRef} toggleDialog={toggleDialog}>
              <form
                className="flex flex-col gap-y-4 p-4"
                onReset={() =>
                  setAnimal({
                    animalName: "",
                    animalType: "",
                    DiagnosisName: "",
                    symptoms: "",
                    medicineName: "",
                  })
                }
                onSubmit={handleSubmit}
              >
                <h1 className="text-lg font-semibold">Add a Prescription</h1>
                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col items-start">
                    <label htmlFor="animalName">Animal Name</label>
                    <input
                      onChange={handleChange}
                      value={animal.animalName}
                      type="text"
                      required
                      name="animalName"
                      id="animalName"
                      className="w-full rounded-lg border border-neutral-300 p-2"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between gap-x-4">
                    <label htmlFor="animalType">Animal Type:</label>
                    <select
                      onChange={handleChange}
                      name="animalType"
                      value={animal.animalType}
                      required
                      id="animalType"
                      className="rounded-lg border border-neutral-300 p-2"
                    >
                      <option value="">Choose Type</option>
                      <option value="Cat">Cat</option>
                      <option value="Dog">Dog</option>
                    </select>
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="diagnosis">Diagnosis</label>
                    <textarea
                      onChange={handleChange}
                      value={animal.DiagnosisName}
                      required
                      name="DiagnosisName"
                      id="diagnosis"
                      className="w-full rounded-lg border border-neutral-300 p-2"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="symptoms">Symptoms</label>
                    <textarea
                      onChange={handleChange}
                      required
                      value={animal.symptoms}
                      name="symptoms"
                      id="symptoms"
                      className="w-full rounded-lg border border-neutral-300 p-2"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="medicine">Medicine</label>
                    <textarea
                      onChange={handleChange}
                      required
                      value={animal.medicineName}
                      name="medicineName"
                      id="medicine"
                      className="w-full rounded-lg border border-neutral-300 p-2"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-x-4">
                  <button
                    type="reset"
                    className="w-36 shrink-0 rounded-lg bg-neutral-100 p-2 text-neutral-700 hover:bg-neutral-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-36 shrink-0 rounded-lg bg-primary p-2 text-white"
                  >
                    Add Prescription
                  </button>
                </div>
              </form>
            </Modal>
          </td>
        </tr>
      )}
    </>
  );
}
TableRow.propTypes = {
  index: PropTypes.number,
  reservation: PropTypes.object,
};
export default TableRow;
