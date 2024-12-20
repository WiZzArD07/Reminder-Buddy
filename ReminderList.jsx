import ReminderItem from "./ReminderItem";

const ReminderList = ({ reminders }) => {
  return (
    <div className="mt-6 max-w-md mx-auto">
      {reminders.length > 0 ? (
        reminders.map((reminder, index) => (
          <ReminderItem key={index} reminder={reminder} />
        ))
      ) : (
        <p className="text-gray-600 text-center"></p>
      )}
    </div>
  );
};

export default ReminderList;
