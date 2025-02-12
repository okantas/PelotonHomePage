import React from "react";
import bikes from "@/public/compareBikes.svg";
import Image from "next/image";

export default function Comparing() {
  return (
    <main>
      <div>
        <div className="relative w-4/12 h-60">
          <Image
            src={bikes}
            alt="bikes"
            className="w-full h-screen object-cover"
          />
          <div className="absolute bg-black w-full h-screen"></div>
        </div>

        <div>
          <div>birinci kutu</div>
          <div>İkinci kutu</div>
        </div>
      </div>
    </main>
  );
}
