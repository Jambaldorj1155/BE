import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoIcon from "@/components/icon/LogoIcon";
import CorrectIcon from "@/components/icon/CorrectIcon.png"


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen">
      {/* <div className="flex flex-col items-center mt-[40px]">
      <LogoIcon width={95} height={27}/>

        <div className="flex flex-col items-center justify-center mt-12">
          <div className="flex items-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[20px] h-[20px] flex rounded-full bg-blue-700 text-white items-center justify-center">
                1
              </div>
            </div>
            <div className="w-[92px] h-[3px] bg-[#E5E7EB]"></div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[20px] h-[20px] flex rounded-full bg-[#E5E7EB] items-center justify-center">
                2
              </div>
            </div>
            <div className="w-[92px] h-[3px] bg-[#E5E7EB]"></div>
            <div className="flex flex-col items-center justify-center">
              <div className="w-[20px] h-[20px] flex rounded-full bg-[#E5E7EB] items-center justify-center">
                3
              </div>
            </div>
          </div>
          <div className="flex gap-[60px] pr-4">
            <p>Currency</p>
            <p>Balance</p>
            <p>Finish</p>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col items-center mt-[141px] justify-center">
        <div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <Image src={CorrectIcon} alt="zz" width={32} height={32}></Image>
              <p className="mt-4 font-semibold text-2xl">
                Good Job!
              </p>
            </div>
       
            <div className="w-[384px] font-thin text-xs mt-3 flex items-center justify-center">
            Your very first account has been created. Now <br></br> continue to dashboard and start tracking
            </div>
          </div>
        </div>
        {/* <Button
          className="bg-[#0166FF] rounded-2xl h-[48px] w-[384px] mt-8"
          asChild
        >
          <Link href="/login">Go to Dashboard</Link>
        </Button> */}
      </div>
    </div>
  );
}
