import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  company?: string;
  details: string;
};

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<Payload>;

  // Minimal validation (no external services / env vars required)
  if (!body.name || !body.email || !body.details) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  // In production: send via Resend/SendGrid/Postmark + store in DB/CRM.
  // For now, just acknowledge receipt.
  return NextResponse.json({ ok: true });
}
