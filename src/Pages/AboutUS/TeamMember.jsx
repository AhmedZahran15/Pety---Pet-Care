import { SocialLink } from "../../components/SocialLink";
import PropTypes from "prop-types";
export default function TeamMember({ name, role, photo, links }) {
  return (
    <div className="flex h-fit w-fit flex-col items-center divide-y-2 overflow-hidden rounded-md bg-white">
      <div className="flex flex-col text-center text-sm sm:text-base lg:text-lg">
        <img
          alt={name}
          className="aspect-auto h-80 w-60 object-cover object-top"
          src={photo}
        />
        <h2 className="px-2 font-bold text-neutral-800">{name}</h2>
        <h3 className="px-2 text-neutral-500">{role}</h3>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {links.map((link, index) => (
          <SocialLink key={index} href={link[0]} src={link[1]} alt={link[2]} />
        ))}
      </div>
    </div>
  );
}
TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
