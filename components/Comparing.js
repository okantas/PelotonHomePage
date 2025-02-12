import React from "react";
import bikes from "@/public/compareBikes.svg";
import Image from "next/image";

export default function Comparing() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="relative w-[600px] ">
          <div className="absolute inset-0 top-[300px] h-2/3 bg-gradient-to-t from-black to-transparent"></div>
          <Image
            src={bikes}
            alt="bikes"
            className=" h-auto w-[600px]"
            width={600}
            height={800}
          />
        </div>

        <div>
          <div className="relative  bg-black">birinci kutu</div>
          <div>İkinci kutu</div>
        </div>
      </div>
    </main>
  );
}
