import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://open.er-api.com/v6/latest/USD",
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
  } catch {
    return NextResponse.json(
      { error: "Forex API Error" },
      { status: 500 }
    );
  }
}