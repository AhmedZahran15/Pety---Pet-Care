import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className=" w-full bg-[url('/images/homepage/bgHero.svg')] bg-cover bg-bottom">
      <div className="mx-auto flex flex-col items-center justify-center gap-x-16 overflow-hidden px-8  duration-300 sm:container md:flex-row md:justify-between">
        <div className="flex h-full flex-col gap-y-6 py-8 text-white transition-all duration-300 md:basis-1/2 md:gap-y-10">
          <div className="font-Pacifico text-3xl sm:text-5xl md:text-6xl ">
            Health Care For Your Pet
          </div>
          <div className=" font-Montserrat text-xl font-normal">
            Pet Health Made Easy: Connect with trusted veterinarians for
            check-ups, emergency care, and expert advice, ensuring your
            pet&apos;s well-being with convenient scheduling and preventive
            treatments.
          </div>
          <Link
            className="w-fit rounded-xl bg-yellowDark px-4 py-2 text-center text-2xl font-bold text-white transition-all duration-300 hover:bg-amber-400 sm:px-12  sm:py-2.5 "
            to="/about"
          >
            Learn More
          </Link>
        </div>
        <div className="transition-all duration-300 md:basis-1/2">
          <img src="images/homepage/heroImage.png" alt="Man with cat" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
