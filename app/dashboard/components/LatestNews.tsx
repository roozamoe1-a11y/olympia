"use client";

import {
  Newspaper,
  ExternalLink,
  RefreshCw,
} from "lucide-react";

import { useState } from "react";


const news = [
  {
    id: 1,
    title: "آخرین اخبار بازار سرمایه و بورس ایران",
    description:
      "اخبار بورس، شاخص‌ها، سهام، طلا، ارز دیجیتال و تحلیل‌های اقتصادی",
    url: "https://sarmayevabourse.ir",
  },

  {
    id: 2,
    title: "اخبار روز بازارهای مالی",
    description:
      "پیگیری آخرین اتفاقات بورس، اقتصاد و سرمایه‌گذاری",
    url: "https://www.fardabourse.ir",
  },

  {
    id: 3,
    title: "اخبار اقتصادی، ارز و طلا",
    description:
      "جدیدترین خبرهای اقتصادی ایران و تغییرات بازار",
    url: "https://www.economic24.ir",
  },
];


export default function LatestNews() {


  const [loading, setLoading] = useState(false);



  function refreshNews() {

    setLoading(true);


    setTimeout(() => {

      setLoading(false);

    }, 800);

  }



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
        justify-between
        mb-6
        "
      >


        <div
          className="
          flex
          items-center
          gap-3
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

            <Newspaper
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
              آخرین اخبار
            </h2>


            <p
              className="
              text-xs
              text-gray-500
              mt-1
              "
            >
              اخبار اقتصادی و بازار ایران
            </p>

          </div>


        </div>




        <button
          onClick={refreshNews}
          className="
          w-10
          h-10
          rounded-xl
          border
          border-zinc-700
          flex
          items-center
          justify-center
          hover:border-yellow-400
          transition
          "
        >

          <RefreshCw
            size={18}
            className={`
            text-yellow-400
            ${loading ? "animate-spin" : ""}
            `}
          />

        </button>


      </div>




      <div
        className="
        space-y-4
        "
      >


        {news.map((item) => (


          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
            block
            bg-[#171717]
            border
            border-zinc-800
            rounded-xl
            p-4
            hover:border-yellow-500/30
            transition-all
            "
          >


            <div
              className="
              flex
              justify-between
              items-start
              gap-4
              "
            >


              <div>

                <h3
                  className="
                  text-white
                  font-bold
                  text-sm
                  "
                >
                  {item.title}
                </h3>



                <p
                  className="
                  text-gray-500
                  text-xs
                  mt-2
                  leading-6
                  "
                >
                  {item.description}
                </p>


              </div>



              <ExternalLink
                size={18}
                className="text-yellow-400"
              />


            </div>


          </a>


        ))}


      </div>



    </div>

  );

}