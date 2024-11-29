import React from "react";

const events = [
  { date: "2024-02-14", title: "Valentine’s Donation Drive" },
  { date: "2024-03-21", title: "Plantation Drive" },
  { date: "2024-05-01", title: "Labor Day Food Drive" },
  { date: "2024-06-10", title: "Orphanage Visit" },
  { date: "2024-08-14", title: "Independence Day Fundraiser" },
  { date: "2024-10-01", title: "Clothes Donation Campaign" },
  { date: "2024-12-25", title: "Christmas Donation Drive" },
];

const getMonthsWithEvents = () => {
  return events.reduce((acc, event) => {
    const month = new Date(event.date).getMonth();
    acc[month] = acc[month] || [];
    acc[month].push(event.title);
    return acc;
  }, {});
};

const EventsCalendar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthsWithEvents = getMonthsWithEvents();

  return (
    <div className=" max-w-[850px] mx-auto">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">
        2025 Events Calendar
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {months.map((month, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border-2 text-center transition transform hover:scale-105 ${
              monthsWithEvents[index]
                ? "border-green-600 bg-green-50"
                : "border-gray-300 bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold text-green-700">{month}</h3>
            {monthsWithEvents[index] ? (
              <ul className="mt-3 space-y-2">
                {monthsWithEvents[index].map((event, i) => (
                  <li
                    key={i}
                    className="text-sm text-green-800  rounded-full px-3 py-1"
                  >
                    {/* bg-green-200 */}
                    {event}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-gray-500 italic">No Events</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-green-700 font-medium">
          Join us in making a difference this year!
        </p>
      </div>
    </div>
  );
};

export default EventsCalendar;
