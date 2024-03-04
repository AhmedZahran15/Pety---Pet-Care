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