import { Link } from "react-router-dom";
import Notifications from "../../components/Notifications";
import UserDropDown from "../../components/UserDropDown";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import SearchIcon from "../../assets/SearchIcon";
import SearchItem from "./SearchItem";
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <header className="flex h-14 w-full flex-row items-center justify-between bg-primary px-4 transition-all duration-300 lg:justify-around">
      {!showSearch && (
        <Link to="/" className="flex w-fit items-center justify-center gap-x-2">
          <img
            src="/logoPrimary.png"
            alt="Pety Logo"
            className="h-[50] w-[98px]"
          />
        </Link>
      )}
      <div className="hidden md:block">
        <SearchItem />
      </div>

      {showSearch && (
        <div className="w-full md:hidden">
          <SearchItem />
        </div>
      )}
      <div
        onClick={() => setShowSearch(!showSearch)}
        className={`ml-auto mr-2 flex h-11 items-center ${!showSearch ? "border-r-2 border-white border-opacity-50" : ""} pr-3 md:hidden`}
      >
        {!showSearch ? (
          <SearchIcon className="h-6 w-6 fill-white" />
        ) : (
          <svg
            className="ml-2 h-6 w-6 fill-white"
            viewBox="0 0 365.696 365.696"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M243.188 182.86L356.32 69.726c12.5-12.5 12.5-32.766 0-45.247L341.238 9.398c-12.504-12.503-32.77-12.503-45.25 0L182.86 122.528 69.727 9.374c-12.5-12.5-32.766-12.5-45.247 0L9.375 24.457c-12.5 12.504-12.5 32.77 0 45.25l113.152 113.152L9.398 295.99c-12.503 12.503-12.503 32.769 0 45.25L24.48 356.32c12.5 12.5 32.766 12.5 45.247 0l113.132-113.132L295.99 356.32c12.503 12.5 32.769 12.5 45.25 0l15.081-15.082c12.5-12.504 12.5-32.77 0-45.25zm0 0" />
          </svg>
        )}
      </div>
      <div className="hidden shrink-0 flex-row justify-between min-[470px]:flex">
        {user && (
          <div className="flex items-center gap-x-2">
            <Notifications />
            <UserDropDown />
          </div>
        )}
      </div>
      <div className=" min-[470px]:hidden">
        {user && !showSearch && <Notifications />}
      </div>
      {!user && (
        <Link
          className="rounded-lg bg-yellowDark px-6 py-2 text-justify text-xl font-bold text-white transition-all duration-300 hover:bg-amber-400"
          to="/auth/login"
        >
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
