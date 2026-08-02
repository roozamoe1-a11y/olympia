"use client";

import {
  Dumbbell,
  ExternalLink,
  RefreshCw,
  Trophy,
} from "lucide-react";

import { useState } from "react";


const bodybuildingNews = [

  {
    id: 1,
    title: "آخرین اخبار بدنسازی جهان",
    description:
      "اخبار مسابقات، قهرمانان و اتفاقات دنیای بدنسازی",
    url: "https://generationiron.com",
  },

  {
    id: 2,
    title: "آموزش تمرین و عضله‌سازی",
    description:
      "مقالات تخصصی تمرین، حجم، کات و تغذیه ورزشی",
    url: "https://www.muscleandstrength.com",
  },

  {
    id: 3,
    title: "اخبار مسابقات حرفه‌ای",
    description:
      "پیگیری مسابقات مستر المپیا و ورزشکاران حرفه‌ای",
    url: "https://www.mrolympia.com",
  },

];



export default function BodybuildingNews() {


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

            <Dumbbell
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
              اخبار بدنسازی
            </h2>


            <p
              className="
              text-xs
              text-gray-500
              mt-1
              "
            >
              تمرین، مسابقات و تغذیه ورزشی
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


        {bodybuildingNews.map((item) => (

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
            transition
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


                <div
                  className="
                  flex
                  items-center
                  gap-2
                  "
                >

                  <Trophy
                    size={16}
                    className="text-yellow-400"
                  />


                  <h3
                    className="
                    text-white
                    text-sm
                    font-bold
                    "
                  >
                    {item.title}
                  </h3>


                </div><p
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