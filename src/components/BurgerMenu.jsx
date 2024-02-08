import { useContext } from "react";
import { SideMenuContext } from "../contexts/sideMenuContext";

const BurgerMenu = () => {
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);
  return (
    <div
      className={
        "right-0 z-40 mr-6 flex w-8 cursor-pointer flex-col gap-1 hover:scale-110 md:hidden" +
        (showSideMenu ? " fixed scale-[1.2]" : "")
      }
      onClick={handleShowSideMenu}
    >
      <span
        className={
          "ease-cubic h-[6px] rounded-full bg-primary transition-all duration-200 " +
          (showSideMenu ? "translate-y-2 rotate-45" : "w-full")
        }
      ></span>
      <span
        className={
          "ease-cubic h-[6px] rounded-full bg-primary transition-all duration-200 " +
          (showSideMenu ? "w-0" : "w-full")
        }
      ></span>
      <span
        className={
          "ease-cubic h-[6px] rounded-full bg-primary transition-all duration-200 " +
          (showSideMenu ? "-translate-y-3 -rotate-45" : "w-full")
        }
      ></span>
    </div>
  );
};
export default BurgerMenu;
