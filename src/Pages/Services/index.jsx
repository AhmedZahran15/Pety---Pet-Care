import FeaturesBar from "../../components/FeaturesBar";
import Filters from "./Filters";
function Services() {
  return (
    <div className="m-auto flex flex-col bg-neutral-100">
      <FeaturesBar imgSrc="images/services.png" />
      <div className="flex w-full flex-row justify-center gap-32">
        <Filters />
      </div>
    </div>
  );
}

export default Services;
