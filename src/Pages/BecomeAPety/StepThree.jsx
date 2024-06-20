import { useContext, useState } from "react";
import BecomeAPetyContext from "../../contexts/BecomeAPetyContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components/Loader";
import Input from "../../components/InputXX";

function StepThree() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    state: {
      address,
      phoneNumber,
      email,
      errors: {
        address: addressError,
        phoneNumber: phoneNumberError,
        email: emailError,
      },
    },
    dispatch,
    registerPety,
  } = useContext(BecomeAPetyContext);
  function handleAddressChange(e) {
    dispatch({ type: "SET_ADDRESS", payload: e.target.value });
  }
  function handlePhoneChange(e) {
    dispatch({ type: "SET_PHONE_NUMBER", payload: e.target.value });
  }
  function handleEmailChange(e) {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  }
  async function handleStepThree() {
    dispatch({ type: "validateStepThree" });
    if (
      addressError === "" &&
      phoneNumberError === "" &&
      emailError === "" &&
      address !== "" &&
      phoneNumber !== "" &&
      email !== ""
    ) {
      setIsLoading(true);
      const data = await registerPety();
      setIsLoading(false);
      if (data.status === "success") {
        toast.success("You have registered successfully.");
        navigate("/");
        dispatch({ type: "RESET" });
      } else {
        toast.error(data?.message || "An error occurred while registering.");
      }
    }
  }
  return (
    <div className="mt-8 w-full space-y-8 rounded-lg border-0 bg-white p-8 shadow-lg shadow-neutral-300 md:w-5/6 md:pr-32 lg:w-3/6 xl:pr-64">
      <Input
        label="Enter your address."
        value={address}
        onChange={handleAddressChange}
        error={addressError ? addressError : ""}
      />
      <Input
        label="Enter your phone number."
        value={phoneNumber}
        onChange={handlePhoneChange}
        error={phoneNumberError ? phoneNumberError : ""}
      />
      <Input
        label="Enter your email address."
        value={email}
        onChange={handleEmailChange}
        error={emailError ? emailError : ""}
      />
      <div className=" flex flex-col items-center justify-start gap-x-6 gap-y-4 sm:flex-row">
        <button
          onClick={handleStepThree}
          disabled={isLoading}
          className="min-w-[180px] rounded-md bg-yellowDark px-14 py-3 text-lg font-semibold text-white hover:bg-amber-400 disabled:cursor-not-allowed "
        >
          {isLoading ? <Loader /> : "Submit"}
        </button>
        <button
          onClick={() => dispatch({ type: "SET_STEP", payload: 2 })}
          className="min-w-[180px] rounded-md bg-[#CECECE] px-14 py-3 text-lg font-semibold text-white hover:bg-neutral-400"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default StepThree;
