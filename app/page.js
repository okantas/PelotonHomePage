import React from "react";
import Hero from "@/components/Hero";
import Accessories from "@/components/Accessories";
import Classes from "@/components/Classes";
import TrainingVideos from "@/components/TrainingVideos";
import QuizSection from "@/components/QuizSection";
import Comparing from "@/components/Comparing";

export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <Accessories />
        <Classes />
        <TrainingVideos />
        <QuizSection />
        <Comparing />
      </div>
    </>
  );
}
