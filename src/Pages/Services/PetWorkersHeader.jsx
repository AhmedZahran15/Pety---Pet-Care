import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
function PetWorkersHeader({ children }) {
  const [filterParams] = useSearchParams();
  const elementRef = useRef(null);
  useEffect(() => {
    elementRef.current.scrollIntoView({
      top: 0,
      behavior: "smooth",
    });
  }, [filterParams]);
  return (
    <div
      ref={elementRef}
      className="flex w-full items-center justify-between gap-2"
    >
      {children}
    </div>
  );
}
PetWorkersHeader.propTypes = {
  children: PropTypes.node,
};
export default PetWorkersHeader;
