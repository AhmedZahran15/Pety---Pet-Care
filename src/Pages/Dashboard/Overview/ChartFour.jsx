import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    id: "basic-bar",
  },
  xaxis: {
    categories: [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  },
};

const ChartFour = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Revenue",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;
  return (
    <div className="col-span-12 rounded-sm  border border-neutral-200 bg-white px-5 pb-5 pt-7 shadow-md shadow-neutral-200 sm:px-6 xl:col-span-8">
      <div className="flex min-w-[11.875rem]">
        <span className="mr-2 mt-1 flex h-4 w-full max-w-[1rem] items-center justify-center rounded-full border border-[#3c80e0]">
          <span className="block h-2.5 w-full max-w-[0.625rem] rounded-full bg-[#3c80e0]"></span>
        </span>
        <div className="w-full">
          <p className="font-semibold text-[#3c80e0]">Total Revenue</p>
          <p className="text-sm font-medium text-neutral-500">
            12.04.2017 - 12.05.2024
          </p>
        </div>
      </div>
      <div className="-ml-5">
        <ReactApexChart
          options={options}
          series={state.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartFour;
