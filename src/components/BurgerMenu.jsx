import { useContext } from "react";
import { SideMenuContext } from "../contexts/sideMenuContext";

const BurgerMenu = () => {
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);
  return (
    <div
      className={
        "group z-[100] flex w-8 cursor-pointer flex-col gap-1 hover:scale-110"
      }
      onClick={handleShowSideMenu}
    >
      <span
        className={
          "h-[6px] rounded-full transition-all duration-200 ease-cubic group-hover:opacity-100 " +
          (showSideMenu
            ? "translate-y-2 rotate-45 bg-primary opacity-100"
            : "w-full bg-white opacity-50")
        }
      ></span>
      <span
        className={
          "h-[6px] rounded-full  transition-all duration-200 ease-cubic group-hover:opacity-100 " +
          (showSideMenu
            ? "w-0 bg-primary opacity-100"
            : "w-full bg-white opacity-50")
        }
      ></span>
      <span
        className={
          "h-[6px] rounded-full  transition-all duration-200 ease-cubic group-hover:opacity-100 " +
          (showSideMenu
            ? "-translate-y-3 -rotate-45 bg-primary opacity-100"
            : "w-full bg-white opacity-50")
        }
      ></span>
    </div>
  );
};
export default BurgerMenu;
