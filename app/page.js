import React from "react";
import Hero from "@/components/Hero";
import Accessories from "@/components/Accessories";
import Classes from "@/components/Classes";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Accessories />
        <Classes />
      </div>
    </>
  );
}
