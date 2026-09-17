import { NextResponse } from "next/server";

const SHEET_WEBHOOK_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const formattedPayload = {
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      name: body.name || "",
      phone: body.phone || "",
      email: body.email || "",
      city: body.city || "",
      services: Array.isArray(body.services) ? body.services.join(", ") : (body.services || ""),
      electricityProvider: body.electricityProvider || "",
      gasProvider: body.gasProvider || "",
    };

    if (!SHEET_WEBHOOK_URL) {
      console.warn("GOOGLE_SHEET_WEBHOOK_URL environment variable is not configured. Logged locally:", formattedPayload);
      return NextResponse.json({ ok: true, logged: false, message: "Webhook URL missing" });
    }

    // Google Apps Script expects text/plain or JSON to handle CORS without preflight issues
    const response = await fetch(SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(formattedPayload),
      redirect: "follow",
    });

    if (!response.ok) {
      console.error("Google Sheet webhook returned non-200 status:", response.status);
      return NextResponse.json({ ok: true, logged: false, status: response.status });
    }

    return NextResponse.json({ ok: true, logged: true });
  } catch (error) {
    console.error("Failed to log booking to sheet:", error);
    return NextResponse.json({ ok: true, logged: false, error: (error as Error).message });
  }
}

