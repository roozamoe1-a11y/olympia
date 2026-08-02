"use client";

import { useEffect, useState } from "react";
import MarketCard from "./MarketCard";

export default function CryptoSection() {
  const [cryptos, setCryptos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadPrices() {
    try {
      const res = await fetch("/api/market", {
        cache: "no-store",
      });

      if (!res.ok) return;

      const data = await res.json();

      if (Array.isArray(data) && data.length > 0) {
        setCryptos(data);
      }
    } catch (err) {
      console.error("Crypto API Error:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadPrices();

    const interval = setInterval(loadPrices, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-yellow-400">
          ارزهای دیجیتال
        </h2>

        <p className="mt-2 text-gray-400">
          قیمت لحظه‌ای محبوب‌ترین ارزهای دیجیتال
        </p>
      </div>

      {loading && cryptos.length === 0 ? (
        <p className="text-gray-400">در حال دریافت قیمت‌ها...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {cryptos.map((coin: any) => (
            <MarketCard
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol.toUpperCase()}
              price={`$${Number(coin.current_price).toLocaleString()}`}
              change={`${Number(
                coin.price_change_percentage_24h
              ).toFixed(2)}%`}
              positive={coin.price_change_percentage_24h >= 0}
            />
          ))}
        </div>
      )}
    </section>
  );
}