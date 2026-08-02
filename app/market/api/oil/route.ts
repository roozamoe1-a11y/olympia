import { NextResponse } from "next/server";

export async function GET() {
  try {
    // فعلاً از قیمت‌های نمونه استفاده می‌کنیم
    // بعداً با API حرفه‌ای جایگزین می‌کنیم.

    return NextResponse.json({
      brent: 69.82,
      wti: 67.14,
    });
  } catch {
    return NextResponse.json(
      { error: "Oil API Error" },
      { status: 500 }
    );
  }
}