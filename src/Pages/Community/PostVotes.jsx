import PropTypes from "prop-types";
function PostVotes({ post, setPosts }) {
  const userId = JSON.parse(localStorage.getItem("userData"))._id;
  const token = localStorage.getItem("token");
  const { downvotes: downVotes, upvotes: upVotes, votes } = post;
  const handleUpVote = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/posts/upvote`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ postId: post._id }),
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setPosts((prevPosts) =>
        prevPosts.map((prevPost) =>
          prevPost._id === post._id ? { ...prevPost, ...data.data } : prevPost,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleDownVote = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/posts/downvote`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ postId: post._id }),
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setPosts((prevPosts) =>
        prevPosts.map((prevPost) =>
          prevPost._id === post._id ? { ...prevPost, ...data.data } : prevPost,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleRemoveVote = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/posts/resetvote`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ postId: post._id }),
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setPosts((prevPosts) =>
        prevPosts.map((prevPost) =>
          prevPost._id === post._id ? { ...prevPost, ...data.data } : prevPost,
        ),
      );
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`flex flex-row items-center gap-2 rounded-full border border-neutral-300 ${upVotes.includes(userId) ? "bg-primary" : downVotes.includes(userId) ? "bg-red-500" : "bg-neutral-100"}`}
    >
      <button
        onClick={upVotes.includes(userId) ? handleRemoveVote : handleUpVote}
        className={`flex h-8 w-8 items-center justify-center rounded-full  ${upVotes.includes(userId) ? "hover:bg-primaryDark" : downVotes.includes(userId) ? "hover:bg-red-600" : "hover:bg-neutral-200"}`}
      >
        <svg
          viewBox="0 0 14 18"
          className={`h-6 w-10 ${!upVotes.includes(userId) && !downVotes.includes(userId) ? "stroke-neutral-400" : upVotes.includes(userId) ? "fill-white stroke-white" : "stroke-white"}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.07639 6.99685C1.22639 7.35185 1.58139 7.58435 1.97389 7.58435H4.33389V16.2502C4.33389 16.7102 4.70639 17.0827 5.16639 17.0827L8.49889 17.0827C8.95889 17.0827 9.33139 16.7102 9.33139 16.2502V7.58435H11.6914C12.0839 7.58435 12.4389 7.35185 12.5889 6.99685C12.7389 6.64186 12.6564 6.23185 12.3789 5.95935L7.51889 1.19686C7.13889 0.824356 6.52389 0.824356 6.14389 1.19686L1.28389 5.95935C1.00639 6.23185 0.923891 6.64186 1.07389 6.99685H1.07639Z"
            strokeMiterlimit="10"
          />
        </svg>
      </button>
      <span
        className={`font-Montserrat text-xl font-normal ${upVotes.includes(userId) || downVotes.includes(userId) ? "text-white" : "text-black"}`}
      >
        {votes}
      </span>
      <button
        onClick={downVotes.includes(userId) ? handleRemoveVote : handleDownVote}
        className={`flex h-8 w-8 items-center justify-center rounded-full  ${upVotes.includes(userId) ? "hover:bg-primaryDark" : downVotes.includes(userId) ? "hover:bg-red-600" : "hover:bg-neutral-200"}`}
      >
        <svg
          viewBox="0 0 14 18"
          className={`h-6 w-10 rotate-180 ${!upVotes.includes(userId) && !downVotes.includes(userId) ? "stroke-neutral-400" : downVotes.includes(userId) ? "fill-white stroke-white" : "stroke-white"}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.07639 6.99685C1.22639 7.35185 1.58139 7.58435 1.97389 7.58435H4.33389V16.2502C4.33389 16.7102 4.70639 17.0827 5.16639 17.0827L8.49889 17.0827C8.95889 17.0827 9.33139 16.7102 9.33139 16.2502V7.58435H11.6914C12.0839 7.58435 12.4389 7.35185 12.5889 6.99685C12.7389 6.64186 12.6564 6.23185 12.3789 5.95935L7.51889 1.19686C7.13889 0.824356 6.52389 0.824356 6.14389 1.19686L1.28389 5.95935C1.00639 6.23185 0.923891 6.64186 1.07389 6.99685H1.07639Z"
            strokeMiterlimit="10"
          />
        </svg>
      </button>
    </div>
  );
}
PostVotes.propTypes = {
  post: PropTypes.object.isRequired,
  setPosts: PropTypes.func.isRequired,
};
export default PostVotes;
