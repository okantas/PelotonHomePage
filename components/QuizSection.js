import React from "react";
import Image from "next/image";
import Desktop from "@/public/desktop.svg";

export default function QuizSection() {
  return (
    <main className="px-20">
      <div className="flex flex-col items-center justify-center gap-40 py-40 xl:flex-row">
        <Image
          src={Desktop}
          alt="desktop"
          className="lg:w-[600px] lg:h-[690px] "
        />
        <div className="flex flex-col gap-4 items-center justify-center xl:items-start">
          <p className="font-bold text-xs">Find your class match</p>
          <h1 className="text-center font-thin text-3xl xl:text-left">
            Get personalized class recommendations based on your fitness goals
          </h1>
          <a className="font-bold shadow-md shadow-black text-cs border border-solid rounded-md  w-60 text-center p-2 cursor-pointer hover:bg-slate-400 hover:transition-all hover:duration-500">
            Take Quiz
          </a>
        </div>
      </div>
    </main>
  );
}
