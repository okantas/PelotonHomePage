import React from "react";

export default function Classes() {
  return (
    <main>
      <div className="flex flex-col items-center py-24">
        <div className="w-1/2 flex flex-col gap-6 text-center">
          <h1 className="text-2xl lg:text-5xl font-thin tracking-wides">
            Tap into motivation and feel energized class after class
          </h1>
          <p className="text-sm lg:text-xl font-thin tracking-wides">
            Get a taste for workouts that fit your mood, goals, music style,
            experience level, and schedule on the Peloton Bike, Bike+, Tread,
            Guide, and the Peloton App.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-10">
          <a className="flex bg-[#DF1C2F] border-2 border-solid border-[#DF1C2F]  text-xs justify-center items-center text-white w-60 h-10 rounded-md cursor-pointer tracking-widest">
            EXPLORE CLASSES
          </a>
          <a className=" flex bg-white border-2 border-solid border-black text-xs justify-center items-center w-60 h-10 rounded-md cursor-pointer tracking-widest">
            GET THE APP
          </a>
        </div>
      </div>
    </main>
  );
}
