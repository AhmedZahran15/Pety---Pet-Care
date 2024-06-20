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
      <div className="my-20 flex w-full flex-col items-center justify-around gap-y-16 lg:flex-row lg:items-start">
        <Filters />
        <div className="flex w-11/12 max-w-[900px] flex-col items-center justify-start gap-8 lg:w-7/12">
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
