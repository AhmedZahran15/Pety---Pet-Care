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
    <div ref={elementRef} className="-mb-10 flex w-full justify-between">
      {children}
    </div>
  );
}
PetWorkersHeader.propTypes = {
  children: PropTypes.node,
};
export default PetWorkersHeader;
