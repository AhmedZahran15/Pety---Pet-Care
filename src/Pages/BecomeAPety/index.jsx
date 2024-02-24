import { useContext, useEffect } from "react";
import BecomeAPetyContext from "../../contexts/BecomeAPetyContext";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import ProgressBar from "./ProgressBar";
import AuthContext from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
function BecomeAPety() {
  const navigate = useNavigate();
  const {
    state: { step },
  } = useContext(BecomeAPetyContext);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      toast.error("You need to be logged in to access this page", {
        id: "login-error-toast",
      });
      navigate("/auth/login");
    }
  }, [user, navigate]);
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
