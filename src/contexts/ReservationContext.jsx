import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [appointment, setAppointment] = useState({ date: "", time: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleReservation = async (petyID, date, time, animals) => {
    const token = localStorage.getItem("token");
    setIsLoading(true);
    const response = await fetch(
      `${import.meta.env.VITE_API_LINK}/api/pety/appointment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          petyID,
          date,
          time,
          animals,
        }),
      },
    );
    const data = await response.json();
    setIsLoading(false);
    return data;
  };
  return (
    <ReservationContext.Provider
      value={{
        appointment,
        setAppointment,
        handleReservation,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
ReservationProvider.propTypes = {
  children: PropTypes.node,
};
