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
  return (
    <main className="w-full flex justify-center items-cente">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={5}
        className="mb-12"
      >
        <SwiperSlide>
          <Image src={Running} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Boxing} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Strenght} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Rowing} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Cycling} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Running} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Boxing} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Strenght} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Rowing} width={280} height={200} alt="running" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Cycling} width={280} height={200} alt="running" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
