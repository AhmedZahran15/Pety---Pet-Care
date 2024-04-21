import PropTypes from "prop-types";
import UserDropDown from "../../components/UserDropDown";
function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="flex w-full border-b-2 border-neutral-400">
      <div className="flex flex-grow items-center justify-between px-4 py-3 md:px-6 lg:justify-end 2xl:px-11">
        <button
          aria-controls="sidebar"
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className=" flex w-8 flex-col justify-between gap-y-1 rounded-sm shadow-sm hover:scale-105 lg:hidden"
        >
          <span
            className={
              "block h-[6px] rounded-full bg-neutral-800 transition-all duration-200 ease-cubic " +
              (sidebarOpen ? "translate-y-2 rotate-45" : "w-full")
            }
          ></span>
          <span
            className={
              "block h-[6px] rounded-full bg-neutral-800 transition-all duration-200 ease-cubic " +
              (sidebarOpen ? "w-0" : "w-full")
            }
          ></span>
          <span
            className={
              "block h-[6px] rounded-full bg-neutral-800 transition-all duration-200 ease-cubic " +
              (sidebarOpen ? "-translate-y-3 -rotate-45" : "w-full")
            }
          ></span>
        </button>
        <UserDropDown />
      </div>
    </header>
  );
}
Header.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};
export default Header;
