import React from "react";
import Image from "next/image";
import Desktop from "@/public/desktop.svg";

export default function QuizSection() {
  return (
    <main>
      <div>
        <Image src={Desktop} alt="desktop" />
      </div>
    </main>
  );
}
