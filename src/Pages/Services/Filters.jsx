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

  function handleHasOffersChange(e) {
    const hasOffers = e.target.checked;
    setFilterParams(
      (prev) => {
        hasOffers ? prev.set("offer", "true") : prev.delete("offer");
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

  return (
    <div className="box-border min-w-[247px] max-w-[247px] space-y-6 divide-y-[3px] divide-solid divide-[#D9D9D9] self-center lg:sticky lg:top-8 lg:self-start">
      <SearchBar />
      <div className="flex flex-col gap-0 space-y-2">
        <h2 className="mt-4 text-2xl font-normal">Filter By</h2>
        <div className="divide-y-2 divide-[#D9D9D9] rounded-[4px]  border-[0.1rem] border-[#999999] bg-white shadow-lg shadow-neutral-300">
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
            <CheckBox
              name="availability"
              label="Any Day"
              id="anyDay"
              value="anyDay"
              defaultChecked={
                filterParams?.get("availability")?.includes("anyDay") === true
              }
              onClick={handleArrayChange}
            />
            <CheckBox
              name="availability"
              label="Today"
              id="today"
              value="today"
              defaultChecked={
                filterParams?.get("availability")?.includes("today") === true
              }
              onClick={handleArrayChange}
            />
            <CheckBox
              name="availability"
              label="Tomorrow"
              id="tomorrow"
              value="tomorrow"
              defaultChecked={
                filterParams?.get("availability")?.includes("tomorrow") === true
              }
              onClick={handleArrayChange}
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/markerIcon.png"
            imgAlt="Marker Icon"
            title="Location"
          ></Filter>
          <Filter
            imgSrc="/images/filters/offerIcon.png"
            imgAlt="Offer Icon"
            title="Offers"
          >
            <CheckBox
              label="Has Offers"
              id="hasOffers"
              value="hasOffers"
              defaultChecked={filterParams?.get("offer") === true}
              onClick={handleHasOffersChange}
            />
          </Filter>
        </div>
      </div>
    </div>
  );
}
export default Filters;
