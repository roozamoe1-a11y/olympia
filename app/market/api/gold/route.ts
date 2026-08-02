import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.gold-api.com/price/XAU",
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Gold API Error" },
      { status: 500 }
    );
  }
}