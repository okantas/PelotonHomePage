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
        <div className="absolute inset-0 bg-gradient-to-t via-transparent to-black opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r via-transparent to-black opacity-50"></div>
        <div className="absolute gap-4 flex flex-col h-screen items-start justify-center pl-20">
          <p className="font-bold text-sm text-white">$150 off packages</p>
          <h1 className="font-bold text-5xl text-white">
            Spring training savings
          </h1>
          <p className="text-2xl text-white font-thin w-2/4">
            Limited-time offer! Build strength this spring with a Peloton Guide
            Package and get $150 off.**
          </p>
        </div>
      </div>
    </main>
  );
}
