import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import StarRating from "../../components/StarRating";
import AuthContext from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { Loader } from "../../components/Loader";
import PropTypes from "prop-types";
function AddReview({ handleAddReview }) {
  const [review, setReview] = useState({ rating: 0, review: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (review.rating === 0) {
      toast.error("Please select a rating");
      return;
    } else if (review.review === "") {
      toast.error("Please write a review");
      return;
    }
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user}`,
          },
          body: JSON.stringify({ petyId: id, ...review }),
        },
      );
      const data = await response.json();
      console.log(data);
      if (data.status === "success") {
        setReview({ rating: 0, review: "" });
        handleAddReview(data.data);
        toast.success("Review submitted successfully");
      } else toast.error("An error occurred while submitting review");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-y-3"
    >
      <h1 className="-mb-2 font-fredoka text-2xl font-medium">
        How was your Experience?
      </h1>
      <StarRating onSetRating={(rating) => setReview({ ...review, rating })} />
      <textarea
        value={review.review}
        rows={3}
        onChange={(e) => setReview({ ...review, review: e.target.value })}
        className="w-full rounded-md border border-neutral-400 bg-neutral-50 p-4 shadow-md shadow-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500"
        placeholder="Write your review here..."
      />
      <button
        type="submit"
        className="flex w-full justify-center gap-x-2 rounded-md bg-secondary py-2 text-white shadow-md shadow-neutral-300 hover:bg-amber-500"
      >
        {isLoading ? (
          <>
            <Loader />
            Loading...
          </>
        ) : (
          "Submit Review"
        )}
      </button>
    </form>
  );
}
AddReview.propTypes = {
  handleAddReview: PropTypes.func,
};
export default AddReview;
