import React, { useState } from "react";

const ReminderForm = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !title || !time) return;

    const reminderData = {
      email: email,
      title: title,
      time: time,
    };

    try {
      const response = await fetch("http://localhost:5000/api/reminders/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reminderData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Reminder scheduled successfully!");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error scheduling reminder:", error);
      alert("Failed to schedule reminder. Please try again.");
    }
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-md mx-auto"
>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Email</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full border border-transparent rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 text-gray-800"
      placeholder="Enter your email"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Task</label>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className="w-full border border-transparent rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 text-gray-800"
      placeholder="Enter task title"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-bold mb-2">Time</label>
    <input
      type="datetime-local"
      value={time}
      onChange={(e) => setTime(e.target.value)}
      className="w-full border border-transparent rounded px-3 py-2 focus:ring-2 focus:ring-blue-500 bg-white bg-opacity-50 text-gray-800"
      required
    />
  </div>
  <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
    Schedule Reminder
  </button>
</form>

  );
};

export default ReminderForm;
