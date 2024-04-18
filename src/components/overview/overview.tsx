import Image from "next/image";
import OverviewSummary from "./overviewSummary";
import OverviewLineGraph from "./overviewLineGraph";
import OverviewBarGraph from "./overviewBarGraph";

const Overview = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <div className="font-medium">Overview</div>
        <div className="flex">
          <div className="font-sm mr-1">Today</div>
          <Image
            src={"ArrowLineDown.svg"}
            height={"16"}
            width={"16"}
            alt="Arrow Down"
          ></Image>
        </div>
      </div>
      <OverviewSummary />
      <div className="flex flex-row justify-between mt-6">
        <OverviewLineGraph />
        <Image
          src={"TrafficChart.svg"}
          height={"300"}
          width={"200"}
          alt="Bar chart"
        ></Image>
      </div>

      <OverviewBarGraph />
    </div>
  );
};

export default Overview;
