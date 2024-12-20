const mailTransport = require("../config/mailConfig");

// Schedule a reminder
const scheduleReminder = async (req, res) => {
  const { email, title, time } = req.body;

  if (!email || !title || !time) {
    return res.status(400).json({ message: "Email, title, and time are required." });
  }

  const reminderTime = new Date(time).getTime();
  const currentTime = Date.now();

  if (reminderTime < currentTime) {
    return res.status(400).json({ message: "Time must be in the future." });
  }

  // Schedule the email
  setTimeout(() => {
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Task Reminder",
      text: `Hi, this is a reminder for your task: "${title}" scheduled at ${time}.`,
    };

    mailTransport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Reminder email sent:", info.response);
      }
    });
  }, reminderTime - currentTime);

  return res.status(200).json({ message: "Reminder scheduled successfully." });
};

module.exports = { scheduleReminder };
