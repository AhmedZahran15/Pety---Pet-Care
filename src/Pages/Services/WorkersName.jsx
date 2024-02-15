import PropTypes from "prop-types";
function WorkersName({ filterParams }) {
  return (
    <h1 className="flex items-center font-fredoka text-2xl font-semibold sm:text-3xl md:text-5xl">
      {filterParams.get("role") === "vet"
        ? "Veterinarians"
        : filterParams.get("role") === "petSitter"
          ? "Pet Sitters"
          : filterParams.get("role") === "groomer"
            ? "Pet Groomers"
            : "Pet Workers"}
    </h1>
  );
}
WorkersName.propTypes = {
  filterParams: PropTypes.object.isRequired,
};
export default WorkersName;
