import moment from "moment";
import PropTypes from "prop-types";
function Post({ post }) {
  console.log(post);
  return (
    <div className="flex flex-col items-start justify-center gap-4 rounded-lg bg-white p-4 shadow-md">
      <div className="flex w-full items-center justify-between">
        <div className="flex shrink-0 items-center gap-x-2">
          <img
            src={post?.user?.photo?.url ?? "/userImage.png"}
            alt={post.user?.firstName}
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="text-lg font-bold">
            {post.user?.firstName} {post.user?.lastName}
          </span>
        </div>
        <span className="text-sm text-neutral-400">
          {moment(post.createdAt).fromNow()}
        </span>
      </div>
      <span className="text-lg font-semibold">{post.title}</span>
      <div>
        <p className="mt-4">{post.context}</p>
      </div>
      <div className="w-full">
        {post.photo && (
          <img
            src={post.photo?.url}
            alt={post.title}
            className="mt-4 w-full rounded-lg object-cover"
          />
        )}
      </div>
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
