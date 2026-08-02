"use client";

import { useEffect, useState } from "react";
import {
  Coins,
  TrendingUp,
  RefreshCw,
} from "lucide-react";


type GoldItem = {
  id: number;
  name: string;
  price: number;
  unit: string;
};


export default function GoldPrices() {

  const [goldPrices, setGoldPrices] = useState<GoldItem[]>([]);
  const [loading, setLoading] = useState(true);


  async function loadGoldPrices() {

    try {

      setLoading(true);


      const res = await fetch("/api/gold", {
        cache: "no-store",
      });


      const data = await res.json();


      if (!data.gold) {
        throw new Error("Invalid Gold API");
      }


      setGoldPrices(data.gold);


    } catch (error) {

      console.error(
        "Gold API Error:",
        error
      );

      setGoldPrices([]);


    } finally {

      setLoading(false);

    }

  }



  useEffect(() => {

    loadGoldPrices();

  }, []);



  return (

    <div className="
      bg-[#101010]
      border
      border-zinc-800
      rounded-2xl
      p-6
      hover:border-yellow-500/40
      transition-all
    ">


      <div className="
        flex
        items-center
        justify-between
        mb-6
      ">


        <div className="
          flex
          items-center
          gap-3
        ">


          <div className="
            w-11
            h-11
            rounded-xl
            bg-yellow-500/10
            flex
            items-center
            justify-center
          ">

            <Coins
              className="text-yellow-400"
              size={24}
            />

          </div>



          <div>

            <h2 className="
              text-xl
              font-bold
              text-yellow-400
            ">
              قیمت طلا
            </h2>


            <p className="
              text-xs
              text-gray-500
              mt-1
            ">
              بروزرسانی لحظه‌ای بازار
            </p>


          </div>


        </div>



        <button

          onClick={loadGoldPrices}

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
            className="text-yellow-400"
          />

        </button>


      </div>{loading ? (

        <div className="
          text-center
          py-8
          text-gray-500
        ">
          در حال دریافت قیمت طلا...
        </div>


      ) : goldPrices.length === 0 ? (

        <div className="
          text-center
          py-8
          text-red-400
        ">
          دریافت قیمت طلا امکان‌پذیر نیست.
        </div>


      ) : (


        <div className="
          space-y-4
        ">


          {goldPrices.map((item) => (


            <div

              key={item.id}

              className="
                bg-[#171717]
                border
                border-zinc-800
                rounded-xl
                p-4
                flex
                items-center
                justify-between
                hover:border-yellow-500/30
                transition
              "

            >


              <div>


                <h3 className="
                  text-white
                  font-bold
                  text-sm
                ">
                  {item.name}
                </h3>


                <span className="
                  text-xs
                  text-gray-500
                ">
                  {item.unit}
                </span>


              </div>



              <div className="
                text-left
              ">


                <p className="
                  text-yellow-400
                  font-bold
                ">

                  {item.price.toLocaleString()}

                  <span className="
                    text-xs
                    text-gray-400
                    mr-1
                  ">
                    تومان
                  </span>

                </p>



                <div className="
                  flex
                  items-center
                  justify-end
                  gap-1
                  mt-1
                  text-green-400
                ">

                  <TrendingUp size={14} />

                  <span className="
                    text-xs
                  ">
                    آنلاین
                  </span>


                </div>


              </div>


            </div>


          ))}


        </div>


      )}



      <a

        href="https://www.tgju.org"

        target="_blank"

        rel="noopener noreferrer"

        className="
          block
          w-full
          mt-6
          py-3
          rounded-xl
          border
          border-yellow-500
          text-center
          text-yellow-400
          font-bold
          hover:bg-yellow-500
          hover:text-black
          transition
        "

      >

        مشاهده قیمت کامل طلا و سکه

      </a>



    </div>

  );

}