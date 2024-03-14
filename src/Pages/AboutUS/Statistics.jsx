import PropTypes from "prop-types";

const StatisticItem = ({ number, label }) => {
  return (
    <div className="bg-neutral-100 py-6 text-center text-lg font-medium text-neutral-500 sm:py-2">
      <h2 className="text-3xl font-bold text-neutral-800 sm:text-4xl">
        {number}
      </h2>
      <p className="mt-2">{label}</p>
    </div>
  );
};

StatisticItem.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default function Statistics() {
  return (
    <div className=" mt-8 grid w-full grid-cols-2 gap-x-[3px] bg-neutral-300 sm:grid-cols-4 sm:gap-x-[2px]">
      <StatisticItem number="10K" label="Happy Clients" />
      <StatisticItem number="100K" label="Downloads" />
      <StatisticItem number="500+" label="Doctors" />
      <StatisticItem number="10" label="Team Members" />
    </div>
  );
}
