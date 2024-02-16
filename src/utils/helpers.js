export function scrollToTopOfElement(elementRef) {
  elementRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
}
