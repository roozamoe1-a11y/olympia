"use client";

import {
  CalendarDays,
  ExternalLink,
} from "lucide-react";


export default function EconomicCalendar() {

  return (

    <div
      className="
      bg-[#101010]
      border
      border-zinc-800
      rounded-2xl
      p-6
      hover:border-yellow-500/40
      transition-all
      "
    >

      <div
        className="
        flex
        items-center
        gap-3
        mb-6
        "
      >

        <div
          className="
          w-11
          h-11
          rounded-xl
          bg-yellow-500/10
          flex
          items-center
          justify-center
          "
        >

          <CalendarDays
            size={24}
            className="text-yellow-400"
          />

        </div>


        <div>

          <h2
            className="
            text-xl
            font-bold
            text-yellow-400
            "
          >
            تقویم اقتصادی
          </h2>


          <p
            className="
            text-xs
            text-gray-500
            mt-1
            "
          >
            رویدادها و اخبار مهم اقتصادی ایران
          </p>


        </div>


      </div>



      <div
        className="
        bg-[#171717]
        border
        border-zinc-800
        rounded-xl
        p-5
        "
      >


        <h3
          className="
          text-white
          font-bold
          mb-3
          "
        >
          مشاهده تقویم اقتصادی روز
        </h3>


        <p
          className="
          text-gray-500
          text-sm
          leading-7
          "
        >
          بررسی اخبار اقتصادی،
          بازار ارز، طلا، بورس و رویدادهای مهم مالی ایران.
        </p>



      </div>




      <a
        href="https://www.eghtesadonline.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
        mt-6
        flex
        items-center
        justify-center
        gap-2
        w-full
        py-3
        rounded-xl
        border
        border-yellow-500
        text-yellow-400
        font-bold
        hover:bg-yellow-500
        hover:text-black
        transition-all
        "
      >

        <CalendarDays
          size={18}
        />

        مشاهده تقویم اقتصادی

        <ExternalLink
          size={16}
        />

      </a>



    </div>

  );

}