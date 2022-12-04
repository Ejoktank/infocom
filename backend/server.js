const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "process.env"),
});

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

function createMailer() {

  const contactEmail = {
    host: "smtp.yandex.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_TO_EMAIL,
      pass: process.env.SMTP_TO_PASSWORD,
    }
  };

  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport(contactEmail);
    transporter.verify((error) => {
      if (error) {
        console.error(error);
        return reject(error);
      } else {
        resolve(transporter);
      }
    });
  });
}

createMailer().then((transporter) => {

  app.use(bodyParser.json());
  app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
  app.post('/send', (req, res) => {

    if (!req.body) {
      return res.sendStatus(400);
    }

    if (!req.body.subject || typeof req.body.subject !== 'string') {
      return res.sendStatus(400);
    }

    if (!req.body.text || typeof req.body.text !== 'string') {
      return res.sendStatus(400);
    }

    //TODO: a lot of validations here
    // 
    // 1. Does subject exists
    // 2. Does text exists
    // 3. Is subject valid string
    // 4. Is text valid string
    // 5. Injections ???

    const mail = {
      from: process.env.SMTP_TO_EMAIL,
      to: process.env.SMTP_TO_EMAIL,
      subject: req.body.subject,
      text: req.body.text,
    };

    transporter.sendMail(mail, (err) => {
      if (err) {
        console.error(err);
        return res.sendStatus(500);
      }
      res.json({ ok : true });
    });
  });

  app.listen(process.env.PORT || 5838, () => console.log("Server Running"));

});
