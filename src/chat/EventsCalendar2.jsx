import React from "react";

// Sample events with statuses
const events = [
  { date: "2024-12-01", title: "Winter 2024 Drive", status: "verified" },
  { date: "2024-12-05", title: "Food Drive", status: "upcoming" },
  { date: "2024-12-12", title: "Clothing Donation", status: "completed" },
  { date: "2024-12-20", title: "Toy Donation", status: "upcoming" },
  { date: "2024-12-25", title: "Christmas Drive", status: "verified" },
];

const statusColors = {
  verified: "bg-green-500",
  upcoming: "bg-yellow-500",
  completed: "bg-blue-500",
  none: "bg-gray-300",
};

const MonthlyStatusCalendar = () => {
  const daysInMonth = new Date(2024, 11, 0).getDate(); // December 2024
  const today = new Date().toISOString().slice(0, 10);

  const generateDays = () => {
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const date = `2024-12-${String(day).padStart(2, "0")}`;
      const event = events.find((e) => e.date === date);
      days.push({ date, event });
    }
    return days;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold text-green-700 text-center mb-6">
        December 2024 - Event Status
      </h2>
      <div className="grid grid-cols-7 gap-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-gray-500 uppercase"
          >
            {day}
          </div>
        ))}
        {generateDays().map(({ date, event }) => (
          <div
            key={date}
            className={`p-3 rounded-lg ${
              date === today
                ? "border-2 border-green-600"
                : "border border-gray-200"
            } shadow-sm flex flex-col items-center justify-between space-y-2 transition transform hover:scale-105`}
          >
            <span className="text-lg font-bold text-green-700">
              {new Date(date).getDate()}
            </span>
            <div
              className={`w-3 h-3 rounded-full ${
                event ? statusColors[event.status] : statusColors.none
              }`}
              title={event ? event.title : "No Event"}
            />
            <span className="text-xs text-gray-500">
              {event
                ? event.status.charAt(0).toUpperCase() + event.status.slice(1)
                : "No Event"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyStatusCalendar;
