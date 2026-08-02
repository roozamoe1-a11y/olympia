"use client";

import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  link: string;
  date: string;
  source: string;
};

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/news/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // برای تست

        setNews(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white p-8">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8">
        اخبار ایران
      </h1>

      {loading && (
        <p className="text-gray-400">در حال دریافت اخبار...</p>
      )}

      {!loading && news.length === 0 && (
        <p className="text-red-400">
          هیچ خبری دریافت نشد.
        </p>
      )}

      {!loading &&
        news.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-5 hover:border-yellow-500 transition"
          >
            <h2 className="text-xl font-bold mb-3">
              {item.title}
            </h2>

            <div className="text-gray-400 text-sm mb-2">
              {item.date}
            </div>

            <div className="text-yellow-400">
              {item.source}
            </div>
          </a>
        ))}
    </div>
  );
}