import { team } from "../data/data";
import TeamCard from "../ui/TeamCard";
function TeamVolunteer() {
  return (
    <div className="px-7 lg:px-10 flex flex-col justify-center items-center">
      <h1 className="text-center mt-20 text-[60px] font-bold">Meet our team</h1>
      <div className="flex flex-col lg:flex-row gap-20 mt-20">
        {team.map((item) => (
          <TeamCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TeamVolunteer;
