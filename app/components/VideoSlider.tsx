"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  { title: "آموزش حرکت اسکوات هالتر", file: "/videos/ali1.mp4" },
  { title: "آموزش حرکت دست پا دستگاه", file: "/videos/ali2.mp4" },
  { title: "آموزش حرکت پرس بالا سینه دستگاه", file: "/videos/ali3.mp4" },
  { title: "آموزش حرکت پرس سینه دستگاه", file: "/videos/ali4.mp4" },
  { title: "آموزش حرکت جلو بازو دستگاه", file: "/videos/ali5.mp4" },
  { title: "آموزش حرکت پرس سرشانه هالتر نشسته", file: "/videos/ali6.mp4" },
  { title: "آموزش حرکت بازو از جلو دست باز", file: "/videos/ali7.mp4" },
  { title: "آموزش حرکت پشت بازو خوابیده هالتر", file: "/videos/ali8.mp4" },
  { title: "آموزش حرکت ساعد هالتر دست برعکس، ایستاده", file: "/videos/ali9.mp4" },
  { title: "آموزش حرکت پشت ران نشسته دستگاه", file: "/videos/ali10.mp4" },
];

export default function VideoSlider() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      const maxScroll =
        slider.scrollWidth - slider.clientWidth;

      if (slider.scrollLeft >= maxScroll - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 280,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="w-full mt-10 px-4">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          🎬 آموزش حرکات ورزشی
        </h2>

        <div
          ref={sliderRef}
          className="
            flex
            gap-5
            overflow-x-auto
            pb-4
            scroll-smooth
            scrollbar-hide
          "
        >
          {videos.map((video, index) => (
            <div
              key={index}
              className="
                min-w-[260px]
                rounded-2xl
                bg-[#151515]
                border
                border-orange-500/20
                p-3
                hover:border-orange-500
                transition
                flex-shrink-0
              "
            >
              <video
                src={video.file}
                className="
                  w-full
                  h-44
                  rounded-xl
                  object-cover
                  cursor-pointer
                "
                preload="metadata"
                muted
                onClick={() => setSelectedVideo(video.file)}
              />

              <h3 className="text-white text-sm mt-3 leading-6">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {selectedVideo && (
        <div
          className="
            fixed inset-0 z-[9999]
            bg-black/90
            flex items-center justify-center
            p-4
          "
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}