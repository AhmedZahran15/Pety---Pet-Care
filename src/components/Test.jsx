import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="">
      <div className="  sm:p-3 flex flex-row sm:items-center sm:justify-around bg-[#E3F0F1] 
      ">
        <div className=" font-['Product Sans'] text-6xl font-bold text-black">
          PETY
        </div>
        <ul className="flex items-center justify-center gap-8 ">
          <li className="font-Product Sans Medium gap-2.5 text-3xl font-medium text-black  hover:text-teal-700  transition-all  duration-300">
            <a href="#">Community</a>
          </li>
          <li className=" font-Product Sans Medium text-3xl font-medium text-black hover:text-teal-700  transition-all  duration-300">
            <a href="#">Features</a>
          </li>
          <li className=" font-Product Sans Medium text-3xl font-medium text-black hover:text-teal-700  transition-all  duration-300 ">
            <a href="#">About</a>
          </li>
          <li className=" font-Product Sans Medium text-3xl font-medium text-black hover:text-teal-700  transition-all  duration-300">
            <a href="#">Contact</a>
          </li>
        </ul>
   <button className="w-28 h-14 px-7 py-3.5 bg-amber-500 rounded-xl justify-center items-center inline-flex text-white text-2xl font-bold font-['Roboto Flex'] hover:bg-amber-400 transition-all duration-300 ">
   <Link to="auth/login">Login</Link>
     
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
