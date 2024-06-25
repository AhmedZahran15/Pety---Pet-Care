import PropTypes from "prop-types";
import Comment from "./Comment";

function Comments({ comments }) {
  return (
    <>
      {comments.length > 0 && (
        <div className="flex flex-col divide-y-2 divide-neutral-200 rounded-lg bg-white p-4 font-Montserrat shadow-md">
          {comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </div>
      )}
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};
export default Comments;
