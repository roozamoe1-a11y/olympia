"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function HeroSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-black">

      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
          EffectFade,
        ]}
        effect="fade"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop
        speed={900}
        className="
          w-full
          h-[240px]
          sm:h-[340px]
          md:h-[520px]
          lg:h-[700px]
        "
      >
      
          {slides.map((image, index) => (
            <SwiperSlide key={image}>

              <div className="relative h-full w-full">

                <Image
                  src={image}
                  alt={`فروشگاه المپیا شماره بنر${index + 1}`}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="
                    object-cover
                    object-center
                  "
                />

                {/* لایه تیره برای خوانایی بهتر */}
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/20
                  to-black/10
                " />

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

    </section>
  );
}