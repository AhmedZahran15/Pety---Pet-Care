import { useEffect, useRef, useState } from "react";
import FullArrowSVG from "../assets/FullArrowSVG";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SearchDropdown({
  title,
  data = [],
  iconSrc,
  state,
  setState,
  placeholder,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const newRef = useRef(null);
  const carouselRef = useRef(null);
  const [sliderRef, setSliderRef] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 350,
    slidesToScroll: 1,
    swipeToSlide: data[0] === "Veterinarian" ? false : true,
    draggable: false,
    rows: 8,
    slidesPerRow: data[0] === "Veterinarian" ? 1 : 2,
    className: `px-4 w-32 sm:w-72 pt-4 ${data[0] === "Veterinarian" ? "max-w-[128px]" : ""}`,
    arrows: false,
    adaptiveHeight: true,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    },
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesPerRow: data[0] === "Veterinarian" ? 1 : 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesPerRow: 1,
        },
      },
    ],
  };
  function handleClickOutside(event) {
    if (carouselRef.current && carouselRef.current.contains(event.target)) {
      return;
    } else if (newRef.current && !newRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });
  return (
    <div className="relative basis-1/3">
      <div
        ref={newRef}
        onClick={() => {
          setIsOpen((prev) => !prev);
          !isOpen &&
            newRef.current.scrollIntoView({
              top: 0,
              behavior: "smooth",
              block: "start",
            });
        }}
        className={`relative ${
          data[0] === "Veterinarian"
            ? "rounded-t-xl md:rounded-l-xl md:rounded-tr-none "
            : ""
        } flex min-h-[80px] w-full cursor-pointer items-center gap-x-4  bg-white px-8 pt-3 text-lg font-medium text-primary hover:bg-neutral-50`}
      >
        <span className="absolute left-8 top-2 text-sm font-medium text-neutral-500">
          {title}
        </span>
        <span className="absolute right-8 top-7">
          <FullArrowSVG isOpen={isOpen} />
        </span>
        <img className="mt-1 h-6 w-6" src={iconSrc} alt="" />
        <span className="mt-3">
          {state.id
            ? state.name
            : state === "Veterinarian" || state.id === 0
              ? placeholder
              : state}
        </span>
      </div>
      <div
        ref={carouselRef}
        className={`${
          isOpen ? "flex" : "hidden"
        } container absolute left-0 top-20 z-10 mt-2 w-fit justify-center border-[1px] border-neutral-300 bg-white px-4 shadow-sm shadow-neutral-300`}
      >
        <button
          hidden={data.length <= 16}
          className="mt-4 box-border min-w-[35px]  self-start rounded-md border-[1px] border-neutral-200 bg-white p-0 text-primary  transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-[#7fcbce]"
          onClick={sliderRef?.slickPrev}
          disabled={currentIndex === 0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <Slider ref={setSliderRef} {...settings}>
          {data.length === 0 && (
            <div
              className="h-8 max-w-[130px] cursor-pointer truncate text-left text-base font-medium text-neutral-700 hover:bg-neutral-100"
              onClick={() => {
                setState({
                  id: 0,
                  name: "",
                });

                setIsOpen(false);
              }}
            >
              All areas
            </div>
          )}
          {data.map((item) => (
            <div
              key={
                item.id
                  ? item.governorate_name_en
                    ? item.governorate_name_en
                    : item.city_name_en
                  : item
              }
              className="h-8 max-w-[130px] cursor-pointer truncate text-left text-base font-medium text-neutral-700 hover:bg-neutral-100"
              onClick={() => {
                item.id
                  ? setState({
                      id: item.id,
                      name: item.governorate_name_en
                        ? item.governorate_name_en
                        : item.city_name_en,
                    })
                  : setState(item);
                setIsOpen(false);
              }}
            >
              {item.id
                ? item.governorate_name_en
                  ? item.governorate_name_en
                  : item.city_name_en
                : item}
            </div>
          ))}
        </Slider>
        <button
          hidden={data.length <= 16}
          className="mt-4 box-border min-w-[35px] self-start rounded-md border-[1px] border-neutral-200 bg-white p-0  text-primary transition-all duration-200 hover:bg-primary hover:text-white disabled:bg-neutral-50 disabled:text-[#7fcbce]"
          onClick={sliderRef?.slickNext}
          disabled={
            currentIndex === sliderRef?.innerSlider.state.slideCount - 1
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=""
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
SearchDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
  iconSrc: PropTypes.string.isRequired,
  state: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  setState: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default SearchDropdown;
