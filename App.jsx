import React, { useState } from "react";
import Header from "./components/Header";
import ReminderForm from "./components/ReminderForm";
import ReminderList from "./components/ReminderList";

function App() {
  const [reminders, setReminders] = useState([]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ff4b1f] to-[#1fddff]">
      <Header />
      <main className="p-6">
        <ReminderForm addReminder={addReminder} />
        <ReminderList reminders={reminders} />
      </main>
    </div>
  );
}

export default App;
