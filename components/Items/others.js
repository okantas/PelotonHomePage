import React from "react";
import Image from "next/image";
import App from "@/public/pelotonApp.svg";
import AppBg from "@/public/pelotonAppBg.svg";
import Guide from "@/public/pelotonGuide.svg";
import GuideBg from "@/public/pelotonGuideBg.svg";
import Row from "@/public/pelotonRow.svg";
import RowBg from "@/public/pelotonRowBg.svg";
import Tread from "@/public/pelotonTread.svg";
import TreadBg from "@/public/pelotonTreadBg.svg";

export default function others() {
  const Items = [
    {
      id: 1,
      leftName: "PELOTON TREAD",
      message: "Feel inspired to go beyond the expected",
      leftPhoto: TreadBg,
      leftButton: "SHOP NOW",
      rightName: "Peloton Tread",
      price: "$3,495",
      monthly:
        "Peloton All-Access Membership ($44/mo) required to access Peloton content.",
      rightButton: "Explore Tread",
      rightPhoto: Tread,
    },
    {
      id: 2,
      leftName: "PELOTON GUIDE",
      message: "Reach your goals with a personal guide to strength training",
      leftPhoto: GuideBg,
      leftButton: "SHOP NOW",
      rightName: "Peloton Guide",
      price: "$195",
      monthly:
        "Peloton Guide Membership separate: $24/mo for Guide-only Members. No additional fee for All-Access Members.",
      rightButton: "Explore Guide",
      rightPhoto: Guide,
    },
    {
      id: 3,
      leftName: "PELOTON ROW",
      message: "Work 86% of your muscles in just 15 minutes",
      leftPhoto: RowBg,
      leftButton: "SHOP NOW",
      rightName: "Peloton Row",
      price: "$3,195",
      monthly:
        "Peloton All-Access Membership ($44/mo) required to access Peloton content.",
      rightButton: "Explore Row",
      rightPhoto: Row,
    },
    {
      id: 4,
      leftName: "PELOTON APP",
      message:
        "Take classes at home, on the go, or at the gym – no equipment needed.",
      leftPhoto: AppBg,
      leftButton: "TRY THE APP",
      rightName: "Peloton App",
      price: "$19",
      monthly:
        "Get 30 days free, then only $12.99/mo. New App Members only. Terms apply.",
      rightButton: "GET 30 DAYS FREE",
      rightPhoto: App,
    },
  ];

  return (
    <>
      {Items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col justify-center items-center gap-[20px] xl:flex-row"
        >
          <div
            style={{ backgroundImage: `url(${item.leftPhoto.src})` }}
            className="w-[400px] h-[480px] md:w-[580px] bg-cover bg-center bg-no-repeat rounded-md"
          >
            <div className="relative inset-0  h-[480px]  bg-gradient-to-t pl-3 from-black  to-transparent">
              <div className="flex flex-col justify-end h-[480px] gap-4 text-white  pb-10">
                <p className="font-bold ">{item.leftName}</p>
                <h1 className="font-thin text-[24px] md:text-[36px] w-2/3 ">
                  {item.message}
                </h1>
                <a
                  href="https://www.google.com/"
                  target="_blank"
                  className="font-bold border border-white border-solid w-60 py-[10px] text-center rounded-md "
                >
                  {item.leftButton}
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#FFFFFF] relative w-[400px] h-[480px] md:w-[580px]  shadow-[0_32px_52px_-20px_rgba(0,0,0,0.1)] rounded-md ">
            <p className="absolute top-6 left-8 text-[10px] text-[#FFFFFF] font-bold bg-[#D00C2A] px-1 py-[1px] rounded-[4px]">
              SAVE ON PACKAGES
            </p>
            <div className="w-1/2 flex flex-col justify-center items-center">
              <Image src={item.rightPhoto} alt="Peloton Bike Plus" />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <h1 className="text-[28px] pb-3 ">{item.rightName}</h1>
              <p className="text-[12px] text-[#65666A]">Starting at</p>
              <p className="text-[13px] font-bold">{item.price}</p>
              <p className="text-[13px] text-[#65666A]">
                Pay monthly. Finance starting at 0% APR¹.
                <br /> <br />
                {item.monthly}
              </p>
              <a
                href="https://www.google.com"
                target="_blank"
                className="text-[13px] font-bold pt-3 border-b border-black w-max"
              >
                {item.rightButton}
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
