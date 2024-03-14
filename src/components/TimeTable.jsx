import { useState } from "react";
import DayWorkTimes from "./DayWorkTimes";
import PropTypes from "prop-types";
import Carousel from "./Carousel";
import moment from "moment";

function TimeTable({ data }) {
  const { _id: id, availabilityFormatted: availability } = data;
  const [showAll, setShowAll] = useState(false);

  function handleShowAll() {
    if (showAll) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  }

  return (
    <div className="flex flex-col self-center">
      <Carousel>
        {Array.from({ length: 7 }, (_, i) => (
          <DayWorkTimes
            key={id + i}
            data={data}
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
      {showAll && (
        <div className="-mt-2 pb-1 text-center text-xs font-medium text-secondary">
          Please choose a time for your appointment.
        </div>
      )}
    </div>
  );
}
TimeTable.propTypes = {
  data: PropTypes.object.isRequired,
};
export default TimeTable;
