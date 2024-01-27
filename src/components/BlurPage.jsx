import { useContext } from "react";
import { SideMenuContext } from "../contexts/sideMenuContext";
function BlurPage() {
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);
  return (
    showSideMenu && (
      <div
        className="z-60 fixed left-0 top-0 h-full w-full filter backdrop-blur-[3px] transition-all duration-1000 lg:hidden"
        onClick={handleShowSideMenu}
      ></div>
    )
  );
}

export default BlurPage;
