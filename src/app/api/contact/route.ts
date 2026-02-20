import { NextResponse } from "next/server";

type Payload = {
  name: string;
  email: string;
  company?: string;
  details: string;
};

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = "hello@okkralabs.com";
const FROM_EMAIL = "Okkralabs Contact <contact@okkralabs.com>";

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<Payload>;

  if (!body.name || !body.email || !body.details) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Server configuration error." },
      { status: 500 }
    );
  }

  const subject = body.company
    ? `New inquiry from ${body.name} (${body.company})`
    : `New inquiry from ${body.name}`;

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px;">
      <h2 style="margin-bottom: 24px;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; width: 120px; color: #666;">Name</td>
          <td style="padding: 8px 12px;">${body.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; color: #666;">Email</td>
          <td style="padding: 8px 12px;"><a href="mailto:${body.email}">${body.email}</a></td>
        </tr>
        ${body.company ? `
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; color: #666;">Company</td>
          <td style="padding: 8px 12px;">${body.company}</td>
        </tr>
        ` : ""}
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; vertical-align: top; color: #666;">Project</td>
          <td style="padding: 8px 12px; white-space: pre-wrap;">${body.details}</td>
        </tr>
      </table>
      <hr style="margin: 24px 0; border: none; border-top: 1px solid #eee;" />
      <p style="font-size: 13px; color: #999;">
        Sent from the Okkralabs contact form. Reply directly to respond to ${body.name}.
      </p>
    </div>
  `.trim();

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: body.email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      console.error("Resend error:", err);
      return NextResponse.json(
        { ok: false, error: "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to send message." },
      { status: 500 }
    );
  }
}
