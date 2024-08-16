import GreenUp from "@/components/icon/GreenUpArrow.svg"
import Image from "next/image";

export const Card = ({ title, balance, pic, color}) => {
  return (
    <div className="w-1/3 h-[216px] flex flex-col bg-white rounded-[12px] border-solid border-[1px] border-gray-300">
      <div className="flex items-center w-full px-[24px] py-[16px] border-b border-gray-200 gap-2">
        <span className={"w-2 h-2 rounded-full " + color}></span>
       
        <p>{title}</p>
      </div>
      <div className="flex flex-col gap-4 py-[20px] px-[24px]">
        <div className="">
          <h2 className="text-[36px] font-semibold">{balance}₮</h2>
          <p className="text-[18px] text-[#64748B]">Your Income Amount</p>
        </div>
        <div className="flex gap-2">
          <Image src={pic}></Image>
          <p>32% from last month</p>
        </div>
      </div>
    </div>
  );
};
