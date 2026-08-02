import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    console.log("ACCOUNT:", process.env.CLOUDFLARE_ACCOUNT_ID);
    console.log("TOKEN:", process.env.CLOUDFLARE_API_TOKEN?.slice(0, 10));
    console.log(process.env);
    console.log(process.env);
    console.log("ACCOUNT:", process.env.CLOUDFLARE_ACCOUNT_ID);
    console.log("TOKEN:", process.env.CLOUDFLARE_API_TOKEN?.slice(0,10));
    
    
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.CLOUDFLARE_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            {
              role: "system",
              content: "همیشه به زبان فارسی پاسخ بده.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("STATUS:", response.status);
    console.log("DATA:", data);

    if (!response.ok) {
      return NextResponse.json(
        { reply: JSON.stringify(data) },
        { status: response.status }
      );
    }

    return NextResponse.json({
      reply: data.result.response,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { reply: "خطا در ارتباط با Cloudflare AI" },
      { status: 500 }
    );
  }
}