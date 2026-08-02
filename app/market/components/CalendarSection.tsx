"use client";

import { useEffect, useState } from "react";

type Event = {
  title: string;
  country: string;
  date: string;
  time: string;
  impact: string;
  forecast: string;
  previous: string;
  actual: string;
};

export default function CalendarSection() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCalendar = async () => {
    try {
      const res = await fetch("/api/market/calendar", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();

      if (Array.isArray(data)) {
        setEvents(data);
      } else {
        console.warn("Calendar API returned invalid data:", data);
      }
    } catch (err) {
      console.error(err);
      // اطلاعات قبلی پاک نمی‌شوند
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCalendar();

    // هر ۵ دقیقه دوباره امتحان کن
    const interval = setInterval(loadCalendar, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rounded-2xl bg-zinc-900 p-6">
      <h2 className="text-orange-400 text-2xl font-bold mb-6">
        تقویم اقتصادی
      </h2>

      {loading && (
        <p className="text-gray-400">
          در حال دریافت اطلاعات...
        </p>
      )}

      {!loading && events.length === 0 && (
        <div className="rounded-xl border border-yellow-600 bg-yellow-900/20 p-4">
          <p className="text-yellow-300">
            سرور تقویم اقتصادی موقتاً در دسترس نیست.
          </p>

          <button
            onClick={loadCalendar}
            className="mt-3 rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            تلاش مجدد
          </button>
        </div>
      )}

      {events.length > 0 &&
        events.slice(0, 15).map((item, index) => (
          <div
            key={index}
            className="mb-4 rounded-xl border border-zinc-700 p-4"
          >
            <h3 className="text-white font-bold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-1">
              {item.country} | {item.date} | {item.time}
            </p>

            <p className="mt-2">
              اهمیت:
              <span className="text-orange-400">
                {" "}
                {item.impact}
              </span>
            </p>

            <p>پیش‌بینی: {item.forecast || "-"}</p>
            <p>قبلی: {item.previous || "-"}</p>
            <p>واقعی: {item.actual || "-"}</p>
          </div>
        ))}
    </div>
  );
}