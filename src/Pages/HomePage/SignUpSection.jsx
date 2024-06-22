import { Link } from "react-router-dom";

const SignUpSection = () => {
  return (
    <div className="mt-20 flex items-center justify-center gap-x-16 overflow-hidden duration-300 md:justify-between">
      <div className="hidden bg-[url(/images/homepage/signUpBg.png)] bg-contain bg-no-repeat p-10 pl-20 transition-all duration-300 md:block md:basis-1/2">
        <img src="/images/homepage/signUpImage.png" alt="Dog" />
      </div>
      <div className="container flex h-full flex-col gap-y-6 px-8 transition-all duration-300 md:basis-1/2 md:gap-y-10">
        <span className=" font-Pacifico text-3xl text-black sm:text-4xl md:text-5xl">
          Who Should Use Pety?
        </span>
        <span className="font-Montserrat text-xl text-black">
          PETY is the perfect solution for all pet owners who want to provide
          the best care and services for their beloved pets. Whether you&apos;re
          a busy professional, or pet parent with a hectic schedule.
        </span>
        <Link
          to="/auth/register"
          className="hover:bg-primaryDark w-fit rounded-xl bg-primary px-4 py-2 text-center text-2xl font-semibold text-white transition-all duration-300  sm:px-12  sm:py-2.5 "
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignUpSection;
