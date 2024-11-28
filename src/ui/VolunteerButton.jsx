import { Link } from "react-router-dom";

function VolunteerButton() {
  return (
    <div className="text-center mt-8">
      <Link to="/teamvolunteer">
        <button className="px-6 py-3 bg-chat-green text-white font-semibold rounded-lg shadow-md hover:bg-chat-greenH transition-all duration-200">
          Volunteer Now
        </button>
      </Link>
      <button className="ml-4 px-6 py-3 bg-[#4c3a2c] text-white font-semibold rounded-lg shadow-md hover:bg-[#3a2b21] transition-all duration-200">
        Learn More
      </button>
    </div>
  );
}

export default VolunteerButton;
