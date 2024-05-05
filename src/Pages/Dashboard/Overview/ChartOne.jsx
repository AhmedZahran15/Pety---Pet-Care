import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3c80e0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

const ChartOne = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Veterinarian",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: "Pet Groomer",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
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
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-fit shrink-0 flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-[11.875rem]">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-[1rem] items-center justify-center rounded-full border border-[#3c80e0]">
              <span className="block h-2.5 w-full max-w-[0.625rem] rounded-full bg-[#3c80e0]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#3c80e0]">Total Revenue</p>
              <p className="text-sm font-medium text-neutral-500">
                12.05.2024 - 13.05.2024
              </p>
            </div>
          </div>
          <div className="flex min-w-[11.875rem]">
            <span className="mr-2 mt-1 flex h-4 w-full max-w-[1rem] items-center justify-center rounded-full border border-[#80CAEE]">
              <span className="block h-2.5 w-full max-w-[0.625rem] rounded-full bg-[#80CAEE]"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-[#80CAEE]">Total Reservations</p>
              <p className="text-sm font-medium text-neutral-500">
                12.05.2024 - 13.05.2024
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[11.25rem] justify-end">
          <div className="inline-flex items-center gap-x-1 rounded-md bg-neutral-100 p-1.5">
            <button className="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-neutral-200 hover:bg-white hover:shadow-md">
              Day
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black shadow-neutral-200 hover:bg-white hover:shadow-md">
              Week
            </button>
            <button className="rounded px-3 py-1 text-xs font-medium text-black shadow-neutral-200 hover:bg-white hover:shadow-md">
              Month
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
