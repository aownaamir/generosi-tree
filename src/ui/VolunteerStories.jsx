import { volunteers } from "../data/data";

function VolunteerStories() {
  return (
    <div className=" py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Volunteer Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {volunteers.slice(0, 4).map((volunteer) => (
          <div key={volunteer.id} className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-600 italic">"{volunteer.story}"</p>
            <h4 className="mt-4 text-lg font-bold text-gray-800">
              - {volunteer.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerStories;
