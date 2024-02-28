import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function UserDropDown() {
  const { userData, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeEvent = (e) => {
      if (e.target.closest(".userDropDown") !== null) return;
      setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("click", closeEvent);
    }
    return () => {
      document.removeEventListener("click", closeEvent);
    };
  }, [isOpen]);
  return (
    <div className="userDropDown relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          type="button"
          className="inline-flex items-center justify-center gap-x-4 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <div className="flex items-center gap-x-1">
            <img
              src="images/vetImg.jpg"
              alt="avatar"
              className="h-8 w-8 rounded-full"
            />
            <p>{userData?.firstName}</p>
          </div>
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-[-1] z-10 mt-2 w-36 origin-top-right overflow-clip rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
      >
        <Link
          to="/dashboard"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </Link>
        <Link
          to="/profile"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Profile
        </Link>
        <Link
          to="/settings"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </Link>
        <button
          onClick={() => logoutUser()}
          type="button"
          className="flex w-full items-center justify-start gap-x-2 px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
        >
          <span className="h-3 w-3">
            <svg
              className="fill-gray-500"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M255.15,468.625H63.787c-11.737,0-21.262-9.526-21.262-21.262V64.638c0-11.737,9.526-21.262,21.262-21.262H255.15
			c11.758,0,21.262-9.504,21.262-21.262S266.908,0.85,255.15,0.85H63.787C28.619,0.85,0,29.47,0,64.638v382.724
			c0,35.168,28.619,63.787,63.787,63.787H255.15c11.758,0,21.262-9.504,21.262-21.262
			C276.412,478.129,266.908,468.625,255.15,468.625z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M505.664,240.861L376.388,113.286c-8.335-8.25-21.815-8.143-30.065,0.213s-8.165,21.815,0.213,30.065l92.385,91.173
			H191.362c-11.758,0-21.262,9.504-21.262,21.262c0,11.758,9.504,21.263,21.262,21.263h247.559l-92.385,91.173
			c-8.377,8.25-8.441,21.709-0.213,30.065c4.167,4.21,9.653,6.336,15.139,6.336c5.401,0,10.801-2.041,14.926-6.124l129.276-127.575
			c4.04-3.997,6.336-9.441,6.336-15.139C512,250.302,509.725,244.88,505.664,240.861z"
                  />
                </g>
              </g>
            </svg>
          </span>
          Log out
        </button>
      </div>
    </div>
  );
}

export default UserDropDown;
