import PropTypes from "prop-types";
function Bookmark({ bookmarked, setCurrentPost, postId }) {
  const handleBookmark = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/posts/bookmarks`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ postId: postId }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.status === "success") {
          setCurrentPost(data.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteBookmark = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/posts/bookmarks/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ postId: postId }),
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.status === "success") {
          setCurrentPost(data.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={bookmarked ? handleDeleteBookmark : handleBookmark}
      className="ml-auto"
    >
      {bookmarked ? (
        <svg
          x="0px"
          y="0px"
          className="h-8 w-8 fill-primary"
          viewBox="0 0 212.045 212.045"
          xmlSpace="preserve"
        >
          <path d="M167.871 0H44.84C34.82 0 26.022 8.243 26.022 18v182c0 3.266.909 5.988 2.374 8.091a9.204 9.204 0 007.598 3.954c2.86 0 5.905-1.273 8.717-3.675l55.044-46.735c1.7-1.452 4.142-2.284 6.681-2.284 2.538 0 4.975.832 6.68 2.288l54.86 46.724c2.822 2.409 5.657 3.683 8.512 3.683 4.828 0 9.534-3.724 9.534-12.045V18c0-9.757-8.131-18-18.151-18z" />
        </svg>
      ) : (
        <svg
          x="0px"
          y="0px"
          className="h-8 w-8 fill-neutral-300 hover:fill-primary"
          viewBox="0 0 431.972 431.972"
          xmlSpace="preserve"
        >
          <path d="M393.146 14.279c-3.713-5.333-8.713-9.233-14.989-11.707A31.606 31.606 0 00365.592.004V0H66.378c-4.377 0-8.562.857-12.56 2.568-6.28 2.472-11.278 6.377-14.989 11.707-3.71 5.33-5.568 11.228-5.568 17.701v368.019c0 6.475 1.858 12.371 5.568 17.706 3.711 5.329 8.709 9.233 14.989 11.704a31.577 31.577 0 0012.56 2.566c8.949 0 16.844-3.142 23.698-9.418l125.91-121.062 125.91 121.065c6.663 6.081 14.562 9.127 23.695 9.127 4.76 0 8.948-.756 12.565-2.279 6.276-2.471 11.276-6.375 14.989-11.711 3.71-5.328 5.564-11.225 5.564-17.699V31.98c.001-6.473-1.857-12.371-5.563-17.701zm-30.98 376.86L241.397 275.224l-25.411-24.264-25.409 24.264L69.809 391.139V36.549h292.357v354.59z" />
        </svg>
      )}
    </button>
  );
}
Bookmark.propTypes = {
  bookmarked: PropTypes.bool.isRequired,
  setCurrentPost: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};
export default Bookmark;
