import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
function Reservations() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[2];
  return <div></div>;
}

export default Reservations;
