import AboutUs from "../ui/AboutUs";
import Hero from "../ui/Hero";
import JoinTeam from "../ui/JoinTeam2";
import Departments from "./Departments";

function Home() {
  return (
    <div className="bg-theme-backgroundC pb-28">
      <Hero />
      <Departments />
      <AboutUs />
      <JoinTeam />
    </div>
  );
}

export default Home;
