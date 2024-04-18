import Image from "next/image";

const Header = () => {
  return (
    <div className="py-5 px-6 border">
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={"dashboard.svg"}
            height="20"
            width="20"
            alt={"dashboard"}
            className="mr-4"
          ></Image>
          <Image
            src={"star.svg"}
            height="20"
            width="20"
            alt={"star"}
            className="mr-2"
          ></Image>
          <div className="text-black-40 px-2 py-1">Dashboards</div>
          <div className="text-black-40 px-2 py-1">/</div>
          <div className="px-2 py-1">Default</div>
        </div>
        <div className="flex">
          <div className="flex jusitfy-between bg-black-5 font-light text-black-20 mr-6 items-center rounded-lg px-2">
            <div className="flex w-[120px]">
              <Image
                src={"Search.svg"}
                height="16"
                width="16"
                alt={"dashboard"}
                className="mr-1"
              ></Image>
              <div className="">Search</div>
            </div>
            <div>⌘/</div>
          </div>
          <Image
            src={"Sun.svg"}
            height="20"
            width="20"
            alt={"dashboard"}
            className="mr-4"
          ></Image>
          <Image
            src={"ClockCounterClockwise.svg"}
            height="20"
            width="20"
            alt={"star"}
            className="mr-4"
          ></Image>
          <Image
            src={"bell.svg"}
            height="20"
            width="20"
            alt={"dashboard"}
            className="mr-4"
          ></Image>
          <Image
            src={"dashboard.svg"}
            height="20"
            width="20"
            alt={"star"}
            className="mr-4"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Header;
