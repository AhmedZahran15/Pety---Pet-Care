import PropTypes from "prop-types";
const CardDataStats = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="h-fit rounded-sm border border-[#E2E8F0] bg-white px-8 py-6 shadow-md shadow-neutral-200">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="font-sans text-[24px] font-semibold text-black">
            {total}
          </h4>
          <span className="text-sm font-medium text-neutral-500">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-base font-medium ${
            levelUp && "text-primary"
          } ${levelDown && "text-secondary"} `}
        >
          {rate}

          {levelUp && (
            <svg
              className="fill-primary"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
                fill=""
              />
            </svg>
          )}
          {levelDown && (
            <svg
              className="fill-secondary"
              width="10"
              height="11"
              viewBox="0 0 10 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
                fill=""
              />
            </svg>
          )}
        </span>
      </div>
    </div>
  );
};
CardDataStats.propTypes = {
  title: PropTypes.string,
  total: PropTypes.string,
  rate: PropTypes.string,
  levelUp: PropTypes.bool,
  levelDown: PropTypes.bool,
  children: PropTypes.node,
};
export default CardDataStats;
