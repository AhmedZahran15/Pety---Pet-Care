import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { SideMenuProvider } from "../contexts/sideMenuContext";
import { SideMenu } from "./SideMenu";
import BlurPage from "./BlurPage";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import UserDropDown from "./UserDropDown";
import Notifications from "./Notifications";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <SideMenuProvider>
      <header
        className=" flex w-full flex-row items-center justify-between bg-white transition-all duration-300 lg:justify-around
    "
      >
        <Link to="/">
          <img src="/Logo Placeholder.png" alt="Logo" />
        </Link>
        <div className="hidden flex-row justify-between gap-8 lg:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black">
              <Link to="becomeAPety">Become A Pety</Link>
            </li>
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black">
              <Link to="services?role=vet">Services</Link>
            </li>
            <li className="Medium gap-2.5 text-xl font-normal text-gray-500  transition-all  duration-300  hover:text-black">
              <Link to="/community">Community</Link>
            </li>
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black">
              <Link to="contact">Contact</Link>
            </li>
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black ">
              <Link to="about">About</Link>
            </li>
          </ul>
          {user ? (
            <div className="flex items-center gap-x-2">
              <Notifications />
              <UserDropDown />
            </div>
          ) : (
            <Link
              className="mr-4 hidden rounded-lg bg-secondary px-6 py-2 text-justify text-xl font-bold text-white transition-all duration-300 hover:bg-amber-400 lg:block "
              to="auth/login"
            >
              Login
            </Link>
          )}
        </div>
        <div className="flex items-center gap-4 sm:hidden">
          {user ? <Notifications /> : null}
          <BurgerMenu />
        </div>
        <div className="hidden items-center gap-4 sm:flex lg:hidden">
          {user ? (
            <div className="flex items-center gap-x-2">
              <Notifications />
              <UserDropDown />
            </div>
          ) : null}
          <BurgerMenu />
        </div>
        <BlurPage />
        <SideMenu />
      </header>
    </SideMenuProvider>
  );
};

export default Navbar;
