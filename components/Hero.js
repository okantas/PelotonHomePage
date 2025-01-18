import React from "react";
import Header from "./Header";

export default function HeroSection() {
  return (
    <main>
      <Header />
      <div className="bg-[url('/HeroImg.svg')] bg-cover bg-center w-full h-screen "></div>
    </main>
  );
}
