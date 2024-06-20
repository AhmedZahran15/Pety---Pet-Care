import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { BlockLoader } from "../../components/Loader";
import Post from "./Post";

function Home() {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/posts?${searchParams.toString()}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
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
        <img
          src={userData?.photo?.url}
          alt={userData?.firstName}
          className="h-12 w-12 rounded-full object-cover"
        />
        <Link
          to="new-post"
          className="w-full rounded-full bg-neutral-100 p-4 transition-all duration-100 hover:bg-neutral-200"
        >
          What&apos;s on your mind,&nbsp;
          {userData?.firstName[0] + userData?.firstName.slice(1)}?
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

export default Home;
