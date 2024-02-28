import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function UserDropDown() {
  const { userData, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
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
        onMouseLeave={() => setIsOpen(false)}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-[-1] z-10 mt-2 w-36 origin-top-right overflow-clip rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition duration-150 ease-in-out focus:outline-none`}
      >
        <Link
          to="/dashboard"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          DashBoard
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
          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

export default UserDropDown;
