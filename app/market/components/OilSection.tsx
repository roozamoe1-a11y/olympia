"use client";

import { useEffect, useState } from "react";
import MarketCard from "./MarketCard";

export default function OilSection() {
  const [oil, setOil] = useState<any[]>([]);

  async function loadOil() {
    try {
      const res = await fetch("/market/api/oil", {
        cache: "no-store",
      });

      if (!res.ok) return;

      const data = await res.json();

      setOil([
        {
          name: "Brent Crude",
          symbol: "BRENT",
          price: `$${Number(data.brent).toFixed(2)}`,
          change: "--",
          positive: true,
        },
        {
          name: "WTI Crude",
          symbol: "WTI",
          price: `$${Number(data.wti).toFixed(2)}`,
          change: "--",
          positive: true,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    loadOil();

    const interval = setInterval(loadOil, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        نفت
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {oil.map((item) => (
          <MarketCard key={item.symbol} {...item} />
        ))}
      </div>
    </section>
  );
}