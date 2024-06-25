import { Outlet } from "react-router-dom";
import HeroSection from "./HeroSection";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "../../components/Footer";
function Community() {
  return (
    <div className="relative flex flex-col bg-neutral-100">
      <Header />
      <HeroSection />
      <div className="container mx-auto flex flex-col justify-between gap-4 px-4 lg:flex-row">
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Community;
