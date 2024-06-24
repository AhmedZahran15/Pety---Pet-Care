import moment from "moment";
import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
import PostVotes from "./PostVotes";
function Post({ post, setPosts }) {
  const userId = JSON.parse(localStorage.getItem("userData"))._id;
  return (
    <div className="flex flex-col items-start justify-center gap-2 rounded-lg bg-white p-4 font-Montserrat shadow-md">
      <div className="flex w-full items-center justify-between ">
        <div className="flex w-full shrink-0 items-center gap-x-2">
          <img
            src={post?.user?.photo?.url ?? "/userImage.png"}
            alt={post.user?.firstName}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold">
            {post.user?.firstName} {post.user?.lastName}
          </span>
          <span className="text-sm text-neutral-400">
            {moment(post.createdAt).fromNow()}
          </span>
          <Bookmark
            postId={post._id}
            setPosts={setPosts}
            bookmarked={post.bookmarks.includes(userId)}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="text-lg font-medium">{post.title}</span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="h-6 w-fit rounded-sm border border-neutral-400 p-1 text-xs font-medium text-black"
          >
            {tag}
          </span>
        ))}
      </div>
      <p>{post.context}</p>
      <div className="w-full">
        {post.photo && (
          <img
            src={post.photo?.url}
            alt={post.title}
            className="mt-4 w-full rounded-lg object-cover"
          />
        )}
      </div>
      <div>
        <PostVotes post={post} setPosts={setPosts} />
      </div>
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
  setPosts: PropTypes.func.isRequired,
};
export default Post;
