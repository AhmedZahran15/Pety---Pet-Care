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
        "fixed top-0 z-[99] flex h-screen w-72 flex-col justify-start gap-8 border bg-secondary px-4 pt-16 transition-all duration-200 ease-cubic min-[1120px]:hidden " +
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
          <div className="flex flex-col items-center">
            <span className="text-base font-bold text-primary">
              {userData?.firstName} {userData?.lastName}
            </span>
            <span className="text-sm font-medium text-primary opacity-70">
              Service Provider
            </span>
          </div>
        </div>
      ) : null}
      <ul className="flex flex-col gap-4 text-xl font-bold text-primary">
        {user ? (
          <li>
            <Link
              to="/dashboard"
              onClick={handleShowSideMenu}
              className="nav-link text-3xl font-medium opacity-70 transition-all duration-300 hover:opacity-100 sm:hidden"
            >
              Dashboard
            </Link>
          </li>
        ) : null}
        <li
          onClick={handleShowSideMenu}
          className="nav-link relative w-fit text-3xl font-medium opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <Link to="/services?role=vet">Services</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className="nav-link w-fit text-3xl font-medium  opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <Link to="/community">Community</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className="nav-link w-fit text-3xl font-medium  opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <Link to="/chatbot">Medbot</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className="nav-link w-fit text-3xl font-medium opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <Link to="/becomeAPety">Become A Pety</Link>
        </li>

        <li
          onClick={handleShowSideMenu}
          className="nav-link w-fit text-3xl font-medium opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <Link to="/contact">Contact</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className="nav-link w-fit text-3xl font-medium opacity-70 transition-all duration-300 hover:opacity-100 "
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
          className="mx-auto mb-4 mt-auto w-60 rounded-3xl bg-secondary px-2 py-1.5 text-center text-xl font-bold text-primary ring-2 ring-primary transition-all duration-100 hover:bg-primary hover:text-secondary  sm:hidden"
        >
          Logout
        </button>
      ) : (
        <Link
          className="mx-auto mb-4 mt-auto w-60 rounded-3xl bg-secondary px-2 py-1.5 text-center text-xl font-bold text-primary ring-2 ring-primary transition-all duration-100 hover:bg-primary hover:text-secondary"
          to="auth/login"
        >
          Login
        </Link>
      )}
    </menu>
  );
};
