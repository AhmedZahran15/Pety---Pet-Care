import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-400 flex items-center justify-between flex-wrap bg-blue p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My App</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        style={{ left: "auto", right: 0 }}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            About
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            Contact
          </a>
        </div>
        <div style={{ left: "auto", right: 0 }}>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0 mr-2">
            <Link to="auth/login">Sign In</Link>
          </button>
          <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
            <Link to="auth/register">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
