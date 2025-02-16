import React from "react";

export default function others() {
  return (
    <>
      <div className="flex justify-center gap-[20px]">
        <div className="bg-[url(@/public/pelotonTreadBg.svg)] h-[480px] w-[580px]">
          <div className="relative inset-0  h-[480px]  bg-gradient-to-t from-black to-transparent">
            <div className="flex flex-col justify-end h-[480px] gap-4 text-white pl-8 pb-10">
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
        </div>
        <div className="bg-[#FFFFFF] shadow-[0px_32px_54px_-20px_rgba(0,0,0,0.1)] h-[480px] w-[580px]">
          informations
        </div>
      </div>
    </>
  );
}
