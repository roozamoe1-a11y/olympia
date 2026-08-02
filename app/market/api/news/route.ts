import { NextResponse } from "next/server";

async function translate(text: string) {
  if (!text) return "";

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content:
                "تو مترجم حرفه‌ای اخبار اقتصادی هستی. متن انگلیسی را روان، دقیق و کاملاً فارسی ترجمه کن. فقط ترجمه را برگردان و هیچ توضیح اضافه‌ای ننویس.",
            },
            {
              role: "user",
              content: text,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Cloudflare Translate Error:", data);
      return text;
    }

    return data.result?.response || text;
  } catch (error) {
    console.error("Translate Error:", error);
    return text;
  }
}

export async function GET() {
  try {
    const res = await fetch(
      `https://gnews.io/api/v4/search?q=gold OR forex OR bitcoin&lang=en&max=10&apikey=${process.env.GNEWS_API_KEY}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!data.articles) {
      return NextResponse.json({ articles: [] });
    }

    const articles = await Promise.all(
      data.articles.map(async (item: any) => ({
        ...item,
        title: await translate(item.title),
        description: await translate(item.description || ""),
      }))
    );

    return NextResponse.json({ articles });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { articles: [] },
      { status: 500 }
    );
  }
}