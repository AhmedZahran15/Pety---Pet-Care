import { useContext, useState } from "react";
import Animal from "./Animal";
import { ReservationContext } from "../../contexts/ReservationContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
function AnimalsDetails() {
  const [animals, setAnimals] = useState({
    dogs: 0,
    cats: 0,
    other: 0,
  });
  const { handleReservation, appointment, isLoading } =
    useContext(ReservationContext);
  const navigate = useNavigate();
  async function handleSubmit() {
    const animalsString = `dogs ${animals.dogs}, cats ${animals.cats}, other ${animals.other}`;
    const data = await handleReservation(
      appointment.data._id,
      appointment.time,
      appointment.date,
      animalsString,
    );
    console.log(data);
    if (data.status === "success") {
      toast.success(
        `You have booked successfully for ${appointment.date} at ${appointment.time}.`,
      );
      navigate("/");
      setAnimals({
        dogs: 0,
        cats: 0,
        other: 0,
      });
    } else {
      toast.error(data?.message || "An error occurred while booking.");
    }
  }
  return (
    <>
      <p className="pt-2 text-center text-lg font-semibold text-neutral-800">
        Pets information
      </p>
      <div className="flex flex-col gap-2 px-8 py-2 text-base font-medium">
        <Animal animal="Dog" animals={animals} setAnimals={setAnimals} />
        <Animal animal="Cat" animals={animals} setAnimals={setAnimals} />
        <Animal animal="Other" animals={animals} setAnimals={setAnimals} />
      </div>
      <button
        onClick={handleSubmit}
        disabled={
          (animals.dogs === 0 && animals.cats === 0 && animals.other === 0) ||
          isLoading
        }
        className="my-4 self-center rounded-lg bg-secondary px-6 py-3 text-lg font-semibold text-white hover:bg-amber-400 disabled:bg-neutral-300"
      >
        {isLoading && <Loader />}
        {isLoading ? " Loading..." : "Book appointment"}
      </button>
    </>
  );
}

export default AnimalsDetails;
