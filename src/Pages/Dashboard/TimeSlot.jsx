import { TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import PropTypes from "prop-types";

function TimeSlot({
  day,
  startTime,
  endTime,
  sessionDuration,
  available,
  dispatch,
}) {
  const handleTimeSlotChange = (day, key, value) => {
    dispatch({
      type: "UPDATE/VALUE",
      payload: {
        day,
        key,
        value,
      },
    });
  };
  const handleCopyToAll = () => {
    dispatch({
      type: "UPDATE/ALL",
      payload: {
        available: available,
        startTime: startTime,
        endTime: endTime,
        sessionDuration: sessionDuration,
      },
    });
  };
  return (
    <div
      className={`flex flex-col gap-y-2 rounded-lg ${available ? "row-span-3" : " row-span-1"} border border-neutral-300 px-4 py-2`}
    >
      <div className="flex justify-between">
        <h3 className="font-fredoka text-xl font-medium first-letter:capitalize">
          {day}
        </h3>
        <label className="inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            value=""
            checked={available}
            onChange={(e) => {
              handleTimeSlotChange(day, "available", e.target.checked);
            }}
            className="peer sr-only"
          />
          <div className="peer relative h-6 w-11 rounded-full bg-neutral-300 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-neutral-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full"></div>
        </label>
      </div>
      <div
        className={`${available ? "h-full" : "hidden h-0"} flex flex-col gap-4 overflow-hidden py-2 transition-all duration-200`}
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <TimePicker
            label="From"
            value={moment(startTime, "hh:mm A")}
            minutesStep={15}
            skipDisabled={true}
            format="hh:mm A"
            className=""
            ampm={true}
            onChange={(newValue) => {
              handleTimeSlotChange(
                day,
                "startTime",
                newValue.format("hh:mm A"),
              );
            }}
          />
          <TimePicker
            label="To"
            value={moment(endTime, "hh:mm A")}
            minutesStep={15}
            format="hh:mm A"
            className=""
            minTime={moment(startTime, "hh:mm A").clone().add(1, "minute")}
            skipDisabled={true}
            ampm={true}
            onChange={(newValue) => {
              handleTimeSlotChange(day, "endTime", newValue.format("hh:mm A"));
            }}
          />
        </div>
        <div className="flex flex-col items-start justify-between gap-2 xl:flex-row">
          <div className="flex basis-1/2 flex-row items-center gap-x-2">
            <label className="block flex-shrink-0 font-fredoka font-normal">
              Session Duration
            </label>
            <input
              type="number"
              value={+moment.duration(sessionDuration, "hh:mm").asMinutes()}
              className="w-20 rounded-md border border-neutral-300 px-4 py-1 font-bold focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => {
                handleTimeSlotChange(
                  day,
                  "sessionDuration",
                  Math.floor(e.target.value / 60) + ":" + (e.target.value % 60),
                );
              }}
            />
            <span className="font-fredoka font-normal">Minutes</span>
          </div>
          <button
            className="flex items-center justify-center self-end rounded-md bg-primary  px-4 py-2 text-white"
            onClick={handleCopyToAll}
          >
            <span className="font-fredoka text-sm font-normal">
              Copy to all days
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
TimeSlot.propTypes = {
  day: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  sessionDuration: PropTypes.string.isRequired,
  available: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default TimeSlot;
