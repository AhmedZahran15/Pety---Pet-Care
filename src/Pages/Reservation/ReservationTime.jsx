import moment from "moment";
import PropTypes from "prop-types";
function ReservationTime({ appointment }) {
  const todayDate = moment().format("DD-MM-YYYY");
  const tomorrowDate = moment().add(1, "days").format("DD-MM-YYYY");
  return (
    <div className="bg-neutral-50">
      <p className="m-2 p-4 text-center text-lg font-semibold text-neutral-500">
        Your reservation is confirmed for&nbsp;: &nbsp;
        <span className="text-neutral-800">
          {appointment.date === todayDate
            ? "Today"
            : appointment.date === tomorrowDate
              ? "Tomorrow"
              : moment(appointment.date, "DD-MM-YYYY").format("ddd DD-MM")}
        </span>
        <span className="text-neutral-800">&nbsp;{appointment.time}</span>
      </p>
    </div>
  );
}
ReservationTime.propTypes = {
  appointment: PropTypes.object,
};
export default ReservationTime;
