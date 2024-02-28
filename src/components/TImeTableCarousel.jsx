import { useEffect, useRef, useState } from "react";
import DayWorkTimes from "./DayWorkTimes";

const times = [
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "9:00 PM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "10:00 AM",
  "11:00 PM",
];

function TImeTableCarousel() {
  const [currentTimes, setCurrentTimes] = useState(times.slice(0, 6));
  const [showAll, setShowAll] = useState(false);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  function handleShowAll() {
    if (showAll) {
      setCurrentTimes(times.slice(0, 6));
      setShowAll(false);
    } else {
      setShowAll(true);
      setCurrentTimes(times);
    }
  }

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
        carousel.current.offsetWidth * currentIndex + currentIndex * 6 >
        maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft =
        carousel.current.offsetWidth * currentIndex + currentIndex * 6;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="flex min-h-[200px] w-full items-center  justify-center gap-x-2 px-2 md:w-1/2 xl:w-7/12">
      <button
        onClick={movePrev}
        className="my-auto box-border min-w-[10%] rounded-md border-[1px] border-neutral-200 p-0  text-primary transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-[#7fcbce]"
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
        className="carousel-container relative z-0 flex  max-w-[306px] touch-pan-x snap-x snap-mandatory gap-2 overflow-hidden scroll-smooth"
      >
        {Array.from({ length: 30 }, (_, i) => (
          <DayWorkTimes
            key={i}
            currentTimes={currentTimes}
            handleShowAll={handleShowAll}
            showAll={showAll}
          />
        ))}
      </div>
      <button
        className="my-auto box-border min-w-[10%] rounded-md border-[1px] border-neutral-200 p-0  text-primary transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-[#7fcbce]"
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

export default TImeTableCarousel;
