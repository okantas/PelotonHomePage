import React from "react";

export default function Comparing() {
  return (
    <main>
      <div className="flex justify-center gap-[20px]">
        <div
          className="relative flex items-end w-[588px] h-[900px] "
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

        <div className="flex flex-col gap-[20px]">
          <div className="relative w-[600px] h-[440px] bg-slate-700">
            birinci kutu
          </div>
          <div className="relative w-[600px] h-[440px] bg-black">
            İkinci kutu
          </div>
          ,
        </div>
      </div>
    </main>
  );
}
