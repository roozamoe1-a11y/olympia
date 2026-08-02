"use client";

import Link from "next/link";

import {
  Brain,
  Sparkles,
  Dumbbell,
  Flame,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react";



const recommendations = [

  {
    id: 1,
    title: "افزایش حجم عضلانی",
    product: "وی پروتئین + کراتین مونوهیدرات",
    description:
      "مناسب برای افزایش حجم و بهبود ریکاوری عضلات",
    icon: Dumbbell,
  },


  {
    id: 2,
    title: "چربی‌سوزی و کات",
    product: "پروتئین ایزوله + مکمل انرژی",
    description:
      "کمک به حفظ عضله در دوره کاهش چربی",
    icon: Flame,
  },


  {
    id: 3,
    title: "ریکاوری بهتر",
    product: "BCAA + گلوتامین",
    description:
      "پشتیبانی از بازسازی عضلات بعد از تمرین",
    icon: ShieldCheck,
  },


];



export default function AiRecommendation() {


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
          w-12
          h-12
          rounded-xl
          bg-yellow-500/10
          flex
          items-center
          justify-center
          "
        >

          <Brain
            size={26}
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
            پیشنهاد هوشمند المپیا
          </h2>


          <p
            className="
            text-xs
            text-gray-500
            mt-1
            "
          >
            انتخاب مکمل بر اساس هدف شما
          </p>


        </div>


      </div>





      <div
        className="
        space-y-4
        "
      >


        {recommendations.map((item)=>{


          const Icon = item.icon;


          return (

            <div
              key={item.id}
              className="
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
                gap-4
                items-start
                "
              >


                <div
                  className="
                  w-10
                  h-10
                  rounded-xl
                  bg-yellow-500/10
                  flex
                  items-center
                  justify-center
                  "
                >

                  <Icon
                    size={21}
                    className="text-yellow-400"
                  />

                </div>



                <div className="flex-1">


                  <div
                    className="
                    flex
                    items-center
                    gap-2
                    "
                  >

                    <h3
                      className="
                      text-white
                      text-sm
                      font-bold
                      "
                    >
                      {item.title}
                    </h3>


                    <Sparkles
                      size={14}
                      className="text-yellow-400"
                    />

                  </div>



                  <p
                    className="
                    text-yellow-400
                    text-xs
                    font-bold
                    mt-2
                    "
                  >
                    {item.product}
                  </p>



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


              </div></div>

          );


        })}



      </div>





      <Link
        href="/ai"
        className="
        mt-6
        w-full
        py-3
        rounded-xl
        border
        border-yellow-500
        text-yellow-400
        font-bold
        flex
        items-center
        justify-center
        gap-2
        hover:bg-yellow-500
        hover:text-black
        transition
        "
      >

        دریافت پیشنهاد شخصی

        <ArrowLeft size={18}/>

      </Link>



    </div>

  );

}