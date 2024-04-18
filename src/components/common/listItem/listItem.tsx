import Image from "next/image";

const ListItem = ({
  icon,
  title,
  isSelected,
  subTitles,
}: {
  icon: string;
  title: string;
  isSelected: boolean;
  subTitles?: string[];
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center ">
        <div
          className={`flex flex-grow p-2 ${
            isSelected ? "bg-black-5 rounded-xl" : ""
          }`}
        >
          <div className="mr-1">
            {!isSelected ? (
              <Image
                src={"ArrowLineRight.svg"}
                height="24"
                width="24"
                alt={title}
              ></Image>
            ) : (
              <div className="min-h-1 min-w-6"></div>
            )}
          </div>
          <Image src={icon} height="24" width="24" alt={title}></Image>
          <div className="pl-2">{title}</div>
        </div>
      </div>
      {subTitles && subTitles.length > 0 && isSelected && (
        <div className="flex flex-col pl-16 ml-1">
          {subTitles.map((subtitle, index) => (
            <div key={index} className="p-2">{subtitle}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListItem;
