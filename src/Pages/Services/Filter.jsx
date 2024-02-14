import { useState } from "react";

function Filter({ title, onChange, imgSrc, imgAlt, children }) {
  const [isOpen, setIsOpen] = useState(false);
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

export default Filter;
