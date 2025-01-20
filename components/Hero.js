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
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute gap-6 flex flex-col h-screen items-start justify-center pl-20">
          <p className="font-bold text-sm text-white tracking-widest">
            $150 OFF PACKAGES
          </p>
          <h1 className="font-bold text-5xl text-white tracking-widest">
            SPRING TRAINING SAVINGS
          </h1>
          <p className="text-2xl text-white font-thin w-2/4">
            Limited-time offer! Build strength this spring with a Peloton Guide
            Package and get $150 off.**
          </p>

          <a className="border border-solid border-red-600 px-16 py-3 bg-red-800 rounded-md text-white text-sm ">
            SHOP GUIDE
          </a>

          <p>Peloton Guide Membership separate</p>
        </div>
      </div>
    </main>
  );
}
