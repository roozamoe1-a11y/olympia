"use client";

import { useEffect, useState } from "react";

type Coin = {
  symbol: string;
  price: string;
  change: number;
};

export default function LiveTicker() {
  const [coins, setCoins] = useState<Coin[]>([]);

  async function loadTicker() {
    try {
      const res = await fetch("/api/market", {
        cache: "no-store",
      });

      const data = await res.json();

      // اگر آرایه نبود، خارج شو
      if (!Array.isArray(data)) {
        console.log(data);
        return;
      }

      const ticker = data.map((coin: any) => ({
        symbol: coin.symbol.toUpperCase(),
        price: Number(coin.current_price).toLocaleString(),
        change: Number(coin.price_change_percentage_24h),
      }));

      setCoins(ticker);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadTicker();

    const interval = setInterval(loadTicker, 1000);

    return () => clearInterval(interval);
  }, []);

  if (coins.length === 0) return null;

  return (
    <div className="overflow-hidden border-y border-zinc-800 bg-black py-3">
      <div className="animate-ticker flex w-max">
        {[...coins, ...coins, ...coins].map((coin, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-8 whitespace-nowrap"
          >
            <span className="font-bold text-yellow-400">
              {coin.symbol}
            </span>

            <span>${coin.price}</span>

            <span
              className={
                coin.change >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {coin.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}