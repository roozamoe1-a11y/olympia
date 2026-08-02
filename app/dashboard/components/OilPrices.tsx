"use client";

import { useEffect, useState } from "react";
import {
  Droplets,
  RefreshCw,
  TrendingUp,
  ExternalLink,
} from "lucide-react";


type Oil = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  unit: string;
};


export default function OilPrices() {

  const [oils, setOils] = useState<Oil[]>([]);
  const [loading, setLoading] = useState(true);


  async function loadOilPrices() {

    try {

      setLoading(true);


      // آماده اتصال API نفت
      const res = await fetch("/api/oil", {
        cache: "no-store",
      });


      const data = await res.json();


      if (!data.price) {
        throw new Error("Invalid Oil API");
      }


      setOils([
        {
          id: 1,
          name: "نفت برنت",
          symbol: "BRENT",
          price: data.price,
          unit: "دلار",
        },
      ]);


    } catch (error) {

      console.error(
        "Oil Price Error:",
        error
      );


      // داده نمونه تا زمان اتصال API واقعی

      setOils([
        {
          id: 1,
          name: "نفت برنت",
          symbol: "BRENT",
          price: 78.45,
          unit: "دلار",
        },
        {
          id: 2,
          name: "نفت WTI",
          symbol: "WTI",
          price: 74.20,
          unit: "دلار",
        },
      ]);


    } finally {

      setLoading(false);

    }

  }



  useEffect(() => {

    loadOilPrices();

  }, []);



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

            <Droplets
              size={22}
              className="text-yellow-400"
            />

          </div>


          <div>

            <h2
              className="
              text-yellow-400
              font-bold
              text-xl
              "
            >
              قیمت نفت
            </h2>


            <p
              className="
              text-xs
              text-gray-500
              mt-1
              "
            >
              بروزرسانی بازار انرژی
            </p>


          </div>


        </div>



        <button

          onClick={loadOilPrices}

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


      </div>




      {loading ? (

        <div
          className="
          text-center
          py-8
          text-gray-500
          "
        >
          در حال دریافت قیمت نفت...
        </div>


      ) : (


        <div
          className="
          space-y-4
          "
        >


          {oils.map((item)=>(


            <div

              key={item.id}

              className="
              bg-[#171717]
              border
              border-zinc-800
              rounded-xl
              p-4
              flex
              justify-between
              items-center
              hover:border-yellow-500/30
              transition
              "

            >


              <div>


                <h3
                  className="
                  text-white
                  font-bold
                  "
                >

                  {item.name}

                </h3><span
                  className="
                  text-xs
                  text-gray-500
                  "
                >

                  {item.symbol}

                </span>


              </div>



              <div
                className="
                text-left
                "
              >


                <p
                  className="
                  text-yellow-400
                  font-bold
                  "
                >

                  {item.price.toLocaleString()}
                  {" "}
                  {item.unit}

                </p>



                <div
                  className="
                  flex
                  items-center
                  justify-end
                  gap-1
                  mt-1
                  text-green-400
                  "
                >

                  <TrendingUp
                    size={14}
                  />


                  <span
                    className="
                    text-xs
                    "
                  >
                    آنلاین
                  </span>


                </div>


              </div>



            </div>


          ))}


        </div>


      )}




      <a

        href="https://www.tgju.org/energy"

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

        مشاهده قیمت لحظه‌ای انرژی

        <ExternalLink size={17}/>

      </a>



    </div>

  );

}