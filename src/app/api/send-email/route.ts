import { NextResponse } from "next/server";
import { transporter } from "@/lib/email/transporter";
import { EmailData } from "@/types/email";

export async function POST(request: Request) {
  try {
    console.log("Route handler env check:", {
      userExists: !!process.env.EMAIL_USER,
      passwordExists: !!process.env.EMAIL_PASSWORD,
    });

    // console.log("Email configuration:", {
    //   user: process.env.EMAIL_USER,
    //   pass: "****", // tidak perlu log password asli
    // });

    const { name, subject, email, message }: EmailData = await request.json();

    // Validasi input
    if (!name || !subject || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const mailOptions = {
      from: {
        name: name,
        address: email,
      },
      replyTo: email,
      to: process.env.EMAIL_RECIPIENT,
      subject: `${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">New Recruitment Inquiry</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #34495e;">Default Recruitment Information:</h3>
            <ul style="list-style: none; padding: 0;">
              <li>🏢 Potential employment opportunity discussion</li>
              <li>📋 Interest in professional collaboration</li>
              <li>🤝 Exploring mutual career opportunities</li>
            </ul>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #34495e;">Detailed Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3498db;">
              ${message}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9em; color: #666;">
            <p>This email was sent via the contact form on Your Portfolio Website.</p>
            <p>Please reply to this email to continue the discussion.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
