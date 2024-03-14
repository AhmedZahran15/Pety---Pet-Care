import PropTypes from "prop-types";
import { SocialLink } from "./SocialLink";
const FooterLink = ({ href, text }) => {
  return (
    <a
      href={href}
      className="text-2xl font-normal text-neutral-500 transition-all duration-100 hover:font-medium hover:text-primary"
    >
      {text}
    </a>
  );
};
FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const links = [
  ["#", "images/Facebook.svg", "facebook"],
  ["#", "images/Instagram.svg", "instagram"],
  ["#", "images/Twitter.svg", "twitter"],
  ["#", "images/linkedIn.svg", "linkedin"],
  ["#", "images/Youtube.svg", "youtube"],
];
const Footer = () => {
  return (
    <footer className="flex w-full flex-wrap items-start justify-start gap-y-4 bg-neutral-100 px-10 py-16 sm:justify-around">
      <div className="w-48">
        <div className="mb-2 text-3xl font-bold">PETY</div>
        <FooterLink href="#" text="Terms of Service" />
      </div>
      <div className="flex w-40 flex-col gap-3">
        <div className="font-['Product Sans'] text-3xl font-bold">Features</div>
        <FooterLink
          href="/services?role=vet&limit=6&page=1"
          text="Vet Booking"
        />
        <FooterLink
          href="/services?role=petSitter&limit=6&page=1"
          text="Pet Sitting"
        />
        <FooterLink
          href="/services?role=groomer&limit=6&page=1"
          text="Pet Grooming"
        />
      </div>
      <div className="flex flex-row items-start justify-start gap-6 sm:flex-col ">
        <div>
          <div className="font-['Product Sans'] text-3xl font-bold">
            Contact US
          </div>
          <FooterLink href="#" text="Support Center" />
        </div>
        <div className='font-["Product Sans"] flex w-48 flex-wrap text-3xl font-bold'>
          Stay in Touch
          <div className="my-5 flex flex-row  gap-2">
            {links.map((link, index) => (
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
