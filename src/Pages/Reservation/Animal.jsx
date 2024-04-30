import PropTypes from "prop-types";
import Counter from "./Counter";
import { useState } from "react";
function Animal({ animal, animals, setAnimals }) {
  const [checked, setChecked] = useState(false);
  function handleOnClick() {
    if (checked) {
      setAnimals((prevState) => ({
        ...prevState,
        [animal.toLowerCase()]: 0,
      }));
      setChecked(false);
    } else {
      setAnimals((prevState) => ({
        ...prevState,
        [animal.toLowerCase()]: 1,
      }));
      setChecked(true);
    }
  }

  return (
    <div className="flex h-[32px] justify-between">
      <div className="flex items-center gap-x-2">
        <input
          className="h-6 w-6 cursor-pointer appearance-none rounded-sm border border-gray-300 checked:border-primary checked:bg-primary checked:ring-primary"
          defaultChecked={checked}
          id={animal}
          type="checkbox"
          onClick={handleOnClick}
        />
        <label htmlFor={animal} className="cursor-pointer">
          {animal}
        </label>
      </div>
      {checked && (
        <Counter animal={animal} animals={animals} setAnimals={setAnimals} />
      )}
    </div>
  );
}
Animal.propTypes = {
  animal: PropTypes.string,
  animals: PropTypes.object,
  setAnimals: PropTypes.func,
};

export default Animal;
