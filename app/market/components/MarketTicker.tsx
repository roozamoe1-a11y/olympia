"use client";

import { useEffect, useState } from "react";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,solana,ripple,dogecoin";

export default function MarketTicker() {
  const [coins, setCoins] = useState<any[]>([]);

  async function loadData() {
    try {
      const res = await fetch(API, {
        cache: "no-store",
      });

      const data = await res.json();

      setCoins((oldCoins) => {
        if (oldCoins.length === 0) return data;

        return oldCoins.map((old) => {
          const fresh = data.find((c: any) => c.id === old.id);

          return fresh
            ? {
                ...old,
                current_price: fresh.current_price,
                price_change_percentage_24h:
                  fresh.price_change_percentage_24h,
              }
            : old;
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadData();

    const interval = setInterval(loadData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden border-y border-zinc-800 bg-black py-3">
      <div className="flex w-max animate-ticker">
        {[...coins, ...coins].map((coin, index) => (
          <div
            key={`${coin.id}-${index}`}
            className="flex items-center gap-2 px-6"
          >
            <span className="font-bold text-yellow-400">
              {coin.symbol?.toUpperCase()}
            </span>

            <span className="text-white">
              ${coin.current_price?.toLocaleString()}
            </span>

            <span
              className={
                coin.price_change_percentage_24h >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {coin.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}