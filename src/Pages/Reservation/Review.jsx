import PropTypes from "prop-types";
import Star from "../../components/Star";
import moment from "moment";
import { useContext, useRef } from "react";
import AuthContext from "../../contexts/AuthContext";
import Modal from "../../components/Modal";
import EditReview from "./EditReview";
import DeleteReview from "./DeleteReview";
function Review({ review, handleEditReview, handleDeleteReview }) {
  const { userData } = useContext(AuthContext);
  const userId = userData?._id;
  const dialogRef = useRef(null);
  const deleteDialogRef = useRef(null);
  function toggleDialog() {
    if (!dialogRef.current) {
      return;
    }
    dialogRef.current.hasAttribute("open")
      ? dialogRef.current.close()
      : dialogRef.current.showModal();
  }
  function toggleDeleteDialog() {
    if (!deleteDialogRef.current) {
      return;
    }
    deleteDialogRef.current.hasAttribute("open")
      ? deleteDialogRef.current.close()
      : deleteDialogRef.current.showModal();
  }
  return (
    <div className="relative flex flex-col items-center gap-2 rounded-lg border border-neutral-200 p-3 pb-8">
      <div className="relative flex w-full items-center justify-start gap-x-2">
        <img
          src={review.user?.photo?.url ?? "/userImage.png"}
          alt="User Image"
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex flex-col items-start justify-center">
          <h2 className="ml-1 text-sm font-medium sm:text-base">
            {review.user?.firstName + " " + review.user?.lastName}
          </h2>
          <span className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} full={i + 1 <= review.rating} />
            ))}
          </span>
        </div>
        <span className="absolute right-0 top-1 text-neutral-600">
          {moment(review.createdAt).fromNow()}
        </span>
      </div>
      <p className="w-full max-w-xl self-start break-words text-base font-normal text-neutral-800">
        {review.review}
      </p>
      <div className="absolute bottom-3 right-2 flex gap-x-2">
        <button
          className="flex items-center gap-x-1 text-sm font-normal text-neutral-600"
          hidden={userId === review.user._id}
          onClick={toggleDialog}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block h-4 w-4 fill-primary"
            x="0px"
            y="0px"
            viewBox="0 0 477.873 477.873"
            xmlSpace="preserve"
          >
            <path d="M392.533 238.937c-9.426 0-17.067 7.641-17.067 17.067V426.67c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V85.337c0-9.426 7.641-17.067 17.067-17.067H256c9.426 0 17.067-7.641 17.067-17.067S265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67c0 28.277 22.923 51.2 51.2 51.2h307.2c28.277 0 51.2-22.923 51.2-51.2V256.003c0-9.425-7.641-17.066-17.067-17.066z" />
            <path d="M458.742 19.142A65.328 65.328 0 00412.536.004a64.85 64.85 0 00-46.199 19.149L141.534 243.937a17.254 17.254 0 00-4.113 6.673l-34.133 102.4c-2.979 8.943 1.856 18.607 10.799 21.585 1.735.578 3.552.873 5.38.875a17.336 17.336 0 005.393-.87l102.4-34.133c2.515-.84 4.8-2.254 6.673-4.13l224.802-224.802c25.515-25.512 25.518-66.878.007-92.393zm-24.139 68.277L212.736 309.286l-66.287 22.135 22.067-66.202L390.468 43.353c12.202-12.178 31.967-12.158 44.145.044a31.215 31.215 0 019.12 21.955 31.043 31.043 0 01-9.13 22.067z" />
          </svg>
          Edit
        </button>
        <button
          className="flex items-center gap-x-1 text-sm font-normal text-neutral-600"
          hidden={userId !== review.user._id}
          onClick={toggleDeleteDialog}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 2"
            viewBox="0 0 24 24"
            className="inline-block h-4 w-4 fill-primary"
          >
            <path d="M19 7a1 1 0 00-1 1v11.191A1.92 1.92 0 0115.99 21H8.01A1.92 1.92 0 016 19.191V8a1 1 0 00-2 0v11.191A3.918 3.918 0 008.01 23h7.98A3.918 3.918 0 0020 19.191V8a1 1 0 00-1-1zM20 4h-4V2a1 1 0 00-1-1H9a1 1 0 00-1 1v2H4a1 1 0 000 2h16a1 1 0 000-2zM10 4V3h4v1z" />
            <path d="M11 17v-7a1 1 0 00-2 0v7a1 1 0 002 0zM15 17v-7a1 1 0 00-2 0v7a1 1 0 002 0z" />
          </svg>
          Delete
        </button>
      </div>
      <Modal ref={dialogRef} toggleDialog={toggleDialog}>
        <EditReview
          review={review}
          handleEditReview={handleEditReview}
          toggleDialog={toggleDialog}
        />
      </Modal>
      <Modal ref={deleteDialogRef} toggleDialog={toggleDeleteDialog}>
        <DeleteReview
          toggleDeleteDialog={toggleDeleteDialog}
          reviewId={review._id}
          handleDeleteReview={handleDeleteReview}
        />
      </Modal>
    </div>
  );
}
Review.propTypes = {
  review: PropTypes.object,
  handleEditReview: PropTypes.func,
  handleDeleteReview: PropTypes.func,
};
export default Review;
