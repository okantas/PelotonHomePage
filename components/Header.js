"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import Logo from "../public/PelotonLogo.svg";
import Location from "../public/locationLogo.svg";
import ShoppingCart from "../public/ShoppingCartIcon.svg";
import Human from "../public/humanIcon.svg";
import MenuIcon from "../public/menu.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className=" z-10 flex flex-col lg:flex-row absolute w-full  justify-between items-center py-2 px-16 lg:px-8 max-w-full  ">
      <div className="flex justify-between w-full lg:w-auto">
        <Image src={Logo} alt="Logo" className="cursor-pointer" />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
        >
          <Image src={MenuIcon} width={30} alt="menu icon" />
        </button>
      </div>

      <ul
        className={`overflow-hidden transform origin-top transition-all duration-300 ease-in-out 
    ${
      menuOpen
        ? "max-h-[500px] opacity-100 scale-y-100"
        : "max-h-0 opacity-0 scale-y-0"
    } 
    flex flex-col lg:flex-row lg:max-h-full lg:opacity-100 lg:scale-y-100 justify-center w-full mt-2 lg:mt-0 items-end gap-y-4 gap-x-9 font-bold text-white text-sm tracking-widest`}
      >
        <li className="cursor-pointer">Bikes</li>
        <li className="cursor-pointer">Tread</li>
        <li className="cursor-pointer">Strength</li>
        <li className="cursor-pointer">Row</li>
        <li className="cursor-pointer">App</li>
        <li className="cursor-pointer">Accessories</li>
        <li className="cursor-pointer">Apparel</li>
      </ul>

      <div className=" hidden lg:flex gap-6">
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
