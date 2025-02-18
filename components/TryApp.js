import React from "react";
import Image from "next/image";
import TryTheApp from "@/public/TryTheApp.svg";

export default function TryApp() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center gap-40 pt-[120px]">
          <div className="flex flex-col gap-[15px]">
            <p className="text-[12px] text-[#181A1D] font-bold">Peloton App</p>
            <p className="text-[28px] text-[#181A1D] font-light">
              Try free for 30 days
            </p>
            <p className="font-light text-[16px] text-[#65666A]">
              Take classes at home, in the gym, or on the <br /> go with no
              equipment needed.
            </p>
            <a className="w-60 h-10 bg-[#DF1C2F] justify-center items-center flex text-[#FFFFFF] font-bold text-[11px] rounded-md">
              TRY THE APP
            </a>
            <p className="font-light text-[13px] text-[#65666A]">
              New App trials only. $12.99/mo after. Terms apply.
            </p>
          </div>
          <div className="w-[600px] h-[600px]">
            <Image src={TryTheApp} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}
