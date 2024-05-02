import PropTypes from "prop-types";
import { forwardRef } from "react";

const Dialog = forwardRef(({ children, toggleDialog }, ref) => {
  return (
    <dialog
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
Dialog.displayName = "Dialog";
Dialog.propTypes = {
  children: PropTypes.node.isRequired,
  toggleDialog: PropTypes.func.isRequired,
};
export default Dialog;
