import React from "react";
import Image from "next/image";
import PelotonBikePlus from "@/public/pelotonBike+.svg";
import PelotonBike from "@/public/pelotonBike.svg";

export default function Comparing() {
  return (
    <main>
      <div className="flex justify-center gap-[20px]">
        <div
          className="relative flex items-end w-[588px] h-[900px] rounded-md"
          style={{ backgroundImage: "url('/pelotonBikeBg.svg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="absolute flex flex-col gap-4 text-white pl-8 pb-10">
            <p className="font-bold  ">PELOTON BIKE AND BIKE+</p>
            <h1 className="font-thin text-[36px] ">
              Switch up your routine <br /> with a variety of workouts
            </h1>
            <a
              href="https://www.google.com/"
              target="_blank"
              className="font-bold border border-white border-solid w-60 py-[10px] text-center rounded-md "
            >
              COMPARE BIKES
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] ">
          <div className="flex justify-center items-center bg-[#FFFFFF] relative w-[580px] h-[440px] shadow-[0_32px_52px_-20px_rgba(0,0,0,0.1)] rounded-md ">
            <p className="absolute top-6 left-8 text-[10px] text-[#FFFFFF] font-bold bg-[#D00C2A] px-1 py-[1px] rounded-[4px]">
              SAVE ON PACKAGES
            </p>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <Image src={PelotonBikePlus} alt="Peloton Bike Plus" />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <h1 className="text-[28px] pb-3 ">Peloton Bike+</h1>
              <p className="text-[12px] text-[#65666A]">Starting at</p>
              <p className="text-[13px] font-bold">$2,495</p>
              <p className="text-[13px] text-[#65666A]">
                Pay monthly. Finance starting at 0% APR¹.
                <br /> <br />
                Peloton All-Access Membership ($44/mo) required to access
                Peloton content
              </p>
              <a
                href="https://www.google.com"
                target="_blank"
                className="text-[13px] font-bold pt-3 border-b border-black w-max"
              >
                EXPLORE BIKE+
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#FFFFFF] relative w-[580px] h-[440px] shadow-[0_32px_52px_-20px_rgba(0,0,0,0.1)] rounded-md ">
            <p className="absolute top-6 left-8 text-[10px] text-[#FFFFFF] font-bold bg-[#D00C2A] px-1 py-[1px] rounded-[4px]">
              SAVE ON PACKAGES
            </p>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <Image src={PelotonBike} alt="Peloton Bike" />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <h1 className="text-[28px] pb-3 ">Peloton Bike</h1>
              <p className="text-[12px] text-[#65666A]">Starting at</p>
              <p className="text-[13px] font-bold">$1,445</p>
              <p className="text-[13px] text-[#65666A]">
                Pay monthly. Finance starting at 0% APR¹.
                <br /> <br />
                Peloton All-Access Membership ($44/mo) required to access
                Peloton content
              </p>
              <a
                href="https://www.google.com"
                target="_blank"
                className="text-[13px] font-bold pt-3 border-b border-black w-max"
              >
                EXPLORE BIKE
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
