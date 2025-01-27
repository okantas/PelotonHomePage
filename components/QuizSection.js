import React from "react";
import Image from "next/image";
import Desktop from "@/public/desktop.svg";

export default function QuizSection() {
  return (
    <main className="px-20">
      <div className="flex justify-center gap-40">
        <Image src={Desktop} alt="desktop" />
        <div className="flex flex-col gap-4 justify-center">
          <p className="font-bold text-xs">Find your class match</p>
          <h1 className=" font-thin text-3xl">
            Get personalized class recommendations based on your fitness goals
          </h1>
          <a className="font-bold text-cs border border-solid rounded-md border-black w-60 text-center p-2">
            Take Quiz
          </a>
        </div>
      </div>
    </main>
  );
}
