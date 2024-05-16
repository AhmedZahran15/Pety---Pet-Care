import { Link } from "react-router-dom";

const SignUpSection = () => {
  return (
    <div className="mx-8 mt-20 flex items-center justify-center gap-x-16 overflow-hidden duration-300 sm:container sm:mx-auto md:justify-between">
      <div className="flex h-full flex-col gap-y-6 transition-all duration-300 md:basis-1/2 md:gap-4">
        <span className="font-fredoka text-3xl font-bold text-neutral-900 sm:text-4xl md:text-5xl">
          WHO SHOULD USE PETY?
        </span>
        <span className="font-['Montserrat'] text-xl font-normal text-neutral-600 md:text-2xl">
          PETY is the perfect solution for all pet owners who want to provide
          the best care and services for their beloved pets. Whether you&apos;re
          a busy professional, a pet parent with a hectic schedule, or simply
          looking for convenience and peace of mind, PETY is designed to meet
          your needs.
        </span>
        <Link
          to="/auth/register"
          className="w-fit rounded-3xl bg-primary px-4 py-2 text-center font-['Montserrat'] text-2xl font-bold text-white transition-all duration-300 hover:bg-[#015d61]  sm:px-12  sm:py-2.5 "
        >
          SIGN UP
        </Link>
      </div>
      <div className="hidden transition-all duration-300 md:block md:basis-1/2">
        <img src="/images/homepage/Vector 3.png" alt="Dog" />
      </div>
    </div>
  );
};

export default SignUpSection;
