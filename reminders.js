const express = require("express");
const { scheduleReminder } = require("../controllers/reminderController");

const router = express.Router();

// Route to schedule a reminder
router.post("/schedule", scheduleReminder);

module.exports = router;
