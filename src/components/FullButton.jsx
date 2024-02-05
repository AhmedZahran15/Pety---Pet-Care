import { useContext } from "react";
import { Loader } from "./Loader";
import PropTypes from "prop-types";
import AuthContext from "../contexts/AuthContext";

export const FullButton = ({ text, enabled, onClick }) => {
  const { isLoading } = useContext(AuthContext);
  return (
    <button
      disabled={!enabled}
      className={
        "mt-6 w-1/2 self-center rounded-xl px-4 py-2 text-lg text-white  hover:bg-[#1a8588] disabled:bg-gray-300 " +
        (enabled ? "cursor-pointer bg-primary" : "bg-gray-400") +
        (isLoading ? " cursor-not-allowed" : "")
      }
      onClick={onClick}
    >
      {isLoading && <Loader />} <span>{isLoading ? "Loading..." : text}</span>
    </button>
  );
};

FullButton.propTypes = {
  text: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
