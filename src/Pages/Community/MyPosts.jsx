import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function MyPosts() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        console.log(data);
        if (!response.ok) throw new Error(data.message);
        setPosts(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [searchParams]);
  return <div></div>;
}

export default MyPosts;
