import RadioButton from "../../components/RadioButton";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import CheckBox from "../../components/CheckBox";
import { useSearchParams } from "react-router-dom";
function Filters() {
  const [filterParams, setFilterParams] = useSearchParams();
  function handlePriceChange(e) {
    setFilterParams(
      (prev) => {
        prev.set("price", e.target.value);
        prev.delete("page");
        return prev;
      },
      { replace: true },
    );
  }

  function handleArrayChange(e) {
    const filterName = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const filterArray = filterParams.get(filterName)?.split(",") || [];
    setFilterParams(
      (prev) => {
        if (checked) {
          prev.set(filterName, [...filterArray, value].join(","));
        } else
          prev.set(
            filterName,
            filterArray.filter((item) => item !== value).join(","),
          );
        if (!prev.get(filterName)) prev.delete(filterName);
        prev.delete("page");
        return prev;
      },
      { replace: true },
    );
  }
  function handleAvailabilityChange(e) {
    const value = e.target.value;
    if (value === "anyDay") {
      setFilterParams(
        (prev) => {
          prev.delete("availability");
          prev.delete("page");
          return prev;
        },
        { replace: true },
      );
      return;
    }
    setFilterParams(
      (prev) => {
        prev.set("availability", value);
        prev.delete("page");
        return prev;
      },
      { replace: true },
    );
  }
  return (
    <div className="box-border w-[247px] self-center lg:sticky lg:top-8 lg:self-start">
      <SearchBar name="petyName" />
      <div className="mt-8 flex w-full flex-col items-center gap-0 space-y-2 rounded-[4px] border border-neutral-300 bg-white shadow-sm shadow-neutral-200">
        <h2 className="mt-4 font-Montserrat text-2xl font-semibold">
          Filter by
        </h2>
        <div className="min-w-[247px] divide-y-2 divide-[#D9D9D9]    ">
          <Filter
            imgSrc="/images/filters/dollarIcon.png"
            imgAlt="Dollar Icon"
            title="Price"
          >
            <RadioButton
              value="0"
              checked={filterParams?.get("price") === "0"}
              onChange={handlePriceChange}
              name="price"
              id="choice0"
              label="All"
            />
            <RadioButton
              value="1"
              checked={filterParams?.get("price") === "1"}
              name="price"
              id="choice1"
              onChange={handlePriceChange}
              label="Less than 50 EGP"
            />
            <RadioButton
              value="2"
              checked={filterParams?.get("price") === "2"}
              name="price"
              id="choice2"
              onChange={handlePriceChange}
              label="From 50 to 150"
            />
            <RadioButton
              value="3"
              checked={filterParams?.get("price") === "3"}
              name="price"
              id="choice3"
              onChange={handlePriceChange}
              label="From 150 to 300"
            />
            <RadioButton
              value="4"
              checked={filterParams?.get("price") === "4"}
              name="price"
              id="choice4"
              onChange={handlePriceChange}
              label="More than 300"
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/animalsIcon.png"
            imgAlt="Animals Icon"
            title="Animals"
          >
            <CheckBox
              name="animals"
              label="Cat"
              id="cat"
              value="cat"
              defaultChecked={
                filterParams?.get("animals")?.includes("cat") === true
              }
              onClick={handleArrayChange}
            />
            <CheckBox
              name="animals"
              label="Dog"
              value="dog"
              id="dog"
              defaultChecked={
                filterParams?.get("animals")?.includes("dog") === true
              }
              onClick={handleArrayChange}
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/calendarIcon.png"
            imgAlt="Calendar Icon"
            title="Availability"
          >
            <RadioButton
              name="availability"
              label="Any Day"
              id="anyDay"
              value="anyDay"
              checked={filterParams?.get("availability") === "anyDay"}
              onChange={handleAvailabilityChange}
            />
            <RadioButton
              name="availability"
              label="Today"
              id="today"
              value="today"
              checked={filterParams?.get("availability") === "today"}
              onChange={handleAvailabilityChange}
            />
            <RadioButton
              name="availability"
              label="Tomorrow"
              id="tomorrow"
              value="tomorrow"
              checked={filterParams?.get("availability") === "tomorrow"}
              onChange={handleAvailabilityChange}
            />
          </Filter>
        </div>
      </div>
    </div>
  );
}
export default Filters;
