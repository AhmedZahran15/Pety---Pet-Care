import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [searchParams, setSearchParams] = useSearchParams();
  const [tags, setTags] = useState([]);
  const { pathname } = useLocation();
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_LINK}/api/tags`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        setTags(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTags();
  }, []);
  const handleTagChange = (tag) => {
    if (searchParams.get("tag") === tag)
      return setSearchParams(
        (prev) => {
          prev.delete("tag");
          return prev;
        },
        { replace: true },
      );
    setSearchParams(
      (prev) => {
        prev.set("tag", tag);
        return prev;
      },
      { replace: true },
    );
  };
  return (
    <div className="box-border flex w-full flex-col gap-y-6 self-center rounded-lg border border-neutral-300 bg-white py-4 lg:sticky lg:top-8 lg:basis-1/4 lg:self-start">
      <div className="flex items-center gap-x-4 px-8 ">
        <img
          src={userData?.photo?.url || "/userImage.png"}
          alt="pet worker"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium">
            {userData?.firstName} {userData?.lastName}
          </span>
          <span className="text-xs font-normal text-neutral-400">
            Service Provider
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          to="/community"
          className={`font-fredoka mx-4 flex items-center gap-x-2 rounded-lg px-4 py-2 text-lg font-normal text-black ${pathname.includes("home") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
        >
          <span className="h-8 w-8">
            <img src="/images/community/homeIcon.svg" />
          </span>
          <span>Home</span>
        </Link>
        <Link
          to="/community/my-posts"
          className={`font-fredoka mx-4 flex items-center gap-x-2 rounded-lg px-4 py-2 text-lg font-normal text-black  ${pathname.includes("my-posts") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
        >
          <span className="h-8 w-8">
            <img src="/images/community/myPostsIcon.svg" />
          </span>
          <span>My Posts</span>
        </Link>
        <Link
          to="/community/bookmarks"
          className={`font-fredoka mx-4 flex items-center gap-x-2 rounded-lg px-4 py-2 text-lg font-normal text-black ${pathname.includes("bookmarks") ? "bg-neutral-100" : "hover:bg-neutral-100"}`}
        >
          <span className="h-8 w-8">
            <img src="/images/community/bookmarksIcon.svg" />
          </span>
          <span>Bookmarks</span>
        </Link>
        <div className="mx-4 flex flex-col gap-y-4 px-4 py-2">
          <div className="font-fredoka flex items-center gap-x-2 rounded-lg text-lg font-normal text-black ">
            <span className="h-8 w-8">
              <img src="/images/community/tagsIcon.svg" />
            </span>
            <span>Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag._id}
                onClick={() => handleTagChange(tag.name)}
                className={`${searchParams?.get("tag") === tag.name ? "bg-[#0866FF] text-white transition-all duration-200" : "border-neutral-400 text-black hover:bg-neutral-100"} flex items-center gap-x-2 rounded-md border  px-4 py-1 text-lg font-normal capitalize `}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
