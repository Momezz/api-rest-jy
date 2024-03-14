import nodemailer from 'nodemailer';

const gmailUser = process.env.GMAIL_USER;
const gmailPassword = process.env.GMAIL_PASSWORD;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailUser,
    pass: gmailPassword,
  },
});

const sendMail = async (req) => {
  const {
    name, email, subject, message,
  } = req.body;
  const info = await transporter.sendMail({
    from: email,
    to: gmailUser,
    subject,
    text: `${`${name}:  ${message}`}`,
  });
  return info.messageId;
};

export default sendMail;
