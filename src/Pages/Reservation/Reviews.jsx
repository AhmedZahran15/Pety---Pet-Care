import PropTypes from "prop-types";
import AddReview from "./AddReview";


function Reviews({ reviews }) {
  console.log(reviews);
  return (
    <div className="rounded-xl bg-white py-2 shadow-lg shadow-neutral-300">
      <AddReview />
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};
export default Reviews;
