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
        className="flex h-14 w-full px-4 flex-row items-center justify-between bg-primary transition-all duration-300 lg:justify-around
    "
      >
        <Link to="/" className="flex w-fit items-center justify-center gap-x-2">
          <div className="h-7 w-7 rounded-full bg-white"></div>
          <span className="text-3xl font-bold text-white">PETY</span>
        </Link>
        <div className="hidden flex-row justify-between gap-8 lg:flex">
          <ul className="flex items-center justify-center gap-8">
            <li className="Medium text-xl font-normal text-white opacity-50 transition-all duration-300 hover:opacity-100">
              <Link to="becomeAPety">Become A Pety</Link>
            </li>
            <li className="Medium text-xl font-normal text-white opacity-50 transition-all duration-300 hover:opacity-100">
              <Link to="services?role=vet">Services</Link>
            </li>
            <li className="Medium text-xl font-normal text-white opacity-50 transition-all duration-300 hover:opacity-100">
              <Link to="/community">Community</Link>
            </li>
            <li className="Medium text-xl font-normal text-white opacity-50 transition-all duration-300 hover:opacity-100">
              <Link to="contact">Contact</Link>
            </li>
            <li className="Medium text-xl font-normal text-white opacity-50 transition-all duration-300 hover:opacity-100">
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
              className="hidden rounded-lg bg-yellowDark px-6 py-2 text-justify text-xl font-bold text-white transition-all duration-300 hover:bg-amber-400 lg:block "
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
