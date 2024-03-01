import { useState } from "react";
import DayWorkTimes from "./DayWorkTimes";
import PropTypes from "prop-types";
import Carousel from "./Carousel";

function TimeTable({ availability , id }) {
  const [showAll, setShowAll] = useState(false);

  function handleShowAll() {
    if (showAll) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  }

  return (
    <Carousel>
      {availability.map((day) => (
        <DayWorkTimes
          key={id + day.date}
          id={id}
          date={day.date}
          currentTimes={
            showAll
              ? day.appointments.map((item) => [item.time, item.isAvailable])
              : day.appointments
                  .slice(0, 6)
                  .map((item) => [item.time, item.isAvailable])
          }
          handleShowAll={handleShowAll}
          showAll={showAll}
        />
      ))}
    </Carousel>
  );
}
TimeTable.propTypes = {
  availability: PropTypes.array,
  id: PropTypes.string,
};
export default TimeTable;
