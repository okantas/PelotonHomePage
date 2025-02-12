import React from "react";
import bikes from "@/public/compareBikes.svg";
import Image from "next/image";

export default function Comparing() {
  return (
    <main>
      <div className="flex justify-center gap-[20px]">
        <div className="relative w-[600px] ">
          <div className="absolute inset-0 h-[900px] bg-gradient-to-t from-black to-transparent"></div>
          <Image
            src={bikes}
            alt="bikes"
            className=" h-auto w-[600px]"
            width={600}
            height={800}
          />
        </div>

        <div className="flex flex-col gap-[20px]">
          <div className="relative w-[600px] h-[440px] bg-black">
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
