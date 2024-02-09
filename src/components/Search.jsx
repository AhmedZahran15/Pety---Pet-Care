const Search = () => {
  return (
    <div className="sm:px-30 mt-6 flex flex-col px-20 lg:px-32">
      <div className="mb-16 mt-5 flex w-full flex-col items-center gap-8  lg:flex-row">
        <select className="w-full basis-1/3 cursor-pointer rounded-xl border-2 border-neutral-400  py-3 text-left text-2xl focus:border-secondary ">
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
        <select className="w-full  basis-1/3 cursor-pointer rounded-xl border-2 border-neutral-400 py-3 text-left  text-2xl focus:border-secondary ">
          <option className="text-xl font-normal text-neutral-500">
            Select your location
          </option>
        </select>
        <button className="w-full basis-1/3  rounded-xl bg-secondary py-3 text-center text-3xl font-bold text-white hover:bg-amber-500 ">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
