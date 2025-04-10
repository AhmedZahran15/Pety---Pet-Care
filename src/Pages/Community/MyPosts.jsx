import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { BlockLoader } from "../../components/Loader";
import Post from "./Post";

function MyPosts() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();
  const userData = JSON.parse(localStorage.getItem("userData")) ?? null;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/posts/myPosts?${searchParams.toString()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [searchParams, pathname]);
  return (
    <div className="basis-full pb-4 lg:basis-2/3">
      <div className="mb-4 flex h-20 w-full items-center gap-x-4 rounded-lg border border-neutral-300 bg-white p-4 shadow-md shadow-neutral-200">
        {userData && (
          <img
            src={userData?.photo?.url}
            alt={userData?.firstName}
            className="h-12 w-12 rounded-full object-cover"
          />
        )}
        <Link
          to="new-post"
          className="w-full rounded-full bg-neutral-100 p-4 transition-all duration-100 hover:bg-neutral-200"
        >
          What&apos;s on your mind
          <span className="capitalize">
            {userData ? ", " + userData?.firstName : ""}
          </span>
          ?
        </Link>
      </div>
      <Outlet />
      <div className="relative min-h-[150px]">
        {isLoading ? (
          <BlockLoader />
        ) : (
          <div className="flex flex-col gap-y-4">
            {posts.map((post) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPosts;
