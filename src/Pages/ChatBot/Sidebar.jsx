import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
        <div className="h-9 w-9 rounded-full bg-black"></div>
        <span className="text-4xl font-bold">PETY</span>
      </Link>
      <div className="font-fredoka mb-2 border-b-2 border-neutral-400 px-3 py-[6px] text-3xl font-semibold text-neutral-800">
        MENU
      </div>
      <div className="flex flex-col gap-y-2 overflow-scroll no-scrollbar">
        <Link
          to="/"
          className={`font-fredoka flex flex-row items-center gap-x-2 rounded-md px-3 py-[6px] text-xl  font-medium text-neutral-950 transition-all duration-200 hover:bg-neutral-200  `}
        >
          <svg
            className="h-8 w-8 fill-neutral-800"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2643_4586)">
              <path d="M19.2675 7.55727L12.9467 1.2356C12.1644 0.455591 11.1047 0.0175781 10 0.0175781C8.89529 0.0175781 7.83564 0.455591 7.05334 1.2356L0.73251 7.55727C0.499531 7.78875 0.314818 8.06418 0.189079 8.36759C0.0633394 8.67099 -0.000925334 8.99634 1.00662e-05 9.32477V17.5056C1.00662e-05 18.1686 0.263402 18.8045 0.732243 19.2734C1.20108 19.7422 1.83697 20.0056 2.50001 20.0056H17.5C18.1631 20.0056 18.7989 19.7422 19.2678 19.2734C19.7366 18.8045 20 18.1686 20 17.5056V9.32477C20.0009 8.99634 19.9367 8.67099 19.8109 8.36759C19.6852 8.06418 19.5005 7.78875 19.2675 7.55727ZM12.5 18.3389H7.50001V15.0606C7.50001 14.3976 7.7634 13.7617 8.23224 13.2928C8.70109 12.824 9.33697 12.5606 10 12.5606C10.6631 12.5606 11.2989 12.824 11.7678 13.2928C12.2366 13.7617 12.5 14.3976 12.5 15.0606V18.3389ZM18.3333 17.5056C18.3333 17.7266 18.2455 17.9386 18.0893 18.0949C17.933 18.2511 17.721 18.3389 17.5 18.3389H14.1667V15.0606C14.1667 13.9555 13.7277 12.8957 12.9463 12.1143C12.1649 11.3329 11.1051 10.8939 10 10.8939C8.89494 10.8939 7.83513 11.3329 7.05373 12.1143C6.27233 12.8957 5.83334 13.9555 5.83334 15.0606V18.3389H2.50001C2.279 18.3389 2.06703 18.2511 1.91075 18.0949C1.75447 17.9386 1.66668 17.7266 1.66668 17.5056V9.32477C1.66745 9.10392 1.75517 8.89225 1.91084 8.7356L8.23168 2.41643C8.70143 1.94887 9.33723 1.68639 10 1.68639C10.6628 1.68639 11.2986 1.94887 11.7683 2.41643L18.0892 8.7381C18.2442 8.89414 18.3319 9.10478 18.3333 9.32477V17.5056Z" />
            </g>
            <defs>
              <clipPath id="clip0_2643_4586">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          Home
        </Link>
        <Link
          to="/community"
          className={`font-fredoka flex flex-row items-center gap-x-2 rounded-md px-3 py-[6px] text-xl  font-medium text-neutral-950 transition-all duration-200 hover:bg-neutral-200  `}
        >
          <img
            src="/images/homepage/community.png"
            className="h-8 w-8 fill-neutral-800"
            alt="Community Image"
          />
          Community
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
