import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import VetSvg from "../../assets/VetSvg";
import PetGroomingSvg from "../../assets/PetGroomingSvg";
import PetSitter from "../../assets/PetSitterSVG";
import ArrowSvg from "../../assets/ArrowSvg";
function ExpandableList({ text, setSidebarOpen }) {
  const role =
    text === "Veterinarian"
      ? "vet"
      : text === "Pet Sitter"
        ? "petSitter"
        : "groomer";
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(pathname.includes(role));
  return (
    <div className="">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`font-fredoka relative flex cursor-pointer flex-row items-center gap-x-2 rounded-md px-3 py-[6px] text-xl  font-medium text-neutral-950 transition-all duration-200 hover:bg-neutral-200  ${pathname.includes(role) ? "bg-neutral-200" : ""}`}
      >
        {text === "Veterinarian" ? (
          <VetSvg className="h-8 w-8 fill-neutral-800" />
        ) : text === "Pet Sitter" ? (
          <PetSitter className="h-8 w-8 stroke-neutral-800" />
        ) : (
          <PetGroomingSvg className="h-8 w-8 fill-neutral-800" />
        )}

        {text}
        <ArrowSvg
          className={`ml-auto h-6 w-6 fill-neutral-800 transition-all duration-100 ${isOpen ? "rotate-180 transform" : ""}`}
        />
      </div>
      <div
        className={`flex overflow-hidden transition-all duration-100 ${isOpen ? "h-full" : "h-0"} font-fredoka flex-col gap-y-2 text-lg font-normal text-neutral-400`}
      >
        <Link
          onClick={() => setSidebarOpen(false)}
          className={`group flex w-full items-center gap-x-[18px] px-5 transition-all duration-200 hover:text-neutral-950 ${pathname.includes(`${role}/reservations`) ? "text-neutral-950" : ""}`}
          to={`/dashboard/${role}/reservations`}
        >
          <div
            className={` h-[14px] w-[14px] rounded-full border-[3px] bg-neutral-400 transition-all duration-200 group-hover:border-primaryLight group-hover:bg-primary ${pathname.includes(`${role}/reservations`) ? " border-primaryLight bg-primary" : "border-neutral-100"}`}
          />
          Reservations
        </Link>
        <Link
          onClick={() => setSidebarOpen(false)}
          className={`group flex w-full items-center gap-x-[18px] px-5 transition-all duration-200 hover:text-neutral-950 ${pathname.includes(`${role}/timeSlots`) ? "text-neutral-950" : ""}`}
          to={`/dashboard/${role}/timeSlots`}
        >
          <div
            className={`h-[14px] w-[14px] rounded-full border-[3px] bg-neutral-400 transition-all duration-200 group-hover:border-primaryLight group-hover:bg-primary ${pathname.includes(`${role}/timeSlots`) ? "  border-primaryLight bg-primary" : "border-neutral-100"}`}
          />
          Time Slots
        </Link>
        <Link
          onClick={() => setSidebarOpen(false)}
          className={`group flex w-full items-center gap-x-[18px] px-5 transition-all duration-200 hover:text-neutral-950 ${pathname.includes(`${role}/settings`) ? "text-neutral-950" : ""}`}
          to={`/dashboard/${role}/settings`}
        >
          <div
            className={`h-[14px] w-[14px] rounded-full border-[3px] bg-neutral-400 transition-all duration-200 group-hover:border-primaryLight group-hover:bg-primary ${pathname.includes(`${role}/settings`) ? "  border-primaryLight bg-primary" : "border-neutral-100"}`}
          />
          Settings
        </Link>
      </div>
    </div>
  );
}
ExpandableList.propTypes = {
  text: PropTypes.string,
  setSidebarOpen: PropTypes.func,
};
export default ExpandableList;
