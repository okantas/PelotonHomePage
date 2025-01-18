import React from "react";
import Image from "next/image";
import Logo from "../public/PelotonLogo.svg";
import Location from "../public/locationLogo.svg";
import ShoppingCart from "../public/ShoppingCartIcon.svg";
import Human from "../public/humanIcon.svg";

export default function Header() {
  return (
    <main className="flex absolute w-full  justify-between items-center py-2 px-8 max-w-full  ">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>

      <ul className="flex justify-center gap-x-9 font-bold text-white text-xs">
        <li>Bikes</li>
        <li>Tread</li>
        <li>Strength</li>
        <li>Row</li>
        <li>App</li>
        <li>Accessories</li>
        <li>Apparel</li>
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
