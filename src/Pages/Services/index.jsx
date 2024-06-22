import FeaturesBar from "./FeaturesBar";
import Filters from "./Filters";
import PetWorkers from "./PetWorkers";
import Pagination from "./Pagination";
import ScrollToTop from "../../components/ScrollToTop";
import PetWorkersHeader from "./PetWorkersHeader";
import SortDropDown from "./SortDropDown";
import WorkersName from "./WorkersName";
import Search from "../../components/Search";
import HeroSection from "./HeroSection";
function Services() {
  return (
    <div className=" flex flex-col bg-neutral-100">
      <HeroSection />
      <Search />
      <div className="container mx-auto my-20 flex w-full flex-col items-center justify-between gap-x-8 gap-y-16 px-8 lg:flex-row lg:items-start">
        <Filters />
        <div className="flex w-full max-w-[900px] flex-col items-center justify-start gap-8">
          <FeaturesBar />
          <PetWorkersHeader>
            <WorkersName />
            <SortDropDown />
          </PetWorkersHeader>
          <PetWorkers />
          <Pagination />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Services;
