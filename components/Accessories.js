import React from "react";
import Image from "next/image";
import Row from "@/public/Row.svg";
import Tread from "@/public/Tread.svg";
import Bikes from "@/public/bikes.svg";
import Guide from "@/public/Guide.svg";
import AppImg from "@/public/app.svg";
import AccessoriesImg from "@/public/accessories.svg";
import Apparel from "@/public/Apparel.svg";

export default function Accessories() {
  return (
    <main>
      <div>
        <div className=" shadow-black shadow-2xl w-36 h-44">
          <Image src={Row} alt="row" />
          <p className="text-right">Row</p>
        </div>
      </div>
    </main>
  );
}
