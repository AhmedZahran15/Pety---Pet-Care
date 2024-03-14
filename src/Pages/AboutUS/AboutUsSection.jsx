import Statistics from "./Statistics";
export default function AboutUsSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 px-6 py-10 text-center text-lg font-medium text-neutral-500 lg:w-3/4">
      <h1 className="font-fredoka text-3xl font-bold text-neutral-800 sm:text-5xl">
        Who We Are
      </h1>
      <p>
        Welcome to <span className="font-bold text-neutral-800"> PETY</span>,
        where we bring together pet owners and service providers in a convenient
        and efficient manner. We understand that your pets are not just animals;
        they are beloved members of your family. That&apos;s why we have created
        a comprehensive website designed to make booking veterinary services,
        pet sitters, and pet groomers a breeze.
      </p>
      <div
        className="h-60 w-full rounded-xl bg-[url('images/AboutUs/2.jpg')] bg-cover shadow-xl shadow-neutral-300 sm:h-72 sm:bg-[url('images/AboutUs/1.jpg')]"
        alt="Team photo"
      ></div>
      <p>
        At our core, we are committed to connecting pet owners with reliable and
        professional service providers. We know how important it is to find
        trustworthy care for your furry friends, whether it&apos;s routine
        check-ups, grooming sessions, or someone to look after them when
        you&apos;re away. With our platform, you can easily browse through a
        wide range of vet clinics, pet sitters, and groomers, read reviews from
        other pet owners, and book appointments with just a few clicks.
      </p>
      <Statistics />
    </div>
  );
}
