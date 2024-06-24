import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import ExpandableList from "./ExpandableList";
import AuthContext from "../../contexts/AuthContext";
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const [roles, setRoles] = useState([]);
  const { logoutUser } = useContext(AuthContext);
  const { pathname } = useLocation();
  const sidebar = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    async function fetchRoles() {
      const response = await fetch(
        `${import.meta.env.VITE_API_LINK}/api/dashboard/allRoles`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await response.json();
      setRoles(data.data);
    }
    fetchRoles();
  }, []);
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden border-r-2 border-neutral-300 bg-neutral-100 px-4 py-6 duration-300 ease-linear lg:fixed lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <span
        ref={trigger}
        className="absolute right-2 top-9 h-8 w-8 cursor-pointer lg:hidden"
        onClick={() => setSidebarOpen(false)}
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
      </span>
      <Link
        to="/"
        onClick={() => setSidebarOpen(false)}
        className="mb-8 flex w-fit items-center justify-center gap-x-2 bg-neutral-100"
      >
        <img src="/logoAlt.png" alt="Pety Logo" className="h-[50] w-[98px]" />
      </Link>
      <div className="font-fredoka mb-2 border-b-2 border-neutral-400 px-3 py-[6px] text-3xl font-semibold text-neutral-800">
        MENU
      </div>
      <div className="flex flex-col gap-y-2 overflow-scroll no-scrollbar">
        <Link
          to="/dashboard/overview"
          onClick={() => setSidebarOpen(false)}
          className={`font-fredoka flex flex-row items-center gap-x-2 rounded-md px-3 py-[6px] text-xl  font-medium text-neutral-950 transition-all duration-200 hover:bg-neutral-200  ${pathname.includes("overview") ? "bg-neutral-200" : ""}`}
        >
          <svg
            className="h-8 w-8 fill-neutral-800"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.5 8h-8C.673 8 0 7.327 0 6.5v-5C0 .673.673 0 1.5 0h8c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5zm-8-7a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zM9.5 24h-8C.673 24 0 23.327 0 22.5v-11c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5zm-8-13a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5zM22.5 24h-8c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5zm-8-7a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zM22.5 14h-8c-.827 0-1.5-.673-1.5-1.5v-11c0-.827.673-1.5 1.5-1.5h8c.827 0 1.5.673 1.5 1.5v11c0 .827-.673 1.5-1.5 1.5zm-8-13a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5z" />
          </svg>
          Overview
        </Link>
        <Link
          to="/dashboard/profile"
          onClick={() => setSidebarOpen(false)}
          className={`font-fredoka flex flex-row items-center gap-x-2 rounded-md px-3 py-[6px] text-xl  font-medium text-neutral-950 transition-all duration-200 hover:bg-neutral-200  ${pathname.includes("profile") ? "bg-neutral-200" : ""}`}
        >
          <svg
            className="h-8 w-8 fill-neutral-800"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
              fill=""
            ></path>
            <path
              d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
              fill=""
            ></path>
          </svg>
          Profile
        </Link>
        {roles.includes("vet") && (
          <ExpandableList text="Veterinarian" setSidebarOpen={setSidebarOpen} />
        )}
        {roles.includes("groomer") && (
          <ExpandableList text="Pet Groomer" setSidebarOpen={setSidebarOpen} />
        )}
        {roles.includes("petSitter") && (
          <ExpandableList text="Pet Sitter" setSidebarOpen={setSidebarOpen} />
        )}
        <Link
          to="/dashboard/history"
          onClick={() => setSidebarOpen(false)}
          className={`font-fredoka flex flex-row items-center gap-x-2 rounded-md px-3 py-[6px] text-xl  font-medium text-neutral-950 transition-all duration-200 hover:bg-neutral-200  ${pathname.includes("dashboard/history") ? "bg-neutral-200" : ""}`}
        >
          <svg
            className="h-8 w-8 fill-neutral-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 682.667 682.667"
          >
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0z" data-original="#000000" />
              </clipPath>
            </defs>
            <g
              clipPath="url(#a)"
              transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
              fill="none"
              stroke="#000"
              strokeWidth={30}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            >
              <path
                d="M256 135c0-66.274-53.726-120-120-120S16 68.726 16 135s53.726 120 120 120 120-53.726 120-120z"
                data-original="#000000"
              />
              <path
                d="M136 15h330c16.568 0 30 13.432 30 30v351.997L396.004 497H166c-16.568 0-30-13.432-30-30V255"
                data-original="#000000"
              />
              <path
                d="M396 497V397h100zM215.362 225H426M206 315h220M256 135h170M136 135v60m0-60h40"
                data-original="#000000"
              />
            </g>
          </svg>
          History
        </Link>
      </div>
      <button
        onClick={logoutUser}
        className="font-fredoka mt-auto justify-self-end rounded-lg px-4 py-2 text-xl font-medium hover:bg-neutral-200"
      >
        Log Out
      </button>
    </aside>
  );
}
Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};
export default Sidebar;
