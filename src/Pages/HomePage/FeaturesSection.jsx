import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const features = [
  {
    img: "/images/homepage/vet.png",
    alt: "Vet image",
    title: "Veterinarian",
    description: "Book a vet appointment with one of our verified clinics.",
    color: "#69DBFF",
    link: "/services?role=vet",
  },
  {
    img: "/images/homepage/petGroomer.png",
    alt: "Groomer image",
    title: "Pet Grooming",
    description:
      "Book a grooming and cleaning appointment with one of our verified clinics.",
    color: "#CEE1FF",

    link: "/services?role=groomer",
  },
  {
    img: "/images/homepage/petSitter.png",
    alt: "Sitter image",
    title: "Pet Sitting",
    description: "Leave your pet with a verified pet sitter while you are away",
    color: "#6FA5FF",
    link: "/services?role=petSitter",
  },
  {
    img: "/images/homepage/community.png",
    alt: "Community image",
    title: "Pety Community",
    description:
      "Participate in our online community for pet caring and sharing experience",
    color: "#FFCC00",
    link: "/community",
  },
  {
    img: "/images/homepage/chatBot.png",
    alt: "Chatbot image",
    title: "Medbot",
    description:
      "Chat with our Ai Chatbot. It will help you with any questions you have.",
    color: "#BC88FF",
    link: "/chatbot",
  },
];

function FeaturesSection() {
  return (
    <div className="container mx-auto mt-20 flex flex-wrap items-start justify-evenly gap-x-8 gap-y-8 px-8 xl:gap-x-32">
      {features.map((feature) => (
        <Feature
          key={feature.title}
          img={feature.img}
          alt={feature.alt}
          title={feature.title}
          description={feature.description}
          color={feature.color}
          link={feature.link}
        />
      ))}
    </div>
  );
}

function Feature({ img, alt, title, description, color, link }) {
  return (
    <Link className="group w-32 sm:w-64" to={link}>
      <div
        className={`my-4 w-fit rotate-[4deg] rounded-3xl p-6 shadow-xl transition-transform duration-300 ease-in-out group-hover:rotate-0 group-hover:scale-105`}
        style={{
          backgroundColor: color,
        }}
      >
        <img className="h-20 w-20 sm:h-28 sm:w-28" src={img} alt={alt} />
      </div>
      <h2 className="font-Fredoka font-medium text-primary sm:text-2xl">
        {title}
      </h2>
      <p className="font-Montserrat text-sm sm:text-base">{description}</p>
    </Link>
  );
}
Feature.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
export default FeaturesSection;
