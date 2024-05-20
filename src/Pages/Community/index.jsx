import { Outlet } from "react-router-dom";
import HeroSection from "./HeroSection";
import Sidebar from "./Sidebar";

function Community() {
  return (
    <div className="relative flex flex-col bg-neutral-100">
      <HeroSection />
      <div className="container mx-auto flex flex-col justify-between p-8 lg:flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Community;
