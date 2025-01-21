import React from "react";
import Image from "next/image";
import Logo from "../public/PelotonLogo.svg";
import Location from "../public/locationLogo.svg";
import ShoppingCart from "../public/ShoppingCartIcon.svg";
import Human from "../public/humanIcon.svg";

export default function Header() {
  return (
    <main className=" z-10 flex absolute w-full  justify-between items-center py-2 px-8 max-w-full  ">
      <div>
        <Image src={Logo} alt="Logo" className="cursor-pointer" />
      </div>

      <ul className="flex justify-center gap-x-9 font-bold text-white text-sm tracking-widest">
        <li className="cursor-pointer">Bikes</li>
        <li className="cursor-pointer">Tread</li>
        <li className="cursor-pointer">Strength</li>
        <li className="cursor-pointer">Row</li>
        <li className="cursor-pointer">App</li>
        <li className="cursor-pointer">Accessories</li>
        <li className="cursor-pointer">Apparel</li>
      </ul>

      <div className="flex gap-6">
        <Image src={Location} alt="location" className="cursor-pointer" />
        <Image src={Human} alt="human" className="cursor-pointer" />
        <Image
          src={ShoppingCart}
          alt="shoppingcart"
          className="cursor-pointer"
        />
      </div>
    </main>
  );
}
