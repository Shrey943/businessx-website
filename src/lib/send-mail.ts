"use server";

import nodemailer from "nodemailer";

export async function sendMail({
  email,
  subject,
  text,
  html,
}: {
  email: string;
  subject: string;
  text: string;
  html?: string;
}) {
  const user = process.env.SMTP_SERVER_USERNAME;
  const pass = process.env.SMTP_SERVER_PASSWORD;
  const to   = process.env.SITE_MAIL_RECIEVER ?? "businessxteam@gmail.com";

  if (!user || !pass) {
    console.error("SMTP credentials not configured (SMTP_SERVER_USERNAME / SMTP_SERVER_PASSWORD)");
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,        // STARTTLS — pair with secure:false
    secure: false,
    auth: { user, pass },
  });

  try {
    const info = await transporter.sendMail({
      from: `"BusinessX Website" <${user}>`,
      replyTo: email,          // replies go to the user who submitted
      to,
      subject,
      text,
      html: html ?? "",
    });

    console.log("Mail sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Failed to send mail:", err);
    return null;
  }
}
