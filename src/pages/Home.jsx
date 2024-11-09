import AboutUs from "../ui/AboutUs";
import DepartmentsSection from "../ui/DepartmentsSection";
import Hero from "../ui/Hero";
import JoinTeam from "../ui/JoinTeam";
import Links from "../ui/Links";

function Home() {
  return (
    <div className="px-5">
      <Hero />
      <DepartmentsSection />
      <AboutUs />
      <JoinTeam />
      <Links />
    </div>
  );
}

export default Home;
