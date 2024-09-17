import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: `${__dirname}/config/config.env` });

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

async function main(email) {
  try {
    const info = await transporter.sendMail({
      from: {
        name: "Ymart",
        address: process.env.USER,
      },
      to: email,
      subject: "Thank You for subscribe our Newsletter",
      text: "Hello world",
      // html: "<b>Hello world?</b>",
      // attachments: [
      //   {
      //     filename: "SQL.pdf",
      //     path: `${__dirname}/SQL.pdf`,
      //     contentType: "application/pdf",
      //   },
      // ],
    });
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  } catch (error) {
    console.log("Error sending email: ", error);
  }
}

export default main;