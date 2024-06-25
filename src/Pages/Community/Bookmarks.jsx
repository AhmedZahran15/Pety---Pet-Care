import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BlockLoader } from "../../components/Loader";
import Post from "./Post";

function Bookmarks() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/posts/bookmarks?${searchParams.toString()}`,
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
  }, [searchParams]);
  return (
    <div className="basis-full pb-4 lg:basis-2/3">
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

export default Bookmarks;
