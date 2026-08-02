"use client";

import { useEffect, useState } from "react";
import MarketCard from "./MarketCard";

export default function GoldSection() {
  const [golds, setGolds] = useState<any[]>([]);

  async function loadGold() {
    try {
      const res = await fetch("/market/api/gold", {
        cache: "no-store",
      });

      if (!res.ok) return;

      const data = await res.json();

      const change =
        data.change_percent ??
        data.change ??
        data.ch ??
        data.percent_change ??
        0;

      setGolds([
        {
          name: "طلای جهانی",
          symbol: "XAU/USD",
          price: `$${Number(data.price).toLocaleString()}`,
          change: "--",
          positive: true,
        },
        {
          name: "سکه امامی",
          symbol: "IR Coin",
          price: "92,000,000",
          change: "+1.20%",
          positive: true,
        },
        {
          name: "طلای ۱۸ عیار",
          symbol: "18K",
          price: "7,250,000",
          change: "-0.30%",
          positive: false,
        },
      ]);
    } catch (err) {
      console.error("Gold API Error:", err);
    }
  }

  useEffect(() => {
    loadGold();

    const interval = setInterval(loadGold, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        طلا و سکه
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {golds.map((item) => (
          <MarketCard key={item.symbol} {...item} />
        ))}
      </div>
    </section>
  );
}