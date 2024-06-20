import { useContext, useState } from "react";
import Animal from "./Animal";
import { ReservationContext } from "../../contexts/ReservationContext";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components/Loader";
function AnimalsDetails() {
  const [animals, setAnimals] = useState({
    dog: 0,
    cat: 0,
    other: 0,
  });
  const { id } = useParams();
  const { handleReservation, appointment, isLoading } =
    useContext(ReservationContext);
  const navigate = useNavigate();

  async function handleSubmit() {
    const animalsArray = [
      { pet: "dog", count: animals.dog },
      { pet: "cat", count: animals.cat },
      { pet: "other", count: animals.other },
    ].filter((animal) => animal.count > 0);
    const data = await handleReservation(
      id,
      appointment.date,
      appointment.time,
      animalsArray,
    );
    if (data.status === "success") {
      toast.success(
        `You have booked successfully for ${appointment.date} at ${appointment.time}.`,
      );
      setAnimals({
        dog: 0,
        cat: 0,
        other: 0,
      });
      navigate("/");
    } else {
      toast.error(data?.message || "An error occurred while booking.");
    }
  }
  return (
    <>
      <p className="pt-2 text-center font-Montserrat text-lg font-bold text-neutral-800">
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
          (animals.dog === 0 && animals.cat === 0 && animals.other === 0) ||
          isLoading
        }
        className="my-4 flex items-center justify-center gap-x-2 self-center rounded-lg bg-yellowDark px-6 py-3 text-lg font-semibold text-white hover:bg-amber-400 disabled:bg-neutral-300"
      >
        {isLoading ? (
          <>
            <Loader />
            <span>Loading...</span>
          </>
        ) : (
          "Book appointment"
        )}
      </button>
    </>
  );
}

export default AnimalsDetails;
