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
  const Pictures = [
    { id: 1, name: Row, alt: "row", text: "Row" },
    { id: 2, name: Tread, alt: "Tread", text: "Tread" },
    { id: 3, name: Bikes, alt: "Bikes", text: "Bikes" },
    { id: 4, name: Guide, alt: "Guide", text: "Guide" },
    { id: 5, name: AppImg, alt: "AppImg", text: "App" },
    {
      id: 6,
      name: AccessoriesImg,
      alt: "AccessoriesImg",
      text: "Accessories",
    },
    { id: 7, name: Apparel, alt: "Apparel", text: "Apparel" },
  ];
  return (
    <main>
      <div className="flex gap-10 items-center justify-center py-14 px-20 w-full bg-[#F5F7F9]">
        {Pictures.map((picture) => (
          <div
            className=" shadow-black h-20 w-20 lg:w-36 lg:h-44 rounded-md bg-white"
            key={picture.id}
          >
            <Image
              src={picture.name}
              alt={picture.alt}
              className="relative  lg:right-6"
            />
            <p className="relative lg:right-3 font-bold text-right text-slate-500">
              {picture.text}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
