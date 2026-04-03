import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name, email, phone, service, message } = body as Record<string, string>;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (message.trim().length < 20) {
      return NextResponse.json(
        { error: "Message must be at least 20 characters." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"ResearchBuddhi Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "New Contact Form Submission – ResearchBuddhi",
      text: [
        "New enquiry received via ResearchBuddhi contact form.",
        "",
        `Name:    ${name.trim()}`,
        `Email:   ${email.trim()}`,
        `Phone:   ${phone?.trim() || "Not provided"}`,
        `Service: ${service?.trim() || "Not specified"}`,
        "",
        "Message:",
        message.trim(),
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#1E3A8A;border-bottom:2px solid #1E3A8A;padding-bottom:8px">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse;margin:16px 0">
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f0f4ff;width:30%">Name</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f0f4ff">Email</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb">${email.trim()}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f0f4ff">Phone</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb">${phone?.trim() || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;background:#f0f4ff">Service</td>
              <td style="padding:8px 12px;border-bottom:1px solid #e5e7eb">${service?.trim() || "Not specified"}</td>
            </tr>
          </table>
          <h3 style="color:#374151">Message:</h3>
          <div style="background:#f9fafb;padding:16px;border-radius:8px;border-left:4px solid #1E3A8A;white-space:pre-wrap">${message.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
          <p style="color:#9ca3af;font-size:12px;margin-top:24px">
            Sent from ResearchBuddhi contact form
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
