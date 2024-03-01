import { useState } from "react";
import DayWorkTimes from "./DayWorkTimes";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import moment from "moment";

function TimeTable({ availability, id }) {
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
      {Array.from({ length: 7 }, (_, i) => (
        <DayWorkTimes
          key={id + i}
          id={id}
          date={moment().add(i, "days").format("DD-MM-YYYY")}
          currentTimes={
            showAll
              ? availability
                  .filter(
                    (item) =>
                      item.date ===
                      moment().add(i, "days").format("DD-MM-YYYY"),
                  )[0]
                  ?.appointments.map((item) => [item.time, item.isAvailable])
              : availability
                  .filter(
                    (item) =>
                      item.date ===
                      moment().add(i, "days").format("DD-MM-YYYY"),
                  )[0]
                  ?.appointments.map((item) => [item.time, item.isAvailable])
                  .slice(0, 6)
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
