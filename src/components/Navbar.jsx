import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { SideMenuProvider } from "../contexts/sideMenuContext";
import { SideMenu } from "./SideMenu";
import BlurPage from "./BlurPage";
const Navbar = () => {
  return (
    <SideMenuProvider>
      <nav
        className="flex w-full flex-row items-center justify-between bg-[#E3F0F1] py-2 lg:justify-around
    "
      >
        <Link
          to="/"
          className="font-['Product Sans'] ml-6 cursor-pointer text-6xl font-bold text-black lg:ml-0"
        >
          PETY
        </Link>
        <ul className="  hidden items-center justify-center gap-8 lg:flex">
          <li className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700">
            <Link to="#">Services</Link>
          </li>
          <li className="Medium gap-2.5 text-3xl font-medium text-black  transition-all  duration-300  hover:text-teal-700">
            <Link to="#">Community</Link>
          </li>
          <li className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700">
            <Link to="#">Contact</Link>
          </li>
          <li className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700 ">
            <Link to="#">About</Link>
          </li>
        </ul>

        <Link
          className="font-['Roboto Flex'] hidden rounded-3xl bg-secondary px-6 py-1.5 text-xl font-bold text-white transition-all duration-300 hover:bg-amber-400 lg:block "
          to="auth/login"
        >
          Login
        </Link>
        <BurgerMenu />
        <BlurPage />
        <SideMenu />
      </nav>
    </SideMenuProvider>
  );
};

export default Navbar;
