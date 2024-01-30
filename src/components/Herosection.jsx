import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex h-[105dvh] items-center justify-center overflow-hidden duration-300 md:justify-between  md:bg-bottom  ">
      <img
        className="hidden w-[37dvw] md:mt-[-35px] md:block transition-all duration-300  ml-20 "
        src="public/images/homepage/eric-ward-ISg37AI2A-s-unsplash 1.png"
        alt="cat"
      />

      <div className="flex h-full flex-col gap-9 px-12 py-28  md:gap-5 lg:px-28 xl:pt-40 transition-all duration-300">
        <div className="font-[Fredoka]  text-6xl font-bold text-neutral-800 ">
          HEALTH <span className="text-secondary">CARE</span> FOR YOUR PET
        </div>
        <div className=" font-['Montserrat'] text-2xl font-normal text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit porro
          nostrum commodi quidem esse et facere doloribus corrupti veritatis
          repellat, labore consequuntur sapiente, sunt perspiciatis iure
          excepturi ea reprehenderit delectus.
        </div>

        <Link
          className="font-['Roboto Flex'] w-[13rem] rounded-3xl bg-secondary  px-4 py-1.5 text-center text-2xl font-bold text-white transition-all duration-300 hover:bg-amber-400  font-['Montserrat'] "
          to="/about"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
