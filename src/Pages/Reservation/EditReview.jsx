import { useContext, useState } from "react";
import StarRating from "../../components/StarRating";
import toast from "react-hot-toast";
import { Loader } from "../../components/Loader";
import PropTypes from "prop-types";
import AuthContext from "../../contexts/AuthContext";
function EditReview({ review, handleEditReview, toggleDialog }) {
  const [currentReview, setCurrentReview] = useState(() => {
    return {
      rating: review.rating,
      review: review.review,
    };
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/reviews`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user}`,
          },
          body: JSON.stringify({ reviewId: review._id, ...currentReview }),
        },
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Review updated successfully");
        handleEditReview(data.data);
        toggleDialog();
      } else toast.error("An error occurred while updating the review");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-[600px] flex-col items-center justify-center gap-y-3 p-4"
    >
      <h1 className="font-fredoka -mb-2 text-2xl font-medium">
        Edit your review.
      </h1>
      <StarRating
        onSetRating={(rating) => setCurrentReview({ ...currentReview, rating })}
        defaultRating={currentReview.rating}
      />
      <textarea
        value={currentReview.review}
        rows={3}
        onChange={(e) =>
          setCurrentReview({ ...currentReview, review: e.target.value })
        }
        className="w-full rounded-md border border-neutral-400 bg-neutral-50 p-4 shadow-md shadow-neutral-300 focus:outline-none focus:ring-1 focus:ring-neutral-500"
        placeholder="Write your review here..."
      />
      <div className="flex gap-x-2">
        <button
          type="reset"
          className="w-32 rounded-lg bg-neutral-100 p-2 text-center font-semibold text-primary outline-primary transition-all duration-300 hover:border-primary hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex w-32 items-center justify-center gap-x-2 rounded-md bg-primary text-white shadow-md shadow-neutral-300 transition-all duration-300 hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isLoading ? (
            <>
              <Loader />
              Loading...
            </>
          ) : (
            "Update"
          )}
        </button>
      </div>
    </form>
  );
}
EditReview.propTypes = {
  review: PropTypes.object,
  handleEditReview: PropTypes.func,
  toggleDialog: PropTypes.func,
};
export default EditReview;
