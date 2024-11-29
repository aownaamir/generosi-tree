import { volunteers } from "../data/data";

function VolunteerGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto py-10">
      {volunteers.map((volunteer) => (
        <div
          key={volunteer.id}
          className="text-center p-4 bg-white rounded-lg shadow-md"
        >
          <img
            className="w-24 h-24 rounded-full mx-auto mb-4"
            src={volunteer.img}
            alt="Team Member 1"
          />
          <h2 className="text-xl font-bold text-gray-800">{volunteer.name}</h2>
          <p className="text-gray-600">{volunteer.post}</p>
        </div>
      ))}

      {/* <!-- Repeat for other members --> */}
    </div>
  );
}

export default VolunteerGrid;
