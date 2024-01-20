function ArrowSvg({ color = "#00777B", direction }) {
  return (
    <div
      className={`${
        direction === "up" ? "rotate-180" : ""
      } duration-800 transition-all`}
    >
      <svg
        fill={`${color}`}
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g data-name="Layer 2">
          <g data-name="arrow-ios-downward">
            <rect width="24" height="24" opacity="0" />

            <path d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15 1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16z" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ArrowSvg;
