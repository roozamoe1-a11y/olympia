import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

let cachedEvents: any[] = [];
let lastUpdate = 0;

const CACHE_TIME = 1000 * 60 * 30; // 30 دقیقه

async function loadForexFactory() {
  const res = await fetch(
    "https://nfs.faireconomy.media/ff_calendar_thisweek.xml",
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("ForexFactory Error");

  const xml = await res.text();

  const json = await parseStringPromise(xml);

  return (json.weeklyevents?.event ?? []).map((item: any) => ({
    title: item.title?.[0] ?? "",
    country: item.country?.[0] ?? "",
    date: item.date?.[0] ?? "",
    time: item.time?.[0] ?? "",
    impact: item.impact?.[0] ?? "",
    forecast: item.forecast?.[0] ?? "-",
    previous: item.previous?.[0] ?? "-",
    actual: item.actual?.[0] ?? "-",
    url: item.url?.[0] ?? "",
  }));
}

export async function GET() {
  try {
    if (
      cachedEvents.length > 0 &&
      Date.now() - lastUpdate < CACHE_TIME
    ) {
      return NextResponse.json(cachedEvents);
    }

    const events = await loadForexFactory();

    cachedEvents = events;
    lastUpdate = Date.now();

    return NextResponse.json(events);
  } catch (err) {
    console.error(err);

    if (cachedEvents.length > 0) {
      console.log("Using cached calendar");

      return NextResponse.json(cachedEvents);
    }

    return NextResponse.json([]);
  }
}