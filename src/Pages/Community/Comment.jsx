import moment from "moment";
import PropTypes from "prop-types";
import CommentVotes from "./CommentVotes";
import { useState } from "react";
function Comment({ comment }) {
  const [currentComment, setCurrentComment] = useState(comment);
  return (
    <div className="flex flex-col gap-y-2 py-2">
      <div className="flex w-full shrink-0 items-center gap-x-2">
        <img
          src={comment.user?.photo?.url ?? "/userImage.png"}
          alt={comment.user?.firstName}
          className="h-8 w-8 rounded-full object-cover"
        />
        <span className="text-sm font-semibold">
          {comment.user?.firstName} {comment.user?.lastName}
        </span>
        <span className="text-sm text-neutral-400">
          {moment(comment.createdAt).fromNow()}
        </span>
      </div>
      <div className="px-2 text-sm">
        <p>{comment.context}</p>
      </div>
      <div className="flex items-center gap-x-4">
        <CommentVotes
          comment={currentComment}
          setCurrentComment={setCurrentComment}
        />
      </div>
    </div>
  );
}
Comment.propTypes = {
  comment: PropTypes.object.isRequired,
};
export default Comment;
