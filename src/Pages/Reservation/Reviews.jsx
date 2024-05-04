import PropTypes from "prop-types";

function Reviews({ children }) {
  return (
    <div className="flex flex-col gap-y-6 rounded-xl bg-white px-4 py-3 shadow-lg shadow-neutral-300">
      {children}
    </div>
  );
}

Reviews.propTypes = {
  children: PropTypes.node,
};
export default Reviews;
