import { useSearchParams } from "react-router-dom";

const icons = {
  vet: "/images/vetImg.png",
  groomer: "/images/groomerImg.png",
  petSitter: "/images/sitterImg.png",
};

const HeroSection = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "vet";
  return (
    <div className=" mb-16 w-full bg-primary">
      <div className="mx-auto flex flex-col items-center justify-center px-8  duration-300 sm:container md:flex-row">
        <div className="flex h-full flex-col gap-y-6 py-8 text-white transition-all duration-300">
          <div className="font-Pacifico text-3xl sm:text-5xl md:text-6xl ">
            Book a Service
          </div>
          <div className=" font-Montserrat text-xl font-normal">
            Vet appointments, grooming, pet sitting, and more.
          </div>
        </div>
        <div className="-mb-20 transition-all duration-300">
          <img src={icons[role]} className="h-80" alt="Hero image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
