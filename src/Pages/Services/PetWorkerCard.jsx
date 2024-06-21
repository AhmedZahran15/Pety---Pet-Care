import TimeTable from "../../components/TimeTable";
import PropTypes from "prop-types";
import WorkerInfo from "../../components/WorkerInfo";

function PetWorkerCard({ data }) {
  return (
    <div className="flex w-full flex-col items-start justify-center gap-x-2 gap-y-6 rounded-xl border-[0.5px] border-black border-opacity-20 bg-white px-4 py-4 shadow-lg shadow-neutral-300 hover:bg-neutral-50 md:flex-row lg:flex-col xl:flex-row">
      <WorkerInfo data={data} />
      <TimeTable data={data} />
    </div>
  );
}

PetWorkerCard.propTypes = {
  data: PropTypes.object.isRequired,
};
export default PetWorkerCard;
