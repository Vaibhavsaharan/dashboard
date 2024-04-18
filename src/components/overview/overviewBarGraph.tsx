import Image from "next/image";

const OverviewBarGraph = () => {
  return (
    <div className="flex flex-row justify-between mt-6">
      <Image
        src={"DeviceChart.svg"}
        height={"280"}
        width={"430"}
        alt="Bar chart"
      ></Image>
      <Image
        src={"LocationChart.svg"}
        height={"280"}
        width={"430"}
        alt="Bar chart"
      ></Image>
    </div>
  );
};

export default OverviewBarGraph;
