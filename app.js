require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const reminderRoutes = require("./routes/reminders");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/reminders", reminderRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Task Reminder Backend is Running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
