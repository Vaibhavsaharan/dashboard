import Image from "next/image";

const OverviewBarGraph = () => {
  return (
    <div className="flex flex-wrap justify-between mt-6 gap-4">
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
