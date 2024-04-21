import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ExpandableList from "./ExpandableList";
import AuthContext from "../../contexts/AuthContext";
function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { logoutUser } = useContext(AuthContext);
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
  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden border-r-2 border-neutral-300 bg-neutral-100 px-4 py-6 duration-300 ease-linear lg:static lg:translate-x-0 ${
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
        className="mb-8 flex w-fit items-center justify-center gap-x-2 bg-neutral-100"
      >
        <div className="h-9 w-9 rounded-full bg-black"></div>
        <span className="text-4xl font-bold">PETY</span>
      </Link>
      <div className="mb-2 border-b-2 border-neutral-400 px-3 py-[6px] font-fredoka text-3xl font-semibold text-neutral-800">
        MENU
      </div>
      <div className="flex flex-col gap-y-4 overflow-scroll no-scrollbar">
        <ExpandableList text="Veterinarian" />
        <ExpandableList text="Pet Groomer" />
        <ExpandableList text="Pet Sitter" />
      </div>
      <button
        onClick={logoutUser}
        className="mt-auto justify-self-end rounded-lg px-4 py-2 font-fredoka text-xl font-medium hover:bg-neutral-200"
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
