import VolunteerStories from "../ui/VolunteerStories";
import VolunteerSignUp from "../ui/VolunteerSignUp";
import VolunteerStatistics from "../ui/VolunteerStatistics";
import GetInTouch from "../ui/GetInTouch";
import VolunteerGrid from "../ui/VolunteerGrid";
function TeamVolunteer() {
  return (
    <div className="pt-[96px] pb-28 px-7 lg:px-10 flex flex-col justify-center items-center bg-theme-backgroundC">
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Meet Our Volunteers
        </h1>
        <p className="text-lg text-gray-600">
          The passionate individuals behind our community service initiatives.
        </p>
      </div>
      <VolunteerGrid />
      <VolunteerStories />
      <VolunteerSignUp />
      <VolunteerStatistics />
      <GetInTouch />
    </div>
  );
}

export default TeamVolunteer;
