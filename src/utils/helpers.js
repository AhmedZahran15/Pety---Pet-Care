export function scrollToTopOfElement(elementRef) {
  elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function animalsToString(animals) {
  return animals
    .map((item, i) => {
      if (i === animals.length - 1)
        return item[0].toUpperCase() + item.substring(1) + "s";
      return item[0].toUpperCase() + item.substring(1) + "s / ";
    })
    .join("");
}
import { fromAddress, setKey } from "react-geocode";

setKey(import.meta.env.VITE_GOOGLEMAPS_API_KEY);
export async function getCoordinates(address) {
  if (localStorage.getItem("address") === address) {
    return localStorage.getItem("coordinates");
  }
  const response = await fromAddress(address);
  const { lat, lng } = response.results[0].geometry.location;
  localStorage.setItem("address", address);
  localStorage.setItem("coordinates", [lat, lng]);
  return [lat, lng];
}
