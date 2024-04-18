"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Decimation,
  TimeScale,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import HashLoader from "react-spinners/HashLoader";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Decimation,
  TimeScale
);

const lineOptions = {
  elements: {
    line: {
      tension: 0.3,
    },
    point: {
      pointStyle: "false",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

interface StockEntry {
  date: string;
  nav: string;
}

const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

const OverviewLineGraph = () => {
  const [data, setData] = useState<StockEntry[]>([]);
  const [isLoading, setLoading] = useState(true);

  const [renderYears, setRenderYears] = useState<number[]>([2019, 2022, 2023]);

  const YearDropdown = () => {
    const [selectedYears, setSelectedYears] = useState<number[]>(renderYears);
    const [optionOpeaned, setOptionOpeaned] = useState(false);

    const toggleYear = (year: number) => {
      if (selectedYears.includes(year)) {
        setSelectedYears(selectedYears.filter((item) => item !== year));
      } else {
        setSelectedYears([...selectedYears, year]);
      }
    };

    const toggleButton = () => {
      if (optionOpeaned) {
        setRenderYears(selectedYears);
      }
      setOptionOpeaned(!optionOpeaned);
    };

    return (
      <div className="relative">
        <button
          className="block w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          type="button"
          aria-haspopup="listbox"
          aria-expanded={optionOpeaned}
          aria-labelledby="listbox-label"
          onClick={toggleButton}
        >
          <span className="block truncate">
            {optionOpeaned ? "Render Graph" : "Select years"}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 01-.7-.29l-3-3a1 1 0 111.4-1.42L10 10.58l2.3-2.3a1 1 0 111.4 1.42l-3 3a1 1 0 01-.7.3z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
        {optionOpeaned && (
          <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
            >
              {years.map((year) => (
                <li
                  key={year}
                  onClick={() => toggleYear(year)}
                  className={`text-gray-900 select-none relative py-2 pl-3 pr-9 ${
                    selectedYears.includes(year)
                      ? "bg-indigo-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <span className="block truncate">{year}</span>
                  {selectedYears.includes(year) && (
                    <span
                      className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                        selectedYears.includes(year)
                          ? "text-white"
                          : "text-indigo-600"
                      }`}
                    ></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch("https://api.mfapi.in/mf/122640");
        const apiData = await response.json();
        const data: StockEntry[] = apiData.data;
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const formatDataForChart = () => {
    const aggregatedData: { [year: string]: { [month: string]: number[] } } =
      {};
    // Group data by year and month
    data.forEach((entry) => {
      const indianDateArray = entry.date.split("-");
      const temp = indianDateArray[1];
      indianDateArray[1] = indianDateArray[0];
      indianDateArray[0] = temp;
      const westernDate = indianDateArray.join("-");
      const date = new Date(westernDate);
      const year = date.getFullYear().toString();
      const month = date.getMonth().toString();

      if (!aggregatedData[year]) {
        aggregatedData[year] = {};
      }

      if (!aggregatedData[year][month]) {
        aggregatedData[year][month] = [];
      }

      aggregatedData[year][month].push(parseFloat(entry.nav));
    });

    // Calculate monthly averages for each year
    const datasets: {
      label: string;
      borderColor: string;
      data: { x: string; y: number }[];
    }[] = [];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    for (const year in aggregatedData) {
      const monthData: { x: string; y: number }[] = [];
      for (const month in aggregatedData[year]) {
        const monthlyAverage =
          aggregatedData[year][month].reduce((acc, val) => acc + val, 0) /
          aggregatedData[year][month].length;
        const monthName = months[parseInt(month)];
        monthData.push({ x: `${monthName}`, y: monthlyAverage });
      }
      if (renderYears.includes(parseInt(year))) {
        datasets.push({
          label: `${year}`,
          data: monthData,
          borderColor: getRandomColor(),
        });
      }
    }

    return datasets;
  };

  if (isLoading)
    return (
    <div className="flex justify-center items-center flex-grow h-[300px]">
      <HashLoader color="#7fcffa" loading size={100} speedMultiplier={1.5} />
    </div>
    );
  if (data.length == 0) return <p>No data</p>;

  return (
    <div className="flex flex-row">
      <div className="w-[660px] h-[330px]  bg-slate">
        <Line
          options={lineOptions}
          data={{
            datasets: formatDataForChart(),
          }}
        />
      </div>
      <div className="px-2">
        <YearDropdown></YearDropdown>
      </div>
    </div>
  );
};

export default OverviewLineGraph;
