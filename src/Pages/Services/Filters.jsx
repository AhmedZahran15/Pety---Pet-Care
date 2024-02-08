import { useEffect, useState } from "react";
import RadioButton from "../../components/RadioButton";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import CheckBox from "../../components/CheckBox";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function Filters() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    role: useParams(),
    price: "0",
    animals: {
      cat: false,
      dog: false,
    },
    availability: {
      today: false,
      tomorrow: false,
      anyDay: false,
    },
    hasOffers: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    async function fetchServices() {
      try {
        setIsLoading(true);
        const animals = Object.keys(filters.animals)
          .filter((animal) => filters.animals[animal])
          .join(",");
        const url = new URL("https://petcare-znql.onrender.com/api/pety");
        url.searchParams.append("role", filters.role.role);
        url.searchParams.append("price", filters.price);
        url.searchParams.append("limit", 50);
        if (animals.length) url.searchParams.append("type", animals);
        url.searchParams.append("offer", filters.hasOffers);
        console.log(url.href);
        const res = await fetch(url, {
          method: "GET",
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!res.ok) toast.error("Something went wrong");
        const data = await res.json();
        setServices(data.data);
        console.log(data);
      } catch (err) {
        if (err.name === "AbortError") return;
      } finally {
        setIsLoading(false);
      }
    }
    fetchServices();
    return () => {
      controller.abort();
    };
  }, [filters.role, filters.price, filters.animals, filters.hasOffers]);

  function handlePriceChange(e) {
    setFilters({
      ...filters,
      price: e.target.value,
    });
  }
  function handleAnimalChange(e) {
    setFilters({
      ...filters,
      animals: {
        ...filters.animals,
        [e.target.value]: !filters.animals[e.target.value],
      },
    });
  }

  function handleAvailabilityChange(e) {
    setFilters({
      ...filters,
      availability: {
        ...filters.availability,
        [e.target.value]: !filters.availability[e.target.value],
      },
    });
  }
  return (
    <div className="my-20 box-border h-auto min-w-[247px] divide-y-[3px] divide-solid divide-[#D9D9D9]   ">
      <SearchBar />
      <div className="flex flex-col gap-0 space-y-2">
        <h2 className="mt-6 text-2xl font-normal">Filter By</h2>
        <div className="divide-y-2  divide-[#D9D9D9] rounded-[4px] border-[0.1rem] border-[#999999] bg-white">
          <Filter
            imgSrc="/images/filters/dollarIcon.png"
            imgAlt="Dollar Icon"
            title="Price"
          >
            <RadioButton
              value="0"
              checked={filters.price}
              onClick={handlePriceChange}
              name="price"
              id="choice0"
              label="All"
            />
            <RadioButton
              value="1"
              checked={filters.price}
              name="price"
              id="choice1"
              onClick={handlePriceChange}
              label="Less than 50 EGP"
            />
            <RadioButton
              value="2"
              checked={filters.price}
              name="price"
              id="choice2"
              onClick={handlePriceChange}
              label="From 50 EGP to 150 EGP"
            />
            <RadioButton
              value="3"
              checked={filters.price}
              name="price"
              id="choice3"
              onClick={handlePriceChange}
              label="From 150 EGP to 300 EGP"
            />
            <RadioButton
              value="4"
              checked={filters.price}
              name="price"
              id="choice4"
              onClick={handlePriceChange}
              label="More than 150 EGP"
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/animalsIcon.png"
            imgAlt="Animals Icon"
            title="Animals"
          >
            <CheckBox
              label="Cat"
              id="cat"
              value="cat"
              checked={filters.animals.cat}
              onChange={handleAnimalChange}
            />
            <CheckBox
              label="Dog"
              value="dog"
              id="dog"
              checked={filters.animals.dog}
              onChange={handleAnimalChange}
            />
          </Filter>
          <Filter
            imgSrc="/images/filters/calendarIcon.png"
            imgAlt="Calendar Icon"
            title="Availability"
          >
            <CheckBox
              label="Any Day"
              id="anyDay"
              value="anyDay"
              checked={filters.availability.anyDay}
              onChange={handleAvailabilityChange}
            />
            <CheckBox
              label="Today"
              id="today"
              value="today"
              checked={filters.availability.today}
              onChange={handleAvailabilityChange}
            />
            <CheckBox
              label="Tomorrow"
              id="tomorrow"
              value="tomorrow"
              checked={filters.availability.tomorrow}
              onChange={handleAvailabilityChange}
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
              checked={filters.hasOffers}
              onChange={() =>
                setFilters({
                  ...filters,
                  hasOffers: !filters.hasOffers,
                })
              }
            />
          </Filter>
        </div>
      </div>
    </div>
  );
}

export default Filters;
