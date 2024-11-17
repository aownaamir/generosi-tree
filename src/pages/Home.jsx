import AboutUs from "../ui/AboutUs";
import Hero from "../ui/Hero";
import JoinTeam from "../ui/JoinTeam";
import Departments from "./Departments";

function Home() {
  return (
    <div className="bg-theme-background">
      <Hero />
      <Departments />
      <AboutUs />
      <JoinTeam />
      {/* <Links /> */}
    </div>
  );
}

export default Home;
