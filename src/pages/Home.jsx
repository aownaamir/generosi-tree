import AboutUs from "../ui/AboutUs";
import HomeHero from "../ui/HomeHero";
import JoinTeam from "../ui/JoinTeam2";
import Departments from "./Departments";

function Home() {
  return (
    <div className="bg-theme-backgroundC pb-28">
      <HomeHero />
      <Departments />
      <AboutUs />
      <JoinTeam />
    </div>
  );
}

export default Home;
