import { useContext } from "react";
import NormalInput from "./NormalInput";
import BecomeAPetyContext from "../../contexts/BecomeAPetyContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function StepThree() {
  const navigate = useNavigate();
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
      const data = await registerPety();
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
    <div className="mt-8 w-full space-y-8  rounded-lg border-0 bg-white p-8 shadow-lg shadow-neutral-300 md:w-5/6 lg:w-3/6">
      <NormalInput
        label="Enter your address."
        value={address}
        onChange={handleAddressChange}
        error={addressError ? addressError : ""}
      />
      <NormalInput
        label="Enter your phone number."
        value={phoneNumber}
        onChange={handlePhoneChange}
        error={phoneNumberError ? phoneNumberError : ""}
      />
      <NormalInput
        label="Enter your email address."
        value={email}
        onChange={handleEmailChange}
        error={emailError ? emailError : ""}
      />
      <div className="flex items-center justify-start gap-x-6">
        <button
          onClick={handleStepThree}
          className="rounded-md bg-[#ffa500] px-14 py-3 text-lg font-semibold text-white hover:bg-amber-400"
        >
          Submit
        </button>
        <button
          onClick={() => dispatch({ type: "SET_STEP", payload: 2 })}
          className="rounded-md bg-[#CECECE] px-14 py-3 text-lg font-semibold text-white hover:bg-neutral-400"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default StepThree;
