import { useContext } from "react";
import NormalInput from "./NormalInput";
import BecomeAPetyContext from "../../contexts/BecomeAPetyContext";

function StepOne() {
  const {
    state: {
      petyName,
      clinicalName,
      errors: { petyName: petyNameError, clinicalName: clinicalNameError },
    },
    dispatch,
  } = useContext(BecomeAPetyContext);
  function handleNameChange(e) {
    dispatch({ type: "SET_PETY_NAME", payload: e.target.value });
  }
  function handleClinicalNameChange(e) {
    dispatch({ type: "SET_CLINICAL_NAME", payload: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "validateStepOne" });
    if (
      petyNameError === "" &&
      clinicalNameError === "" &&
      petyName !== "" &&
      clinicalName !== ""
    ) {
      dispatch({ type: "SET_STEP", payload: 2 });
    }
  }
  return (
    <form
      className="mt-8 w-full space-y-8  rounded-lg border-0 bg-white p-8 shadow-lg shadow-neutral-300 md:w-5/6 lg:w-3/6"
      onSubmit={handleSubmit}
    >
      <NormalInput
        label="Enter Your Name."
        value={petyName}
        onChange={handleNameChange}
        error={petyNameError ? petyNameError : ""}
      />
      <NormalInput
        label="Enter Your Service / Service Name."
        value={clinicalName}
        onChange={handleClinicalNameChange}
        error={clinicalNameError ? clinicalNameError : ""}
      />
      <div className="flex items-center justify-start gap-x-6">
        <button className="rounded-md bg-[#ffa500] px-14 py-3 text-lg font-semibold text-white">
          Next
        </button>
      </div>
    </form>
  );
}

export default StepOne;
