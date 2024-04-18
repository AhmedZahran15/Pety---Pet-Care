/* eslint-disable no-unused-vars */
import { useState } from "react";
import { cities, governorates } from "../assets/governoratesData";
import { useNavigate } from "react-router-dom";
import SearchDropdown from "./SearchDropdown";

const Search = () => {
  const [role, setRole] = useState("Veterinarian");
  const [governorate, setGovernorate] = useState({ id: 0, name: "" });
  const [city, setCity] = useState({ id: 0, name: "" });
  const areas = cities.filter((city) => city.governorate_id === governorate.id);
  const navigate = useNavigate();

  const handleSearch = () => {
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
    <div className="mx-8 mt-6 rounded-xl  border-[1px] border-neutral-300 shadow-xl shadow-neutral-300  sm:container sm:mx-auto">
      <div className=" flex flex-col items-center rounded-xl  md:flex-row">
        <div className="flex w-full basis-3/4 flex-col divide-y-2 divide-neutral-200 rounded-l-xl md:flex-row md:divide-x-2 md:divide-y-0">
          <SearchDropdown
            title="Select a specialty"
            placeholder="Veterinarian"
            iconSrc="stethoscope.png"
            state={role}
            setState={setRole}
            data={["Veterinarian", "Pet groomer", "Pet Sitter"]}
          />
          <SearchDropdown
            title="In this city"
            placeholder="All cities"
            iconSrc="images/filters/markerIcon.png"
            state={governorate}
            setState={setGovernorate}
            data={governorates}
          />
          <SearchDropdown
            title="In this area"
            placeholder="All areas"
            iconSrc="images/filters/markerIcon.png"
            state={city}
            setState={setCity}
            data={areas}
          />
        </div>
        <button
          className="flex h-20 min-h-[60px] w-full  basis-1/4 items-center justify-center gap-x-4 rounded-b-xl bg-secondary text-3xl font-normal text-white hover:bg-amber-500 md:rounded-r-xl md:rounded-bl-none"
          onClick={handleSearch}
        >
          <img className="mt-1 h-8 w-8" src="searchIcon.png" alt="" />
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
