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
  app.get('/', (_, res) => res.send("Online!"));
  app.post('/send', (req, res) => {

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

    console.log(JSONStringify(req.body));

    // if (req.body.text) {
    //   transporter.sendMail(mail, (err) => {
    //     if (err) {
    //       console.error(err);
    //       return res.sendStatus(500);
    //     }
    //     res.sendStatus(200);
    //   });
    // }
  });
  app.listen(5000, () => console.log("Server Running"));

});
