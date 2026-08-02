"use client";

import Link from "next/link";

import {
  Brain,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  Dumbbell,
  Salad,
} from "lucide-react";



const features = [

  {
    title: "پیشنهاد مکمل",
    icon: Dumbbell,
  },

  {
    title: "برنامه تغذیه",
    icon: Salad,
  },

  {
    title: "تحلیل هوشمند",
    icon: ShieldCheck,
  },

];



export default function AiAssistantCard() {


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
        gap-4
        mb-6
        "
      >


        <div
          className="
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-br
          from-yellow-500
          to-orange-500
          flex
          items-center
          justify-center
          "
        >

          <Brain
            size={30}
            className="text-black"
          />

        </div>



        <div>

          <div
            className="
            flex
            items-center
            gap-2
            "
          >

            <h2
              className="
              text-xl
              font-bold
              text-yellow-400
              "
            >
              هوش مصنوعی المپیا
            </h2>


            <span
              className="
              text-[10px]
              bg-green-500/20
              text-green-400
              px-2
              py-1
              rounded-full
              "
            >
              فعال
            </span>


          </div>


          <p
            className="
            text-gray-500
            text-xs
            mt-2
            "
          >
            دستیار تخصصی مکمل و بدنسازی
          </p>


        </div>


      </div>





      <div
        className="
        bg-[#171717]
        border
        border-zinc-800
        rounded-xl
        p-4
        mb-5
        "
      >

        <div
          className="
          flex
          items-center
          gap-2
          mb-3
          "
        >

          <Sparkles
            size={18}
            className="text-yellow-400"
          />


          <h3
            className="
            text-white
            font-bold
            text-sm
            "
          >
            قابلیت‌های دستیار
          </h3>


        </div>



        <div
          className="
          space-y-3
          "
        >

          {features.map((item)=>{

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="
                flex
                items-center
                gap-3
                text-gray-400
                text-sm
                "
              >

                <Icon
                  size={17}
                  className="text-yellow-400"
                />


                <span>
                  {item.title}
                </span>


              </div>

            );

          })}


        </div>


      </div>





      <Link
        href="/ai"
        className="
        w-full
        py-3
        rounded-xl
        bg-yellow-500
        text-black
        font-bold
        flex
        items-center
        justify-center
        gap-2
        hover:bg-yellow-400
        transition
        "
      >

        ورود به دستیار هوشمند

        <ArrowLeft size={18}/>

      </Link>



    </div>

  );

}