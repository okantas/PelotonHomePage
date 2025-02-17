import React from "react";

export default function CompareCost() {
  return (
    <>
      <div className="bg-[#F5F7F9] pb-16 flex justify-center">
        <div className="flex flex-col justify-center items-center gap-5 w-[1220px] h-[300px] bg-[#181A1D] rounded-lg">
          <p className="text-white text-[13px] font-bold">
            Compare Peloton to your fitness costs
          </p>
          <p className="text-white text-[28px] font-light">
            How many people in your home would use Peloton?
          </p>
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 justify-center pl-[20px] w-[260px] h-[55px] bg-[#222529] rounded-md border border-[#888B93]">
              <p className="text-[10px] text-[#A8ACB1]">Household Size</p>
              <p className="text-[#F5F7F9] text-[16px]">2 People</p>
            </div>
            <a
              href="https://www.google.com"
              target="_blank"
              className=" bg-[#DF1C2F] text-white w-[90px] h-[55px] rounded flex items-center justify-center font-bold"
            >
              Next
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
