import Image from "next/image";

const Card = ({
  index,
  title,
  subtitle,
  change,
  deltaPositive,
}: {
  index: number;
  title: string;
  subtitle: string;
  change: string;
  deltaPositive: boolean;
}) => {
  return (
    <div className={`rounded-xl p-6 w-[200px] ${index % 2 == 0 ? "bg-blue" : "bg-grey"}`}>
      <div className="flex flex-col items-start">
        <div className="text-sm mb-2">{title}</div>
        <div className="flex flex-row items-center">
          <div className="text-3xl font-semibold mr-4 w-[64px] tracking-wider">{subtitle}</div>
          <div className="text-sm mr-1">{change}</div>
          {deltaPositive ? (
            <Image
              src={"ArrowRise.svg"}
              width={"16"}
              height={"16"}
              alt="Arrow rise"
            ></Image>
          ) : (
            <Image
              src={"ArrowFall.svg"}
              width={"16"}
              height={"16"}
              alt="Arrow fall"
            ></Image>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
