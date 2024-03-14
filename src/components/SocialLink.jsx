import PropTypes from "prop-types";
export const SocialLink = ({ href, src, alt }) => {
  return (
    <a
      className="w-[28px] transition-all duration-200 hover:scale-125"
      target="_blank"
      rel="noreferrer"
      href={href}
    >
      <img src={src} alt={alt} />
    </a>
  );
};
SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
