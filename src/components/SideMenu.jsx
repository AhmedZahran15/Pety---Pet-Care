import { useContext } from "react";
import { SideMenuContext } from "../contexts/sideMenuContext";
import { Link } from "react-router-dom";

export const SideMenu = () => {
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);

  return (
    <menu
      className={
        "ease-cubic z-39 fixed top-0  flex h-screen flex-col justify-start gap-16 bg-secondary pl-4 pr-16 transition-all duration-200 lg:hidden " +
        (showSideMenu ? "right-0" : "-right-80")
      }
    >
      <ul className="mt-20 flex flex-col gap-6 text-xl font-bold">
        <li
          onClick={handleShowSideMenu}
          className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700"
        >
          <Link to="#">Services</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className="Medium gap-2.5 text-3xl font-medium text-black  transition-all  duration-300  hover:text-teal-700"
        >
          <Link to="#">Community</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700"
        >
          <Link to="#">Contact</Link>
        </li>
        <li
          onClick={handleShowSideMenu}
          className=" Medium text-3xl font-medium text-black transition-all  duration-300  hover:text-teal-700 "
        >
          <Link to="#">About</Link>
        </li>
      </ul>
      <Link
        className="font-['Roboto Flex']  rounded-3xl px-6 py-1.5 text-xl font-bold text-black outline outline-primary transition-all duration-300 hover:bg-teal-700"
        to="auth/login"
      >
        Login
      </Link>
    </menu>
  );
};
