import PropTypes from "prop-types";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddComment({ postId, setComments }) {
  const [commenting, setCommenting] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const addComment = async () => {
    try {
      if (!localStorage.getItem("token")) {
        navigate("/auth/login");
        toast.error("Please login to comment");
        return;
      }
      if (!comment) {
        toast.error("Comment cannot be empty");
        return;
      }
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/comments/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ postId, context: comment }),
        },
      );
      const data = await response.json();
      if (data.status === "success") {
        setComments((prev) => [...prev, data.data]);
        setComment("");
        setCommenting(false);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-full rounded-xl">
      {!commenting ? (
        <button
          className="w-full rounded-full border border-neutral-300 bg-neutral-50 px-3 py-2 text-left text-neutral-400 outline-none"
          onClick={() => setCommenting(true)}
        >
          <span>Add a comment</span>
        </button>
      ) : (
        <div className="w-full  rounded-3xl border border-neutral-400 bg-white pb-1 pt-3 ">
          <textarea
            autoFocus={true}
            value={comment}
            className="w-full rounded-3xl px-4 outline-none"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            rows={2}
          />
          <div className="mr-2 flex items-center justify-end gap-x-2">
            <button
              className="rounded-full bg-neutral-200 p-2 text-xs font-medium text-black hover:bg-neutral-300"
              onClick={() => {
                setCommenting(false);
                setComment("");
              }}
            >
              Cancel
            </button>
            <button
              className="rounded-full bg-primary p-2 text-xs font-medium text-white hover:bg-primaryDark"
              onClick={addComment}
            >
              Comment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
AddComment.propTypes = {
  postId: PropTypes.string.isRequired,
  setComments: PropTypes.func.isRequired,
};
export default AddComment;
