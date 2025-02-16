import React from "react";
import bikes from "@/public/compareBikes.svg";
import Image from "next/image";

export default function Comparing() {
  return (
    <main>
      <div className="flex justify-center gap-[20px]">
        <div
          className="relative w-[588px] "
          style={{ backgroundImage: "url('/compareBikes.svg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <h1 className=" ">Peloton Bike and Bike+</h1>
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="relative w-[600px] h-[440px] bg-slate-700">
            birinci kutu
          </div>
          <div className="relative w-[600px] h-[440px] bg-black">
            İkinci kutu
          </div>
        </div>
      </div>
    </main>
  );
}
