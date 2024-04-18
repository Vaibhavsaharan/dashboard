import Image from "next/image";

const ListItemDetail = ({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex flex-row items-start p-2">
      <Image src={icon} height="24" width="24" alt={title} className="pt-1"></Image>
      <div className="flex flex-col items-start px-2">
        <div className="">{title}</div>
        <div className="text-sm text-black-40 font-light">{subtitle}</div>
      </div>
    </div>
  );
};

export default ListItemDetail;
