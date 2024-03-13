

import PropTypes from 'prop-types';

const StatisticItems = ({ number, label }) => {
  return (
    <div className="p-4 sm:w-1/4 w-1/2 ">
      <h2 className=" font-medium sm:text-4xl text-3xl text-neutral-800">{number}</h2>
      <p className="">{label}</p>
    </div>
  );
};

StatisticItems.propTypes = {
  number: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};


export default function Statstic() {
  return (
<div className="text-neutral-500 font-medium  body-font text-lg">
  <div className=" px-5 py-6 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
<StatisticItems number="100" label="Happy Clients"/>
<StatisticItems number="1.2K" label="Downloads"/>
<StatisticItems number="35" label="Doctors"/>
<StatisticItems number="10" label="Team Members"/>
    </div>
  </div>

</div>
  )
}
