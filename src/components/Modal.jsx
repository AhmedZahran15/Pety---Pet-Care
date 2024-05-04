import PropTypes from "prop-types";
import { forwardRef } from "react";

const Modal = forwardRef(({ children, toggleDialog }, ref) => {
  return (
    <dialog
      onReset={(e) => {
        e.preventDefault();
        toggleDialog();
      }}
      className="rounded-lg bg-white backdrop:bg-neutral-900 backdrop:bg-opacity-20"
      ref={ref}
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          toggleDialog();
        }
      }}
    >
      <div>{children}</div>
    </dialog>
  );
});
Modal.displayName = "Dialog";
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  toggleDialog: PropTypes.func.isRequired,
};
export default Modal;
