import { useContext, useEffect } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import { useNavigate } from "react-router-dom";
import WorkerInfo from "../../components/WorkerInfo";
import ReservationTime from "./ReservationTime";

function Reservation() {
  const { appointment } = useContext(ReservationContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(appointment.data);
    if (!appointment) {
      navigate("/");
    }
  }, [appointment, navigate]);

  return (
    <div className="bg-neutral-100 px-8 py-10 lg:px-32">
      <div className="w-full rounded-xl bg-white py-2 md:w-7/12 lg:w-6/12">
        <WorkerInfo data={appointment.data} />
        <ReservationTime appointment={appointment} />
      </div>
    </div>
  );
}

export default Reservation;
