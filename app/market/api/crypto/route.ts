import { NextResponse } from "next/server";


export async function GET() {
  try {


    // API رمزینکس را اینجا قرار می‌دهیم
    // بعد از دریافت endpoint رسمی فقط این قسمت تغییر می‌کند

    const res = await fetch(
      "https://api.ramzinex.com/v1/markets",
      {
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );


    if (!res.ok) {
      throw new Error("Ramzinex API Error");
    }


    const data = await res.json();


    const markets =
      data.result?.markets || {};



    const coins = [

      {
        id: 1,
        name: "بیت کوین",
        symbol: "BTC",
        price:
          markets.BTC?.last_price ||
          markets.BTCTMN?.stats?.lastPrice ||
          0,
      },


      {
        id: 2,
        name: "اتریوم",
        symbol: "ETH",
        price:
          markets.ETH?.last_price ||
          markets.ETHTMN?.stats?.lastPrice ||
          0,
      },


      {
        id: 3,
        name: "تتر",
        symbol: "USDT",
        price:
          markets.USDT?.last_price ||
          markets.USDTTMN?.stats?.lastPrice ||
          0,
      },


      {
        id: 4,
        name: "سولانا",
        symbol: "SOL",
        price:
          markets.SOL?.last_price ||
          markets.SOLTMN?.stats?.lastPrice ||
          0,
      },


    ];



    return NextResponse.json(

      {

        exchange: {

          name: "رمزینکس",

          url:
          "https://ramzinex.com/app/login?ref-code=661970",

        },


        coins,

      },


      {

        headers: {

          "Cache-Control":
          "no-store",

        },

      }

    );



  } catch (error) {


    console.error(
      "Ramzinex Crypto Error:",
      error
    );



    return NextResponse.json(

      {

        error:
        "Crypto API Error",

        exchange: {

          name:
          "رمزینکس",

          url:
          "https://ramzinex.com/app/login?ref-code=661970",

        },

        coins: [],

      },


      {

        status: 500,

      }

    );

  }
}