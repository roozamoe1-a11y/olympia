"use client";

import { useEffect, useState } from "react";
import {
  DollarSign,
  TrendingUp,
  RefreshCw,
  CalendarDays,
} from "lucide-react";

type Currency = {
  id: number;
  name: string;
  symbol: string;
  price: number;
};

export default function CurrencyPrices() {
  const [currencies, setCurrencies] = useState<Currency[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadCurrencies() {
    try {
      setLoading(true);

      const res = await fetch("/api/currency", {
        cache: "no-store",
      });

      const data = await res.json();

      if (!data.rates) {
        throw new Error("Invalid API");
      }

      const rates = data.rates;

      setCurrencies([
        {
          id: 1,
          name: "دلار آمریکا",
          symbol: "USD",
          price: rates.IRR,
        },
        {
          id: 2,
          name: "یورو",
          symbol: "EUR",
          price: rates.IRR / rates.EUR,
        },
        {
          id: 3,
          name: "درهم",
          symbol: "AED",
          price: rates.IRR / rates.AED,
        },
      ]);
    } catch (err) {
      console.error("Currency Error:", err);
      setCurrencies([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCurrencies();
  }, []);

  return (
    <div className="bg-[#101010] border border-zinc-800 rounded-2xl p-6 hover:border-yellow-500/40 transition-all">

      <div className="flex items-center justify-between mb-6">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-yellow-500/10 flex items-center justify-center">
            <DollarSign
              className="text-yellow-400"
              size={22}
            />
          </div>

          <div>
            <h2 className="text-yellow-400 font-bold text-xl">
              قیمت ارزها
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              بروزرسانی لحظه‌ای
            </p>
          </div>

        </div>

        <button
          onClick={loadCurrencies}
          className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center hover:border-yellow-400 transition"
        >
          <RefreshCw
            size={18}
            className="text-yellow-400"
          />
        </button>

      </div>{loading ? (
        <div className="text-center py-8 text-gray-500">
          در حال دریافت قیمت ارز...
        </div>
      ) : currencies.length === 0 ? (
        <div className="text-center py-8 text-red-400">
          دریافت اطلاعات امکان‌پذیر نیست.
        </div>
      ) : (
        <div className="space-y-4">

          {currencies.map((item) => (

            <div
              key={item.id}
              className="bg-[#171717] border border-zinc-800 rounded-xl p-4 flex justify-between items-center hover:border-yellow-500/30 transition"
            >

              <div>

                <h3 className="text-white font-bold">
                  {item.name}
                </h3>

                <span className="text-xs text-gray-500">
                  {item.symbol}
                </span>

              </div>

              <div className="text-left">

                <p className="text-yellow-400 font-bold">
                  {Math.round(item.price).toLocaleString()} ریال
                </p>

                <div className="flex items-center justify-end gap-1 mt-1 text-green-400">

                  <TrendingUp size={14} />

                  <span className="text-xs">
                    آنلاین
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

      {/* دکمه تقویم اقتصادی */}

      <a
        href="https://nfs.faireconomy.media/ff_calendar_thisweek.xml"
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
        <CalendarDays size={18} />
        مشاهده تقویم اقتصادی
      </a>

    </div>
  );
}