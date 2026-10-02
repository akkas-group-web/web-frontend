import { NextRequest, NextResponse } from "next/server";

// Backend adresini istemciye sızdırmamak ve CORS ile uğraşmamak için proxy.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { success: false, error: "Geçersiz istek." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(
      `${process.env.NEWSLETTER_API_URL}/api/newsletter/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Forwarded-For": request.headers.get("x-forwarded-for") ?? "",
          "User-Agent": request.headers.get("user-agent") ?? "",
        },
        body: JSON.stringify(body),
        cache: "no-store",
      },
    );

    const data = await response.json().catch(() => ({
      success: false,
      error: "Beklenmeyen bir hata oluştu.",
    }));

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error("[Newsletter proxy]", error);
    return NextResponse.json(
      { success: false, error: "Servise şu anda ulaşılamıyor." },
      { status: 502 },
    );
  }
}
