import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [appointment, setAppointment] = useState(null);
  function handleReservation() {
    console.log("Reservation");
  }
  return (
    <ReservationContext.Provider value={{ appointment, setAppointment }}>
      {children}
    </ReservationContext.Provider>
  );
};
ReservationProvider.propTypes = {
  children: PropTypes.node,
};
