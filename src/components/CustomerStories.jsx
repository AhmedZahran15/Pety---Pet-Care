import CustomerStory from "./CustomerStory";

const CustomerStories = () => {
  return (
    <div className="flex flex-col  justify-center bg-[#fffaf0] bg-cover bg-no-repeat  pb-32 pt-28 xl:bg-transparent xl:bg-[url('/images/homepage/customerbackground.png')] ">
      <h1 className="text-center text-6xl font-bold">CUSTOMER STORIES</h1>
      <div className="mx-16 my-16 flex flex-col gap-6 md:flex-row lg:mx-40">
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

      <button className="w-80 self-center rounded-xl bg-primary px-10 py-5 text-center text-3xl font-bold text-white transition-all hover:bg-[#015d61]">
        Read More
      </button>
    </div>
  );
};

export default CustomerStories;
