import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="fixed flex w-full flex-row items-center bg-[#E3F0F1] py-2 sm:justify-around 
    "
    >
      <Link
        to="/"
        className="font-['Product Sans'] cursor-pointer text-6xl font-bold text-black"
      >
        PETY
      </Link>
      <ul className="flex items-center justify-center gap-8 ">
        <li className=" font-Product Sans Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700">
          <Link to="#">Services</Link>
        </li>
        <li className="font-Product Sans Medium gap-2.5 text-3xl font-medium text-black  transition-all  duration-300  hover:text-teal-700">
          <Link to="#">Community</Link>
        </li>
        <li className=" font-Product Sans Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700">
          <Link to="#">Contact</Link>
        </li>
        <li className=" font-Product Sans Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700 ">
          <Link to="#">About</Link>
        </li>
      </ul>

      <Link
        className="font-['Roboto Flex'] rounded-3xl bg-secondary px-6 py-1.5 text-xl font-bold text-white transition-all duration-300 hover:bg-amber-400 "
        to="auth/login"
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
