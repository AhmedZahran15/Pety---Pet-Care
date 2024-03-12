import PropTypes from "prop-types";
import Counter from "./Counter";
import { useState } from "react";
function Animal({ animal, animals, setAnimals }) {
  const [checked, setChecked] = useState(false);
  function handleOnClick() {
    if (checked) {
      setAnimals((prevState) => ({
        ...prevState,
        [animal.toLowerCase() + "s"]: 0,
      }));
      setChecked(false);
    } else {
      setAnimals((prevState) => ({
        ...prevState,
        [animal.toLowerCase() + "s"]: 1,
      }));
      setChecked(true);
    }
  }

  return (
    <div className="flex h-[32px] justify-between">
      <div className="flex items-center gap-x-2">
        <input
          className="h-6 w-6"
          defaultChecked={checked}
          type="checkbox"
          onClick={handleOnClick}
        />
        <span>{animal}</span>
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
