import React from "react";

export default function others() {
  return (
    <>
      <div className="flex justify-center gap-[20px]">
        <div className="bg-[url(@/public/pelotonTreadBg.svg)] h-[480px] w-[580px]">
          <div className="relative inset-0 h-[480px]  bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className="bg-[#FFFFFF] shadow-[0px_32px_54px_-20px_rgba(0,0,0,0.1)] h-[480px] w-[580px]">
          informations
        </div>
      </div>
    </>
  );
}
