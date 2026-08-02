"use client";

import { useEffect, useState } from "react";
import {
  Bitcoin,
  TrendingUp,
  RefreshCw,
  ExternalLink,
} from "lucide-react";


type Coin = {
  id: number;
  name: string;
  symbol: string;
  price: number;
};


type CryptoResponse = {
  exchange: {
    name: string;
    url: string;
  };

  coins: Coin[];
};


export default function CryptoPrices() {


  const [coins, setCoins] = useState<Coin[]>([]);
  const [exchangeUrl, setExchangeUrl] = useState("");
  const [loading, setLoading] = useState(true);



  async function loadCrypto() {

    try {

      setLoading(true);


      const res = await fetch(
        "/api/crypto",
        {
          cache: "no-store",
        }
      );


      const data: CryptoResponse =
        await res.json();



      if (!data.coins) {
        throw new Error(
          "Invalid Crypto Data"
        );
      }



      setCoins(data.coins);


      setExchangeUrl(
        data.exchange.url
      );


    } catch (error) {

      console.error(
        "Crypto Load Error:",
        error
      );


      setCoins([]);


    } finally {

      setLoading(false);

    }

  }



  useEffect(() => {

    loadCrypto();

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



      {/* Header */}

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

            <Bitcoin
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
              ارزهای دیجیتال
            </h2>


            <p
              className="
              text-xs
              text-gray-500
              mt-1
              "
            >
              قیمت لحظه‌ای رمزارزها
            </p>


          </div>


        </div>




        <button
          onClick={loadCrypto}
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
            className="
            text-yellow-400
            "
          />

        </button>



      </div>





      {loading ? (


        <div
          className="
          text-center
          py-10
          text-gray-500
          "
        >
          در حال دریافت قیمت رمزارزها...
        </div>



      ) : coins.length === 0 ? (


        <div
          className="
          text-center
          py-10
          text-red-400
          "
        >
          دریافت اطلاعات رمزارز امکان‌پذیر نیست.
        </div>



      ) : (



        <div
          className="
          space-y-4
          "
        >


          {coins.map((coin)=>(


            <div
              key={coin.id}
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
                  {coin.name}
                </h3><span
                  className="
                  text-xs
                  text-gray-500
                  "
                >
                  {coin.symbol}
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

                  {Math.round(
                    coin.price
                  ).toLocaleString()}
                  
                  {" "}
                  تومان

                </p>



                <div
                  className="
                  flex
                  items-center
                  justify-end
                  gap-1
                  mt-2
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






      {/* لینک رمزینکس با رفرال */}


      {exchangeUrl && (


        <a
          href={exchangeUrl}
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
          bg-yellow-500
          text-black
          font-bold
          hover:bg-yellow-400
          transition
          "
        >

          <ExternalLink
            size={18}
          />


          ورود به رمزینکس و خرید رمزارز


        </a>


      )}



    </div>

  );

}