import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { storage } from "@/lib/storage";
import { api } from "@shared/routes";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = api.messages.create.input.parse(body);

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, "");

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const savedMessage = await storage.createMessage(input);

    await transporter.sendMail({
      from: `"Sreenath Portfolio" <${emailUser}>`,
      to: emailUser,
      replyTo: input.email,
      subject: `New Portfolio Contact from ${input.name}`,
      text: [
        "New Contact Message",
        "",
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        "",
        "Message:",
        input.message,
      ].join("\n"),
      html: `
        <div style=" line-height: 1.6;">
          <h2 style="color:#0ea5e9;">New Portfolio Contact</h2>
          <p><strong>Name:</strong> ${input.name}</p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:${input.email}" style="color:#0ea5e9; text-decoration:none;">
              ${input.email}
            </a>
          </p>
          <hr />
          <p><strong>Message:</strong></p>
          <div style="background:#f3f4f6;padding:12px;border-radius:6px;">
            ${input.message}
          </div>
          <p style="font-size:12px;color:#6b7280;margin-top:10px;">
            Received At: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    return NextResponse.json(savedMessage, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: error.errors[0].message,
          field: error.errors[0].path.join("."),
        },
        { status: 400 },
      );
    }

    console.error("Contact route error:", error);
    return NextResponse.json(
      { message: "Failed to process contact request" },
      { status: 500 },
    );
  }
}



