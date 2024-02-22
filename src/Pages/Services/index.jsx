import FeaturesBar from "../../components/FeaturesBar";
import Filters from "./Filters";
import PetWorkers from "./PetWorkers";
import Pagination from "./Pagination";
import ScrollToTop from "../../components/ScrollToTop";
import PetWorkersHeader from "./PetWorkersHeader";
import SortDropDown from "./SortDropDown";
import WorkersName from "./WorkersName";
function Services() {
  return (
    <div className=" flex flex-col bg-neutral-100">
      <FeaturesBar imgSrc="/images/services.png" />
      <div className="relative my-20 flex w-full flex-col items-center justify-around gap-y-16 lg:flex-row lg:items-start">
        <Filters />
        <div className="flex w-11/12 max-w-[900px] flex-col items-center justify-start gap-16 lg:w-7/12">
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
