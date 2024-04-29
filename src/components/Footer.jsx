import PropTypes from "prop-types";
import { SocialLink } from "./SocialLink";
const FooterLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-xl font-normal text-neutral-500 transition-all duration-100 hover:text-neutral-950 sm:text-2xl"
    >
      {text}
    </a>
  );
};
FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const socialLinks = [
  ["#", "images/Facebook.svg", "facebook"],
  ["#", "images/Instagram.svg", "instagram"],
  ["#", "images/Twitter.svg", "twitter"],
  ["#", "images/linkedIn.svg", "linkedin"],
  ["#", "images/Youtube.svg", "youtube"],
];
const Footer = () => {
  return (
    <footer className="flex flex-wrap items-start justify-start gap-y-4 bg-neutral-100 px-8 pb-4 pt-20 sm:justify-around">
      <div className="w-48">
        <div className="mb-2 text-2xl font-bold sm:text-3xl">PETY</div>
        <FooterLink href="#" text="Terms of Service" />
      </div>
      <div className="flex w-40 flex-col gap-3">
        <div className="font-['Product Sans'] text-2xl font-bold sm:text-3xl">
          Features
        </div>
        <FooterLink href="/services?role=vet" text="Vet Booking" />
        <FooterLink href="/services?role=petSitter" text="Pet Sitting" />
        <FooterLink href="/services?role=groomer" text="Pet Grooming" />
      </div>
      <div className="flex flex-row items-start justify-start gap-6 sm:flex-col ">
        <div>
          <div className="font-['Product Sans'] text-2xl font-bold sm:text-3xl">
            Contact US
          </div>
          <FooterLink href="#" text="Support Center" />
        </div>
        <div className='font-["Product Sans"] flex w-48 flex-wrap text-2xl font-bold sm:text-3xl'>
          Stay in Touch
          <div className="my-5 flex flex-row  gap-2">
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link[0]}
                src={link[1]}
                alt={link[2]}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
