"use client";

import { useEffect, useState } from "react";

export default function MarketNews() {
  const [news, setNews] = useState<any[]>([]);

  async function loadNews() {
    try {
      const res = await fetch("/market/api/news", {
        cache: "no-store",
      });

      if (!res.ok) return;

      const data = await res.json();

      setNews(data.articles || []);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    loadNews();

    const interval = setInterval(loadNews, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">
        اخبار اقتصادی
      </h2>

      <div className="space-y-4">
        {news.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            className="block rounded-xl border border-zinc-800 bg-zinc-900 p-4 hover:border-yellow-400 transition"
          >
            <h3 className="font-bold">{item.title}</h3>

            <p className="mt-2 text-sm text-gray-400">
              {item.source?.name}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              {new Date(item.publishedAt).toLocaleString()}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}