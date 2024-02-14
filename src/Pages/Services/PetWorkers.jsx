import { Loader } from "../../components/Loader";
import PropTypes from "prop-types";
function PetWorkers({ children, isLoading }) {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-y-4">
      {isLoading ? <Loader width="100px" height="100px" /> : children}
    </div>
  );
}
PetWorkers.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default PetWorkers;
