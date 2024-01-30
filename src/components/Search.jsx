const Search = () => {
  return (
    <div className="flex flex-col lg:px-32 sm:px-30 px-20 ">
      <div className="mt-5 mb-16 flex w-full flex-col items-center gap-8  lg:flex-row">
        <select className="focus:border-secondary cursor-pointer rounded-xl border-2 border-neutral-400 w-full  py-3 basis-1/3 text-left text-2xl ">
          <option className="hidden text-xl font-normal text-neutral-500">
            What are you looking for?
          </option>
          <option className="text-xl font-normal text-neutral-500">Vet</option>
          <option className=" text-xl font-normal text-neutral-500">
            Pet Setting
          </option>
          <option className=" text-xl font-normal text-neutral-500">
            Pet Grooming
          </option>
        </select>
        <select className="w-full  focus:border-secondary cursor-pointer rounded-xl border-2 border-neutral-400 basis-1/3 py-3  text-left text-2xl ">
          <option className="text-xl font-normal text-neutral-500">
            Select your location
          </option>
        </select>
        <button className="w-full rounded-xl  bg-secondary hover:bg-amber-500 basis-1/3 py-3 text-center text-3xl font-bold text-white ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
