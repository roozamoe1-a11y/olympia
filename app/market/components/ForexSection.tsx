"use client";

import { useEffect, useState } from "react";
import MarketCard from "./MarketCard";

export default function ForexSection() {
  const [forex, setForex] = useState<any[]>([]);

  async function loadForex() {
    try {
      const res = await fetch("/market/api/forex", {
        cache: "no-store",
      });

      if (!res.ok) return;

      const data = await res.json();

      const r = data.rates;

      setForex([
        {
          name: "EUR / USD",
          symbol: "EURUSD",
          price: (1 / r.EUR).toFixed(5),
          change: "--",
          positive: true,
        },
        {
          name: "GBP / USD",
          symbol: "GBPUSD",
          price: (1 / r.GBP).toFixed(5),
          change: "--",
          positive: true,
        },
        {
          name: "USD / JPY",
          symbol: "USDJPY",
          price: r.JPY.toFixed(3),
          change: "--",
          positive: true,
        },
        {
          name: "USD / CHF",
          symbol: "USDCHF",
          price: r.CHF.toFixed(5),
          change: "--",
          positive: true,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadForex();

    const interval = setInterval(loadForex, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        بازار فارکس
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {forex.map((item) => (
          <MarketCard key={item.symbol} {...item} />
        ))}
      </div>
    </section>
  );
}