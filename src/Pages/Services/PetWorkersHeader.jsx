import PropTypes from "prop-types";
function PetWorkersHeader({ children }) {
  return <div className="-mb-10 flex w-full justify-between">{children}</div>;
}
PetWorkersHeader.propTypes = {
  children: PropTypes.node,
};
export default PetWorkersHeader;
