import moment from "moment";
import PropTypes from "prop-types";
function DayWorkTimes({ date, currentTimes, handleShowAll, showAll, id }) {
  console.log(currentTimes);
  const todayDate = moment().format("DD-MM-YYYY");
  const tomorrowDate = moment().add(1, "days").format("DD-MM-YYYY");
  return (
    <div className="flex min-w-[96px] flex-col overflow-hidden rounded-lg border-[1px] border-neutral-200">
      <div className="text-md bg-primary py-2 text-center text-white">
        {date === todayDate
          ? "Today"
          : date === tomorrowDate
            ? "Tomorrow"
            : date}
      </div>
      <div className="flex cursor-default flex-col items-center justify-center  gap-y-0.5 py-1 transition-all duration-300">
        {currentTimes.map((time) => (
          <button
            key={id + time}
            disabled={!time[1]}
            className={`w-[70%] cursor-pointer rounded-[4px] py-1 text-center text-xs font-medium text-neutral-700 transition-all duration-150 ease-in-out hover:bg-primary hover:text-white disabled:cursor-default disabled:bg-transparent disabled:text-gray-300 disabled:line-through disabled:decoration-primary disabled:decoration-[1.5px]`}
          >
            {time}
          </button>
        ))}
        <button
          onClick={handleShowAll}
          className="w-[70%] cursor-pointer rounded-[4px] py-1 text-center text-xs font-medium text-primary transition-all duration-150 ease-in-out hover:bg-primary hover:text-white"
        >
          {showAll ? "Show less" : "Show all"}
        </button>
      </div>
      <div className="text-md bg-secondary py-2 text-center text-white transition-all duration-100 hover:bg-amber-500">
        Book
      </div>
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
