import { Outlet } from "react-router-dom";
import HeroSection from "./HeroSection";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Community() {
  return (
    <div className="relative flex flex-col bg-neutral-100">
      <Header />
      <HeroSection />
      <div className="container mx-auto mt-4 flex flex-col justify-between px-4 lg:mt-0 lg:flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default Community;
