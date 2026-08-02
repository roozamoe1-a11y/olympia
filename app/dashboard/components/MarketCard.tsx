"use client";

import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  DollarSign,
  Coins,
  Bitcoin,
  Fuel,
} from "lucide-react";


type MarketItem = {
  title: string;
  value: string;
  change: number;
  icon: any;
};



const markets: MarketItem[] = [

  {
    title: "دلار",
    value: "در حال دریافت",
    change: 0,
    icon: DollarSign,
  },

  {
    title: "طلا",
    value: "در حال دریافت",
    change: 0,
    icon: Coins,
  },


  {
    title: "نفت",
    value: "در حال دریافت",
    change: 0,
    icon: Fuel,
  },


  {
    title: "ارز دیجیتال",
    value: "در حال دریافت",
    change: 0,
    icon: Bitcoin,
  },

];



export default function MarketCard() {


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

          <BarChart3
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
            بازارهای مالی
          </h2>


          <p
            className="
            text-xs
            text-gray-500
            mt-1
            "
          >
            خلاصه وضعیت بازار
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


        {markets.map((item)=>{


          const Icon = item.icon;


          return (

            <div
              key={item.title}
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
                items-center
                justify-between
                mb-4
                "
              >

                <div
                  className="
                  w-9
                  h-9
                  rounded-lg
                  bg-yellow-500/10
                  flex
                  items-center
                  justify-center
                  "
                >

                  <Icon
                    size={20}
                    className="text-yellow-400"
                  />

                </div>



                {item.change >= 0 ? (

                  <TrendingUp
                    size={18}
                    className="text-green-400"
                  />

                ) : (

                  <TrendingDown
                    size={18}
                    className="text-red-400"
                  />

                )}


              </div>



              <h3
                className="
                text-gray-400
                text-xs
                "
              >
                {item.title}
              </h3>



              <p
                className="
                text-white
                font-bold
                mt-2
                text-sm
                "
              >
                {item.value}
              </p>



              <span
                className={`
                text-xs
                mt-2
                block
                ${
                  item.change >= 0
                  ? "text-green-400"
                  : "text-red-400"
                }
                `}
              >

                {item.change === 0
                  ? "آنلاین"
                  : `${item.change}%`
                }

              </span>


            </div>

          );

        })}


      </div>



    </div>

  );

}