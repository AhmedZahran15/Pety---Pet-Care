import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function RouteModal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-neutral-900 bg-opacity-30"
        onClick={closeHandler}
      ></div>
      <dialog open className="fixed bottom-0 top-0 rounded-lg bg-white">
        <div>{children}</div>
      </dialog>
    </>
  );
}
RouteModal.propTypes = {
  children: PropTypes.node.isRequired,
};
export default RouteModal;
