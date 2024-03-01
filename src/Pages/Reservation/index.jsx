import { useContext, useEffect } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import { useNavigate } from "react-router-dom";

function Reservation() {
  const { appointment } = useContext(ReservationContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!appointment) {
      navigate("/");
    }
  }, [appointment, navigate]);

  return <div></div>;
}

export default Reservation;
