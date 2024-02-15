import { Loader } from "../../components/Loader";
import PropTypes from "prop-types";
function PetWorkers({ children, isLoading }) {
  return (
    <div className="flex w-full flex-col items-center justify-start gap-y-4">
      {isLoading ? (
        <div className="mt-6">
          <Loader width="100px" height="100px" />{" "}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
PetWorkers.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default PetWorkers;
