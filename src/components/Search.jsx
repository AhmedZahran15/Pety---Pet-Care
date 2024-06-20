import { useEffect, useState } from "react";
import { cities, governorates } from "../data/governoratesData";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchDropdown from "./SearchDropdown";

const Search = () => {
  const [filterParams] = useSearchParams();
  const [role, setRole] = useState("Veterinarian");
  const [governorate, setGovernorate] = useState({ id: 0, name: "" });
  const [city, setCity] = useState({ id: 0, name: "" });
  const areas = cities.filter((city) => city.governorate_id === governorate.id);
  const navigate = useNavigate();
  useEffect(() => {
    setRole(
      filterParams.get("role") === "vet"
        ? "Veterinarian"
        : filterParams.get("role") === "groomer"
          ? "Pet groomer"
          : "Pet Sitter",
    );
    setGovernorate({
      id:
        governorates[
          governorates.findIndex(
            (governorate) =>
              governorate.governorate_name_en ===
              filterParams.get("governorate"),
          )
        ]?.id || 0,
      name: filterParams.get("governorate") || "",
    });
    setCity({
      id:
        cities[
          cities.findIndex(
            (city) => city.city_name_en === filterParams.get("city"),
          )
        ]?.id || 0,
      name: filterParams.get("city") || "",
    });
  }, [filterParams]);
  const handleGovernorateChange = (value) => {
    setGovernorate(value);
    setCity({ id: 0, name: "" });
  };
  const handleSearch = async () => {
    const roleValue =
      role === "Veterinarian"
        ? "vet"
        : role === "Pet groomer"
          ? "groomer"
          : "petSitter";
    if (!city.id && !governorate.id) {
      navigate(`/services?role=${roleValue}`);
    }
    if (city.id && !governorate.id) {
      navigate(`/services?role=${roleValue}&city=${city.name}`);
    }
    if (city.id && governorate.id) {
      navigate(
        `/services?role=${roleValue}&city=${city.name}&governorate=${governorate.name}`,
      );
    }
    if (!city.id && governorate.id) {
      navigate(`/services?role=${roleValue}&governorate=${governorate.name}`);
    }
  };
  return (
    <div className="container mx-auto mt-20 flex flex-col items-center justify-center gap-y-12 px-8">
      <h1 className="w-fit font-Pacifico text-3xl sm:text-5xl md:text-6xl">
        Search For a Service Near You
      </h1>
      <div className="w-full rounded-xl border-[1px] border-neutral-300  shadow-xl shadow-neutral-300">
        <div className=" flex flex-col items-center rounded-xl  md:flex-row">
          <div className="flex w-full basis-3/4 flex-col divide-y-2 divide-neutral-200 rounded-l-xl md:flex-row md:divide-x-2 md:divide-y-0">
            <SearchDropdown
              title="Select a specialty"
              placeholder="Veterinarian"
              iconSrc="/images/homepage/pawPrint.png"
              state={role}
              setState={setRole}
              data={["Veterinarian", "Pet groomer", "Pet Sitter"]}
            />
            <SearchDropdown
              title="In this city"
              placeholder="All cities"
              iconSrc="/images/homepage/marker.png"
              state={governorate}
              setState={handleGovernorateChange}
              data={governorates}
            />
            <SearchDropdown
              title="In this area"
              placeholder="All areas"
              iconSrc="images/homepage/marker.png"
              state={city}
              setState={setCity}
              data={areas}
            />
          </div>
          <button
            className="flex h-20 min-h-[60px] w-full basis-1/4 items-center justify-center gap-x-4 rounded-b-xl bg-primary font-Fredoka text-3xl font-normal text-white hover:bg-primaryDark md:rounded-r-xl md:rounded-bl-none"
            onClick={handleSearch}
          >
            <Icon className="mt-1 h-8 w-8 fill-white" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

function Icon(props) {
  return (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_2572_7587)">
        <path d="M7 11.333a.337.337 0 00-.23.1L.428 17.768c-.598.595-.518 1.423-.07 1.873.446.45 1.275.53 1.873-.068l6.327-6.327c.328-.315-.167-.788-.47-.472l-6.328 6.327c-.386.386-.713.286-.93.069-.218-.219-.314-.55.068-.931l6.344-6.336c.218-.212.056-.571-.242-.571l.001.001zm5.633-9.953a5.333 5.333 0 00-2.926 1.375c-.327.302.14.78.453.49a4.666 4.666 0 015.348-.707c.387.221.702-.402.31-.59-1-.527-2.114-.71-3.185-.568zm.7-1.38a6.672 6.672 0 00-6.666 6.667 6.672 6.672 0 006.666 6.666A6.672 6.672 0 0020 6.667 6.672 6.672 0 0013.333 0zm0 .667c3.318 0 6 2.682 6 6 0 3.317-2.682 6-6 6-3.317 0-6-2.683-6-6 0-3.318 2.683-6 6-6z" />
      </g>
      <defs>
        <clipPath id="clip0_2572_7587">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Search;
