const nodemailer = require("nodemailer");

const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.PASSWORD, // Your Gmail app password
  },
});

module.exports = mailTransport;
