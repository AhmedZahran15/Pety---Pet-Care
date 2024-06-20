const stories = [
  {
    name: "Ahmed Zahran",
    image: "/images/homepage/hamster.png",
    title: "The Pet Clinic",
    text: "I booked a grooming appointment for my hamster with PETY and couldn't be happier! The platform was easy to use, the booking process was seamless, and the grooming service was top-notch. Highly recommend PETY for hassle-free pet services!",
  },
  {
    name: "Kareem Azzam",
    image: "/images/homepage/dog.png",
    title: "UA clinic",
    text: "PETY saved the day for a last-minute vet appointment for my cat. The intuitive interface made it easy to find a nearby clinic with availability. The booking process was straightforward, and I got instant confirmation. The clinic's care was excellent.",
  },
  {
    name: "Amr Sherif",
    image: "/images/homepage/cat.png",
    title: "PetLife Clinic",
    text: "I used PETY to find a pet sitter for my dog while I was away, PETY's network of sitters made it easy to find someone reliable. Detailed profiles and reviews helped me choose. Booking was quick, and the updates from the sitter gave me peace of mind.",
  },
];

const CustomerStories = () => {
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center justify-center gap-y-20 px-8">
      <h1 className="font-Pacifico self-end text-3xl sm:text-5xl md:text-6xl">
        Customer Reviews
      </h1>
      <div className="flex flex-col gap-6 gap-y-16 px-8 sm:px-0 lg:flex-row">
        <article className="relative flex basis-1/3 flex-col gap-y-4 rounded-2xl bg-white p-4 shadow-md shadow-neutral-300">
          <img
            src="/images/homepage/redHeart.png"
            className="absolute -left-16 -top-24 h-44 w-44"
            alt="Heart"
          />
          <div className="-mt-16 h-36 w-36 self-center overflow-clip rounded-full border">
            <img
              className="h-40 w-48 scale-[1.4] rounded-full"
              src={stories[0].image}
            />
          </div>
          <div className="font-Montserrat line-clamp-[12] text-center text-lg italic opacity-70">
            &quot;{stories[0].text}&quot;
          </div>
          <div className="font-Montserrat flex flex-col items-center gap-0 self-center">
            <span className="text-lg font-semibold">{stories[0].name}</span>
            <span className="whitespace-pre text-base opacity-70">
              {stories[0].title}
            </span>
          </div>
        </article>
        <article className="relative flex basis-1/3 flex-col gap-y-4 rounded-2xl bg-white p-4 shadow-md shadow-neutral-300">
          <img
            src="/images/homepage/yellowHearts.png"
            className="absolute -right-32 -top-12 w-60"
            alt="Heart"
          />
          <div className="-mt-16 h-36 w-36 self-center overflow-clip rounded-full border">
            <img className="rounded-full" src={stories[1].image} />
          </div>
          <div className="font-Montserrat line-clamp-[12] text-center text-lg italic opacity-70">
            &quot;{stories[1].text}&quot;
          </div>
          <div className="font-Montserrat flex flex-col items-center gap-0 self-center">
            <span className="text-lg font-semibold">{stories[1].name}</span>
            <span className="whitespace-pre text-base opacity-70">
              {stories[1].title}
            </span>
          </div>
        </article>
        <article className="relative flex basis-1/3 flex-col gap-y-4 rounded-2xl bg-white p-4 shadow-md shadow-neutral-300">
          <div className="-mt-16 h-36 w-36 self-center overflow-clip rounded-full border">
            <img
              className="h-40 w-48 scale-[1.4] rounded-full"
              src={stories[2].image}
            />
          </div>
          <div className="font-Montserrat line-clamp-[12] text-center text-lg italic opacity-70">
            &quot;{stories[2].text}&quot;
          </div>
          <div className="font-Montserrat flex flex-col items-center gap-0 self-center">
            <span className="text-lg font-semibold">{stories[2].name}</span>
            <span className="whitespace-pre text-base opacity-70">
              {stories[2].title}
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default CustomerStories;
