const nodemailer = require("nodemailer");

exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed." }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid request body." }),
    };
  }

  const { name, email, phone, service, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Name, email, and message are required." }),
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Please provide a valid email address." }),
    };
  }

  if (message.trim().length < 20) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Message must be at least 20 characters." }),
    };
  }

  try {
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

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send message. Please try again later." }),
    };
  }
};
