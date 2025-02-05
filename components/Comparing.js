import React from "react";
import bikes from "@/public/compareBikes.svg";
import Image from "next/image";

export default function Comparing() {
  return (
    <main>
      <div>
        <Image src={bikes} alt="bikes" />
        <div>
          <div>birinci kutu</div>
          <div>İkinci kutu</div>
        </div>
      </div>
    </main>
  );
}
