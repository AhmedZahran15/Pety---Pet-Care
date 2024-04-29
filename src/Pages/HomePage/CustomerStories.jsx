import CustomerStory from "./CustomerStory";

const CustomerStories = () => {
  return (
    <div className="mx-8 mt-20 flex flex-col items-center justify-center gap-y-8 sm:container sm:mx-auto">
      <h1 className="font-fredoka text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl">
        CUSTOMER STORIES
      </h1>
      <div className=" flex flex-col gap-6 lg:flex-row">
        <CustomerStory
          name="Mirage"
          image="https://i.pravatar.cc/50"
          title="The Pet Clinic"
        />
        <CustomerStory
          name="Kareem"
          image="https://i.pravatar.cc/48"
          title="The Pet Clinic"
        />
        <CustomerStory
          name="Amr"
          image="https://i.pravatar.cc/49"
          title="The Pet Clinic"
        />
      </div>

      <button className="w-fit rounded-3xl bg-primary px-4 py-2 text-center font-['Montserrat'] text-2xl font-bold text-white transition-all duration-300 hover:bg-[#015d61]  sm:px-12  sm:py-2.5">
        Read More
      </button>
    </div>
  );
};

export default CustomerStories;
