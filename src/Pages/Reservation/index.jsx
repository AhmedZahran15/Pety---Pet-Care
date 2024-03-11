import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import WorkerInfo from "../../components/WorkerInfo";
import ReservationTime from "./ReservationTime";
import { Navigate } from "react-router-dom";
import TimeTable from "../../components/TimeTable";

function Reservation() {
  const { appointment } = useContext(ReservationContext);

  if (appointment === null) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col gap-8 bg-neutral-100 px-8 py-10 lg:flex-row lg:px-32">
      <div className="w-full rounded-xl bg-white py-2 md:w-7/12 lg:w-6/12">
        <WorkerInfo data={appointment.data} />
        <ReservationTime appointment={appointment} />
      </div>
      <div className="flex w-full flex-col gap-2 overflow-hidden rounded-xl bg-white md:w-7/12 lg:w-6/12">
        <div className="bg-primary py-1 text-center font-sans text-lg font-semibold text-white ">
          Appointment details
        </div>
        <TimeTable data={appointment.data} />
      </div>
    </div>
  );
}

export default Reservation;
