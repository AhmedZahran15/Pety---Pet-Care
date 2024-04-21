import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
function Settings() {
  const { pathname } = useLocation();
  const role = pathname.split("/")[2];
  return <div>Settings</div>;
}

export default Settings;
