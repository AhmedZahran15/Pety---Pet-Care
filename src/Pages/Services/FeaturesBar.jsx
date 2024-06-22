import { Link, useSearchParams } from "react-router-dom";
import VetSvg from "../../assets/VetSvg.jsx";
const FeaturesBar = () => {
  const [filterParams] = useSearchParams();
  const role = filterParams ? filterParams.get("role") : "";
  return (
    <div className="flex w-full flex-col items-center gap-x-4 gap-y-4 sm:h-[54px] sm:flex-row">
      <Link
        to="/services?role=vet"
        className={`flex w-full items-center justify-center gap-x-2 rounded-md border border-neutral-300 p-1 sm:basis-1/3  ${role === "vet" ? "bg-[#9BE7FF]" : "bg-[#E9E9E9] hover:bg-neutral-300"}`}
      >
        <VetSvg
          className={`h-[45px] w-[45px] fill-black transition-all duration-200`}
        />
        <span
          className={`text-center font-Montserrat text-lg font-semibold transition-all duration-200 sm:text-sm md:text-lg`}
        >
          Veterinarian
        </span>
      </Link>
      <Link
        to="/services?role=groomer"
        className={`flex h-[54px] w-full items-center justify-center gap-x-2 rounded-md border border-neutral-300 py-1 sm:basis-1/3  ${role === "groomer" ? "bg-[#CEE1FF]" : "bg-[#E9E9E9] hover:bg-neutral-300"}`}
      >
        <img
          src="/images/homepage/petGroomer.png"
          className={`h-[45px] w-[45px] transition-all duration-200`}
          alt="Groomer image"
        />
        <span
          className={`text-center font-Montserrat text-lg font-semibold transition-all duration-200 sm:text-sm md:text-lg `}
        >
          Pet Groomers
        </span>
      </Link>
      <Link
        to="/services?role=petSitter"
        className={`flex h-[54px] w-full items-center justify-center gap-x-2 rounded-md border border-neutral-300 py-1 sm:basis-1/3  ${role === "petSitter" ? "bg-[#FFE88D]" : "bg-[#E9E9E9] hover:bg-neutral-300"}`}
      >
        <img
          src="/images/homepage/petSitter.png"
          className={`h-[45px] w-[45px] transition-all duration-200`}
          alt="Groomer image"
        />
        <span
          className={`text-center font-Montserrat text-lg font-semibold transition-all duration-200 sm:text-sm md:text-lg `}
        >
          Pet Sitters
        </span>
      </Link>
    </div>
  );
};

export default FeaturesBar;
