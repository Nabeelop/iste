"use client";
import { memberDetails } from "@/components/data"
import MemberCard, { Member } from "@/components/MemberCard"
import { useState } from "react"

const Members = () => {

  const [tab, setTab] = useState<string>("admins");

  const handleTabChange = (tabValue: string) => {
    setTab(tabValue);
  }

  return (
    <div className="pt-22 w-full flex flex-col items-center">
      
        <div className="w-[80%] mt-10 flex flex-col items-center">
            <p className="text-4xl font-semibold ">Explorers</p>
        </div>
        <div className="flex w-[65%] justify-between mt-10 rounded-full border border-gray-900 px-2 py-1 shadow-md shadow-amber-50">
          <button id="admins" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "admins" && "bg-gray-400/40"}`} onClick={() => handleTabChange("admins")}>Admins</button>
          <button id="catalyst" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "catalyst" && "bg-gray-400/40"}`} onClick={() => handleTabChange("catalyst")}>Catalyst</button>
          <button id="charge" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "charge" && "bg-gray-400/40"}`} onClick={() => handleTabChange("charge")}>Charge</button>
          <button id="chronicle" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "chronicle" && "bg-gray-400/40"}`} onClick={() => handleTabChange("chronicle")}>Chronicle</button>
          <button id="clutch" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "clutch" && "bg-gray-400/40"}`} onClick={() => handleTabChange("clutch")}>Clutch</button>
          <button id="concrete" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "concrete" && "bg-gray-400/40"}`} onClick={() => handleTabChange("concrete")}>Concrete</button>
          <button id="create" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "create" && "bg-gray-400/40"}`} onClick={() => handleTabChange("create")}>Create</button>
          <button id="credit" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "credit" && "bg-gray-400/40"}`} onClick={() => handleTabChange("credit")}>Credit</button>
          <button id="crypt" className={`w-full p-2 rounded-full hover:scale-110 transition-all ${tab === "crypt" && "bg-gray-400/40"}`} onClick={() => handleTabChange("crypt")}>Crypt</button>
        </div>
        <div className="mt-20 w-[80%] flex flex-wrap gap-8 justify-center">
            {
              memberDetails.map((member: Member, index:number) => (
                <div key={index}>
                  <MemberCard name={member.name} sig={member.sig} post={member.post} />
                </div>
              ))
            }
        </div>
    </div>
  )
}


export default Members