import { useContext } from "react";
import { SideMenuContext } from "../contexts/sideMenuContext";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export const SideMenu = () => {
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);
  const { user, userData, logoutUser } = useContext(AuthContext);
  return (
    <menu
      className={
        "fixed top-0 z-[99] flex h-screen flex-col justify-start gap-8 bg-secondary pl-4 pr-16 pt-16 transition-all duration-200 ease-cubic lg:hidden " +
        (showSideMenu ? "right-0" : "-right-80")
      }
    >
      {user ? (
        <div className="flex items-center gap-x-4 sm:hidden">
          <picture className="h-[60px] max-h-[60px] w-[60px] max-w-[60px] overflow-clip rounded-full">
            <img
              src={userData?.photo?.url || "/userImage.png"}
              alt="pet worker"
              className=" h-full scale-[1.3]"
            />
          </picture>
          <div className="flex flex-col">
            <span className="text-base font-bold">
              {userData?.firstName} {userData?.lastName}
            </span>
            <span className="text-sm font-normal text-neutral-100">
              Service Provider
            </span>
          </div>
        </div>
      ) : null}
      <ul className="flex flex-col gap-4 text-xl font-bold">
        {user ? (
          <li>
            <Link
              to="/dashboard"
              onClick={handleShowSideMenu}
              className="Medium text-3xl font-medium text-black transition-all duration-300 hover:text-teal-700 sm:hidden"
            >
              Dashboard
            </Link>
          </li>
        ) : null}
        <li
          onClick={handleShowSideMenu}
          className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700"
        >
          <Link to="/services?role=vet">Services</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className="Medium gap-2.5 text-3xl font-medium text-black  transition-all  duration-300  hover:text-teal-700"
        >
          <Link to="/community">Community</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700"
        >
          <Link to="/becomeAPety">Become A Pety</Link>
        </li>

        <li
          onClick={handleShowSideMenu}
          className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700"
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700 "
        >
          <Link to="/about">About</Link>
        </li>
      </ul>
      {user ? (
        <button
          onClick={() => {
            handleShowSideMenu();
            logoutUser();
          }}
          className="w-full rounded-3xl bg-[#E3F0F1] px-2 py-1.5 text-center text-xl font-bold text-secondary transition-all duration-100 hover:bg-gray-300  sm:hidden"
        >
          Logout
        </button>
      ) : (
        <Link
          className="w-full rounded-3xl bg-[#E3F0F1] px-2 py-1.5 text-center text-xl font-bold text-secondary transition-all duration-100 hover:bg-gray-300"
          to="auth/login"
        >
          Login
        </Link>
      )}
    </menu>
  );
};
