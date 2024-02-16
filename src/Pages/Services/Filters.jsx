import RadioButton from "../../components/RadioButton";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import CheckBox from "../../components/CheckBox";
import PropTypes from "prop-types";
function Filters({ filterParams, setFilterParams, scrollToTopOfPetWorkers }) {
  function handlePriceChange(e) {
    setFilterParams(
      (prev) => {
        prev.set("price", e.target.value);
        prev.set("page", "1");
        return prev;
      },
      { replace: true },
    );
    scrollToTopOfPetWorkers();
  }

  function handleHasOffersChange(e) {
    const hasOffers = e.target.checked;
    setFilterParams(
      (prev) => {
        prev.set("offer", hasOffers);
        if (prev.get("offer") === "false") prev.delete("offer");
        prev.set("page", "1");
        return prev;
      },
      { replace: true },
    );
    scrollToTopOfPetWorkers();
  }
  function handleArrayChange(e) {
    const filterName = e.target.title;
    const value = e.target.value;
    setFilterParams(
      (prev) => {
        if (prev.get(filterName)?.includes(value)) {
          if (prev.get(filterName)?.indexOf(value) === 0) {
            if (prev.get(filterName).length > value.length)
              prev.set(
                filterName,
                prev.get(filterName).replace(`${value},`, ""),
              );
            else prev.delete(filterName);
          } else
            prev.set(filterName, prev.get(filterName).replace(`,${value}`, ""));
        } else {
          if (prev.get(filterName) === null) prev.set(filterName, value);
          else prev.set(filterName, `${prev.get(filterName)},${value}`);
        }
        prev.set("page", "1");
        return prev;
      },
      { replace: true },
    );
    scrollToTopOfPetWorkers();
  }

  return (
    <div className="box-border min-w-[247px] max-w-[247px] space-y-6 divide-y-[3px] divide-solid divide-[#D9D9D9] self-center lg:sticky lg:top-8 lg:self-start">
      <SearchBar
        filterParams={filterParams}
        setFilterParams={setFilterParams}
      />
      <div className="flex flex-col gap-0 space-y-2">
        <h2 className="mt-4 text-2xl font-normal">Filter By</h2>
        <div className="divide-y-2 divide-[#D9D9D9] rounded-[4px]  border-[0.1rem] border-[#999999] bg-white shadow-lg shadow-neutral-300">
          <Filter
            imgSrc="/images/filters/dollarIcon.png"
            imgAlt="Dollar Icon"
            title="Price"
            filterParams={filterParams}
          >
            <RadioButton
              value="0"
              checked={filterParams.get("price") === "0"}
              onChange={handlePriceChange}
              name="price"
              id="choice0"
              label="All"
            />
            <RadioButton
              value="1"
              checked={filterParams.get("price") === "1"}
              name="price"
              id="choice1"
              onChange={handlePriceChange}
              label="Less than 50 EGP"
            />
            <RadioButton
              value="2"
              checked={filterParams.get("price") === "2"}
              name="price"
              id="choice2"
              onChange={handlePriceChange}
              label="From 50 EGP to 150 EGP"
            />
            <RadioButton
              value="3"
              checked={filterParams.get("price") === "3"}
              name="price"
              id="choice3"
              onChange={handlePriceChange}
              label="From 150 EGP to 300 EGP"
            />
            <RadioButton
              value="4"
              checked={filterParams.get("price") === "4"}
              name="price"
              id="choice4"
              onChange={handlePriceChange}
              label="More than 300 EGP"
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/animalsIcon.png"
            imgAlt="Animals Icon"
            title="Animals"
            filterParams={filterParams}
          >
            <CheckBox
              title="animals"
              label="Cat"
              id="cat"
              value="cat"
              checked={filterParams?.get("animals")?.includes("cat")}
              onChange={handleArrayChange}
            />
            <CheckBox
              title="animals"
              label="Dog"
              value="dog"
              id="dog"
              checked={filterParams?.get("animals")?.includes("dog")}
              onChange={handleArrayChange}
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/calendarIcon.png"
            imgAlt="Calendar Icon"
            title="Availability"
            filterParams={filterParams}
          >
            <CheckBox
              title="availability"
              label="Any Day"
              id="anyDay"
              value="anyDay"
              checked={filterParams?.get("availability")?.includes("anyDay")}
              onChange={handleArrayChange}
            />
            <CheckBox
              title="availability"
              label="Today"
              id="today"
              value="today"
              checked={filterParams?.get("availability")?.includes("today")}
              onChange={handleArrayChange}
            />
            <CheckBox
              title="availability"
              label="Tomorrow"
              id="tomorrow"
              value="tomorrow"
              checked={filterParams?.get("availability")?.includes("tomorrow")}
              onChange={handleArrayChange}
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/markerIcon.png"
            imgAlt="Marker Icon"
            title="Location"
            filterParams={filterParams}
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
              checked={filterParams?.get("offer") === "true"}
              onChange={handleHasOffersChange}
            />
          </Filter>
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  filterParams: PropTypes.object.isRequired,
  setFilterParams: PropTypes.func.isRequired,
  scrollToTopOfPetWorkers: PropTypes.func.isRequired,
};
export default Filters;
