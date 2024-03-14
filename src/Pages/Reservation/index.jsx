import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import WorkerInfo from "../../components/WorkerInfo";
import ReservationTime from "./ReservationTime";
import { Navigate } from "react-router-dom";
import TimeTable from "../../components/TimeTable";
import AnimalsDetails from "./AnimalsDetails";

function Reservation() {
  const { appointment } = useContext(ReservationContext);

  if (appointment === null) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col gap-8 bg-neutral-100 px-8 py-10 md:px-32 lg:flex-row lg:px-16 xl:px-32">
      <div className="h-fit w-full rounded-xl bg-white py-2 lg:w-6/12">
        <WorkerInfo data={appointment.data} />
        <ReservationTime appointment={appointment} />
      </div>
      <div className="flex w-full flex-col overflow-hidden rounded-xl bg-white lg:w-6/12">
        <div className="border-b-[3px] border-neutral-200">
          <div className="bg-primary py-1 text-center font-sans text-lg font-bold text-white ">
            Appointment details
          </div>
          <p className="-mb-2 pt-2 text-center text-lg font-semibold text-neutral-800">
            Choose your appointment
          </p>
          <TimeTable data={appointment.data} />
        </div>
        <AnimalsDetails />
      </div>
    </div>
  );
}

export default Reservation;
