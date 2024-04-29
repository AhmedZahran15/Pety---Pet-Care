import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="mx-8 mt-20 flex items-center justify-center gap-x-16 overflow-hidden duration-300 sm:container sm:mx-auto md:justify-between">
      <div className="hidden transition-all duration-300 md:block md:basis-1/2">
        <img
          src="images/homepage/eric-ward-ISg37AI2A-s-unsplash 1.png"
          alt="Man with cat"
        />
      </div>

      <div className="flex h-full flex-col gap-y-6 transition-all duration-300 md:basis-1/2 md:gap-4">
        <div className="font-fredoka text-3xl font-bold text-neutral-900 sm:text-4xl md:text-5xl ">
          HEALTH <span className="text-secondary">CARE</span> FOR YOUR PET
        </div>
        <div className=" font-['Montserrat'] text-xl font-normal text-neutral-600 md:text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit porro
          nostrum commodi quidem esse et facere doloribus corrupti veritatis
          repellat, labore consequuntur sapiente, sunt perspiciatis iure
          excepturi ea reprehenderit delectus.
        </div>
        <Link
          className="w-fit rounded-3xl bg-secondary px-4 py-2 text-center font-['Montserrat'] text-2xl font-bold text-white transition-all duration-300 hover:bg-amber-400 sm:px-12  sm:py-2.5 "
          to="/about"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
