import React from "react";
import Image from "next/image";
import Desktop from "@/public/desktop.svg";

export default function QuizSection() {
  return (
    <main>
      <div className="flex justify-center gap-40">
        <Image src={Desktop} alt="desktop" />
        <div>
          <p>Find your class match</p>
          <h1>
            Get personalized class recommendations based on your fitness goals
          </h1>
          <a>Take Quiz</a>
        </div>
      </div>
    </main>
  );
}
