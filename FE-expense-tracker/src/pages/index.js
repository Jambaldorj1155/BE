import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Button>hello</Button>
      <Button variant="link"> hello</Button>
      
    </div>
    
  )}