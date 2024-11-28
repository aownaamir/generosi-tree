import GraphSection from "../graphs/GraphSection";
import CommunityMap from "../maps/CommunityMap";
import CommunityProjectsGrid from "../ui/CommunityProjectsGrid";
import VolunteerButton from "../ui/VolunteerButton";
import Testimonials1 from "./Testimonials1";
import Testimonials2 from "./Testimonials2";

function CS() {
  return (
    <section className="pt-[100px] pb-12 px-5 bg-theme-backgroundC">
      <h2 className="text-2xl font-bold text-center mb-4">
        Helping the Community
      </h2>
      <p className="text-center text-lg mb-8">Our Work</p>
      <CommunityProjectsGrid />
      <VolunteerButton />
      <GraphSection />
      <Testimonials1 />
      <Testimonials2 />
      <CommunityMap />
    </section>
  );
}

export default CS;
