import PropTypes from "prop-types";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Loader } from "../../components/Loader";
import AuthContext from "../../contexts/AuthContext";
function DeleteReview({ toggleDeleteDialog, handleDeleteReview, reviewId }) {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const deleteReview = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/reviews`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user}`,
          },
          body: JSON.stringify({ reviewId }),
        },
      );
      if (response.status === 204) {
        toast.success("Review deleted successfully");
        handleDeleteReview(reviewId);
        toggleDeleteDialog();
      } else toast.error("An error occurred while deleting the review");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center gap-y-3 p-4">
      <h1 className="text-lg font-semibold text-neutral-800">
        Are you sure you want to delete this review?
      </h1>
      <div className="flex gap-x-2">
        <button
          onClick={toggleDeleteDialog}
          className="w-32 rounded-lg bg-neutral-100 p-2 text-center font-semibold text-primary outline-primary transition-all duration-300 hover:border-primary hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          Cancel
        </button>
        <button
          onClick={deleteReview}
          className="flex w-32 items-center justify-center gap-x-2 rounded-md bg-primary text-white shadow-md shadow-neutral-300 transition-all duration-300 hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isLoading ? (
            <>
              <Loader />
              Loading...
            </>
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
}
DeleteReview.propTypes = {
  toggleDeleteDialog: PropTypes.func,
  handleDeleteReview: PropTypes.func,
  reviewId: PropTypes.string,
};
export default DeleteReview;
