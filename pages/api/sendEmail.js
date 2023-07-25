import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      
      const contactForm = req.body;

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PW,
        },
      });

      const mailOptions = {
        from: 'pradeepnodemailer@gmail.com',
        to: 'pradeepm93969@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${contactForm.firstName} ${contactForm.lastName} </p>
          <p><strong>Email:</strong> ${contactForm.email}</p>
          <p><strong>Mobile:</strong> ${contactForm.mobile}</p>
          <p><strong>Message:</strong> ${contactForm.details}</p>
        `,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}