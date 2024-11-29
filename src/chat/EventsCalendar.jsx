import React from "react";

const events = [
  {
    date: "2024-12-01",
    title: "Winter 2024 Drive",
    description: "Donation drive to support education and warmth.",
  },
  {
    date: "2024-12-05",
    title: "Food Drive",
    description: "Collect food for needy families.",
  },
  {
    date: "2024-12-12",
    title: "Clothing Donation",
    description: "Donate clothes for the winter season.",
  },
];

const EventsCalendar = () => {
  const today = new Date().toISOString().slice(0, 10);

  const generateDays = () => {
    const daysInMonth = new Date(2024, 11, 0).getDate(); // December 2024
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
        Upcoming Events - December 2024
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
        {generateDays().map(({ date, event }, index) => (
          <div
            key={date}
            className={`p-3 rounded-lg ${
              date === today
                ? "bg-green-100 border-2 border-green-600"
                : "bg-gray-100"
            } shadow-sm flex flex-col items-center transition transform hover:scale-105 cursor-pointer`}
          >
            <span className="text-lg font-bold text-green-700">
              {new Date(date).getDate()}
            </span>
            {event ? (
              <>
                <span className="text-sm font-semibold text-green-600 mt-2">
                  {event.title}
                </span>
                <span className="text-xs text-gray-600">
                  {event.description}
                </span>
              </>
            ) : (
              <span className="text-sm text-gray-400 mt-2">No Event</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
