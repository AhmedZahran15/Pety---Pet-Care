import { useContext } from "react";
import BecomeAPetyContext from "../../contexts/BecomeAPetyContext";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressBar from "./ProgressBar";

function BecomeAPety() {
  const {
    state: { step },
  } = useContext(BecomeAPetyContext);

  return (
    <div className="flex h-full w-full flex-col  items-center bg-neutral-100 px-6 py-24">
      <ProgressBar step={step} />
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
}

export default BecomeAPety;
