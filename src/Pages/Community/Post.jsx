import moment from "moment";
import PropTypes from "prop-types";
import Bookmark from "./Bookmark";
import PostVotes from "./PostVotes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
function Post({ post }) {
  const [currentPost, setCurrentPost] = useState(post);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div
      onClick={
        pathname.includes("/community/post/")
          ? null
          : () => navigate(`/community/post/${post._id}`)
      }
      className={`${pathname.includes("/community/post/") ? "" : "cursor-pointer"} flex flex-col items-start justify-center gap-2 rounded-lg bg-white p-4 font-Montserrat shadow-md hover:bg-neutral-50`}
    >
      <div className="flex w-full items-center justify-between ">
        <div className="flex w-full shrink-0 items-center gap-x-2">
          <img
            src={currentPost?.user?.photo?.url ?? "/userImage.png"}
            alt={currentPost?.user?.firstName}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-sm font-semibold">
            {currentPost?.user?.firstName} {currentPost?.user?.lastName}
          </span>
          <span className="text-sm text-neutral-400">
            {moment(currentPost?.createdAt).fromNow()}
          </span>
          <Bookmark
            bookmarks={currentPost?.bookmarks}
            postId={currentPost?._id}
            setCurrentPost={setCurrentPost}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-1">
        <span className="text-lg font-medium">{currentPost?.title}</span>
        <div className="flex flex-row gap-x-2">
          {currentPost?.tags.map((tag) => (
            <span
              key={tag}
              className="h-6 w-fit rounded-[4px] border border-neutral-400 p-1 text-xs font-medium text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p>{currentPost?.context}</p>
      <div className="w-full">
        {currentPost?.photo && (
          <img
            src={currentPost?.photo?.url}
            alt={currentPost?.title}
            className="mt-4 w-full rounded-lg object-cover"
          />
        )}
      </div>
      <div className="flex items-center gap-x-4">
        <PostVotes post={currentPost} setCurrentPost={setCurrentPost} />
        <Link
          onClick={(e) => e.stopPropagation()}
          to={`/community/post/${currentPost?._id}`}
          className="flex h-8 items-center gap-x-2 rounded-full bg-neutral-100 px-2 font-medium hover:bg-neutral-200"
        >
          <svg
            className="h-6 w-6 cursor-pointer"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3234_16174)">
              <path
                d="M24 15.122V.29C24 .131 23.85 0 23.67 0H2.33C2.15 0 2 .131 2 .289v14.833c0 .158.15.29.33.29h3.74c.18 0 .33.13.33.288v4.01c0 .244.321.378.537.224l1.25-.882 5.099-3.58a.348.348 0 01.207-.06H23.67c.18 0 .33-.132.33-.29zm-11.74-1.16l-3.41 2.343c-.232.158-.576.015-.576-.239v-2.019c0-.17-.158-.304-.352-.304H3.91c-.194 0-.352-.135-.352-.304V1.834c0-.17.158-.304.352-.304h18.172c.193 0 .352.134.352.304v11.6c0 .17-.159.305-.352.305H12.71a.379.379 0 00-.216.066l-.238.158h.005z"
                fill="#000"
              />
            </g>
            <defs>
              <clipPath id="clip0_3234_16174">
                <path
                  fill="#fff"
                  transform="translate(.324)"
                  d="M0 0H27V20H0z"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Reply</span>
        </Link>
      </div>
    </div>
  );
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
