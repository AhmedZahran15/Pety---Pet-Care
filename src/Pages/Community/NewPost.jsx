import { Link, useNavigate } from "react-router-dom";
import RouteModal from "./RouteModal";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function NewPost() {
  const imageInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!formData.get("photo").size) formData.delete("photo");
    formData.append("tags", selectedTags);
    try {
      setIsLoading(true);
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/posts/create/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        },
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      toast.success("Post created successfully");
      navigate("..");
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };
  return (
    <RouteModal>
      <form
        onSubmit={handleSubmit}
        className=" flex max-h-[650px] min-w-[350px] max-w-[500px] flex-col gap-y-4 overflow-y-auto p-4 no-scrollbar sm:w-[500px]"
      >
        <input
          className="shrink-0 rounded-2xl border border-neutral-300 p-2 outline-none transition-all duration-200  focus:ring-1 focus:ring-[#0866FF]"
          type="text"
          placeholder="Title"
          name="title"
          required
        />
        <textarea
          className="shrink-0 rounded-2xl border border-neutral-300 p-2 outline-none transition-all duration-200  focus:ring-1 focus:ring-[#0866FF]"
          name="context"
          placeholder="Body"
          required
          rows={3}
        />
        <div className="w-full rounded-2xl border border-neutral-400 ">
          {imagePreview ? (
            <div className="relative w-full rounded-2xl">
              <button
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  imageInputRef.current.value = "";
                  setImagePreview(null);
                }}
                className="absolute right-2 top-2 rounded-full border border-neutral-300 bg-neutral-200 p-2 shadow-md shadow-neutral-200"
              >
                <svg
                  height="20"
                  viewBox="0 0 329.26933 329"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
                </svg>
              </button>
              <img
                src={imagePreview}
                alt="Preview"
                className="min-h-[160px] w-full rounded-2xl object-cover"
              />
            </div>
          ) : (
            <button
              role="button"
              onClick={(e) => {
                e.preventDefault();
                imageInputRef.current.click();
              }}
              className="flex h-40 w-full flex-col items-center justify-center gap-y-2 rounded-2xl bg-neutral-100 p-2 outline-none transition-all duration-200 hover:bg-neutral-200"
            >
              <span className="">
                <svg
                  fill="none"
                  height="48"
                  width="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="rgb(0,0,0)">
                    <path d="m9 10.75c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75 2.75 1.23 2.75 2.75-1.23 2.75-2.75 2.75zm0-4c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25z" />
                    <path d="m15 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75v-6c0-5.43 2.32-7.75 7.75-7.75h4c.41 0 .75.34.75.75s-.34.75-.75.75h-4c-4.61 0-6.25 1.64-6.25 6.25v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 5.43-2.32 7.75-7.75 7.75z" />
                    <path d="m18 8.74994c-.41 0-.75-.34-.75-.75v-6c0-.3.18-.58.46-.69s.6-.05.82.16l2 2c.29.29.29.77 0 1.06s-.77.29-1.06 0l-.72-.72v4.19c0 .41-.34.75-.75.75z" />
                    <path d="m15.9999 4.74994c-.19 0-.38-.07-.53-.22-.29-.29-.29-.77 0-1.06l2-2c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22z" />
                    <path d="m2.6698 19.7001c-.24 0-.48-.12-.62-.33-.23-.34-.14-.81.2-1.04l4.93-3.31c1.08-.72 2.57-.64 3.55.19l.33.29c.5.43 1.35.43 1.84 0l4.16-3.57c1.06-.91 2.73-.91 3.8 0l1.63 1.4c.31.27.35.74.08 1.06-.27.31-.75.35-1.06.08l-1.63-1.4c-.5-.43-1.34-.43-1.84 0l-4.16 3.57c-1.06.91-2.73.91-3.8 0l-.33-.29c-.46-.39-1.21999-.43-1.72999-.08l-4.92001 3.31c-.14.08-.29.12-.43.12z" />
                  </g>
                </svg>
              </span>
              <span className="text-base font-medium">Add an image</span>
            </button>
          )}
        </div>
        <input
          hidden
          ref={imageInputRef}
          className="rounded-2xl border border-gray-300 p-2 outline-none transition-all duration-300  focus:ring-1 focus:ring-[#0866FF]"
          type="file"
          name="photo"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              setImagePreview(URL.createObjectURL(file));
            }
          }}
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2 rounded-lg font-fredoka text-lg font-normal text-neutral-900 ">
            <span className="h-8 w-8">
              <img src="/images/community/tagsIcon.svg" />
            </span>
            <span>Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                role="button"
                key={tag._id}
                onClick={(e) => {
                  e.preventDefault();
                  if (selectedTags.includes(tag.name)) {
                    setSelectedTags((prev) =>
                      prev.filter((selectedTag) => selectedTag !== tag.name),
                    );
                  } else {
                    setSelectedTags((prev) => [...prev, tag.name]);
                  }
                }}
                className={`${selectedTags.includes(tag.name) ? "bg-[#0866FF] text-white transition-all duration-200" : "border-neutral-400 text-neutral-900 hover:bg-neutral-100"} flex items-center gap-x-2 rounded-md border  px-4 py-1 text-lg font-normal capitalize `}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-x-2">
          <Link
            to=".."
            type="button"
            className="basis-1/4 rounded-lg border-2 border-white bg-neutral-200 p-3 text-center font-semibold text-[#0866FF] outline-[#0866FF] transition-all duration-300 hover:border-[#0866FF] hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#0866FF]"
          >
            Cancel
          </Link>
          <button
            className={`basis-1/4 ${isLoading ? "cursor-not-allowed" : ""} rounded-lg bg-[#0866FF] p-3 text-center font-semibold text-white transition-all duration-300 hover:bg-[#0846ff] focus:outline-none focus:ring-2 focus:ring-[#0866FF] `}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <svg
                className="mx-auto h-5 w-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8z"
                />
              </svg>
            ) : (
              "Post"
            )}
          </button>
        </div>
      </form>
    </RouteModal>
  );
}

export default NewPost;
