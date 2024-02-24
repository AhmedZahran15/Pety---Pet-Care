import { useContext } from "react";
import NormalInput from "./NormalInput";
import BecomeAPetyContext from "../../contexts/BecomeAPetyContext";
import RadioButton from "../../components/RadioButton";
import CheckBox from "../../components/CheckBox";

function StepTwo() {
  const {
    state: {
      description,
      price,
      role,
      animals,
      errors: {
        description: descriptionError,
        price: priceError,
        role: roleError,
        animals: animalsError,
      },
    },
    dispatch,
  } = useContext(BecomeAPetyContext);
  function handleDescriptionChange(e) {
    dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
  }
  function handlePriceChange(e) {
    dispatch({ type: "SET_PRICE", payload: e.target.value });
  }
  function handleServiceChange(e) {
    dispatch({ type: "SET_ROLE", payload: e.target.value });
  }
  function handleAnimalChange(e) {
    if (e.target.checked) {
      dispatch({ type: "ADD_ANIMAL", payload: e.target.value });
    } else {
      dispatch({ type: "REMOVE_ANIMAL", payload: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "validateStepTwo" });
    if (
      descriptionError === "" &&
      priceError === "" &&
      roleError === "" &&
      role !== "" &&
      description !== "" &&
      price !== "" &&
      animals.length > 0 &&
      animalsError === ""
    ) {
      dispatch({ type: "SET_STEP", payload: 3 });
    }
  }
  return (
    <form
      className="mt-8 w-full space-y-4  rounded-lg border-0 bg-white p-8 shadow-lg shadow-neutral-300 md:w-5/6 lg:w-3/6"
      onSubmit={handleSubmit}
    >
      <div className="pl-2 text-base font-medium">
        <div className="-ml-2 mb-1">What is your service ?</div>
        <div className="font-fredoka text-lg font-normal">
          <RadioButton
            value="vet"
            id="choice0"
            label="Veterinary clinic"
            checked={role === "vet"}
            onChange={handleServiceChange}
          />
          <RadioButton
            value="petSitter"
            id="choice1"
            label="Pet sitter"
            checked={role === "petSitter"}
            onChange={handleServiceChange}
          />
          <RadioButton
            value="groomer"
            id="choice2"
            label="Pet groomer"
            checked={role === "groomer"}
            onChange={handleServiceChange}
          />
        </div>
        <div className="-ml-1 mt-1 text-sm font-medium text-primary">
          {roleError ? roleError : ""}
        </div>
      </div>
      <div className="pl-2 text-base font-medium">
        <div className="-ml-2 mb-1">Choose the animals you accept.</div>
        <div className="font-fredoka text-lg font-normal">
          <CheckBox
            name="animals"
            value="cat"
            id="choice5"
            label="Cat"
            defaultChecked={animals.includes("cat")}
            onClick={handleAnimalChange}
          />
          <CheckBox
            name="animals"
            value="dog"
            id="choice6"
            label="Dog"
            defaultChecked={animals.includes("dog")}
            onClick={handleAnimalChange}
          />
        </div>
        <div className="-ml-1 mt-1 text-sm font-medium text-primary">
          {animalsError ? animalsError : ""}
        </div>
      </div>
      <NormalInput
        label="Describe your service / specialty."
        value={description}
        onChange={handleDescriptionChange}
        error={descriptionError ? descriptionError : ""}
      />
      <div className="relative  max-w-md">
        <NormalInput
          label="How much is your service ?"
          value={price}
          type="number"
          onChange={handlePriceChange}
          error={priceError ? priceError : ""}
        />
        <div className="absolute right-1 top-8 flex h-10 items-center justify-center border-l-2 px-4 text-xl font-semibold text-neutral-500">
          LE
        </div>
      </div>
      <div className="flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="rounded-md bg-[#ffa500] px-14 py-3 text-lg font-semibold text-white "
        >
          Next
        </button>
        <button
          onClick={() => dispatch({ type: "SET_STEP", payload: 1 })}
          className="rounded-md bg-[#CECECE] px-14 py-3 text-lg font-semibold text-white"
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default StepTwo;
