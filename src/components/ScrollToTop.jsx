import { useRef } from "react";

function ScrollToTop() {
  const buttonRef = useRef(null);
  window.onscroll = function () {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      buttonRef?.current ? (buttonRef.current.style.display = "block") : null;
    } else {
      buttonRef?.current ? (buttonRef.current.style.display = "none") : null;
    }
  };
  return (
    <button
      ref={buttonRef}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="Go To Top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-0 bg-primary p-2 text-lg font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#1a8588]`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
      <span className="sr-only">Go to top</span>
    </button>
  );
}

export default ScrollToTop;
