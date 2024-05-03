import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-full w-full bg-neutral-100 py-10">
      <div className="mx-4 flex flex-col items-center justify-center gap-x-8 rounded-xl bg-white px-4 py-8 shadow-xl shadow-neutral-300 sm:container sm:mx-auto md:flex-row">
        <div className="flex w-full basis-full flex-col gap-y-8">
          <div className="self-center">
            <h1 className="text-xl font-bold text-neutral-600 sm:text-2xl lg:text-3xl">
              Page Not Found
            </h1>
            <p className="text-lg font-semibold text-neutral-500 sm:text-xl lg:text-2xl">
              No worries... We can help
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-x-2">
            <Link
              title="Services page"
              role="button"
              to="/services?role=vet"
              className="flex-shrink-0 basis-2/5 rounded-lg border-2 border-white bg-neutral-200 p-3 text-center font-semibold text-primary outline-primary transition-all duration-300 hover:border-primary hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary md:basis-1/2 xl:basis-1/3"
            >
              Services page
            </Link>
            <Link
              title="Homepage"
              role="button"
              to="/"
              className="basis-2/5 rounded-lg bg-primary p-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#015d61] focus:outline-none focus:ring-2 focus:ring-primary md:basis-1/2 xl:basis-1/3"
            >
              Homepage
            </Link>
          </div>
        </div>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404"
          className="w-72  basis-1/2 rounded-lg object-cover lg:h-[500px] lg:w-[500px]"
        />
      </div>
    </div>
  );
}

export default PageNotFound;
