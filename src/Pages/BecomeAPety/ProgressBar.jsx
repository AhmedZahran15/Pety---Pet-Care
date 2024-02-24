import PropTypes from "prop-types";
function ProgressBar({ step }) {
  return (
    <div className="flex w-full flex-col md:w-3/4 lg:w-2/5 ">
      <div className="h-1 w-full rounded-lg bg-[#D9D9D9]">
        <div
          className={`h-1 rounded-lg bg-primary ${step === 1 ? "w-1/3" : step === 2 ? "w-2/3" : "w-full"}`}
        ></div>
      </div>
      <div className="flex">
        <div className="w-1/3 text-center font-[Montserrat] text-lg  font-normal  text-black ">
          Name
        </div>
        <div className="w-1/3 text-center font-[Montserrat] text-lg  font-normal text-black ">
          Service
        </div>
        <div className="w-1/3 text-center font-[Montserrat] text-lg font-normal  text-black ">
          Contact info
        </div>
      </div>
    </div>
  );
}
ProgressBar.propTypes = {
  step: PropTypes.number.isRequired,
};
export default ProgressBar;
