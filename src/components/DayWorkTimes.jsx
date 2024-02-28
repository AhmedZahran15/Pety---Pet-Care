import PropTypes from "prop-types";
function DayWorkTimes({ currentTimes, handleShowAll, showAll }) {
  return (
    <div className="flex min-w-[96px] flex-col overflow-hidden rounded-lg border-[1px] border-neutral-200">
      <div className="text-md bg-primary py-2 text-center text-white">
        Tomorrow
      </div>
      <div className="flex cursor-default flex-col  items-center justify-center gap-y-0.5 py-1">
        {currentTimes.map((time) => (
          <div
            key={time}
            className="w-[70%] cursor-pointer rounded-[4px] py-1 text-center text-xs font-medium text-neutral-700 transition-all duration-150 ease-in-out hover:bg-primary hover:text-white"
          >
            {time}
          </div>
        ))}
        <button
          onClick={handleShowAll}
          className="w-[70%] cursor-pointer rounded-[4px] py-1 text-center text-xs font-medium text-primary transition-all duration-150 ease-in-out hover:bg-primary hover:text-white"
        >
          {showAll ? "Show less" : "Show all"}
        </button>
      </div>
      <div className="text-md bg-secondary py-2 text-center text-white">
        Book
      </div>
    </div>
  );
}
DayWorkTimes.propTypes = {
  currentTimes: PropTypes.array,
  handleShowAll: PropTypes.func,
  showAll: PropTypes.bool,
};
export default DayWorkTimes;
