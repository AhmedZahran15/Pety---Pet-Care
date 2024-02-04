const SignUpSection = () => {
  return (
    <div className="mx-12 mb-10 flex items-center justify-around gap-10 px-8 lg:gap-0">
      <div className="flex w-full flex-col gap-4 md:w-5/12">
        <span
          className="font-['Fredoka'] text-4xl
 font-bold md:text-6xl"
        >
          WHO SHOULD USE PETY?
        </span>
        <span
          className="font-['Montserrat'] text-xl font-normal text-gray-600 md:text-4xl
"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget
          placerat dui. Sed condimentum tincidunt diam,
        </span>
        <button className="my-6 max-w-fit  rounded-full bg-primary px-10 py-3 text-center  font-['Montserrat'] text-3xl font-bold tracking-wide text-white transition-all duration-300 hover:bg-[#015d61] ">
          SIGN UP
        </button>
      </div>
      <div className=" hidden md:block">
        <img src="/images/homepage/Vector 3.png" alt="dog" />
      </div>
    </div>
  );
};

export default SignUpSection;
