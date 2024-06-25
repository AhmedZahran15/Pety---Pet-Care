import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Post from "./Post";
import { BlockLoader } from "../../components/Loader";
import AddComment from "./AddComment";
import Comments from "./Comments";

function FullPost() {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoadingPost, setIsLoadingPost] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/posts/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId }),
          },
        );
        if (!response.ok) throw new Error(data.message);
        const data = await response.json();
        if (data.status === "success") setPost(data.data[0]);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingPost(false);
    };
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/comments/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ postId }),
          },
        );
        if (!response.ok) throw new Error(data.message);
        const data = await response.json();
        if (data.status === "success") setComments(data.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingComments(false);
    };
    fetchPost();
    fetchComments();
  }, [postId]);
  return (
    <div className="relative flex basis-full flex-col gap-y-4 pb-4 lg:basis-2/3">
      <div className="relative min-h-[150px]">
        {isLoadingComments || isLoadingPost ? (
          <BlockLoader />
        ) : (
          <div className="flex flex-col gap-y-4">
            <Post post={post} />
            <AddComment postId={postId} setComments={setComments} />
            <Comments comments={comments} />
          </div>
        )}
      </div>
      <button
        onClick={() => navigate(-1)}
        className="absolute -left-10 top-4 hidden h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 lg:flex"
      >
        <svg
          className="fill-current"
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
            fill=""
          />
        </svg>
      </button>
    </div>
  );
}

export default FullPost;
