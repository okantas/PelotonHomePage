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
      <div className="py-14 px-20">
        <div className=" shadow-black shadow-sm w-36 h-44 rounded-md">
          <Image src={Row} alt="row" className="relative  right-6" />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
      </div>
    </main>
  );
}
