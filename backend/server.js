const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "process.env"),
});

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.listen(5000, () => console.log("Server Running"));

const contactEmail = {
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_TO_EMAIL,
    pass: process.env.SMTP_TO_PASSWORD,
  },
  debug: true,
  logger: true,
};

console.log(contactEmail);

const mail = {
  from: process.env.SMTP_TO_EMAIL,
  to: process.env.SMTP_TO_EMAIL,
  subject: "Message",
  text: "I hope this message gets delivered!",
};

console.log(mail);

const transporter = nodemailer.createTransport(contactEmail);
transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    transporter.sendMail(mail, (err, info) => {
      console.log(err);
      console.log(info.envelope);
      console.log(info.messageId);
    });
    console.log("Ready to send mail!");
  }
});

transporter.sendMail();
