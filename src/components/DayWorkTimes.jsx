import moment from "moment";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";
function DayWorkTimes({ date, currentTimes, handleShowAll, showAll, id }) {
  const { setAppointment } = useContext(ReservationContext);
  const todayDate = moment().format("DD-MM-YYYY");
  const tomorrowDate = moment().add(1, "days").format("DD-MM-YYYY");
  const navigate = useNavigate();
  function handleAppointment(time) {
    setAppointment({ date, time, id });
    navigate(`/Reservation`);
  }
  return (
    <div className="flex min-w-[96px] flex-col overflow-hidden rounded-lg border-[1px] border-neutral-200">
      <div className="text-md bg-primary py-2 text-center text-white">
        {date === todayDate
          ? "Today"
          : date === tomorrowDate
            ? "Tomorrow"
            : moment(date, "DD-MM-YYYY").format("ddd DD-MM")}
      </div>
      <div className="flex grow cursor-default flex-col items-center justify-center gap-y-0.5  bg-white py-1 transition-all duration-300">
        {!currentTimes ? (
          <p className="text-center text-xs font-semibold text-neutral-400">
            No available appointments
          </p>
        ) : (
          currentTimes.map((time) => (
            <button
              key={id + time}
              disabled={!time[1]}
              onClick={() => handleAppointment(time[0])}
              className={`w-[70%] cursor-pointer rounded-[4px] py-1 text-center text-xs font-medium text-neutral-700 transition-all duration-150 ease-in-out hover:bg-primary hover:text-white disabled:cursor-default disabled:bg-transparent disabled:text-gray-300 disabled:line-through disabled:decoration-primary disabled:decoration-[1.5px]`}
            >
              {time[0]}
            </button>
          ))
        )}
        {currentTimes ? (
          <button
            onClick={handleShowAll}
            className="w-[70%] cursor-pointer rounded-[4px] py-1 text-center text-xs font-medium text-primary transition-all duration-150 ease-in-out hover:bg-primary hover:text-white"
          >
            {showAll ? "Show less" : "Show all"}
          </button>
        ) : null}
      </div>
      {!showAll && (
        <button
          onClick={handleShowAll}
          disabled={!currentTimes}
          className="text-md bg-secondary py-2 text-center text-white transition-all duration-100 hover:bg-amber-500 disabled:cursor-not-allowed disabled:bg-[#cccccc]"
        >
          Book
        </button>
      )}
    </div>
  );
}
DayWorkTimes.propTypes = {
  date: PropTypes.string,
  currentTimes: PropTypes.array,
  handleShowAll: PropTypes.func,
  showAll: PropTypes.bool,
  id: PropTypes.string,
};
export default DayWorkTimes;
