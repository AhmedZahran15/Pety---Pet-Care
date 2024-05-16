import CustomerStory from "./CustomerStory";

const Stories = [
  {
    name: "Mirage",
    image: "/userImage.png",
    title: "The Pet Clinic",
    text: "I recently used PETY to book a grooming appointment for my dog, and I couldn't be happier with the experience! The platform is user-friendly, making it easy to browse through different grooming salons and choose the one that best suited my needs. The booking process was seamless, and I appreciated the option to select the appointment date and time that worked for me. The grooming salon I chose provided top-notch service, and my dog came back looking and feeling great. I highly recommend PETY to all pet owners looking for hassle-free pet services!",
  },
  {
    name: "Kareem",
    image: "/userImage.png",
    title: "The Pet Clinic",
    text: "PETY saved the day when I needed to book a last-minute vet appointment for my cat. With PETY's intuitive interface, I was able to quickly find a nearby vet clinic with availability that fit my schedule. The appointment booking process was straightforward, and I received confirmation almost instantly. The vet clinic provided excellent care for my cat, and I was impressed by the professionalism of the staff. PETY truly made the process stress-free, and I'll definitely be using it for all my future pet service needs!",
  },
  {
    name: "Amr",
    image: "/userImage.png",
    title: "The Pet Clinic",
    text: "I recently used PETY to find a pet sitter for my dog while I was out of town, and I couldn't have been happier with the experience. PETY's extensive network of pet sitters made it easy to find someone reliable and trustworthy. I appreciated the detailed profiles and reviews of each pet sitter, which helped me make an informed decision. The booking process was quick and efficient, and I felt confident knowing that my dog was in good hands. The pet sitter provided updates and photos throughout the day, which gave me peace of mind. I highly recommend PETY to anyone in need of pet sitting services!",
  },
];

const CustomerStories = () => {
  return (
    <div className="mx-8 mt-20 flex flex-col items-center justify-center gap-y-8 sm:container sm:mx-auto">
      <h1 className="font-fredoka text-3xl font-bold text-neutral-800 sm:text-4xl md:text-5xl">
        CUSTOMER STORIES
      </h1>
      <div className=" flex flex-col gap-6 lg:flex-row">
        {Stories.map((story, index) => (
          <CustomerStory
            key={index}
            name={story.name}
            image={story.image}
            title={story.title}
            text={story.text}
          />
        ))}
      </div>

      <button className="w-fit rounded-3xl bg-primary px-4 py-2 text-center font-['Montserrat'] text-2xl font-bold text-white transition-all duration-300 hover:bg-[#015d61]  sm:px-12  sm:py-2.5">
        Read More
      </button>
    </div>
  );
};

export default CustomerStories;
