import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const hasEmailConfig = Boolean(emailUser && emailPass);

  const transporter = hasEmailConfig
    ? nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass?.replace(/\s+/g, ""),
      },
    })
    : null;

  if (transporter) {
    transporter
      .verify()
      .then(() => console.log("SMTP connection verified"))
      .catch((error) => console.error("SMTP verify failed:", error));
  }

  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);

      if (!transporter || !emailUser) {
        console.error(
          "Email is not configured. Set EMAIL_USER and EMAIL_PASS in .env.",
        );
        return res.status(500).json({
          message: "Email service is not configured.",
        });
      }

      const savedMessage = await storage.createMessage(input);

      // await transporter.sendMail({
      //   from: `"Portfolio Contact" <${emailUser}>`,
      //   to: emailUser,
      //   replyTo: input.email,
      //   subject: `New Portfolio Contact - ${name}`,
      //   text: [
      //     "New Contact Message",
      //     `Name: ${input.name}`,
      //     `Email: ${input.email}`,
      //     "",
      //     input.message,
      //   ].join("\n"),
      //   html: `
      //     <h3>New Contact Message</h3>
      //     <p><b>Name:</b> ${input.name}</p>
      //     <p><b>Email:</b> ${input.email}</p>
      //     <p>${input.message}</p>
      //   `,
      // });

      await transporter.sendMail({
        from: `"Sreenath Portfolio" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // where you receive emails
        replyTo: input.email,       // so you can reply directly to user
        subject: `New Portfolio Contact from ${input.name}`,

        text: `
              New Contact Message

Name: ${input.name}
Email: ${input.email}

Message:
${input.message}
  `.trim(),

        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
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
      <hr />
      <p style="font-size:12px;color:gray;">
      <p style="font-size:12px;color:#6b7280;margin-top:10px;">
  Received At: ${new Date().toLocaleString()}
</p>
        This message was sent from your portfolio contact form.
      </p>
    </div>
  `,
      });
      return res.status(201).json(savedMessage);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }

      console.error("Contact route error:", err);
      return res.status(500).json({
        message: "Failed to process contact request",
      });
    }
  });

  return httpServer;
}
