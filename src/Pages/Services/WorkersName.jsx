import { useSearchParams } from "react-router-dom";

function WorkersName() {
  const [filterParams] = useSearchParams();
  return (
    <h1 className="h-[50px] font-Pacifico text-2xl sm:text-3xl md:text-5xl">
      {filterParams.get("role") === "vet"
        ? "Veterinarians"
        : filterParams.get("role") === "petSitter"
          ? "Pet Sitters"
          : filterParams.get("role") === "groomer"
            ? "Pet Groomers"
            : "Pet Workers"}
    </h1>
  );
}

export default WorkersName;
