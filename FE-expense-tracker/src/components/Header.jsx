import Image from "next/image";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/icon/Avatar.svg"
import Blueplus from "@/components/icon/Blueplus.svg"
import VectorIcon from "@/components/icon/VectorIcon.png";
import { PlusLogo } from "@/components/icon/PlusLogo";
import Placeholderpicture from "@/components/icon/Placeholder.png"
import Bluecontain from "@/components/icon/Bluecontain.png"


export default function Header() {
  return (
    <div className="w-screen flex justify-between px-[120px] py-[16px]">
      <div className="flex gap-6 items-center"> 
        <Image src={Bluecontain} height={27} width={27} quality={100}></Image>
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <Button className="bg-blue-700 rounded-[20px] p-4 flex gap-1">
          <PlusLogo />
          <p>Records</p>
        </Button>
        <Image src={Avatar} height={40} width={40}></Image>
      </div>
    </div>
  );
}
