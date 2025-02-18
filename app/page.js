import React from "react";
import Hero from "@/components/Hero";
import Accessories from "@/components/Accessories";
import Classes from "@/components/Classes";
import TrainingVideos from "@/components/TrainingVideos";
import QuizSection from "@/components/QuizSection";
import Items from "@/components/Items/items";
import CompareCost from "@/components/CompareCost";
import TryApp from "@/components/TryApp";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Accessories />
        <Classes />
        <TrainingVideos />
        <QuizSection />
        <Items />
        <CompareCost />
        <TryApp />
      </div>
    </>
  );
}
