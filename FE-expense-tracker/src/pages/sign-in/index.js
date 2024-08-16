import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import LogoIcon from "@/components/icon/LogoIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex w-full">
      <div className="w-full h-screen flex flex-col items-center justify-center">

        <div className="flex">
            <LogoIcon/>
           
        </div>
        <div className="flex flex-col items-center justify-center">
            <h1>Welcome back</h1>
            <p>Welcome back, Please enter your details</p>
        </div>
        <div className="w-[384px]">
       
        <Input className="mt-4" type="email" placeholder="Email" />
        <Input className="mt-4" type="email" placeholder="Password" />
        <Button asChild className="bg-[#0166FF] w-[384px]">
          <Link href="/">Login</Link>
        </Button>
        </div>
        <div className="flex items-center justify-center">
            <p>Don’t have account?</p>
            <Link href="/sign-up" className="text-[#0166FF]" variant="link">Sign up</Link>
        </div>
      </div>
        <div className="bg-[#0166FF] w-full h-screen">

        </div>
    </div>
    
  )}
