import React from "react";
import Header from "./Header";

export default function HeroSection() {
  return (
    <main>
      <Header />
      <div className="bg-[url('/HeroImg.svg')] bg-cover bg-center w-full h-screen shadow-[10px_10px_30px_rgba(0,0,0,1)] ">
        <div>
          <p>$150 off packages</p>
          <h1>Spring training savings</h1>
          <p>
            Limited-time offer! Build strength this spring with a Peloton Guide
            Package and get $150 off.**
          </p>
        </div>{" "}
      </div>
    </main>
  );
}
