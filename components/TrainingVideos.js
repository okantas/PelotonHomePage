"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Running from "@/public/Running.svg";
import Strenght from "@/public/Strength.svg";
import Rowing from "@/public/Rowing.svg";
import Boxing from "@/public/Boxing.svg";
import Cycling from "@/public/Cycling.svg";

export default function TrainingVideos() {
  const Photos = [
    { id: 1, name: Running, alt: "Running" },
    { id: 2, name: Strenght, alt: "Strenght" },
    { id: 3, name: Rowing, alt: "Rowing" },
    { id: 4, name: Boxing, alt: "Boxing" },
    { id: 5, name: Cycling, alt: "Cycling" },
    { id: 6, name: Boxing, alt: "Boxing" },
  ];
  return (
    <main className="w-full flex justify-center items-cente">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={5}
        loop={true}
        className="mb-12"
      >
        {Photos.map((photo) => (
          <SwiperSlide key={photo.id}>
            <Image src={photo.name} width={280} height={200} alt={photo.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
