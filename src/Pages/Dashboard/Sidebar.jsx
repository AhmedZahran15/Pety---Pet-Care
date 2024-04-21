import { Link } from "react-router-dom";
import ExpandableList from "./ExpandableList";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { logoutUser } = useContext(AuthContext);
  return (
    <div
      className={`z-9999 items-left absolute left-0 top-0 flex h-screen w-72 flex-col overflow-y-hidden border-r-2 border-neutral-300 bg-neutral-100 px-4 py-6 duration-300 ease-linear no-scrollbar lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <Link
        to="/"
        className="mb-8 flex w-fit items-center justify-center gap-x-2 bg-neutral-100"
      >
        <div className="h-9 w-9 rounded-full bg-black"></div>
        <span className="text-4xl font-bold">PETY</span>
      </Link>
      <div className="mb-2 border-b-2 border-neutral-400 px-3 py-[6px] font-fredoka text-3xl font-semibold text-neutral-800">
        MENU
      </div>
      <div className="flex flex-col gap-y-4">
        <ExpandableList text="Veterinarian" />
        <ExpandableList text="Pet Groomer" />
        <ExpandableList text="Pet Sitter" />
      </div>
      <button
        onClick={logoutUser}
        className="mt-auto justify-self-end rounded-lg px-4 py-2 font-fredoka text-xl font-medium hover:bg-neutral-200"
      >
        Log Out
      </button>
    </div>
  );
}

export default Sidebar;
