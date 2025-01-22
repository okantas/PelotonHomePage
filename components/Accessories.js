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
      <div className=" flex gap-10 py-14 px-20 w-full bg-[#F5F7F9]">
        <div className=" shadow-black  w-36 h-44 rounded-md bg-white">
          <Image src={Row} alt="row" className="relative  right-6" />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
        <div className=" shadow-black  w-36 h-44 rounded-md bg-white">
          <Image src={Tread} alt="Tread" className="relative  right-6" />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
        <div className=" shadow-black  w-36 h-44 rounded-md bg-white">
          <Image src={Bikes} alt="Bikes" className="relative  right-6" />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
        <div className=" shadow-black  w-36 h-44 rounded-md bg-white">
          <Image src={Guide} alt="Guide" className="relative  right-6" />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
        <div className=" shadow-black  w-36 h-44 rounded-md bg-white">
          <Image src={AppImg} alt="AppImg" className="relative  right-6" />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
        <div className=" shadow-black  w-36 h-44 rounded-md bg-white">
          <Image
            src={AccessoriesImg}
            alt="AccessoriesImg"
            className="relative  right-6"
          />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
        <div className=" shadow-black  w-36 h-44 rounded-md bg-white">
          <Image src={Apparel} alt="Apparel" className="relative  right-6" />
          <p className="relative right-3 font-bold text-right text-slate-500">
            Row
          </p>
        </div>
      </div>
    </main>
  );
}
