"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="w-full h-[220px] sm:h-[320px] md:h-[500px] lg:h-screen"
    >
      {slides.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={image}
              alt={`Olympia Banner ${index + 1}`}
              className="w-full h-full object-contain bg-black"
              draggable={false}
            />

            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}