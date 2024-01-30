const SignUpSection = () => {
  return (
    <div className="mx-12 mb-10 flex items-center justify-around gap-10 px-8 lg:gap-0">
      <div className="flex w-full flex-col gap-4 md:w-5/12 ">
        <span className="text-4xl font-['Fredoka']
 font-bold md:text-6xl">
          WHO SHOULD USE PETY?
        </span>
        <span className="text-xl font-normal text-gray-600 md:text-4xl font-['Montserrat']
">
   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget placerat dui. Sed condimentum tincidunt diam, 
        </span>
        <button className="my-6 max-w-fit  rounded-full bg-primary px-10 py-3 text-center  text-3xl font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#015d61] font-['Montserrat'] ">
          SIGN UP
        </button>
      </div>

      <img
        className="hidden max-w-sm md:block xl:max-w-fit"
        src="/images/homepage/Vector 3.png"
        alt="dog"
      />
    </div>
  );
};

export default SignUpSection;
