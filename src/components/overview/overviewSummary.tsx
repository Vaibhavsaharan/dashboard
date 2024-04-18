import Card from "../common/card/card";

const OverviewSummary = () => {
  const summaryItems = [
    {
      title: "Views",
      subtitle: "7,265",
      change: "+11.02%",
      deltaPositive: true,
    },
    {
      title: "Visits",
      subtitle: "3,671",
      change: "-0.03%",
      deltaPositive: false,
    },
    {
      title: "New Users",
      subtitle: "156",
      change: "+15.03%",
      deltaPositive: true,
    },
    {
      title: "Active Users",
      subtitle: "2,318",
      change: "+6.08%",
      deltaPositive: true,
    },
  ];
  return (
    <div className="flex flex-row justify-between flex-grow">
      {summaryItems.map((item, index) => (
        <div key={index}>
          <Card
            index={index}
            title={item.title}
            subtitle={item.subtitle}
            change={item.change}
            deltaPositive={item.deltaPositive}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default OverviewSummary;
