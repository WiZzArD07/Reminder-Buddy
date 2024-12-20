const ReminderItem = ({ reminder }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h3 className="font-bold text-gray-700">{reminder.title}</h3>
      <p className="text-gray-500">{new Date(reminder.time).toLocaleString()}</p>
    </div>
  );
};

export default ReminderItem;
