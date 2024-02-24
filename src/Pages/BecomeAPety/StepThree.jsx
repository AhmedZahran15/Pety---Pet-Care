import { useContext } from "react";
import NormalInput from "./NormalInput";
import BecomeAPetyContext from "../../contexts/BecomeAPetyContext";

function StepThree() {
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
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "validateStepThree" });
    if (
      addressError === "" &&
      phoneNumberError === "" &&
      emailError === "" &&
      address !== "" &&
      phoneNumber !== "" &&
      email !== ""
    ) {
      null;
    }
  }
  return (
    <form
      className="mt-8 w-full space-y-8  rounded-lg border-0 bg-white p-8 shadow-lg shadow-neutral-300 md:w-5/6 lg:w-3/6"
      onSubmit={handleSubmit}
    >
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
        <button className="rounded-md bg-[#ffa500] px-14 py-3 text-lg font-semibold text-white">
          Submit
        </button>
        <button
          onClick={() => dispatch({ type: "SET_STEP", payload: 2 })}
          className="rounded-md bg-[#CECECE] px-14 py-3 text-lg font-semibold text-white"
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default StepThree;
