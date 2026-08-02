import { NextResponse } from "next/server";
import Parser from "rss-parser";

const parser = new Parser();

const feeds = [
  {
    name: "خبرگزاری مهر",
    url: "https://www.mehrnews.com/rss",
  },
  {
    name: "ایرنا",
    url: "https://www.irna.ir/rss",
  },
  {
    name: "ایسنا",
    url: "https://www.isna.ir/rss",
  },
];

export async function GET() {
  try {
    let articles: any[] = [];

    for (const feed of feeds) {
      try {
        const data = await parser.parseURL(feed.url);

        const items = (data.items || []).map((item: any) => ({
          title: item.title || "",
          link: item.link || "",
          date: item.pubDate || "",
          source: feed.name,
        }));

        articles.push(...items);
      } catch (err) {
        console.log(`RSS Error: ${feed.name}`);
      }
    }

    articles.sort(
      (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
    );

    return NextResponse.json(articles);
  } catch (err) {
    console.error(err);

    return NextResponse.json([]);
  }
}