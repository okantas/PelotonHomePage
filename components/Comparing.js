import React from "react";
import bikes from "@/public/bikes.svg";
import Image from "next/image";

export default function Comparing() {
  return (
    <main>
      <div>
        <Image alt="bikes">
          <bikes />
        </Image>
        <div>
          <div>birinci kutu</div>
          <div>İkinci kutu</div>
        </div>
      </div>
    </main>
  );
}
