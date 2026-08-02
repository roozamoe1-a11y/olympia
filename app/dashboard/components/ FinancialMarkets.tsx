"use client";

import Link from "next/link";

import {
  LineChart,
  DollarSign,
  Coins,
  Bitcoin,
  Fuel,
  ArrowLeft,
  TrendingUp,
} from "lucide-react";


const markets = [
  {
    title: "ارزها",
    description: "دلار، یورو و ارزهای مهم",
    value: "API فعال",
    icon: DollarSign,
  },

  {
    title: "طلا",
    description: "قیمت طلای جهانی و داخلی",
    value: "API فعال",
    icon: Coins,
  },

  {
    title: "ارز دیجیتال",
    description: "بیت کوین، اتریوم و تتر",
    value: "رمزینکس",
    icon: Bitcoin,
  },

  {
    title: "نفت",
    description: "قیمت جهانی نفت",
    value: "بررسی بازار",
    icon: Fuel,
  },
];


export default function FinancialMarkets() {

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

          <LineChart
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
            بازارهای مالی
          </h2>


          <p
            className="
            text-xs
            text-gray-500
            mt-1
            "
          >
            قیمت‌های لحظه‌ای و تحلیل بازار
          </p>

        </div>

      </div>



      <div
        className="
        grid
        grid-cols-2
        gap-4
        "
      >

        {markets.map((market) => {

          const Icon = market.icon;


          return (

            <div
              key={market.title}
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
                w-10
                h-10
                rounded-xl
                bg-yellow-500/10
                flex
                items-center
                justify-center
                mb-3
                "
              >

                <Icon
                  size={21}
                  className="text-yellow-400"
                />

              </div>


              <h3
                className="
                text-white
                text-sm
                font-bold
                "
              >
                {market.title}
              </h3>


              <p
                className="
                text-gray-500
                text-xs
                mt-2
                "
              >
                {market.description}
              </p>


              <div
                className="
                flex
                items-center
                gap-1
                mt-3
                text-green-400
                text-xs
                "
              >

                <TrendingUp size={14} />

                {market.value}

              </div>


            </div>

          );

        })}

      </div>



      <Link
        href="/market"
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

        مشاهده کامل بازارها

        <ArrowLeft size={18} />

      </Link>


    </div>

  );

}