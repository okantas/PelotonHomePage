import React from "react";
import Header from "./Header";

export default function HeroSection() {
  return (
    <main>
      <Header />

      <div
        className="h-screen w-full bg-cover bg-center shadow-2xl"
        style={{
          backgroundImage: "url('/HeroImg.svg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute gap-8 flex flex-col h-screen items-start justify-center pl-20">
          <p className="font-bold text-sm text-white tracking-widest">
            $150 OFF PACKAGES
          </p>
          <h1 className="font-bold text-5xl text-white tracking-widest">
            SPRING TRAINING SAVINGS
          </h1>
          <p className="text-2xl text-white font-thin w-2/4 tracking-widest">
            Limited-time offer! Build strength this spring with a Peloton Guide
            Package and get $150 off.**
          </p>

          <a className="border border-solid border-red-600 px-16 py-3 bg-red-800 rounded-md text-white text-sm tracking-widest">
            SHOP GUIDE
          </a>

          <p className="text-sm text-white font-extralight tracking-widest">
            Peloton Guide Membership separate
          </p>
        </div>
      </div>
    </main>
  );
}
