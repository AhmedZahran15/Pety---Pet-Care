import PropTypes from "prop-types";

function AnimalsCheck({ dispatch, animals, error }) {
  return (
    <div className="flex-col gap-y-2 self-center">
      <div className="flex items-center gap-4">
        <label className="text-base font-medium text-neutral-800">
          Animals:
        </label>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            className="h-6 w-6 cursor-pointer appearance-none rounded-sm border border-gray-300 checked:border-primary checked:bg-primary checked:ring-primary"
            id="dog"
            name="dog"
            value="dog"
            onChange={(e) =>
              e.target.checked
                ? dispatch({
                    type: "ADD_ANIMAL",
                    payload: e.target.value,
                  })
                : dispatch({
                    type: "REMOVE_ANIMAL",
                    payload: e.target.value,
                  })
            }
            checked={animals.includes("dog")}
          />
          <label className="cursor-pointer" htmlFor="dog">
            Dog
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="cat"
            className="h-6 w-6 cursor-pointer appearance-none rounded-sm border border-gray-300 checked:border-primary checked:bg-primary checked:ring-primary"
            name="cat"
            value="cat"
            onChange={(e) =>
              e.target.checked
                ? dispatch({
                    type: "ADD_ANIMAL",
                    payload: e.target.value,
                  })
                : dispatch({
                    type: "REMOVE_ANIMAL",
                    payload: e.target.value,
                  })
            }
            checked={animals.includes("cat")}
          />
          <label className="cursor-pointer" htmlFor="cat">
            Cat
          </label>
        </div>
      </div>
      <span className="text-sm font-medium text-primary">{error}</span>
    </div>
  );
}
AnimalsCheck.propTypes = {
  dispatch: PropTypes.func,
  animals: PropTypes.array,
  error: PropTypes.string,
};
export default AnimalsCheck;
