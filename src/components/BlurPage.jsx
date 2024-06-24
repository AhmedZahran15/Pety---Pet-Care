import { useContext } from "react";
import { SideMenuContext } from "../contexts/sideMenuContext";
function BlurPage() {
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);
  return (
    showSideMenu && (
      <div
        className="fixed left-0 top-0 z-[98] h-full w-full filter backdrop-blur-[3px] transition-all duration-1000 min-[1120px]:hidden"
        onClick={handleShowSideMenu}
      ></div>
    )
  );
}

export default BlurPage;
