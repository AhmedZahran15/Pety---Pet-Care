import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex h-[105dvh] items-center justify-center overflow-hidden bg-[url('/images/homepage/herobackground.png')]  bg-cover bg-center md:bg-bottom bg-no-repeat  md:justify-between  ">
      <img
        className="hidden w-[37dvw] md:mt-[-35px] md:block "
        src="images/homepage/cat in blob 1 1.png"
        alt="cat"
      />

      <div className="flex h-full flex-col gap-9 px-12 py-28  md:gap-5 lg:px-28 xl:pt-40">
        <div className="font-product-sans text-6xl font-bold text-[#18191A] ">
          HEALTH <span className="text-secondary">CARE</span> FOR YOUR PET
        </div>
        <div className=" font-product-sans text-2xl font-normal text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit porro
          nostrum commodi quidem esse et facere doloribus corrupti veritatis
          repellat, labore consequuntur sapiente, sunt perspiciatis iure
          excepturi ea reprehenderit delectus.
        </div>

        <Link
          className="font-['Roboto Flex'] w-[13rem] rounded-3xl bg-secondary  px-4 py-1.5 text-center text-2xl font-bold text-white transition-all duration-300 hover:bg-amber-400 "
          to="/about"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
