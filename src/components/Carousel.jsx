import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function Carousel({ children }) {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex > maxScrollWidth.current
      );
    }

    return false;
  };
  carousel.onscroll = () => {
    if (carousel !== null && carousel.current !== null) {
      setCurrentIndex(
        Math.min(
          Math.floor(
            carousel.current.scrollLeft / carousel.current.offsetWidth,
          ),
          children.length - 1,
        ),
      );
    }
  };
  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft =
        carousel.current.offsetWidth * currentIndex + currentIndex * 7;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="flex min-h-[300px] items-center justify-center gap-x-2 self-center px-2 py-4 transition-all duration-200">
      <button
        onClick={movePrev}
        className="my-auto box-border min-w-[40px] rounded-md border-[1px] border-neutral-200 bg-white p-0 text-primary  transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-[#7fcbce]"
        disabled={isDisabled("prev")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div
        ref={carousel}
        className="relative z-0 mx-auto box-border flex min-h-[270px] max-w-[201px] touch-pan-x snap-x  snap-mandatory gap-2 overflow-scroll scroll-smooth no-scrollbar sm:max-w-[305px]"
      >
        {children}
      </div>
      <button
        className="my-auto box-border min-w-[40px] rounded-md border-[1px] border-neutral-200 bg-white p-0  text-primary transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-[#7fcbce]"
        onClick={moveNext}
        disabled={isDisabled("next")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=""
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
Carousel.propTypes = {
  children: PropTypes.node,
};
export default Carousel;
