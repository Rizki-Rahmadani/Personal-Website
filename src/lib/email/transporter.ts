import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
    minVersion: "TLSv1.2",
  },
  logger: true,
});

// // Tambahkan logging untuk debug
// console.log("Environment variables check:", {
//   userExists: !!process.env.EMAIL_USER,
//   passwordExists: !!process.env.EMAIL_PASSWORD,
//   userValue: process.env.EMAIL_USER,
//   passwordLength: process.env.EMAIL_PASSWORD?.length || 0,
// });

// Verifikasi konfigurasi
const verifyTransporter = async () => {
  try {
    await transporter.verify();
    console.log("Transporter is ready");
  } catch (error) {
    console.error("Transporter verification failed:", error);
  }
};

verifyTransporter();

export { transporter };
