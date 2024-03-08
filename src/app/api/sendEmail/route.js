import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  try {
    const contactForm = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: "pradeepnodemailer@gmail.com",
      to: "info@mu2creations.com",
      subject: "New Contact Form Submission",
      html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${contactForm.firstName} ${contactForm.lastName} </p>
          <p><strong>Email:</strong> ${contactForm.email}</p>
          <p><strong>Mobile:</strong> ${contactForm.mobile}</p>
          <p><strong>Subject:</strong> ${contactForm.subject}</p>
          <p><strong>Message:</strong> ${contactForm.message}</p>
        `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json("Email sent successfully!", {
      status: 200,
      statusText: "Success",
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", {
      status: 500,
    });
  }
}
