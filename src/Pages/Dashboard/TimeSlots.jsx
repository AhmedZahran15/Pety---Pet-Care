import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
function TimeSlots() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[2];
  return <div>TimeSLots</div>;
}

export default TimeSlots;
