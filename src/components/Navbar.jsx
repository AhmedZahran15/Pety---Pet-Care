import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { SideMenuProvider } from "../contexts/sideMenuContext";
import { SideMenu } from "./SideMenu";
import BlurPage from "./BlurPage";
import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
const Navbar = () => {
  const { user, userData, logoutUser } = useContext(AuthContext);
  return (
    <SideMenuProvider>
      <header
        className=" flex w-full flex-row items-center justify-between bg-white transition-all duration-300 lg:justify-around
    "
      >
        <Link to="/">
          <img src="/Logo Placeholder.png" alt="Logo" />
        </Link>
        <div className="flex flex-row justify-between gap-8">
          <ul className="hidden items-center justify-center gap-8 md:flex">
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black">
              <Link to="becomeAPety/stepOne">Become A Pety</Link>
            </li>
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black">
              <Link to="services?role=vet">Services</Link>
            </li>
            <li className="Medium gap-2.5 text-xl font-normal text-gray-500  transition-all  duration-300  hover:text-black">
              <Link to="#">Community</Link>
            </li>
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black">
              <Link to="#">Contact</Link>
            </li>
            <li className=" Medium text-xl font-normal text-gray-500 transition-all  duration-300  hover:text-black ">
              <Link to="#">About</Link>
            </li>
          </ul>
          {user ? (
            <div className="flex flex-row items-center justify-center gap-8">
              <span className="text-xl font-normal text-gray-500">
                {userData?.firstName}
              </span>
              <button
                onClick={logoutUser}
                className="rounded-lg bg-secondary px-6 py-2 text-justify text-xl font-bold text-white transition-all duration-300 hover:bg-amber-400"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              className="mr-4 hidden rounded-lg bg-secondary px-6 py-2 text-justify text-xl font-bold text-white transition-all duration-300 hover:bg-amber-400 md:block "
              to="auth/login"
            >
              Login
            </Link>
          )}
        </div>
        <BurgerMenu />
        <BlurPage />
        <SideMenu />
      </header>
    </SideMenuProvider>
  );
};

export default Navbar;
