
import GreenUpArrow from "@/components/icon/GreenUpArrow.svg"
import { Card } from "@/components/jishee"
import Image from "next/image"
import GreenDownArrow from "@/components/icon/GreendownArrow.svg"



export default function Contain() {
  return (
    <div className="flex">
      <Card title={"Income"} balance={"99'999'999"} pic={GreenUpArrow} color={"bg-green-600"}></Card>
      <Card title={"Income"} balance={"99'900999"} pic={GreenDownArrow} color={"bg-blue-600"}></Card>
    </div>
  )};

