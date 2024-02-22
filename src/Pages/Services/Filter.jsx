import { useState } from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
function Filter({ title, imgSrc, imgAlt, children }) {
  const [filterParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(
    filterParams?.get(title.toLowerCase()) ? true : false,
  );
  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-between py-2">
      <div
        className="flex w-full items-center justify-between px-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between gap-2">
          <img className="h-8 w-8" src={imgSrc} alt={imgAlt} />
          <span className="font-medium text-primary">{title}</span>
        </div>
        <img
          src="/images/filters/filterArrow.png"
          alt="Arrow"
          className={`h-3 w-3 transform transition-all duration-150 ${isOpen ? "rotate-90" : ""}`}
        />
      </div>
      <div
        className={`${isOpen ? "max-h-60 pt-2" : ""} box-border flex max-h-0 w-full flex-col items-start justify-center gap-y-2 overflow-hidden px-8 pt-0 transition-all duration-150 ease-in`}
      >
        {children}
      </div>
    </div>
  );
}
Filter.propTypes = {
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Filter;
