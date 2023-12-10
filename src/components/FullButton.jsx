import { Loader } from "./Loader";

export const FullButton = ({ text, enabled, clickHandler, isLoading }) => {
  return (
    <button
      disabled={!enabled}
      className={
        "hover:bg-cyan-700 mt-6 disabled:bg-gray-400 w-full rounded-xl px-4 py-2  text-lg text-white " +
        (enabled ? "bg-primary" : "bg-gray-400")
      }
      onClick={clickHandler}
    >
      {isLoading && <Loader />}
      <span>{text}</span>
    </button>
  );
};
