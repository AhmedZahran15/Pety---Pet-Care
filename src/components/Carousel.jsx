import { useRef, useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carousel({ children }) {
  const [sliderRef, setSliderRef] = useState(null);
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 350,

    slidesToShow: 3,
    slidesToScroll: 3,
    swipeToSlide: true,
    draggable: false,
    arrows: false,
    adaptiveHeight: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div
      ref={carouselRef}
      className="flex items-center justify-center gap-x-2 self-center transition-all duration-200"
    >
      <button
        onClick={sliderRef?.slickPrev}
        disabled={currentIndex === 0}
        className="my-auto box-border min-w-[40px] rounded-md border-[1px] border-neutral-200 bg-white p-0 text-primary  transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-secondary"
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
      <div className="carousel:w-[305px] w-56">
        <Slider ref={setSliderRef} {...settings}>
          {children}
        </Slider>
      </div>
      <button
        className="my-auto box-border min-w-[40px] rounded-md border-[1px] border-neutral-200 bg-white p-0  text-primary transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-secondary"
        onClick={sliderRef?.slickNext}
        disabled={currentIndex === 4}
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
