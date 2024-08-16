import Image from "next/image";
import { Inter } from "next/font/google";
import CurrencyIcon from "@/components/icon/CurrencyIcon.png";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
              <Image src={CurrencyIcon} alt="zz" width={32} height={32}></Image>
              <p className="mt-4 font-semibold text-2xl">
                Select base currency
              </p>
            </div>
            <div className="flex items-center justify-center mt-6">
              <Select>
                <SelectTrigger className="w-[384px]">
                  <SelectValue placeholder="MNT - Mongolian Tugrik" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Currency</SelectLabel>
                    <SelectItem value="MNT - Mongolian Tugrik">
                      MNT - Mongolian Tugrik
                    </SelectItem>
                    <SelectItem value="USD - United State Dollar">
                      USD - United State Dollar
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[384px] font-thin text-xs mt-3">
              Your base currency should be the one you use most often. All
              transaction in other currencies will be calculated based on this
              one
            </div>
          </div>
        </div>
        {/* <Button
          className="bg-[#0166FF] rounded-2xl h-[48px] w-[384px] mt-8"
          asChild
        >
          <Link href="/login">Confirm</Link>
        </Button> */}
      </div>
    </div>
  );
}
