import React from "react";
import bikes from "@/public/compareBikes.svg";
import Image from "next/image";

export default function Comparing() {
  return (
    <main>
      <div>
        <div className="relative w-1/4 ">
          <div className="absolute inset-0 top-56 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
          <Image
            src={bikes}
            alt="bikes"
            className=" h-auto w-3/7"
            width={600}
            height={800}
          />
        </div>

        <div>
          <div>birinci kutu</div>
          <div>İkinci kutu</div>
        </div>
      </div>
    </main>
  );
}
